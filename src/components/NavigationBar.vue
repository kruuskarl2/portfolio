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
    height: 96vh;
    background-color: var(--lighter-bg);
    width: 76px;
    padding: 2vh 0;
    display: flex;
    flex-direction: column;
    user-select: none;
}
.logo {
    text-align: center;
    flex-grow: 1;
}
.logo-icon {
    font-size: 37px;
    width: 100%;
    color: var(--accent-light);
    text-shadow: 5px 5px var(--accent-dark);
    margin-bottom: 8px;
    filter: drop-shadow(1px 1px red);
}
.lang-group {
    flex-grow: 1;
    margin-left: 16px;
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
    transition: 0.3s;
}
.nav-button:hover {
    border-left: 5px var(--accent-light) solid;
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
