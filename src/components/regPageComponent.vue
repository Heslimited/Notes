<template>
  <div class="register-page-container">
    <div class="register-container">
      <img src="../assets/note.jpg" alt="Note" />
      <form @submit.prevent="submitForm" class="form-con">
        <h2>Create account</h2>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="userData.email" required placeholder="example@mail.ru" />
        </div>
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" v-model="userData.username" required placeholder="Jane123" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="userData.password" required placeholder="*****************" />
        </div>
        <div>
          <label for="confirmPassword">Confirm password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required placeholder="*****************" />
        </div>
        <div class="reg-checkbox-con">
          <label>
            <input type="checkbox" class="reg-checkbox" required>
            <span> I agree to the privacy policy</span>
          </label>
        </div>
        <button type="submit">Create account</button>
        <div class="google-btn-container">
          <a class="google-btn">
            <GoogleIcon /> Google
          </a>
        </div>
        <div>
          <a class="btn-signin" href="/login">Already have an account? Login</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
  import GoogleIcon from '../assets/icons/googleIcon.vue'
</script>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
    };
  },
  methods: {
    submitForm() {
      if (this.userData.password !== this.confirmPassword) {
        alert('Passwords do not match');
      }
      else {
        axios
          .post('api/register', this.userData)
          .then(() => {
            alert('Registration successful!');
          })
          .catch((err) => {
            console.error(err);
            alert('Registration error');
          });
      }
    }
  },
}
</script>

<style>

.register-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222222;
  margin: auto;
  background-color: rgba(198, 197, 185, 0.5);
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(26, 28, 35, 0.95);
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.5);
  object-fit: cover;
}

.register-container img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
}

.form-con {
  display: flex;
  flex-direction: column;
  margin: 5%;
  width: 35vh;
}

.form-con div {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  justify-content: center;
}

.form-con label {
  color: rgba(158, 158, 158, 0.9);
  font-size: 1.25vh;
  padding-bottom: 5px;
}

.form-con input {
  color: rgba(158, 158, 158, 0.9);
  font-size: 1.25vh;
  padding-bottom: 5px;
  border-radius: 2.5px;
  background-color: rgba(0, 0, 0, 0.216);
  border: 1px solid gray;
  padding: 0.75vh;
}

.form-con h2 {
  color: white;
  font-family: 'Schibsted Grotesk', sans-serif;
}

.form-con button {
  background-color: #e9edc983;
  padding: 1vh;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-style: normal;
  font-family: "Inter", sans-serif;
  font-size: 1.15vh;
  margin-bottom: 5%;
}

.form-con button:hover {
  background-color: #e9edc94f;
  transition: background-color 0.3s;
}

a.btn-signin:link a,
a.btn-signin:visited,
a.btn-signin:hover,
a.btn-signin:focus,
a.btn-signin:active {
  color: #e9edc983;
}

.btn-signin {
  text-align: center;
}

.btn-signin:hover {
  text-decoration: underline;
  opacity: 1;
  color: #e9edc983;
}

.google-btn-container {
  border-top: 1px solid white;
  padding-top: 10%;
}

.google-btn {
  cursor: pointer;
  border: 1px solid white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  margin-bottom: 3%;
  color: #9e9e9e;
  gap: 3%;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter", sans-serif;
}

.google-btn:hover {
  box-shadow: 0px 0px 1px 2px rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.2s;
}

.reg-checkbox-con {
  margin: 0% 0 3% 0;
}


</style>
