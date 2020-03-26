import Intro from './pages/Intro'
import Scene_pub from './pages/Scene_pub'
import { Error } from './pages/404/404'

export const routes = [
  { isExact: true, component: Intro, path: '/', label: 'Intro' },
  {
    isExact: true,
    component: Scene_pub,
    path: '/Scene_pub',
    label: 'Scene_pub'
  },
  { isExact: true, component: Error, path: '/404', label: '' }
]
