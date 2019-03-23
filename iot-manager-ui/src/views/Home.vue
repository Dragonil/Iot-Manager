<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <comp msg="Comming Soon"/>
  </div>
</template>

<script>
// @ is an alias to /src
import comp from '@/components/Comp.vue'

export default {
  name: 'home',
  components: {
    comp
  }
}
</script>
