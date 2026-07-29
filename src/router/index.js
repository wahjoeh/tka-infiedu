import { createRouter, createWebHistory } from 'vue-router'

// Home
import HomeView from '../views/home/HomeView.vue'

// SD
import SDView from '../views/sd/SDView.vue'
import SDPracticeView from '../views/sd/SDPracticeView.vue'

import SDMathView from '../views/sd/math/SDMathView.vue'
import SDMathTestView from '../views/sd/math/SDMathTestView.vue'

import SDIndoView from '../views/sd/indo/SDIndoView.vue'
import SDIndoTestView from '../views/sd/indo/SDIndoTestView.vue'

// SD Full Test (Indo + Matematika)
import SDFullTestView from '../views/sd/SDFullTestView.vue'
import SDFullTestResultView from '../views/sd/SDFullTestResultView.vue'

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

// SMP Math Test
import SMPMathTestView from '../views/smp/math/SMPMathTestView.vue'
import SMPIndoTestView from '../views/smp/indo/SMPIndoTestView.vue'
import SMPFullTestView from '../views/smp/SMPFullTestView.vue'
import SMPFullTestResultView from '../views/smp/SMPFullTestResultView.vue'

// SMA
import SMAView from '../views/sma/SMAView.vue'
import SMAPracticeView from '../views/sma/SMAPracticeView.vue'

//SMA Package
import SMAIndoPackageView from '../views/sma/indo/SMAIndoPackageView.vue'

// SMA Subjects
import SMAMathView from '../views/sma/math/SMAMathView.vue'
import SMAIndoView from '../views/sma/indo/SMAIndoView.vue'
import SMAEnglishView from '../views/sma/english/SMAEnglishView.vue'
import SMAScienceView from '../views/sma/science/SMAScienceView.vue'

// SMA Math Test
import SMAMathTestView from '../views/sma/math/SMAMathTestView.vue'
import SMAIndoTestView from '../views/sma/indo/SMAIndoTestView.vue'

// Result
import ResultView from '../views/ResultView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  // SD Main
  {
    path: '/sd',
    component: SDView
  },
  {
    path: '/sd/practice',
    component: SDPracticeView
  },
  {
    path: '/sd/practice/indo',
    component: SDIndoView
  },
  {
    path: '/sd/practice/math/test',
    component: SDMathTestView
  },
    {
    path: '/sd/practice/math',
    component: SDMathView
  },
  {
    path: '/sd/practice/indo/test',
    component: SDIndoTestView
  },

  // SD Full Test (gabungan Bahasa Indonesia + Matematika)
  {
    path: '/sd/test',
    name: 'sd-fulltest',
    component: SDFullTestView
  },
  {
    path: '/sd/test/result',
    name: 'sd-fulltest-result',
    component: SDFullTestResultView
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

    // SMP Full Test (gabungan Bahasa Indonesia + Matematika)
  {
    path: '/smp/test',
    name: 'smp-fulltest',
    component: SMPFullTestView
  },
  {
    path: '/smp/test/result',
    name: 'smp-fulltest-result',
    component: SMPFullTestResultView
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

  // SMP Main
  {
    path: '/sma',
    name: 'sma',
    component: SMAView
  },
  {
    path: '/sma/practice',
    name: 'sma-practice',
    component: SMAPracticeView
  },

  // SMA Subjects
  {
    path: '/sma/practice/math',
    name: 'sma-math',
    component: SMAMathView
  },
  {
    path: '/sma/practice/indo',
    name: 'sma-indo',
    component: SMAIndoView
  },
  {
    path: '/sma/practice/english',
    name: 'sma-english',
    component: SMAEnglishView
  },
  {
    path: '/sma/practice/science',
    name: 'sma-science',
    component: SMAScienceView
  },

  //PackageView
  {
  path: '/sma/practice/indo/packages',
  name: 'sma-indo-packages',
  component: SMAIndoPackageView
  },

  // Test
  {
    path: '/sma/practice/math/test',
    name: 'sma-math-test',
    component: SMAMathTestView
  },
  {
  path: '/sma/practice/indo/test',
  name: 'sma-indo-test',
  component: SMAIndoTestView
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
