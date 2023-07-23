<template>
    <AppHeader />
    <div class="main-container">
        Hello
    </div>
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  
  export default {
    name: 'regPage',
    components: {
      AppHeader
    }
  }
</script>

<style>
.main-container{
    background-color: rgba(198, 197, 185, 0.5);
    height: 100vh;
}
</style>