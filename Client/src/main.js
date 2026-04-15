import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import AppPlugins from './plugins/AppPlugins'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: false // 👈 fuerza modo claro
		}
	}
})


AppPlugins(app) // aquí registras globalmente los componentes

app.mount('#app')