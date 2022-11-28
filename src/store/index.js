import { createStore } from "vuex";


const store =  createStore({
    state: {
        showModal: false,
        city: 'Москва'
    },

    getters: {

    },

    mutations: {
        setShowModal(state, { showModal, city = state.city}){
           state.showModal = showModal
           state.city = city 
        }
    },

    actions: {

    }
})

export { store }