import Vue from "vue";
import Router from "vue-router";
import PersonList from '../components/PersonList.vue'

Vue.use(Router);

const router = new Router({

  routes: [
    {
      path: "/",
      name: "person-list",
      component: PersonList,

    }


  ], mode:'history'
});

export default router;