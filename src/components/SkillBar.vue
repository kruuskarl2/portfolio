<template>
    <div class="skill-bar">
        <span class="label">{{ label }}</span>
        <div class="progress-bg">
            <div
                class="progress"
                v-bind:style="{ width: percentage + '%' }"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SkillBar",
    props: {
        percentage: String,
        label: {
            default: "",
            type: String
        }
    }
};
</script>

<style scoped>
.skill-bar {
    height: 10px;
    margin-bottom: 30px;
}
.progress {
    background-color: var(--accent-light);
    height: 100%;
}
.progress-bg {
    background-color: var(--accent-dark);
    height: 100%;
}
.label {
    text-align: center;
}
</style>
