import Vue from "vue";
import VueRouter from "vue-router";

import MapView from "@/views/Map/MapView.vue";

import QnA from "@/components/QnA.vue";
import QnAList from "@/views/QnA/QnAList.vue";
import QnAInput from "@/views/QnA/QnAInput.vue";
import QnADetail from "@/views/QnA/QnADetail.vue";
import QnASearch from "@/views/QnA/QnASearch.vue";
import QnAModify from "@/views/QnA/QnAModify.vue";

// import Member from "@/views/Member.vue";
// import MemberLogin from "@/components/user/MemberLogin.vue";
// import MemberJoin from "@/components/user/MemberJoin.vue";
// import MemberMyPage from "@/components/user/MemberMyPage.vue";

import LogIn from "@/views/User/LogIn.vue";
import Profile from "@/views/User/Profile.vue";
import ProfileModify from "@/views/User/ProfileModify.vue";
import RemoveUser from "@/views/User/RemoveUser.vue";
import SignUp from "@/views/User/SignUp.vue";

Vue.use(VueRouter);

//로그인을 해야 쓸 수 있는 기능은 
//beforeEnter: onlyAuthUser, 이렇게 밑에서 가져다 쓰면됨
// const onlyAuthUser = async (to, from, next) => {
//   // console.log(store);
//   const checkUserInfo = store.getters["memberStore/checkUserInfo"];
//   const getUserInfo = store._actions["memberStore/getUserInfo"];
//   let token = sessionStorage.getItem("access-token");
//   if (checkUserInfo == null && token) {
//     await getUserInfo(token);
//   }
//   if (checkUserInfo === null) {
//     alert("로그인이 필요한 페이지입니다..");
//     // next({ name: "SignIn" });
//     router.push({ name: "SignIn" });
//   } else {
//     console.log("로그인 했다.");
//     next();
//   }
// };

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

  // token 로그인 관련  path
  // {
  //   path: "/user",
  //   name: "Member",
  //   component: Member,
  //   children: [
  //     {
  //       path: "singin",
  //       name: "SignIn",
  //       component: MemberLogin,
  //     },
  //     {
  //       path: "singup",
  //       name: "SignUp",
  //       component: MemberJoin,
  //     },
  //     {
  //       path: "mypage",
  //       name: "MyPage",
  //       beforeEnter: onlyAuthUser,
  //       component: MemberMyPage,
  //     },
  //   ],
  // },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
