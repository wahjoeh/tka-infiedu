import { createRouter, createWebHistory } from 'vue-router'

// Home
import HomeView from '../views/home/HomeView.vue'

// SMP
import SMPView from '../views/smp/SMPView.vue'
import SMPPracticeView from '../views/smp/SMPPracticeView.vue'

//SMP Package
import SMPIndoPackageView from '../views/smp/indo/SMPIndoPackageView.vue'

// SMP Subjects
import SMPMathView from '../views/smp/math/SMPMathView.vue'
import SMPIndoView from '../views/smp/indo/SMPIndoView.vue'
import SMPEnglishView from '../views/smp/english/SMPEnglishView.vue'
import SMPScienceView from '../views/smp/science/SMPScienceView.vue'

// Math Test
import SMPMathTestView from '../views/smp/math/SMPMathTestView.vue'
import SMPIndoTestView from '../views/smp/indo/SMPIndoTestView.vue'

// SMA
import SMAView from '../views/sma/SMAView.vue'

// Result
import ResultView from '../views/ResultView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  // SMP Main
  {
    path: '/smp',
    name: 'smp',
    component: SMPView
  },
  {
    path: '/smp/practice',
    name: 'smp-practice',
    component: SMPPracticeView
  },

  // SMP Subjects
  {
    path: '/smp/practice/math',
    name: 'smp-math',
    component: SMPMathView
  },
  {
    path: '/smp/practice/indo',
    name: 'smp-indo',
    component: SMPIndoView
  },
  {
    path: '/smp/practice/english',
    name: 'smp-english',
    component: SMPEnglishView
  },
  {
    path: '/smp/practice/science',
    name: 'smp-science',
    component: SMPScienceView
  },

  //PackageView
  {
  path: '/smp/practice/indo/packages',
  name: 'smp-indo-packages',
  component: SMPIndoPackageView
  },

  // Test
  {
    path: '/smp/practice/math/test',
    name: 'smp-math-test',
    component: SMPMathTestView
  },
  {
  path: '/smp/practice/indo/test',
  name: 'smp-indo-test',
  component: SMPIndoTestView
  },

  // SMA
  {
    path: '/sma',
    name: 'sma',
    component: SMAView
  },

  // Result
  {
  path: '/result',
  name: 'result',
  component: ResultView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router