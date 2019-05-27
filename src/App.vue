<template>
  <div id="app">
    <topMenu/>
    <router-view/>
  </div>
</template>

<script>
  import topMenu from '@/components/top-menu.vue'

  export default {
    name: 'app',
    components: {
      topMenu
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  body{
    box-sizing: border-box;
  }
  html{
    font-family: sans-serif;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

</style>
