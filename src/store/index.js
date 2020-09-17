import Vue from 'vue';
import Vuex from 'vuex';
import language from './modules/language';
import goods from './modules/goods';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    language,
    goods,
    user,
  },
});
