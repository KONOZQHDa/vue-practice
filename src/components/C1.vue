<template>
  <div>
    c1.vue
    <slot name="slot1">
    </slot>
    <hr>
    <slot name="slot2">slot2 默认内容</slot>
    age-{{$store.state.age}}
  </div>
</template>

<script>
export default {
  name: "C1",
  data() {
    return {
      names:['z','q','h']
    }
  },
  methods:{
    trans(){
      this.$emit('call','newparameter')
    }
  },
  mounted() {
    this.$bus.$emit('call2','call2')
    this.$store.dispatch('moudle1/add',22)
  }

}
</script>

<style scoped>

</style>
