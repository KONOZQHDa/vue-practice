<template>
  <div id="app">
    <div id="nav">
      <hr/>
      <p>child page</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import C1 from "./components/C1";
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
export default {
  name: 'App',
  data(){
    return {
      list:[1,2,3,4,5],
      名字:'zqh'
    }
  },

  components: {
    C1
  },
  computed:{
    // ...mapState(['age']),
    ...mapState('moudle1',{myage:'age'})
  },
  methods:{
    callback(p){
      console.log(p)
    }
  },
  beforeMount() {
    this.$bus.$on('call2',this.callback)
  },
  beforeDestroy() {
    this.$bus.$off('call2')
  }
}
</script>
