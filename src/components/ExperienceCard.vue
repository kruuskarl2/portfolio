<template>
    <div class="experience-card">
        <img v-bind:src="require(`@/assets/${imgName}`)" />
        <div class="text-wrapper">
            <span class="title">{{ title }}</span>
            <br />
            <span class="text">{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExperienceCard",
    props: {
        imgName: String,
        title: String,
        text: String
    }
};
</script>

<style scoped>
.experience-card {
    position: relative;
    display: flex;
    margin: 20px 0;
}
.title {
    font-size: 30px;
    color: var(--accent-light);
}
.text-wrapper {
    margin: 20px 20px;
    border-left: var(--text) 5px solid;
    padding-left: 20px;
}
img {
    width: 200px;
}
.text {

}
</style>
