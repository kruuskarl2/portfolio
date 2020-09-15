<template>
    <div class="home-page">
        <div class="main-content">
            <img class="portrait" src="../assets/portrait.png" />
            <div class="introduction">
                <span class="introduction-text">{{
                    $t("home.introduction")
                }}</span>
            </div>
        </div>
        <span class="site-explanation">{{ $t("home.explanation") }}</span>
        <font-awesome-icon class="scroll-down" icon="angle-down" />
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
.main-content {
    height: 80vh;
    padding: 10vh 20vw;
    display: flex;
}
.portrait {
    height: 100%;
}
.introduction {
    font-size: 9vh;
    margin: 10vh 0 10vh -15%;
    text-align: center;
    /* Set the display to table to make use of it's vertical align feature */
    display: table;
    height: 60vh;
    max-width: 600px;
}
.introduction-text {
    vertical-align: middle;
    display: table-cell;
}
.site-explanation {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 10vw;
    font-size: 1vh;
    text-align: right;
}
</style>
