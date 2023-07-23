<template>
  <link href="https://fonts.cdnfonts.com/css/limelight" rel="stylesheet">
                
    <AppHeader />
    <div class="main-container">
        Hello there
        <div class="text1">Дайте волю творчеству</div>
    </div>
</template>

<script>
  import AppHeader from '../components/AppHeader.vue'
  
  export default {
    name: 'loginPage',
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
.text1{
  font-family: 'Limelight', sans-serif;
}
</style>