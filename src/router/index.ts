import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/answerQuestions",
    component: () => import("../views/AnswerQuestions.vue"),
  },
  {
    path: "/answerList",
    component: () => import("../views/AnswerList.vue"),
  },
  {
    path: "/event",
    component: () => import("../views/Event.vue"),
  },
  {
    path: "/answerFinished",
    component: () => import("../views/AnswerFinished.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
