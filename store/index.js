import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        message: null,
        access_token: null,
    },
    mutations: {
        setUser(state, message) {
            state.message = message;
        },
        setToken(state,access_token) {
            state.access_token = access_token;
        },
    },
    actions: {},
    getters: {
        isLoggedIn(state) {
            return !!state.access_token;
        },
    },
});
