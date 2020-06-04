import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Forbiden from '../views/Forbiden.vue';
import Teachers from "../views/Teachers.vue";
import Parents from "../views/Parents.vue";
import Students from "../views/Students";
import Historical from "../views/Historical";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Виктория Камалетдинова - учитель начальных классов',
      metaTags: [
        {
          name: 'description',
          content: 'Приветствую вас на моем персональном сайте учителя начальных классов!\n' +
              'Сайт создан для учителей начальных классов, родителей и учеников.\n' +
              'Предназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями.\n' +
              'На сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы.\n' +
              'Буду рада, если каждый найдёт здесь много интересной и полезной информации.'
        },
        {
          property: 'og:description',
          content: 'Приветствую вас на моем персональном сайте учителя начальных классов!\n' +
              'Сайт создан для учителей начальных классов, родителей и учеников.\n' +
              'Предназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями.\n' +
              'На сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы.\n' +
              'Буду рада, если каждый найдёт здесь много интересной и полезной информации.'
        },
        {
          property: "og:image",
          content: "https://victoria-kamaletdinova.online/og/photo.jpg"
        }
      ]
    }
  },
    {
      path: "/parents",
      name: "Parents",
      component: Parents,
      meta: {
        title: 'Виктория Камалетдинова - Родителям',
        metaTags: [
          {
            name: 'description',
            content: 'Страница с информацией и материалами для родителей.'
          },
          {
            property: 'og:description',
            content: 'Страница с информацией и материалами для родителей.'
          }
        ]
      }
    },
    {
      path: "/teachers",
      name: "Teachers",
      component: Teachers,
      meta: {
        title: 'Виктория Камалетдинова - Учителям',
        metaTags: [
          {
            name: 'description',
            content: 'Страница с информацией и материалами для учителям.'
          },
          {
            property: 'og:description',
            content: 'Страница с информацией и материалами для учителям.'
          }
        ]
      }
    },
    {
      path: "/students",
      name: "Students",
      component: Students,
      meta: {
        title: 'Виктория Камалетдинова - Ученикам',
        metaTags: [
          {
            name: 'description',
            content: 'Страница с информацией и материалами для учеников.'
          },
          {
            property: 'og:description',
            content: 'Страница с информацией и материалами для учеников.'
          }
        ]
      }
    },
    {
      path: "/historical",
      name: "Historical",
      component: Historical,
      meta: {
        title: 'Виктория Камалетдинова - Историческая страница',
        metaTags: [
          {
            name: 'description',
            content: 'Страница с информацией и материалами из истории России.'
          },
          {
            property: 'og:description',
            content: 'Страница с информацией и материалами из истории России.'
          }
        ]
      }
    },
    {
      path: "/404",
      name: "404",
      component: Forbiden
    },
    {
      path: '*',
      redirect: '/404'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export {
  router
}
