<template>
    <div class="main-container">
        <div class="container">
            <h1>Unleash Creativity</h1>
            <div>
                <WordIcon style="margin-left: 40px"/>
            </div>
            <p>Revolutionize the way you take notes with NoteMaster. Capture your thoughts, organize them intuitively, and
                share your ideas with the world. Dive into the ultimate notetaking experience now!</p>
            <div class="nav-container">
                <nav>
                    <a class='sign-up-button' href='/reg'>
                        Register
                    </a>
                </nav>
                <div @click="scrollToElement" class="expand-button">
                    <a class="button-text">Learn More</a>
                    <span class="arrow-down"></span>
                </div>
            </div>
        </div>
        <div class="first-land-container">
            <div class="v-land-first-con">
                <div>
                    <img src="../assets/1.png" alt="Notes image 1">
                    <h2>Hassle-free Editing</h2>
                    <p>Create, edit, and perfect your notes with a breeze on our smooth interface.</p>
                </div>
                <div>
                    <img src="../assets/2.png" alt="Notes image 2">
                    <h2>Colorful Organization</h2>
                    <p>Categorize and visualize your thoughts with vibrant colors for easy referencing.</p>
                </div>
            </div>
        </div>
        <div ref="myElement" v-scroll class="second-land-container">
            <div class="con2">
                <div class="v-land-second-con">
                    <h2>Collaborate in Real-time</h2>
                    <p>Collaborate with your team and watch ideas unfold in real-time.</p>
                </div>
                <div>
                    <img src="../assets/3.png" alt="Notes image 3">
                </div>
            </div>
        </div>
        <div class="third-land-container">
            <div class="con3">
                <div>
                    <img src="../assets/4.png" alt="Notes image 4">
                </div>
                <div class="v-land-third-con">
                    <h2>Privacy Matters – Secure and Reliable Note Storage</h2>
                    <p>Your notes’ security is our priority. Keep them safe, secure, and accessible only to those you grant
                        permission.</p>
                </div>
            </div>
        </div>
        <div class="fourth-land-container">
            <div class="con4">
                <h2>FAQ</h2>
                <div class="con5">
                    <div>
                        <h3>How do I share my notes?</h3>
                        <p>Simply click the share button and select your desired sharing options.</p>
                    </div>
                    <div>
                        <h3>Can I import notes from other apps?</h3>
                        <p>Absolutely! Use our import feature to transfer notes from other apps seamlessly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WordIcon from '../assets/icons/WordIcon.vue'
</script>

<script>

