<template>
  <div class="">
    cart
    <oder-header></oder-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OderHeader from "../components/OderHerader"
import NavFooter from "../components/NavFooter"


export default {
  name: "cart",
  components:{
    OderHeader,
    NavFooter
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
</style>