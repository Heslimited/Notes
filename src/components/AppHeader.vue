<template>
    <header>
        <div class='v-head-con'>
            <nav class="v-head-logo">
                <a class="header-logo-link" href="/">
                    <HeaderLogo />
                    <p>JustNotes</p>
                </a>
            </nav>
            <nav class='v-head-right-con'>
                <a class='sign-in' href='/login'>
                    <p>Sign in</p>
                </a>
                <a class='sign-up' href='/reg'>
                    <p>Register</p>
                </a>
            </nav>
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
    justify-content: space-around;    
    padding: 0.5% 0% 0.5% 0%;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.5);
}
.v-head-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36pt;
    font-weight: 600;
    font-family: 'Limelight', cursive;
}
.header-logo-link{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.v-head-right-con{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    transition: background-color 0.3s;
}
a.sign-up:link, a.sign-up:visited, a.sign-up:hover, a.sign-up:focus, a.sign-up:active {
    color: white;
    text-decoration: none;
}
a.sign-in:link, a.sign-in:visited, a.sign-in:hover, a.sign-in:focus, a.sign-in:active {
  color: #000000;
  text-decoration: none;
}
a.header-logo-link:link, a.header-logo-link:visited, a.header-logo-link:hover, a.header-logo-link:focus, a.header-logo-link:active {
  color: #000000;
  text-decoration: none;
  display: flex;

}
.sign-in{
    padding: 10px;
    color: #222222;
    font-weight: 600;
    font-style: normal;
    font-family: "Inter", sans-serif;
    color: #666666;
    font-size: 16px;  
}
.sign-in:hover{
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s;
    border-radius: 6px;
}
.sign-up{
    padding: 10px;
    border-radius: 6px;
    background-color: #222222;
    position: relative;
    font-weight: 600;
    font-style: normal;
    font-family: "Inter", sans-serif;
    color: #ffffff;
    font-size: 14px;
    text-align: center;
}
.sign-up:hover{
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s;
    border-radius: 6px;
    color: white
}
</style>