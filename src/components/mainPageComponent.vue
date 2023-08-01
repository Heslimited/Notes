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
            <div class="con1">
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
    max-width: 60%;
    font-weight: 400;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #000000;
    font-size: 2vh;
    line-height: 1.5;
    text-align: center;
}

.nav-container {
    display: flex;
    gap: 10px;
}

.sign-up-button {
    border-radius: 6px;
    padding: 10px;
    color: #CCD5AE;
    background-color: #000000;
    position: relative;
    font-weight: 600;
    font-style: normal;
    font-family: "Inter", sans-serif;
    font-size: 1.5vh;
    text-align: center;
    height: 3.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 3.5vh;
    border-radius: 6px;
    padding: 10px;
    background-color: #E9EDC9;
    font-weight: 600;
    font-style: normal;
    font-family: "Inter", sans-serif;
    font-size: 1.5vh;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: height 0.25s;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.expand-button:hover {
    height: 4.5vh;
    transition: all 1s;
}

.button-text {
    display: block;
    transition: transform 1s;
    transition: all 1s;
}

.expand-button:hover .button-text {
    transform: translateY(-20%);
    transition: all 1s;
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
    font-size: 1.5vh;
}

.expand-button:hover .arrow-down {
    opacity: 1;
    transform: translateX(-50%) translateY(-200%);
}

.first-land-container {
    background-color: #000000;
    width: 60%;
}

.con1 {
    color: #CCD5AE;
    display: flex;
    gap: 2%;
    margin: 6%;
    text-align: center;
    justify-content: space-between;
    align-items: center;
}

.con1 img {
    min-height: 20vh;
    max-height: 40vh;
    min-width: 20vh;
    max-width: 40vh;
    border-radius: 40px;
    margin-bottom: 10%;
}

.con1 h2 {
    font-weight: 400;
    font-style: normal;
    font-family: "Limelight", cursive;
    color: #ccd5ae;
    font-size: 3vh;
    line-height: 1.5;
}

.con1 p {
    font-weight: 400;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #ccd5ae;
    font-size: 2vh;
    line-height: 1.5;
}

.second-land-container {
    background-color: #000000;
    width: 60%;
    border-top: white 1px solid;
}

.con2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6% 6% 0% 6%;
    gap: 2%;
}

.second-land-container img {
    border-radius: 40px;
    object-fit: cover;
    min-height: 20vh;
    max-height: 40vh;
    min-width: 20vh;
    max-width: 40vh;
}

.v-land-second-con {
    color: #D4A373;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.v-land-second-con h2 {
    font-weight: 400;
    font-style: normal;
    font-family: "Limelight", cursive;
    color: #D4A373;
    font-size: 3vh;
    line-height: 1.5;
}

.v-land-second-con p {
    font-weight: 400;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #D4A373;
    line-height: 1.5;
    font-size: 2vh;
}

.third-land-container {
    background-color: #000000;
    width: 60%;
    border-bottom: 1px solid white;
}

.con3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6% 6% 6% 6%;
    gap: 2%;
    text-align: center;
}

.third-land-container img {
    border-radius: 40px;
    object-fit: cover;
    min-height: 20vh;
    max-height: 40vh;
    min-width: 20vh;
    max-width: 40vh;
}

.v-land-third-con {
    color: #D4A373;
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
    font-size: 3vh;
    line-height: 1.5;
}

.v-land-third-con p {
    overflow: visible;
    flex: 1 0 0px;
    position: relative;
    font-weight: 400;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #D4A373;
    font-size: 2vh;
    line-height: 1.5;
}

.fourth-land-container {
    background-color: #000000;
    width: 60%;
}

.con4{
    margin: 6% 6% 6% 6%;
}

.fourth-land-container h2 {
    font-weight: 400;
    font-style: normal;
    font-family: "Limelight", sans-serif;
    color: #faedcd;
    font-size: 3.5vh;
    line-height: 1.2;
    text-align: left;
}

.fourth-land-container h3 {
    font-weight: 900;
    font-style: normal;
    font-family: 'Schibsted Grotesk', sans-serif;
    color: #faedcd;
    font-size: 16px;
    font-size: 2.25vh;
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
    font-size: 2vh;
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