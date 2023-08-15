<template>
    <div class="container">
      <h1>My Account</h1>
      <div class="avatar">
        <img :src="avatar" alt="Avatar">
        <button @click="changeAvatar">Change Avatar</button>
      </div>
      <div class="profile">
        <h2>Profile</h2>
        <form @submit.prevent="updateProfile">
          <input v-model="name" placeholder="Name">
          <input v-model="email" placeholder="Email">
          <input v-model="password" placeholder="Password">
          <input v-model="login" placeholder="Login">
          <button type="submit">Update</button>
        </form>
      </div>
      <div class="favorites">0
        <h2>Favorites</h2>
        <ul>
          <li v-for="note in favorites" :key="note.id">
            <h3>{{ note.title }}</h3>
            <p>{{ note.body }}</p>
            <button @click="removeFromFavorites(note)">Remove from Favorites</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        login: '',
        avatar: '',
        favorites: reactive([])
      }
    },
    methods: {
      updateProfile() {
        // TODO: Update profile
      },
      removeFromFavorites(note) {
        this.favorites.splice(this.favorites.indexOf(note), 1);
      }
    }
  }
  </script>