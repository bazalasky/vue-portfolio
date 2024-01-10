import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faLinkedin);

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
