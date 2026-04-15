import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../components/MainLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import Login from "../components/auth/Login.vue";
import Computadoras from "../components/main/Computadoras.vue";
import Impresoras from "../components/main/Impresoras.vue";
import Telefonos from "../components/main/Telefonos.vue";
import Grabadoras from "../components/main/Grabadoras.vue";
import Servidores from "../components/main/Servidores.vue";
import Smartphones from "../components/main/Smartphones.vue";
import Pantallas from "../components/main/Pantallas.vue";
import Tablets from "../components/main/Tablets.vue";
import ComputadoraDetalles from "../components/main/ComputadoraDetalles.vue";
import EquipoDetalles from "../components/main/EquipoDetalles.vue";

const routes = [
	{
		path: "/",
		redirect: "/auth/Login"
	},
	{
		path: "/auth",
		component: AuthLayout,
		children: [
			{ path: "Login", component: Login }
		]
	},
	{
		path: "/equipos",
		component: MainLayout,
		children: [
			{ path: "Computadoras", component: Computadoras },
			{ path: "Impresoras", component: Impresoras },
			{ path: "Telefonos", component: Telefonos },
			{ path: "Grabadoras", component: Grabadoras },
			{ path: "Servidores", component: Servidores },
			{ path: "Smartphones", component: Smartphones },
			{ path: "Pantallas", component: Pantallas },
			{ path: "Tablets", component: Tablets },
			{ path: "ComputadoraDetalles", component: ComputadoraDetalles },
			{ path: "EquipoDetalles", component: EquipoDetalles }
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, from, next) => {
	try {
		const res = await fetch("http://localhost:3000/api/v1/usuarios/me", {
			credentials: "include"
		});
		const user = await res.json();

		if (to.path.startsWith("/auth") && user?.Usuario) {
			return next("/main/Computadoras");
		}

		if (to.meta.requiresAuth && !user?.Usuario) {
			return next("/auth/Login");
		}

		next();
	} catch (error) {
		console.error("Error verificando sesión:", error);
		next("/auth/Login");
	}
});



export default router;