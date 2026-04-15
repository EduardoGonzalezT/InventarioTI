<script setup>
const props = defineProps({
  componentes: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div v-if="componentes.length > 0">
    <DataTable :value="componentes" stripedRows tableStyle="min-width: 60rem">
      <Column field="componente" header="Componente" />
      <Column field="marca" header="Marca" />
      <Column field="modelo" header="Modelo" />
      <Column field="serie" header="No. Serie" />
      <Column field="descripcion" header="Descripción" />
    </DataTable>
  </div>
  <div v-else>
    <p>El Equipo aun no cuenta con Componentes Registrados</p>
  </div>
</template>
