<script setup>
import Badge from "primevue/badge";

const props = defineProps({
  equipo: {
    type: Object,
    required: true,
  },
});

const EquipoIcon = (equipo) => {
  switch (equipo.Descripcion) {
    case "Impresora":
      return `<i class="pi pi-print" style="font-size: 2rem"></i>`;
    case "Telefono":
      return `<i class="pi pi-phone" style="font-size: 2rem"></i>`;
    case "Grabadora":
      return `<i class="pi pi-microphone" style="font-size: 2rem"></i>`;
    case "Servidor":
      return `<i class="pi pi-server" style="font-size: 2rem"></i>`;
    case "SmartPhone":
      return `<i class="pi pi-mobile" style="font-size: 2rem"></i>`;
    case "Pantalla":
      return `<i class="pi pi-display" style="font-size: 2rem"></i>`;
    case "Tablet":
      return `<i class="pi pi-tablet" style="font-size: 2rem"></i>`;
    default:
      return "";
  }
};

const Status = (status) => {
  if (status === 1) {
    return "Activo";
  } else {
    return "Inactivo";
  }
};
</script>
<template>
  <div class="cardEquipo" :key="equipo.Id">
    <div class="cardTop">
      <div class="cardTopLeft">
        <div class="IconoEquipo">
          <div v-html="EquipoIcon(equipo)"></div>
          <div class="NomCodEquipo">
            <small>
              <strong>{{ equipo.Codigo }}</strong>
            </small>
            <small>{{ equipo.Nombre }}</small>
            <small>{{ equipo.Descripcion }}</small>
          </div>
        </div>
        <div class="infoEquipo">
          <div class="infoTexts">
            <small><strong>Area:</strong></small>
            <small>{{ equipo["area.Area"] }}</small>
          </div>
          <div class="infoTexts">
            <small><strong>Estatus:</strong></small>
            <Badge
              :value="Status(equipo.Status)"
              :severity="equipo.Status == 1 ? 'success' : 'danger'"
              size="small"
            ></Badge>
          </div>
        </div>
      </div>
      <div class="cardTopRight">
        <router-link :to="`/equipos/EquipoDetalles?id=${equipo.Id}`" class="btnVerMas">
          <svg width="40" height="40" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13.292 12L9.046 7.754q-.14-.14-.15-.344q-.01-.204.15-.364t.354-.16q.194 0 .354.16l4.388 4.389q.131.13.184.267q.053.136.053.298t-.053.298q-.053.137-.184.267l-4.388 4.389q-.14.14-.344.15q-.204.01-.364-.15t-.16-.354q0-.194.16-.354L13.292 12Z"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <div class="cardBottom">
      <svg width="25" height="25" viewBox="0 0 24 24">
        <g fill="currentColor">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"
          >
            <animate
              fill="freeze"
              attributeName="d"
              dur="0.4s"
              keyTimes="0;0.7;1"
              values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"
            />
          </path>
          <circle cx="12" cy="9" r="2.5" fill-opacity="0">
            <animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.4s" values="0;1" />
          </circle>
        </g>
      </svg>
      <small>
        <strong>Sucursal</strong>
        >
      </small>
      <small>{{ equipo["sucursal.Descripcion"] }}</small>
    </div>
  </div>
</template>
