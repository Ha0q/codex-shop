import { createApp } from 'vue'
import App from './App.vue'
import '../styles.css'

createApp(App).mount('#app')

// The browser may resolve the initial fragment before Vue renders its target.
if (window.location.hash) {
  const target = document.getElementById(window.location.hash.slice(1))
  target?.scrollIntoView({ behavior: 'instant' })
}
