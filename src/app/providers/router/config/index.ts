import type { RouteRecordRaw } from 'vue-router'
import Sidebar from '@/widgets/Sidebar'

const MainLayout = () => import(/* webpackChunkName: "main-layout" */ '@/app/layouts/MainLayout')

const MainPage = () => import(/* webpackChunkName: "main-page" */ '@/pages/MainPage')
const AboutPage = () => import(/* webpackChunkName: "about-page" */ '@/pages/AboutPage')
const NotFoundPage = () => import(/* webpackChunkName: "not-found-page" */ '@/pages/NotFoundPage')

export enum AppRoutesName {
  EMPTY = 'empty',
  HOME_PAGE = 'home-page',
  ABOUT_PAGE = 'about-page',
  NOT_FOUND_PAGE = 'not-found-page',
}

export const RoutePath: Record<AppRoutesName, string> = {
  [AppRoutesName.EMPTY]: '/',
  [AppRoutesName.HOME_PAGE]: '/home',
  [AppRoutesName.ABOUT_PAGE]: '/about',
  [AppRoutesName.NOT_FOUND_PAGE]: '/:pathMatch(.*)*',
}

const routes: RouteRecordRaw[] = [
  {
    path: RoutePath[AppRoutesName.EMPTY],
    component: MainLayout,
    children: [
      {
        path: RoutePath[AppRoutesName.HOME_PAGE],
        name: AppRoutesName.HOME_PAGE,
        components: {
          default: MainPage,
          Sidebar,
        },
      },
      {
        path: RoutePath[AppRoutesName.ABOUT_PAGE],
        name: AppRoutesName.ABOUT_PAGE,
        components: {
          default: AboutPage,
          Sidebar,
        },
      },
      {
        path: RoutePath[AppRoutesName.EMPTY],
        redirect: { name: AppRoutesName.HOME_PAGE },
      },
    ],
  },
  {
    path: RoutePath[AppRoutesName.NOT_FOUND_PAGE],
    name: AppRoutesName.NOT_FOUND_PAGE,
    component: NotFoundPage,
  },
]

export default routes
