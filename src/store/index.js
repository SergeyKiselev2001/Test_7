import { sendValues } from "@/api/api";
import { cities } from "@/constants/cities";
import { phoneMask } from "@/utils/phoneMask";
import { validateForm } from "@/utils/validateForm";
import { createStore } from "vuex";

const store = createStore({
  state: {
    showFormModal: false,
    showResponseModal: false,
    htmlResponse: "",
    form: {
      name: "",
      phone: "",
      email: "",
      city: "",
    }
  },

  getters: {
    getPhone({ form }) {
      return phoneMask(form.phone);
    },
  },

  mutations: {
    setName({ form }, newName){
      form.name = newName
    },
    setEmail({ form }, newEmail){
      form.email = newEmail
    },
    setCity({ form }, newCity){
      form.city = cities.find(el => el.name == newCity).name
    },
    showResponseModal(state) {
      state.showResponseModal = true
    },
    setHtmlResponse(state, html) {
      state.htmlResponse = html
    },
    clearForm({ form }){
      for (let key in form) form[key] = ''
    },
    showFormModal(state, city) {
      state.showFormModal = true;
      state.form.city = city;
    },
    setPhone({ form }, newPhone) {
      if (form.phone && newPhone.length > 18){
          form.phone = newPhone.replaceAll(/[^\d]/g, "").substring(1, 10)
      } else if (form.phone) {
          form.phone = newPhone.replaceAll(/[^\d]/g, "").substring(1)
      } else {
        form.phone = newPhone
      }
    },
    closeModals(state) {
      state.showResponseModal = false
      state.showFormModal = false
    },
  },

  actions: {
    async sendData(store) {
      const { state: { form: { name, phone, email, city }}} = store;
      const isFormCorrect = validateForm({ name, phone, email })

      if (isFormCorrect === true){
        const response = await sendValues({
          name,
          email,
          phone: `+7${phone}`,
          city_id: cities.find((el) => el.name == city).id,
        });

        store.commit("setHtmlResponse", response);
        store.commit("clearForm");
        store.commit("closeModals");
        store.commit("showResponseModal");
      } else {
        alert(isFormCorrect.error)
      }
    },
  },
});

export { store };
