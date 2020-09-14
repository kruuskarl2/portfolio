import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAddressCard,
    faCode,
    faGraduationCap,
    faHome,
    faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueI18n from "vue-i18n";
import messages from "./messages";

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: "en", // set locale
    messages // set locale messages
});

library.add(faCode);
library.add(faHome);
library.add(faLaptopCode);
library.add(faGraduationCap);
library.add(faAddressCard);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    i18n
}).$mount("#app");
