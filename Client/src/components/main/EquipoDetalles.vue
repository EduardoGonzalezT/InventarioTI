<script setup>
import { ref, onMounted, computed } from "vue";
import { getEquipoDetalles, updateStatusEquipo } from "../../services/equiposServices";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";
import Impresora from "../../assets/webp/impresora.webp";
import Telefono from "../../assets/webp/telefono.webp";
import Grabadora from "../../assets/webp/grabadora.webp";
import Smartphone from "../../assets/webp/smartphone.webp";
import Pantalla from "../../assets/webp/pantalla.webp";
import Tablet from "../../assets/webp/tablet.webp";
import addEquipo from "../ui/modals/addEquipo.vue";
import "../../styles/main/detallesEquipo.css";

const showModal = ref(false);
const position = ref("top");
const openModal = (pos) => {
  position.value = pos;
  showModal.value = true;
};

const toast = useToast();
const route = useRoute();
const equipo = ref({});

onMounted(async () => {
  try {
    const id = Number(route.query.id);
    equipo.value = await getEquipoDetalles(id);
    console.log(equipo.value);
  } catch (error) {
    console.error(error);
  }
});

const props = defineProps({
  equipo: {
    type: Object,
    required: true,
  },
});

const IconEquipo = computed(() => {
  if (!equipo.value.Descripcion) return Impresora;
  return equipo.value.Descripcion.trim() === "Impresora"
    ? Impresora
    : equipo.value.Descripcion.trim() === "Telefono"
      ? Telefono
      : equipo.value.Descripcion.trim() === "Grabadora"
        ? Grabadora
        : equipo.value.Descripcion.trim() === "Smartphone"
          ? Smartphone
          : equipo.value.Descripcion.trim() === "Pantalla"
            ? Pantalla
            : equipo.value.Descripcion.trim() === "Tablet"
              ? Tablet
              : Laptop;
});

const Estatus = computed(() => {
  return equipo.value.Status == 1 ? "Activo" : "Inactivo";
});

const ColorStatus = computed(() => {
  return equipo.value.Status == 1 ? "color: #70e000" : "color: #ff0000";
});

async function updateStatus() {
  try {
    const data = await updateStatusEquipo(equipo.value.Id, {
      Status: equipo.value.Status == 1 ? 0 : 1,
    });
    toast.add({
      severity: "success",
      summary: "Estatus Actualizado",
      detail: "El estatus se actualizo correctamente",
      life: 1200,
    });
    setTimeout(() => {
      location.reload();
    }, 1300);
  } catch (error) {
    console.log("Error al actualizar el estatus: ", error.response?.data || error.message);
    toast.add({
      severity: "error",
      summary: "Error al actualizar el estatus",
      detail: "El estatus no se actualizo correctamente",
      life: 1200,
    });
  }
}

const items = [
  {
    label: "Actualizar Estatus",
    icon: "pi pi-pen-to-square",
    command: () => updateStatus(),
  },
  {
    label: "Editar Datos",
    icon: "pi pi-pen-to-square",
    command: () => openModal("top"),
  },
];
</script>

<template>
  <div class="detallesEquipo">
    <Panel header="Informacion General">
      <div class="detallesEquipoTop">
        <div class="detallesEquipoTopLeft">
          <img :src="IconEquipo" alt="" />
          <div class="detallesEquipoTopInfo">
            <small>
              <strong>{{ equipo.Nombre }}</strong>
            </small>
            <small>
              <strong>{{ equipo.Codigo }}</strong>
            </small>
          </div>
        </div>

        <div class="detallesEquipoTopRight">
          <div class="infoCard">
            <div class="cardTexts">
              <svg width="25" height="25" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0m10-3v6m0-13v4m10 6h-4m-6 6v4M6 12H2m13 0H9"
                />
              </svg>
              <div class="cardLabels">
                <small><strong>Estatus</strong></small>
                <small :style="ColorStatus">{{ Estatus }}</small>
              </div>
            </div>
          </div>

          <div class="infoCard">
            <div class="cardTexts">
              <svg width="25" height="25" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  color="currentColor"
                >
                  <path
                    d="M15.129 13.747a.906.906 0 0 1-1.258 0c-1.544-1.497-3.613-3.168-2.604-5.595A3.53 3.53 0 0 1 14.5 6c1.378 0 2.688.84 3.233 2.152c1.008 2.424-1.056 4.104-2.604 5.595M14.5 9.5h.009"
                  />
                  <path
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9 15l-4 4m10 2L3 9"
                  />
                </g>
              </svg>
              <div class="cardLabels">
                <small><strong>Sucursal</strong></small>
                <small style="color: #003566">{{ equipo["sucursal.Descripcion"] }}</small>
              </div>
            </div>
          </div>

          <div class="infoCard">
            <div class="cardTexts">
              <svg width="25" height="25" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2l-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504L1.508 9.071l2.742 1.567l2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134l2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996l2.742 1.567l2.742-1.567l-2.742-1.567l-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643L8 4.21l2.742-1.567L8 1.076L5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"
                />
              </svg>
              <div class="cardLabels">
                <small><strong>Area</strong></small>
                <small style="color: #003566">{{ equipo["area.Area"] }}</small>
              </div>
            </div>
          </div>

          <div>
            <SplitButton label="Editar" :model="items" icon="pi pi-pen-to-square" severity="secondary"></SplitButton>
          </div>
        </div>
      </div>
    </Panel>
    <div class="informacionEquipo">
      <Panel header="Informacion del Equipo">
        <div class="btnComponentes">
          <Button label="Agregar Componentes" icon="pi pi-plus" severity="secondary" />
        </div>
      </Panel>
    </div>
  </div>

  <addEquipo v-model:visible="showModal" :position="position" />
</template>
