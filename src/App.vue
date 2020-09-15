<template>
    <div id="app">
        <NavigationBar />
        <div class="pages">
            <HomePage />
            <SkillsPage />
        </div>
    </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import HomePage from "./components/HomePage.vue";
import SkillsPage from "./components/SkillsPage.vue";

export default {
    name: "App",
    components: {
        NavigationBar,
        HomePage,
        SkillsPage
    }
};
</script>

<style>
:root {
    --lighter-bg: #1f2833;
    --medium-bg: #151c24;
    --darker-bg: #0b0b0b;
    --text: #c5c6c7;
    --accent-light: #66fcf1;
    --accent-dark: #183837;
}
body {
    margin: 0;
    background-color: var(--darker-bg);
    color: var(--text);
    font-family: Armata, Helvetica;
    overflow: hidden;
}
@font-face {
    font-family: "Armata";
    src: local("Armata"), url(./assets/Armata-Regular.ttf) format("truetype");
}
.pages {
    margin-left: 90px;
    overflow: auto;
    height: 100vh;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.pages::-webkit-scrollbar {
    display: none;
}
/* These are the arrows that are used on each page */
.scroll-down {
    position: absolute;
    bottom: 10px;
    left: 49vw;
    height: 2vw;
    width: 2vw !important;
}
.scroll-up {
    position: absolute;
    top: 10px;
    left: 49vw;
    height: 2vw;
    width: 2vw !important;
}
</style>
