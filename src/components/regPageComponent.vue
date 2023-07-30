<template>
  <div class="register-container">
    <div class="form-con">
      <img src="../assets/note.jpg" alt="Note" />
      <form @submit.prevent="submitForm">
        <h2>Create account</h2>
        <div>
          <label for="username">Имя пользователя:</label>
          <input type="text" id="username" v-model="userData.username" required placeholder="Jane123"/>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="userData.email" required placeholder="example@mail.ru"/>
        </div>
        <div>
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="userData.password" required placeholder="*****************"/>
        </div>
        <div>
          <label for="confirmPassword">Подтверждение пароля</label>
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
          <button type="submit">Зарегистрироваться</button>
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
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-con {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(26, 28, 35, 0.95);
  margin-top: 4%;
}

.form-con img {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.form-con h2 {
  color: white;
  font-family: 'Schibsted Grotesk', sans-serif;
}

.text-purple{
  color: #7C3AED; 

}
</style>
