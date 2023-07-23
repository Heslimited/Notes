<template>
    <div class="main-container">
        <div class="container">
            <h1>Unleash Creativity</h1>
            <div>
                <WordIcon />
            </div>
            <p>Revolutionize the way you take notes with NoteMaster. Capture your thoughts, organize them intuitively, and
                share your ideas with the world. Dive into the ultimate notetaking experience now!</p>
            <div class="nav-container">
                <nav>
                    <a class='sign-up-button' href='/reg'>
                        Register
                    </a>
                </nav>
                <div class="expand-button">
                    <a class="button-text">Learn More</a>
                    <span class="arrow-down"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WordIcon from '../assets/icons/WordIcon.vue'
</script>

<style>
.main-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Limelight', cursive;
    width: 1200px;
    background-color: #D4A373;
    gap: 20px;
    padding-bottom: 100px;
}

.container div {
    margin-left: 40px;
}

.container h1 {
    color: #000000;
    font-size: 36px;
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

.nav-container {
    display: flex;
    justify-content: start;
    align-items: flex-start;
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
    transition: height 0.5s;
    text-align: center;
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
</style>