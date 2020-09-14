<template>
    <div class="nav-bar">
        <div class="logo">
            <font-awesome-icon class="logo-icon" icon="code" />
            <span>KARL</span>
        </div>
        <div class="lang-group">
            <div
                class="lang-button"
                v-bind:class="{ 'selected-lang': localeIsEnglish }"
                v-on:click="changeLocale('en')"
            >
                EN
            </div>
            <div
                class="lang-button"
                v-bind:class="{ 'selected-lang': localeIsEstonian }"
                v-on:click="changeLocale('est')"
            >
                EST
            </div>
        </div>
        <div class="nav-buttons">
            <font-awesome-icon class="nav-button" icon="home" />
            <font-awesome-icon class="nav-button" icon="laptop-code" />
            <font-awesome-icon class="nav-button" icon="graduation-cap" />
            <font-awesome-icon class="nav-button" icon="address-card" />
        </div>
        <div class="link-buttons">
            <a href="https://github.com/kruuskarl2"
                ><GithubLogo class="link-button"
            /></a>
            <a href="https://www.linkedin.com/in/karl-kruus-5427951ab/"
                ><LinkedInIcon class="link-button"
            /></a>
        </div>
    </div>
</template>

<script>
import GithubLogo from "../assets/github.svg";
import LinkedInIcon from "../assets/linkedIn.svg";

export default {
    name: "NavigationBar",
    components: {
        GithubLogo,
        LinkedInIcon
    },
    computed: {
        localeIsEnglish: function() {
            const locale = this.$i18n.locale;
            return locale === "en";
        },
        localeIsEstonian: function() {
            const locale = this.$i18n.locale;
            return locale === "est";
        }
    },
    methods: {
        changeLocale: function(locale) {
            this.$i18n.locale = locale;
        }
    }
};
</script>

<style scoped>
.nav-bar {
    position: fixed;
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
    padding-top: 13px;
}
.lang-button {
    transition: 0.3s;
    margin: 10px 0;
}
.lang-button:hover {
    color: var(--accent-light);
}
.nav-buttons {
    flex-grow: 1;
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
    text-align: center;
    padding: 20px;
}
.link-button {
    flex-grow: 1;
    width: 25px;
    transition: 0.3s;
    fill: var(--text);
    margin: 20px 0 0;
}
.link-button:hover {
    fill: var(--accent-light);
}
.selected-lang {
    color: var(--accent-light);
}
</style>
