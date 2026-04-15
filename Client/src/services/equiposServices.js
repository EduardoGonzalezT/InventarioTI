import api from "./api";

export async function getSucursales() {
	try {
		const response = await api.get('/sucursales/all');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getClaves() {
	try {
		const response = await api.get('/claves/all');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getAreas() {
	try {
		const response = await api.get('/areas/all');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function addEquipo(id, values) {
	const hoy = new Date();
	const fechaRegistro = hoy.toISOString().split("T")[0];
	const Descripcion = values.Laptop ? "Laptop" : DescripcionEquipo(values.TipoEquipo);

	const payload = {
		Nombre: values.NombreEquipo,
		Codigo: values.CodigoEquipo,
		Clave: values.TipoEquipo,
		Area: values.AreaEquipo,
		Sucursal: values.SucursalEquipo,
		Status: 1,
		Descripcion,
		Registro: fechaRegistro,
	};

	try {
		const url = id ? `/equipos/createOrUpdate/${id}` : `/equipos/createOrUpdate`;
		const response = await api.post(url, payload);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export function DescripcionEquipo(tipo) {
	switch (tipo) {
		case "1": return "Computadora";
		case "2": return "Impresora";
		case "3": return "Telefono";
		case "4": return "Grabadora";
		case "5": return "Servidor";
		case "6": return "Smartphone";
		case "7": return "Pantalla";
		case "8": return "Tablet";
		default:
			return "";
	}
}

export async function getComputadoras() {
	try {
		const response = await api.get('/equipos/getComputadoras');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getImpresoras() {
	try {
		const response = await api.get('/equipos/getImpresoras');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getTelefonos() {
	try {
		const response = await api.get('/equipos/getTelefonos');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getGrabadoras() {
	try {
		const response = await api.get('/equipos/getGrabadoras');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getServidores() {
	try {
		const response = await api.get('/equipos/getServidores');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getSmartPhones() {
	try {
		const response = await api.get('/equipos/getSmartPhones');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getPantallas() {
	try {
		const response = await api.get('/equipos/getPantallas');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getTablets() {
	try {
		const response = await api.get('/equipos/getTablets');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getEquipoDetalles(id) {
	try {
		const response = await api.get(`/equipos/getEquipoDetalles/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function getInfoEquipo(id) {
	try {
		const response = await api.get(`/infoEquipos/getInfo/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function updateInfoEquipo(id, values) {
	const payload = {
		SO: values.SO,
		Mac: values.Mac,
		Ip: values.Ip,
		Usuario: values.Usuario,
	};

	try {
		const response = await api.post(`/infoEquipos/createOrUpdateGeneral/${id}`, payload);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function updateEquipo(id, values) {
	const Descripcion = values.Laptop ? "Laptop" : "Computadora";
	const payload = {
		Nombre: values.NombreEquipo,
		Codigo: values.CodigoEquipo,
		Clave: values.TipoEquipo,
		Area: values.AreaEquipo,
		Sucursal: values.SucursalEquipo,
		Status: values.Status,
		Descripcion: Descripcion,
	};

	try {
		const response = await api.put(`/equipos/update/${id}`, payload);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function updateStatusEquipo(id, values) {
	try {
		const response = await api.put(`/equipos/updateStatus/${id}`, { Status: values.Status });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function updateComponentsEquipo(id, values) {
	try {
		const payload = {
			Componentes: values,
		};
		const response = await api.post(`/infoEquipos/createOrUpdateComponents/${id}`, payload);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}