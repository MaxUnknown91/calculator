import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMars, faVenus, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faMars, faVenus, faCheck, faXmark )

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount("#app");