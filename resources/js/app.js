import { createApp } from 'vue';
import TodoApp from './components/TodoApp.vue'; // Asegúrate de que la ruta sea correcta
import '../css/app.css'; // Si usas Tailwind o algún otro CSS, este archivo debe estar incluido

createApp(TodoApp).mount('#app'); // Esto montará el componente TodoApp en el div con id="app"
