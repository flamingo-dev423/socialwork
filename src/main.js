import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
// library.add(faTwitter)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'

// Vue.config.productionTip = false

createApp(App).use(router).mount('#app')
