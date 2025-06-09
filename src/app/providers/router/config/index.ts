import type { RouteRecordRaw } from 'vue-router'

const MainPage = () => import(/* webpackChunkName: "main-page" */ '@/pages/MainPage')
const AboutPage = () => import(/* webpackChunkName: "about-page123123" */ '@/pages/AboutPage')
const NotFoundPage = () => import(/* webpackChunkName: "not-found-page" */ '@/pages/NotFoundPage')

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '/:pathMatch(.*)*',
}

const routes: RouteRecordRaw[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    name: AppRoutes.MAIN,
    component: MainPage,
  },
  {
    path: RoutePath[AppRoutes.ABOUT],
    name: AppRoutes.ABOUT,
    component: AboutPage,
  },
  {
    path: RoutePath[AppRoutes.NOT_FOUND],
    name: AppRoutes.NOT_FOUND,
    component: NotFoundPage,
  },
]

export default routes
