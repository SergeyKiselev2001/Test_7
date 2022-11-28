<template>
  <button class='py-2 px-4 rounded-md text-white' :class='colorClass'>{{ text }}</button>
</template>

<script>
export default {
  name: 'ButtonComp',
  data(){
    const relations = {
      blue: 'bg-[#3B82F6]',
      green: 'bg-[#0D9488]',
      greenLight: 'bg-[#16A34A]'
    }

    return {
      colorClass: relations[this.color]
    }
  },
  props: {
    text: {
      type:String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
}
</script>