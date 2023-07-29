<template>
    <div class="register-container">
        <div class="form-con">
            <img src="../assets/note.jpg" alt="Note">
            <form>
                <h2>Create account</h2>
                <input placeholder="EMAIL">
            </form>
        </div>
    </div>
</template>

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
    background-color: rgba(26,28,35,0.95);
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
</style>