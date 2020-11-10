<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/minebook2.png">
    <HelloWorld msg="Welcome.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src este estaba en el del libro<img alt="Vue logo" src="../assets/logo.png">
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
