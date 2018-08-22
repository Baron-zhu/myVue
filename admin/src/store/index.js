import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loginState: false,
        count: 0
    },
    mutations: {
        loginState (state, data) {
            state.loginState = data;
        },
        count (state) {
            state.count ++;
        }
    },
    getters: {
        loginState (stare) {
            return state.loginState;
        },
        count (state) {
            return state.count;
        }
    },
    actions: {
        LOGIN_STATE (mutation, data) {
            mutation.commit('loginState',true);
        }
    }
})