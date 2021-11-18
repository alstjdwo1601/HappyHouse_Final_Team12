<template>
	<div>
		<table border="1" style="width: 100%;">
			<th>번호</th>
			<th>제목</th>
			<th>아이디</th>
			<th>작성일</th>

			<tr v-for="qna in qnas" :key="qna.num">
				<td>{{qna.num}}</td>
				<td width=500>
					<router-link :to="`/detail/${qna.num}`">{{qna.title}}</router-link>
				</td>
				<td>{{qna.id}}</td>
				<td>{{qna.regtime}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	//import { mapGetters } from "vuex";
	import { mapState } from "vuex";
	export default{
		created(){
			//action call
			this.$store.dispatch("ALLQNA");
			//...mapActions(["ALLTODO"]), //함수안에 함수가 또 들어오는 결과 X
		},

		computed:{
			...mapState(["qnas"]), //index.js 파일안의 state 중 todos를 이곳에 가지고 옴
			//...mapGetters(["todos"]), //index.js 파일안의 getters 중에 todos()를 이곳에 가지고 옴

			//->store안의 데이터 접근
			//메소드 형식으로 구현
			/*
			todos(){
				//return this.$store.state.todos; //state를 직접 접근-1
				return this.$store.getters.todos; //getter를 사용해서 접근-2
			},
			*/
		},

		methods: {
			//...mapActions(["DELETETODO", "DONETODO"]),
			//이벤트 처리 함수명과 ACTION의 이름이 달라요
			/*
			...mapActions({
				removeTodo: "DELETETODO",
				doneTodo: "COMPLETETODO",
			}),
			*/

			/*
			doneTodo(num){
				this.$store.dispatch("DONETODO", num);
			},
	
			removeTodo(num){
				this.$store.dispatch("DELETETODO", num);
			},
			*/		
		}
	};
</script>

<style scoped>
	.del {
		text-decoration: line-through;
	}
	ul {
		list-style-type: none;
		padding-left: 0px;
		margin-top: 0;
		text-align: left;
	}
	li {
		display: flex;
		min-height: 50px;
		height: 50px;
		line-height: 50px;
		margin: 0.5rem 0;
		padding: 0 0.9rem;
		background: white;
		border-radius: 5px;
	}
	.checkBtn {
		line-height: 45px;
		color: #62acde;
		margin-right: 5px;
	}
	.removeBtn {
		margin-left: auto;
		color: #de4343;
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 1s;
	}
	.list-enter,
	.list-leave-to {
		opacity: 0;
		transform: translateY(30px);
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
</style>
