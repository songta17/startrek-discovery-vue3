import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: () => import("../views/Homepage.vue"),
  },
  {
    path: "/docs",
    name: "Docs",
    component: () => import("../views/Docs.vue"),
  },
  {
    path: "/characters",
    name: "Characters",
    component: () => import("../views/Characters.vue"),
  },
  {
    path: "/characters/:id",
    name: "Charactershow",
    component: () => import("../views/CharacterShow.vue"),
  },
  {
    path: "/episodes",
    name: "Episodes",
    component: () => import("../views/Episodes.vue"),
  },
  {
    path: "/episodes/:id",
    name: "EpisodeShow",
    component: () => import("../views/EpisodeShow.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
