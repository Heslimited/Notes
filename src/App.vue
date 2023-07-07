<template>
  <div id="app">
    <AppHeader /> <!-- используем компонент AppHeader  -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
@import './assets/styles/zerostyle.css';

</style>

