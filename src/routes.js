import Intro from './pages/Intro'
import Scene_pub from './pages/Scene_pub'
import Game_over from './pages/Game_over'
import { Error } from './pages/404/404'

export const routes = [
  { isExact: true, component: Intro, path: '/', label: 'Intro' },
  {
    isExact: true,
    component: Scene_pub,
    path: '/Scene_pub',
    label: 'Scene_pub'
  },
  {
    isExact: true,
    component: Game_over,
    path: '/Game_over',
    label: 'Game_over'
  },
  { isExact: true, component: Error, path: '/404', label: '' }
]
