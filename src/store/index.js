import { createStore } from 'vuex'
const store = createStore({
    state: {
        // 第一部时选择的头部样式
        _headerStyle: '',
        // 是否已经有杆rod
        _rodHave: false,
        _allValue: '',
    },
    getters: {},
    mutations: {}
})
export default store