import Vue from "vue";
import VueRouter from "vue-router";
import Frutas from "../views/Frutas.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/frutas",
    name: "Frutas",
    component: Frutas
  },
  {
    path: "/servicios",
    name: "servicios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "servicios" */ "../views/Servicios.vue")
  },
  {
    path: "/fotos/:id",
    name: "fotos/:id",
    component: () =>
      import( /* webpackChunkName: "fotos" */ "../views/Fotos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;