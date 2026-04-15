<script setup>
import { ref } from "vue";
import "../../styles/main/Sidebar.css";
import "primeicons/primeicons.css";
import Menu from "primevue/menu";

const items = ref([
  {
    label: "Equipos",
    items: [
      { label: "Computadoras", icon: "pi pi-desktop", to: "/equipos/Computadoras" },
      { label: "Impresoras", icon: "pi pi-print", to: "/equipos/Impresoras" },
      { label: "Telefonos", icon: "pi pi-phone", to: "/equipos/Telefonos" },
      { label: "Grabadoras", icon: "pi pi-microphone", to: "/equipos/Grabadoras" },
      { label: "Servidores", icon: "pi pi-server", to: "/equipos/Servidores" },
      { label: "Smartphones", icon: "pi pi-mobile", to: "/equipos/Smartphones" },
      { label: "Pantallas", icon: "pi pi-desktop", to: "/equipos/Pantallas" },
      { label: "Tablets", icon: "pi pi-tablet", to: "/equipos/Tablets" },
    ],
  },
  {
    label: "Documentos",
    items: [
      { label: "Responsivas", icon: "pi pi-file-pdf" },
      { label: "Inventario", icon: "pi pi-file-pdf" },
      { label: "Gasto Anual", icon: "pi pi-file-pdf" },
      { label: "Memorandums", icon: "pi pi-file-pdf" },
    ],
  },
  {
    label: "Mantenimientos",
    items: [
      { label: "Correctivos", icon: "pi pi-file-pdf" },
      { label: "Preventivos", icon: "pi pi-file-pdf" },
    ],
  },
  {
    label: "Usuarios",
    items: [{ label: "Usuarios", icon: "pi pi-user" }],
  },
]);
</script>

<template>
  <div class="Sidebar">
    <div class="SidebarHeader">
      <img src="../../assets/webp/logo_contorno.webp" alt="imgMRI" class="SidebarLogo" />
      <span class="SidebarTitle">SGETI</span>
    </div>
    <div class="SidebarContent">
      <Menu :model="items" class="SidebarMenu">
        <template #submenulabel="{ item }">
          <span class="text-primary font-bold">{{ item.label }}</span>
        </template>
        <template #item="{ item, props }">
          <router-link v-ripple class="flex items-center" v-bind="props.action" :to="item.to">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
          </router-link>
        </template>
      </Menu>
    </div>
  </div>
</template>
