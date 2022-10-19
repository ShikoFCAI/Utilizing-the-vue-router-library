
import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/teams' },
      {
        name: 'teams', path: '/teams', components: { default: TeamsList, footer: TeamsFooter }, children: [
          { name: 'team-members', path: ':teamID', component: TeamMembers, props: true },
        ]
      },
      { path: '/users', components: { default: UsersList, footer: UsersFooter } },
      { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition){
      console.log(to, from, savedPosition);
      if (savedPosition){
        return savedPosition;
      }
      return { left: 0, top: 0 };
    }
  });
  
  router.beforeEach(function(to, from, next){
    next();
  });

export default router;
