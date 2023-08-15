<!-- <template>
  <modal
    name="auth-modal"
    classes="auth-modal"
    height="350px"
    width="500px"
    @before-close="close"
  >
    <form @submit.prevent="formSubmit">
      <h3>{{ isSignInForm ? 'Войти' : 'Зарегистрироваться' }}</h3>
      <label>
        Email
        <input
          type="text"
          placeholder="Ваша эл. почта"
          v-model="form.email"
        >
      </label>
      <label>
        Пароль
        <input
          type="password"
          placeholder="Ваш пароль"
          v-model="form.password"
        >
      </label>
      <div class="actions">
        <a
          href="#"
          @click.prevent="mode = isSignInForm ? 'signUp' : 'signIn'"
        >
          {{ isSignInForm ? 'Регистрация' : 'Вход' }}
        </a>
        <button type="button" @click="$emit('close')">Отмена</button>
        <button type="submit">Подтвердить</button>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'auth-modal',
  data() {
    return {
      mode: 'signIn',
      form: {
        email: '',
        password: '' 
      },
      errors: []
    }
  },
  computed: {
    isSignInForm() {
      return this.mode === 'signIn'
    }
  },
  mounted () {
    this.$modal.show('auth-modal')
  },
  methods: {
    changeUserState() {
      if (this.auth) {
        localStorage.removeItem('auth')
        this.$router.push({ name: 'main'})
      } else {
        localStorage.setItem('auth', true)
        this.auth = true
      }
    },
    close() {
      this.$emit('close')
    },
    formSubmit() {
      if (this.isSignInForm) {
        this.signIn()
      } else {
        this.signUp()
      }
    },
    signIn() {
      this.$load(async() => {
        const data = (await this.$api.auth.signIn({
          email: this.form.email,
          password: this.form.password
        })).data
        localStorage.setItem('user', JSON.stringify(data))
        this.$store.dispatch('user/setUser', data)
        this.$emit('close')
      })
    },
    signUp() {
      this.$load(async() => {
        const data = (await this.$api.auth.signUp({
          email: this.form.email,
          password: this.form.password
        })).data
        localStorage.setItem('user', JSON.stringify(data))
        this.$store.dispatch('user/setUser', data)
        this.$emit('close')
      })
    }
  }
}
</script>

<style>
.auth-modal {
  padding: 30px 40px;
}
.auth-modal form {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.auth-modal h3 {
    margin-bottom: 30px;
}

.auth-modal label {
    width: 100%;
    margin-bottom: 20px;
}

.actions {
    margin-top: auto;
    display: flex;
    align-items: baseline;
}

.actions a {
      color: #EB5804;
}
.actions button {
      width: 130px;
      margin-left: 10px;
}
.actions &:first-of-type {
      margin-left: auto;
}
</style> -->

<!-- <template>
  <div class="container">
    <h1>Register</h1>
    <form action="/register" method="post">
      <input type="email" v-model="email" placeholder="Email">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password">
      <button type="submit" class="btn btn-primary">Register</button>
      <a href="/login" class="btn btn-link">Login</a>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  data() {
    return {
      email: ref(''),
      username: ref(''),
      password: ref(''),
      confirmPassword: ref(''),
      errors: ref({})
    }
  },
  methods: {
    register() {
      const { email, username, password, confirmPassword } = this;
      axios.post('/register', {
        email,
        username,
        password,
        confirmPassword
      }).then(response => {
        if (response.status === 200) {
          // Redirect to the login page
          window.location.href = '/login';
        } else {
          // Handle errors
          this.errors.value = response.data.errors;
        }
      }).catch(error => {
        // Handle errors
        this.errors.value = error.response.data.errors;
      });
    }
  }
}
</script> -->

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
          .post('http://localhost:8000/auth/users/', this.userData)
          .then(() => {
            alert('Registration successful!');
          })
          .catch((err) => {
            console.error(err);
            alert('Registration error');
            console.log(this.userData);
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
