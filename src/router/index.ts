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
    path: "/event",
    component: () => import("../views/Event.vue"),
  },
  {
    path: "/answerFinished",
    component: () => import("../views/AnswerFinished.vue"),
  },
  {
    path: "/eventConfirm",
    component: () => import("../views/EventConfirm.vue"),
  },
  {
    path: "/finishMaking",
    component: () => import("../views/FinishMaking.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
