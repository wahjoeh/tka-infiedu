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
import SMPIPASView from '../views/smp/ipas/SMAIPASView.vue'
import SMPEnglishTestView from '../views/smp/english/SMPEnglishTestView.vue'
import SMPIPASTestView from '../views/smp/ipas/SMAIPASTestView.vue'

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
import SMASosiologiView from '../views/sma/sosiologi/SMASosiologiView.vue'
import SMASosiologiPackageView from '../views/sma/sosiologi/SMASosiologiPackageView.vue'
import SMASosiologiTestView from '../views/sma/sosiologi/SMASosiologiTestView.vue'
import SMAEkonomiView from '../views/sma/ekonomi/SMAEkonomiView.vue'
import SMAEkonomiPackageView from '../views/sma/ekonomi/SMAEkonomiPackageView.vue'
import SMAEkonomiTestView from '../views/sma/ekonomi/SMAEkonomiTestView.vue'
import SMABiologiView from '../views/sma/biologi/SMABiologiView.vue'
import SMABiologiPackageView from '../views/sma/biologi/SMABiologiPackageView.vue'
import SMABiologiTestView from '../views/sma/biologi/SMABiologiTestView.vue'
import SMAFisikaView from '../views/sma/fisika/SMAFisikaView.vue'
import SMAFisikaPackageView from '../views/sma/fisika/SMAFisikaPackageView.vue'
import SMAFisikaTestView from '../views/sma/fisika/SMAFisikaTestView.vue'

// SMA Math Test
import SMAMathTestView from '../views/sma/math/SMAMathTestView.vue'
import SMAIndoTestView from '../views/sma/indo/SMAIndoTestView.vue'
import SMAEnglishTestView from '../views/sma/english/SMAEnglishTestView.vue'
import SMAFullTestView from '../views/sma/SMAFullTestView.vue'
import SMAFullTestResultView from '../views/sma/SMAFullTestResultView.vue'

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
    path: '/smp/practice/ipas',
    name: 'smp-ipas',
    component: SMPIPASView
  },
  {
    path: '/smp/practice/science',
    redirect: '/smp/practice/ipas'
  },
  {
    path: '/smp/practice/english/test',
    name: 'smp-english-test',
    component: SMPEnglishTestView
  },
  {
    path: '/smp/practice/ipas/test',
    name: 'smp-ipas-test',
    component: SMPIPASTestView
  },
  {
    path: '/smp/practice/science/test',
    redirect: '/smp/practice/ipas/test'
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
  {
    path: '/sma/practice/sosiologi',
    name: 'sma-sosiologi',
    component: SMASosiologiView
  },
  {
    path: '/sma/practice/sosiologi/packages',
    name: 'sma-sosiologi-packages',
    component: SMASosiologiPackageView
  },
  {
    path: '/sma/practice/sosiologi/test',
    name: 'sma-sosiologi-test',
    component: SMASosiologiTestView
  },
  {
    path: '/sma/practice/ekonomi',
    name: 'sma-ekonomi',
    component: SMAEkonomiView
  },
  {
    path: '/sma/practice/ekonomi/packages',
    name: 'sma-ekonomi-packages',
    component: SMAEkonomiPackageView
  },
  {
    path: '/sma/practice/ekonomi/test',
    name: 'sma-ekonomi-test',
    component: SMAEkonomiTestView
  },
  {
    path: '/sma/practice/biologi',
    name: 'sma-biologi',
    component: SMABiologiView
  },
  {
    path: '/sma/practice/biologi/packages',
    name: 'sma-biologi-packages',
    component: SMABiologiPackageView
  },
  {
    path: '/sma/practice/biologi/test',
    name: 'sma-biologi-test',
    component: SMABiologiTestView
  },
  {
    path: '/sma/practice/fisika',
    name: 'sma-fisika',
    component: SMAFisikaView
  },
  {
    path: '/sma/practice/fisika/packages',
    name: 'sma-fisika-packages',
    component: SMAFisikaPackageView
  },
  {
    path: '/sma/practice/fisika/test',
    name: 'sma-fisika-test',
    component: SMAFisikaTestView
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
  {
  path: '/sma/practice/english/test',
  name: 'sma-english-test',
  component: SMAEnglishTestView
  },
  {
    path: '/sma/test',
    name: 'sma-fulltest',
    component: SMAFullTestView
  },
  {
    path: '/sma/test/result',
    name: 'sma-fulltest-result',
    component: SMAFullTestResultView
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

router.beforeEach((to) => {
  const protectedCombinedFullTests = {
    '/sd/test': { key: 'sdCombinedFullTestUnlocked', fallback: '/sd' },
    '/smp/test': { key: 'smpCombinedFullTestUnlocked', fallback: '/smp' },
    '/sma/test': { key: 'smaCombinedFullTestUnlocked', fallback: '/sma' }
  }
  const protectedFullTests = {
    '/sd/practice/indo/test': { key: 'sdIndoFullTestUnlocked', fallback: '/sd/practice/indo' },
    '/sd/practice/math/test': { key: 'sdMathFullTestUnlocked', fallback: '/sd/practice/math' },
    '/smp/practice/indo/test': { key: 'smpIndoFullTestUnlocked', fallback: '/smp/practice/indo' },
    '/smp/practice/math/test': { key: 'smpMathFullTestUnlocked', fallback: '/smp/practice/math' },
    '/smp/practice/english/test': { key: 'smpEnglishFullTestUnlocked', fallback: '/smp/practice/english' },
    '/smp/practice/ipas/test': { key: 'smpIPASFullTestUnlocked', fallback: '/smp/practice/ipas' },
    '/sma/practice/indo/test': { key: 'smaIndoFullTestUnlocked', fallback: '/sma/practice/indo' },
    '/sma/practice/math/test': { key: 'smaMathFullTestUnlocked', fallback: '/sma/practice/math' },
    '/sma/practice/ekonomi/test': { key: 'smaEkonomiFullTestUnlocked', fallback: '/sma/practice/ekonomi' },
    '/sma/practice/fisika/test': { key: 'smaFisikaFullTestUnlocked', fallback: '/sma/practice/fisika' },
    '/sma/practice/english/test': { key: 'smaEnglishFullTestUnlocked', fallback: '/sma/practice/english' }
  }
  const protectedCombinedTest = protectedCombinedFullTests[to.path]
  const protectedTest = protectedFullTests[to.path]

  if (protectedCombinedTest && sessionStorage.getItem(protectedCombinedTest.key) !== 'true') {
    return protectedCombinedTest.fallback
  }

  if (to.query.mode === 'fulltest' && protectedTest && sessionStorage.getItem(protectedTest.key) !== 'true') {
    return protectedTest.fallback
  }
})

export default router
