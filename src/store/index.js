import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab.js'

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        tab
    }
})
console.log(store)
export default store