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

library.add(faCode);
library.add(faHome);
library.add(faLaptopCode);
library.add(faGraduationCap);
library.add(faAddressCard);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
