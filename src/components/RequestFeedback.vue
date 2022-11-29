<template>
  <form class="bg-white p-5 rounded-lg cursor-default form_grid" @click.stop>
    <span class="block text-2xl font-medium mb-9 grid_title sm:mb-0">Заказать звонок</span>

    <label
      class="block font-medium mb-5 grid_fio md:mb-4"
    >
      <span
        class="block"
      >Имя*</span>
      <input
        type="text"
        placeholder="Иван Иванов"
        class="font-normal w-full py-2 px-2.5 border border-gray-300 rounded-md leading-5 tracking-tighter"
        :value='$store.state?.form?.name'
        @input='$store.commit("setName", $event.target.value)'
      />
    </label>


    <label
      class="block font-medium mb-5 grid_phone md:mb-4"
    >
      <span
        class="block"
      >Телефон*</span>
      <input
        type="text"
        placeholder="+7 (___) ___-__-__"
        class="font-normal w-full py-2 px-2.5 border border-gray-300 rounded-md leading-5 tracking-tighter"
        :value='$store.getters?.getPhone'
        @input='$store.commit("setPhone", $event.target.value)'
      />

    </label>

    <label
      class="block font-medium mb-5 grid_email md:mb-4"
    >
      <span
        class="block"
      >Email*</span>
      <input
        type="text"
        placeholder="you@example.com"
        class="font-normal w-full py-2 px-2.5 border border-gray-300 rounded-md leading-5 tracking-tighter"
        :value='$store.state?.form?.email'
        @input='$store.commit("setEmail", $event.target.value)'
      />
    </label>

    <label
      class="block font-medium mb-5 grid_city md:mb-4"
    >
      <span
        class="block"
      >Город*</span>
      <select
        class="font-normal w-full py-2 px-2.5 border border-gray-300 rounded-md h-[38px] leading-5 tracking-tighter"
        :value='$store.state?.form?.city'
        @change='selectHandle'
      >
        <option
          v-for="city in cities"
          v-bind:key="city.id"
        >
          {{ city.name }}
        </option>
      </select>

    </label>
    <div class="grid_button sm:pt-6 md:pt-0">
      <ButtonComp
        class="w-full"
        text="Отправить"
        color="greenLight"
        @click='buttonHandle'
      />
    </div>
  </form>
</template>

<style scoped>

.form_grid{
  display:block;
}

.grid_phone{
  grid-area: phone;
}

.grid_fio{
  grid-area: fio;
}

.grid_email{
  grid-area: email;
}

.grid_city{
  grid-area: city;
}

.grid_button{
  grid-area: button;
}

.grid_title {
  grid-area: title;
}


@media (min-width: 540px) {
  .form_grid {
    display:grid;
    grid-template-areas: 
      "title title xx" 
      "phone fio email"
      "city city button";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 54px 1fr 1fr;
    grid-gap: 0px 26px;
  }
}


@media (min-width: 850px) {
  .form_grid {
    grid-template-areas:
      "title title none none"
      "fio phone email city"
      "none2 none2 none2 button";
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 54px 1fr 38px;
    grid-gap: 0px 20px;
  }
}


</style>

<script>
import { cities } from '@/constants/cities'

export default {
  name: 'RequestFeedback',
  data(){
    return { cities }
  },
  methods: {
    buttonHandle(event){
      event.preventDefault()
      this.$store.dispatch("sendData")
    },
    selectHandle({ target: { value} }){
      this.$store.commit("setCity", value)
    }
  }
}

</script>