export default {
  methods: {
    scrollToElement () {
      this.$refs.myElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style>
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(198, 197, 185, 0.5);
}

.container {
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Limelight', cursive;
    width: 60%;
    background-color: #D4A373;
    gap: 20px;
    padding-bottom: 100px;
}

.container h1 {
    color: #000000;
    font-size: 16px;
    font-size: 6vh;
    font-weight: 400;
    text-align: center;
    gap: 20px;
    line-height: 1.2;
}

.container p {
    flex-shrink: 0;
    width: 411px;
    max-width: 100%;
    font-weight: 400;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #000000;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
}

.nav-container {
    display: flex;
    gap: 10px;
    position: relative;
    display: flex;
    align-items: flex-start;
}

.sign-up-button {
    display: inline-block;
    font-size: 14px;
    font-family: 'Schibsted Grotesk', sans-serif;
    border-radius: 6px;
    padding: 10px;
    color: #CCD5AE;
    background-color: #000000;
    position: relative;
    font-weight: 600;
    font-style: normal;
    font-family: "Inter", sans-serif;
    text-align: center;
    
}

.sign-up-button:hover {
    background-color: #7a7a7a;
    transition: background-color 0.3s;
    border-radius: 6px;
    color: white
}

a.sign-up-button:link,
a.sign-up-button:visited,
a.sign-up-button:hover,
a.sign-up-button:focus,
a.sign-up-button:active {
    color: #CCD5AE;
    text-decoration: none;
}

.expand-button {
    width: 100px;
    height: 34px;
    display: inline-block;
    font-size: 14px;
    font-family: 'Schibsted Grotesk', sans-serif;
    border-radius: 6px;
    padding: 8px;
    background-color: #E9EDC9;
    font-weight: 600;
    font-style: normal;
    font-family: "Inter", sans-serif;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: height 0.25s;
    text-align: center;
    flex-grow: 1;
}

.expand-button:hover {
    height: 45px;
}

.button-text {
    display: block;
    transition: transform 0.3s;
    transition: all 0.5s;
}

.expand-button:hover .button-text {
    transform: translateY(-20%);
    transition: all 0.5s;
}

.arrow-down {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000000;
    transition: opacity 0.3s, transform 0.3s;
    opacity: 0;
}

.expand-button:hover .arrow-down {
    opacity: 1;
    transform: translateX(-50%) translateY(-200%);
}

.first-land-container {
    background-color: #000000;
    width: 60%;
}

.v-land-first-con {
    color: #CCD5AE;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 6%;
}

.v-land-first-con img {
    height: 50vh;
    object-fit: cover;
    border-radius: 40px;
    max-height: 490px;
}

.v-land-first-con h2 {
    font-weight: 400;
    font-style: normal;
    font-family: "Limelight", cursive;
    color: #ccd5ae;
    font-size: 16px;
    font-size: 4vh;
    line-height: 1.5;
    width: 300px;
}

.v-land-first-con p {
    max-width: 300px;
    overflow: visible;
    flex: 1 0 0px;
    position: relative;
    font-weight: 400;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #ccd5ae;
    font-size: 16px;
    font-size: 2.5vh;
    line-height: 1.5;
    text-align: left;
}

.second-land-container {
    background-color: #000000;
    width: 60%;
    border-top: white 1px solid;
}

.second-land-container img {
    border-radius: 40px;
    height: 50vh;
    object-fit: cover;
    max-height: 490px;
    margin-right: 50px;
}

.v-land-second-con {
    color: #D4A373;
    gap: 20px;
    margin: 6%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
}

.v-land-second-con h2 {
    font-weight: 400;
    font-style: normal;
    font-family: "Limelight", cursive;
    color: #D4A373;
    font-size: 4vh;
    line-height: 1.5;
}

.v-land-second-con p {
    overflow: visible;
    flex: 1 0 0px;
    position: relative;
    font-weight: 400;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #D4A373;
    font-size: 2.5vh;
    line-height: 1.5;
    text-align: left;
}

.con2 {
    margin-top: 6%;
    display: flex;
}

.third-land-container {
    background-color: #000000;
    width: 60%;
    border-bottom: 1px solid white;
}

.con3 {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 6%;
}

.third-land-container img {
    height: 490px;
    border-radius: 40px;
    height: 50vh;
    object-fit: cover;
    max-height: 490px;
}

.v-land-third-con {
    color: #D4A373;
    gap: 20px;
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
}

.v-land-third-con h2 {
    font-weight: 400;
    font-style: normal;
    font-family: "Limelight", cursive;
    color: #D4A373;
    font-size: 16px;
    font-size: 4vh;
    line-height: 1.5;
}

.v-land-third-con p {
    max-width: 300px;
    overflow: visible;
    flex: 1 0 0px;
    position: relative;
    font-weight: 400;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #D4A373;
    font-size: 16px;
    font-size: 2.5vh;
    line-height: 1.5;
    text-align: left;
}

.fourth-land-container {
    background-color: #000000;
    width: 60%;
}

.con4{
    margin: 6%;
}

.fourth-land-container h2 {
    font-weight: 400;
    font-style: normal;
    font-family: "Limelight", sans-serif;
    color: #faedcd;
    font-size: 16px;
    font-size: 6vh;
    line-height: 1.2;
    text-align: left;
}

.fourth-land-container h3 {
    font-weight: 900;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #faedcd;
    font-size: 16px;
    font-size: 3vh;
    letter-spacing: -0.025em;
    line-height: 1.5;
    text-align: left;
}

.fourth-land-container p {
    font-weight: 400;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #e9edc9;
    font-size: 16px;
    font-size: 2.5vh;
    line-height: 1.5;
    text-align: left;
}

.con5{
    margin-top: 60px;
    display: flex;
    gap: 100px;
}
.con5 p{
    padding-top: 10px;
}
</style>