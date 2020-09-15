<template>
    <div class="skills-page">
        <div class="content">
            <div class="text">
                <span class="title">{{ $t("skills.title") }}</span>
                <br />
                <span>{{ $t("skills.skills1") }}</span>
                <br /><br />
                <span>{{ $t("skills.skills2") }}</span>
            </div>
            <div class="skill-levels">
                <SkillBar percentage="80" label="javascript" />
                <SkillBar percentage="90" label="CSS" />
                <SkillBar percentage="95" label="HTML" />
                <SkillBar percentage="70" label="C#" />
                <div class="minor-skills">
                    <div class="minor-skill-column">
                        <SkillBar percentage="90" label="Vue" />
                        <SkillBar percentage="60" label="SQL" />
                        <SkillBar percentage="10" label="Python" />
                        <SkillBar percentage="10" label="PHP" />
                    </div>
                    <div class="minor-skill-column">
                        <SkillBar percentage="20" label="React" />
                        <SkillBar percentage="60" label="Unity" />
                        <SkillBar percentage="10" label="Visual Basic" />
                    </div>
                </div>
            </div>
        </div>
        <font-awesome-icon class="scroll-up" icon="angle-up" />
        <font-awesome-icon class="scroll-down" icon="angle-down" />
    </div>
</template>

<script>
import SkillBar from "./SkillBar.vue";

export default {
    name: "NavigationBar",
    components: {
        SkillBar
    }
};
</script>

<style scoped>
.skills-page {
    height: 100vh;
    overflow: hidden;
    position: relative;
}
.content {
    display: flex;
    margin: 30vh 10vw 10vh;
    height: 60vh;
}
.title {
    color: var(--accent-light);
    font-size: 70px;
    font-weight: bold;
}
.text {
    flex-grow: 1;
    width: 100%;
    margin: 50px;
}
.skill-levels {
    flex-grow: 1;
    width: 100%;
    margin: 60px 50px 0;
}
.minor-skills {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
}
.minor-skill-column {
    flex-grow: 1;
    margin-right: 10px;
}
</style>
