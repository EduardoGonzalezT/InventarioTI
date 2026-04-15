<script setup>
import "../../styles/main/head.css";
import Perfil from "../../assets/webp/user.webp";
import { logout } from "../../services/authServices";
import { useRouter } from "vue-router";
import { getMe } from "../../services/authServices";
import { ref, onMounted } from "vue";

const router = useRouter();
const user = ref(null);

async function onLogout() {
  try {
    await logout();
    router.replace("/auth/Login");
  } catch (error) {
    console.log("Error al cerrar sesión:", error.response?.data || error.message);
    alert("Error al cerrar sesión");
  }
}

onMounted(async () => {
  try {
    user.value = await getMe();
  } catch (error) {
    console.log("Error al obtener usuario:", error.response?.data || error.message);
    alert("Error al obtener usuario");
  }
});
</script>

<template>
  <Menubar :model="items" class="Head">
    <template #end>
      <div class="HeadEnd">
        <div class="HeadEndUser">
          <Avatar :image="Perfil" shape="circle" />
          <div class="HeadEndName">
            <small>
              <strong>{{ user?.Apellidos }}</strong>
            </small>
            <small>{{ user?.Nombre }}</small>
          </div>
        </div>
        <button class="HeadEndButton" @click="onLogout">
          <i class="pi pi-power-off"></i>
        </button>
      </div>
    </template>
  </Menubar>
</template>
