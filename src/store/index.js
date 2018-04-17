import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 定义一个容器

let store = new Vuex.Store({
    state: {
      count: 100
    }
})

export default store

