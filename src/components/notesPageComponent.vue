<template>
    <div class="container">
      <h1>Notes</h1>
      <div class="notes">
        <note v-for="note in notes" :key="note.id">
          <h2>{{ note.title }}</h2>
          <p>{{ note.body }}</p>
          <button v-on:click="editNote(note)">Edit</button>
          <button v-on:click="deleteNote(note)">Delete</button>
        </note>
      </div>
      <div class="new-note">
        <h2>New Note</h2>
        <input v-model="title" placeholder="Title">
        <textarea v-model="body" placeholder="Body"></textarea>
        <button v-on:click="createNote">Create</button>
      </div>
    </div>
  </template>
  
  <script>

  import { reactive } from 'vue';
  
  export default {
    data() {
      return {
        notes: reactive([]),
        title: '',
        body: ''
      }
    },
    methods: {
      createNote() {
        this.notes.push({
          title: this.title,
          body: this.body
        });
        this.title = '';
        this.body = '';
      },
      editNote(note) {
        this.title = note.title;
        this.body = note.body;
      },
      deleteNote(note) {
        this.notes.splice(this.notes.indexOf(note), 1);
      }
    }
  }
  </script>