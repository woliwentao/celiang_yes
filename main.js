import Vue from 'vue'
import App from './App'
import Globalvariable from '@/global/global_variable.js'
import Globalfunc from  '@/global/global_func.js'
Vue.config.productionTip = false

import level from './pages/level/level.vue'
Vue.component('level', level)


Vue.prototype.GV= Globalvariable
Vue.use(Globalfunc)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
