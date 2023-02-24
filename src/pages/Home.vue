<template>
  <div>
    home
    <hr>
    <span title="test title">test tittle attribute</span>

    <!--<router-link :to="{
      name:'Login2',
      params:{
        id:111
      }
    }">click me to change route</router-link>
    }
    }
    <router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {}
  },
  methods:{
    changeRoute(){
      this.$router
    }
  }
}
</script>

<style scoped>

</style>
