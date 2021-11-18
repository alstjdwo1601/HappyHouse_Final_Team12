<template>
    <div>
        <table BORDER=2 CELLSPACING=2 CELLPADDING=2 style="width: 100%;">
            <tr>
                <th WIDTH=80>번호</th>
                <td width=150 align=center>{{qna.num}}</td>
                <th>제목</th>
                <td colspan=3>{{qna.title}}</td>
            </tr>
            <tr>
                <th>아이디</th>
                <td>{{qna.id}}</td>
                <th>작성일</th>
                <td>{{qna.regtime}}</td>
            </tr>
            <tr>
                <th>내용</th>
                <td colspan=3><textarea readonly style="width:100%; border: 0; background: transparent;" rows=10 cols=50 v-model="this.qna.content" /></td>
            </tr>
        </table>
        <div class="clearAllContainer">
            <span class="clearAllBtn" @click="back">돌아가기</span>&nbsp;&nbsp;
            <span class="clearAllBtn" @click="del">삭제하기</span>&nbsp;&nbsp;
            <span class="clearAllBtn" @click="modify">수정하기</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            num: "",
            content: "",
        }
    },
    created() {
        this.num = this.$route.params.num;
        this.$store.dispatch("DETAILQNA", this.num);
    },
    computed:{//메소드 형식으로 구현
		...mapGetters(["qna"]),
        /*
        todo(){
			return this.$store.state.todo;
		}
        */
	},
    methods:{

        back(){
            this.$router.push("/list");
        },

        del(){
            this.$store.dispatch("DELETEQNA", this.num);
            this.$router.push("/list");
        },

        modify(){
            this.$router.push("/modify/" + this.num);
        },
    },
};
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        width: 95%; /* add */
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }

    .addContainer {
        background: linear-gradient(to right, #647811, #527810);
        display: inline-block;
        width: 3rem;
        border-radius: 5px 5px 5px 5px;
    }
    .checkBtn {
        color: white;
        vertical-align: middle;
    }

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
    input:focus, 
    textarea:focus{     outline: none; }
</style>