<template>
    <div class="nav-bar">
        <div class="logo">
            <font-awesome-icon class="logo-icon" icon="code" />
            <span>KARL</span>
        </div>
        <div class="lang-group">
            <div class="lang-button">EN</div>
            <div class="lang-button">EST</div>
        </div>
        <div class="nav-buttons">
            <font-awesome-icon class="nav-button" icon="home" />
            <font-awesome-icon class="nav-button" icon="laptop-code" />
            <font-awesome-icon class="nav-button" icon="graduation-cap" />
            <font-awesome-icon class="nav-button" icon="address-card" />
        </div>
        <div class="link-buttons">
            <GithubIcon class="link-button" />
            <LinkedInIcon class="link-button" />
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationBar"
};
</script>

<style scoped>
.nav-bar {
    position: absolute;
    left: 0;
    height: 100vh;
    background-color: var(--lighter-bg);
    width: 75px;
    display: flex;
    flex-direction: column;
    user-select: none;
}
.logo {
    text-align: center;
    background-color: var(--medium-bg);
    padding: 20px 0;
    flex: 0;
}
.logo-icon {
    font-size: 37px;
    width: 100%;
    color: var(--accent-light);
    margin-bottom: 8px;
    filter: drop-shadow(1px 1px red);
}
.lang-group {
    flex-grow: 1;
    text-align: center;
}
.lang-button {
    transition: 0.3s;
    margin: 10px 0;
}
.lang-button:hover {
    color: var(--accent-light);
}
.nav-buttons {
    flex-grow: 4;
}
.nav-button {
    width: 100%;
    font-size: 34px;
    padding: 15px 0;
    transition: 0.2s;
    /* This is needed so the border will animate */
    border-left: 0px var(--accent-light) solid;
}
.nav-button:hover {
    border-left: 5px var(--accent-light) solid;
    padding-left: -5px;
}
.link-buttons {
    flex-grow: 0;
}
.link-button {
    padding: 15px 0;
    width: 100%;
    color: white !important;
}
</style>
