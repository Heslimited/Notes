<template>
    <AppHeader />
    <MainPageComponent />
    <AppFooter />
</template>

<script >
  import AppHeader from '../components/AppHeader.vue';
  import MainPageComponent from '../components/mainPageComponent.vue';
  import AppFooter from '../components/AppFooter.vue';

  export default {
    name: 'mainPage',
    components: {
      AppHeader,
      MainPageComponent,
      AppFooter
    }
  }
</script>

<style>

</style>