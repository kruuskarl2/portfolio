<template>
    <div class="home-page">
        <img class="portrait" src="../assets/portrait.png" />
        <div class="introduction">
            I'm <span>Karl</span>, a junior front end developer.
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationBar"
};
</script>

<style scoped>
.home-page {
    height: 100vh;
    position: relative;
}
.portrait {
    position: absolute;
    width: 500px;
    left: 10vw;
    top: 20vh;
}
.introduction {
    font-size: 80px;
    color: white;
    position: absolute;
    left: 30vw;
    top: 40vh;
    width: 50vw;
}
span {
    color: var(--accent-light);
    font-weight: bold;
}
</style>
