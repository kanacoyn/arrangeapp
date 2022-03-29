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
    path: "/eventConfirm",
    component: () => import("../views/EventConfirm.vue"),
  },
  {
    path: "/userAnswer/:id",
    component: () => import("../views/UserAnswer.vue"),
  },
  {
    path: "/riko",
    component: () => import("../views/Riko.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
