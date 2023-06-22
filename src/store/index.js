import {createStore} from "vuex"
import state from "./state.js"
import * as actions from "./actions.js"
import * as mutations from "./mutations.js"
import * as getters from "./getters.js"

const store=createStore({
    actions,
    mutations,
    getters,
    state,
})

export default store