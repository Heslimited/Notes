<template>
    <AppHeader />
    <RegPageComponent />
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  import RegPageComponent from '../components/regPageComponent.vue'
  
  export default {
    name: 'regPage',
    components: {
      AppHeader,
      RegPageComponent
    }
  }
</script>

<style>

</style>