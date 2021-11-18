import Vue from "vue";
import VueRouter from "vue-router";

import MapView from "@/views/Map/MapView.vue";

import QnA from "@/components/QnA.vue";
import QnAList from "@/views/QnA/QnAList.vue";
import QnAInput from "@/views/QnA/QnAInput.vue";
import QnADetail from "@/views/QnA/QnADetail.vue";
import QnASearch from "@/views/QnA/QnASearch.vue";
import QnAModify from "@/views/QnA/QnAModify.vue";

import LogIn from "@/views/User/LogIn.vue";
import Profile from "@/views/User/Profile.vue";
import ProfileModify from "@/views/User/ProfileModify.vue";
import RemoveUser from "@/views/User/RemoveUser.vue";
import SignUp from "@/views/User/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  // Map path
  {
    path: "/",
    name: "MapView",
    component: MapView,
  },
  
  // 게시판 path
  {
    path: "/qna",
    name: "QnA",
    component: QnA,
    children: [
      {
        path: "/list",
        name: "QnAList",
        component: QnAList,
      },
      {
        path: "/input",
        name: "QnAInput",
        component: QnAInput,
      },
      {
        path: "/detail/:num",
        name: "QnADetail",
        component: QnADetail,
      },
      {
        path: "/search",
        name: "QnASearch",
        component: QnASearch,
      },
      {
        path: "/modify/:num",
        name: "QnAModify",
        component: QnAModify,
      },
    ],
  },

  //유저 path
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Profile/:num",
    name: "ProfileModify",
    component: ProfileModify,
  },
  {
    path: "/remove",
    name: "RemoveUser",
    component: RemoveUser,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
