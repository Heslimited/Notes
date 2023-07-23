<template>
    <AppHeader />
    <MainPageComponent />
</template>

<script >
  import AppHeader from '../components/AppHeader.vue';
  import MainPageComponent from '../components/mainPageComponent.vue';

  export default {
    name: 'mainPage',
    components: {
      AppHeader,
      MainPageComponent
    }
  }
</script>

<style>

</style>