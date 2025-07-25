import type { RouteRecordRaw } from 'vue-router'
import { AppRoutesName } from './types'
import Sidebar from '@/widgets/Sidebar'

const MainLayout = () => import('@/app/layouts/MainLayout')

const MainPage = () => import('@/pages/MainPage')
const AboutPage = () => import('@/pages/AboutPage')
const NotFoundPage = () => import('@/pages/NotFoundPage')

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
