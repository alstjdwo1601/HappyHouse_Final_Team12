import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-common.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    qnas: [],
    qna: {},
  },
  getters: {
    qnas(state) {
      return state.qnas;
    },
    qna(state) {
      return state.qna;
    },
  },

  mutations: {
    ALLQNA: (state, payload) => {
      state.qnas = payload.qnas;
    },

    DETAILQNA: (state, payload) => {
      state.qna = payload;
    },
  },

  actions: {
    ALLQNA: (store) => {
      axios
      .get("/qna")
      .then(response => {
        store.commit("ALLQNA", {qnas: response.data});//mutations call
      });
    },

    DETAILQNA: (store, payload) => {
      axios
        .get("/qna/" + payload)
        .then(response => {
          store.commit("DETAILQNA", response.data);
        });
    },

    ADDQNA: (store, payload) => {
      axios
        .post("/qna", {
          id: payload.id,
          pw: payload.pw,
          title: payload.title,
          content: payload.content, 
        })
        .then(() => {
          alert("게시글이 등록되었습니다.");
          store.dispatch("ALLQNA");
        });
    },

    SEARCHQNA: (store, payload) => {
      axios
        .get("/qna/" + payload.condition + "/" + payload.word)
        .then((response) => {
          store.commit("ALLQNA", { qnas: response.data });
        });
    },

    MODIFYQNA: (store, payload) => {
      axios
        .put("/qna", {
          num: payload.num,
          title: payload.title,
          content: payload.content,
        })
        .then(() => {
          alert("수정되었습니다.");
          store.dispatch("ALLQNA");
        });
    },

    DELETEQNA: (store, payload) => {
      axios
        .delete("/qna/" + payload)
        .then(() => {
          alert("삭제되었습니다.");
          store.dispatch("ALLQNA");
        });
    }
  },
  modules: {},
});
