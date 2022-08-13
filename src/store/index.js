import Vue from "vue";
import Vuex from "vuex";
import TodoFooter from './modules/TodoFooter'
import TodoHeader from './modules/TodoHeader'
import TodoMain from './modules/TodoMain'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        TodoFooter,
        TodoHeader,
        TodoMain,
    },
    getters: {
        list: state => state.TodoMain.list,
        listmain:state => state.TodoMain.listmain
    }
})