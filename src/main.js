import {createApp} from 'vue'
import App from './App.vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// Icons importieren, die du brauchst
import {fas} from '@fortawesome/free-solid-svg-icons'

// Die ganze "fas" Bibliothek (optional, aber praktisch)
library.add(fas)


const app = createApp(App)


app.component('FontAwesomeIcon', FontAwesomeIcon)


createApp(App).mount('#app')
