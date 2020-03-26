import Intro from './pages/Intro'
import { Error } from './pages/404/404'

export const routes = [
  { isExact: true, component: Intro, path: '/', label: 'Intro' },
  { isExact: true, component: Error, path: '/404', label: '' }
]
