<template>
    <div class="experience-page">
        <span class="title">{{ $t("exp.title") }}</span>
        <div class="card-list">
            <ExperienceCard
                imgName="tpt.jpg"
                v-bind:text="$t('exp.tpt.text')"
                v-bind:title="$t('exp.tpt.title')"
            />
            <ExperienceCard
                imgName="uptime.png"
                v-bind:text="$t('exp.uptime.text')"
                v-bind:title="$t('exp.uptime.title')"
            />
        </div>
        <span>{{ $t('exp.text') }}</span>
        <font-awesome-icon class="scroll-up" icon="angle-up" />
        <font-awesome-icon class="scroll-down" icon="angle-down" />
    </div>
</template>

<script>
import ExperienceCard from "./ExperienceCard.vue";

export default {
    name: "ExperiencePage",
    components: {
        ExperienceCard
    }
};
</script>

<style scoped>
.experience-page {
    height: 80vh;
    overflow: hidden;
    position: relative;
    padding: 20vh 10vw 0;
}
.title {
    color: var(--accent-light);
    font-size: 50px;
    font-weight: bold;
}
</style>
