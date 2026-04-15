import api from "./api";

export async function login(values) {
	try {
		const response = await api.post("/usuarios/login", {
			Usuario: values.usuario,
			Contrasena: values.contrasena,
		});
		return response.data;
	} catch (error) {
		console.log("Error al iniciar sesión:", error.response?.data || error.message);
		alert("Error al iniciar sesión");
	}
}

export async function logout() {
	try {
		const response = await api.post("/usuarios/logout");
		return response.data;
	} catch (error) {
		console.log("Error al cerrar sesión:", error.response?.data || error.message);
		alert("Error al cerrar sesión");
	}
}

export async function getMe() {
	const response = await api.get("/usuarios/me", { withCredentials: true });
	return response.data;
}