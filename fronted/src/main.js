import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//加载icons
import "./icons";

//加载element ui
import Element from "element-ui";
import "./styles/element-variables.scss";

//加载全局样式
import "./styles/index.scss";
// 加载全局指令
import "@/directives";

// 加载全局过滤器
import "@/filters";

Vue.config.productionTip = false;
Vue.use(Element, {
  size: "mini",
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
