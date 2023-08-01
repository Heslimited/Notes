<template>
  <div class="register-page-container">
    <div class="register-container">
      <img src="../assets/note.jpg" alt="Note"/>
      <form @submit.prevent="submitForm" class="form-con">
        <h2>Create account</h2>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="userData.email" required placeholder="example@mail.ru"/>
        </div>
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" v-model="userData.username" required placeholder="Jane123"/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="userData.password" required placeholder="*****************"/>
        </div>
        <div>
          <label for="confirmPassword">Confirm password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required placeholder="*****************"/>
        </div>
        <div class="flex mt-6 text-sm">
                <label class="flex items-center dark:text-gray-400">
                  <input
                    type="checkbox"
                    class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  />
                  <span class="ml-2">
                    I agree to the
                    <span class="underline">privacy policy</span>
                  </span>
                </label>
              </div>
        <div>
          <button type="submit">Create account</button>
        </div>
        <div class="sign-in-buttonn">
          <a href="/login">Already have an account? Login</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userData: {
        username: '',
        email: '',
        password: ''
      },
      confirmPassword: ''
    }
  },
  methods: {
    submitForm() {
      if (this.userData.password !== this.confirmPassword) {
        alert('Пароли не совпадают')
      } else {
        axios
          .post('api/register', this.userData)
          .then(() => {
            alert('Регистрация успешна!')
          })
          .catch((err) => {
            console.error(err)
            alert('Ошибка при регистрации')
          })
      }
    }
  }
}
</script>

<style>
.register-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222222;
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(26, 28, 35, 0.95);
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.5);
}

.register-container img {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.form-con {
  display: flex;
  flex-direction: column;
  margin: 5%;
  width: 35vh;
  border-bottom: 1px solid rgb(255, 255, 255);
  padding-bottom: 25px;
}

.form-con div{
  display: flex;
  flex-direction: column;
  margin-top: 5%;
}

.form-con label{
  color: rgba(158,158,158,0.9);
  font-size: 1.25vh;
  padding-bottom: 5px;
}

.form-con input{
  color: rgba(158,158,158,0.9);
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
}

.form-con button:hover {
  background-color: #e9edc94f;
  transition: background-color 0.3s;
}

a.sign-in-buttonn:link, a.sign-in-buttonn:visited, a.sign-in-buttonn:hover, a.sign-in-buttonn:focus, a.sign-in-buttonn:active {
    color: white;
    text-decoration: none;
}

</style>
