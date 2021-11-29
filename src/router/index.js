import Vue from "vue";
import Router from "vue-router";

import home from "@/components/home";
import introduction from "@/components/introduction";
import language from "@/components/language";
import experience from "@/components/experience";
import portfolio from "@/components/portfolio";
import contact from "@/components/contact";

// import Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  mode: "history", // ＃タグを消す方法
  routes: [
    {
      path: "/",
      component: home,
    },
    {
      path: "/introduction",
      component: introduction,
    },
    {
      path: "/language",
      component: language,
    },
    {
      path: "/experience",
      component: experience,
    },
    {
      path: "/portfolio",
      component: portfolio,
    },
    {
      path: "/contact",
      component: contact,
    },
  ],
});
