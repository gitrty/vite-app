export default {
    state: {
        userStatus: 'mod1'
    },
    mutations: {
        modFn(state) {
            state.userStatus = '123123'
        },
        SETUSER(state, val) {
            state.userStatus = val
        }
    },
    actions: {
        setVal({ commit }) {
            console.log('actions')
            commit('modFn')
        }
    },
    getters: {}
}