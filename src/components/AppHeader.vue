<template>
    <header>
        <div class='v-head-con'>
            <div class="v-head-logo">
                <a class="header-logo-link" href="/">
                    <HeaderLogo />
                    <p>JustNotes</p>
                </a>
            </div>
            <div class='v-head-right-con'>
                <a class='header-link' href='/login'>
                    <p>Войти</p>
                </a>
                <a class='header-link' href='/reg'>
                    <p>Зарегистрироваться</p>
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
import HeaderLogo from '../assets/icons/HeaderLogo.vue'

</script>

<style>
.v-head-con{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5% 30% 0.5% 30%;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
}
.v-head-logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 42pt;
    font-weight: 600;
    font-family:'Times New Roman', Times, serif;
}
.v-head-right-con{
    display: flex;
    font-size: 16pt;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    justify-content: space-between;
    align-items: center;
    gap: 35px;
    background-color: transparent;
    transition: background-color 0.3s;
}

a.header-link:link, a.header-link:visited, a.header-link:hover, a.header-link:focus, a.header-link:active {
  color: #000000;
  text-decoration: none;
}
a.header-logo-link:link, a.header-logo-link:visited, a.header-logo-link:hover, a.header-logo-link:focus, a.header-logo-link:active {
  color: #000000;
  text-decoration: none;
  display: flex;
  gap: 10px;
}
.header-link{
    padding: 10px;
}
.header-link:hover{
    background-color: rgba(88, 115, 134, 0.5);
    transition: background-color 0.3s;
    border-radius: 6px;
}
</style>