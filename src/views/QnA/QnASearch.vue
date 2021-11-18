<template>
    <div>
        <form v-on:submit.prevent>
			<select v-model="condition" style="width:100px;height:30px;">
				<option value="title">&nbsp;&nbsp;&nbsp;제&nbsp;&nbsp;&nbsp;&nbsp;목</option>			
				<option value="name">&nbsp;&nbsp;&nbsp;글쓴이</option>			
			</select>&nbsp;
			<input type="text" v-model.lazy="word" @keyup.enter="searchQnA"/>
			<input type="button" @click="searchQnA" value="검색" />
		</form>
        <br />
        <div v-if="word != ''">
            <table border="1" style="width: 100%;">
                <th>번호</th>
                <th>제목</th>
                <th>아이디</th>
                <th>작성일</th>

                <tr v-for="qna in qnas" :key="qna.num">
                    <td>{{qna.num}}</td>
                    <td>
                        <router-link :to="`/detail/${qna.num}`">{{qna.title}}</router-link>
                    </td>
                    <td>{{qna.id}}</td>
                    <td>{{qna.regtime}}</td>
                </tr>
            </table>
	    </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data(){
        return {
            condition: '',
            word: "",
        };
    },
    created(){
        this.$store.state.qnas = [];
    },

    computed: {
        ...mapState(["qnas"]),
    },

    methods: {
        searchQnA(){
            if(this.word == ""){
                this.$store.dispatch("ALLQNA");
            }else{
                this.$store.dispatch("SEARCHQNA", {
                    condition: this.condition,
                    word: this.word,
                });
            }
        }
    },
}
</script>

<style scoped>
    table {
        width: 40%;
        margin: 10px auto;
        border-collapse: collapse;
        border: 2px solid #996;
        font: normal 90%/140% verdana, arial, helvetica, sans-serif;
        color: #333;
        background: #fffff0;
    }

    .caption {
        background-color: #222;
        vertical-align: middle;
        text-align: center;
        padding: 15px;
        font-size: 20px;
        color: #fff;
    }

    td,
    th {
        border: 1px solid #cc9;
        padding: 0.3em;
    }
    thead th,
    tfoot th {
        background-color: "#f5deb3";
        border: 1px solid #cc9;
        text-align: center;
        font-size: 1em;
        font-weight: bold;
        color: #444;
        background: #dbd9c0;
    }
    tbody td a {
        background: transparent;
        color: #72724c;
        text-decoration: none;
        border-bottom: 1px dotted #cc9;
    }
    tbody td a:hover {
        background: transparent;
        color: #666;
        border-bottom: 1px dotted #72724c;
    }
    tbody th a {
        background: transparent;
        color: #72724c;
        text-decoration: none;
        font-weight: bold;
        border-bottom: 1px dotted #cc9;
    }
    tbody th a:hover {
        background: transparent;
        color: #666;
        border-bottom: 1px dotted #72724c;
    }
    tbody th,
    tbody td {
        vertical-align: top;
        text-align: center;
    }
    tfoot td {
        border: 1px solid #996;
    }
    .odd {
        color: #333;
        background: #f7f5dc;
    }
    tbody tr:hover {
        color: #333;
        background: #fff;
    }
    tbody tr:hover th,
    tbody tr.odd:hover th {
        color: #333;
        background: #ddd59b;
    }
    tbody tr {
        height: 50px;
        line-height: 50px;
    }
</style>