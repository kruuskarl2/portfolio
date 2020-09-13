<template>
    <div id="app">
        <NavigationBar />
    </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
    name: "App",
    components: {
        NavigationBar
    }
};
</script>

<style>
:root {
    --lighter-bg: #1f2833;
    --darker-bg: #0b0b0b;
    --text: #c5c6c7;
    --accent-light: #66fcf1;
    --accent-dark: #45a29e;
}
body {
    margin: 0;
    background-color: var(--darker-bg);
    color: var(--text);
    font-family: Armata, Helvetica;
}
@font-face {
    font-family: "Armata";
    src: local("Armata"), url(./assets/Armata-Regular.ttf) format("truetype");
}
</style>
