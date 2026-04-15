<script setup>
import { ref, computed, onMounted } from "vue";
import { getTelefonos } from "../../services/equiposServices";
import addEquipo from "../ui/modals/addEquipo.vue";
import cardEquipo from "../ui/cards/cardEquipo.vue";
import "../../styles/main/equipos.css";

const showModal = ref(false);
const position = ref("top");
const openPosition = (pos) => {
  position.value = pos;
  showModal.value = true;
};

const equipos = ref([]);
const search = ref("");

const filtrado = computed(() => {
  if (!search.value) return equipos.value;
  return equipos.value.filter(
    (c) =>
      c.Nombre.toLowerCase().includes(search.value.toLowerCase()) ||
      c.Codigo.toLowerCase().includes(search.value.toLowerCase()) ||
      c["area.Area"].toLowerCase().includes(search.value.toLowerCase()) ||
      c["sucursal.Descripcion"].toLowerCase().includes(search.value.toLowerCase()),
  );
});

onMounted(async () => {
  try {
    equipos.value = await getTelefonos();
    console.log(equipos.value);
  } catch (error) {
    console.log("Error al obtener telefonos:", error.response?.data || error.message);
    alert("Error al obtener telefonos");
  }
});
</script>

<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-plus" class="mr-2" severity="secondary" text @click="openPosition('top')" />
    </template>

    <template #center>
      <small><strong>Listado de Equipos de Telefono</strong></small>
    </template>

    <template #end>
      <IconField>
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Buscar Equipo" v-model="search" />
      </IconField>
    </template>
  </Toolbar>

  <section class="equipos">
    <cardEquipo v-for="equipo in filtrado" :key="equipo.Id" :equipo="equipo" />
  </section>

  <addEquipo v-model:visible="showModal" :position="position" />
</template>
