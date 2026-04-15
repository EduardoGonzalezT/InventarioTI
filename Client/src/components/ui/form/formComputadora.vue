<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  initialComponents: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:components"]);

const componentes = ref([]);

onMounted(() => {
  if (Array.isArray(props.initialComponents) && props.initialComponents.length > 0) {
    componentes.value = props.initialComponents.map((c) => ({
      componente: c.componente ?? "",
      marca: c.marca ?? "",
      modelo: c.modelo ?? "",
      serie: c.serie ?? "",
      descripcion: c.descripcion ?? "",
    }));
  } else {
    componentes.value = [];
  }
});

watch(
  () => props.initialComponents,
  (newVal) => {
    if (Array.isArray(newVal) && newVal.length > 0) {
      componentes.value = newVal.map((c) => ({
        componente: c.componente ?? "",
        marca: c.marca ?? "",
        modelo: c.modelo ?? "",
        serie: c.serie ?? "",
        descripcion: c.descripcion ?? "",
      }));
    } else {
      componentes.value = [];
    }
  },
  { immediate: true, deep: true },
);

const addRow = () => {
  componentes.value.push({ componente: "", marca: "", modelo: "", serie: "", descripcion: "" });
};

const removeRow = (index) => {
  componentes.value.splice(index, 1);
};

watch(
  componentes,
  (val) => {
    emit("update:components", val);
  },
  { deep: true },
);
</script>

<template>
  <div class="btnAddComponente" style="margin-bottom: 1rem">
    <Button label="Agregar otro" icon="pi pi-plus" @click="addRow" />
  </div>
  <DataTable :value="componentes" stripedRows tableStyle="min-width: 70rem">
    <Column header="Componente">
      <template #body="slotProps">
        <InputText v-model="slotProps.data.componente" placeholder="Componente" />
      </template>
    </Column>

    <Column header="Marca">
      <template #body="slotProps">
        <InputText v-model="slotProps.data.marca" placeholder="Marca" />
      </template>
    </Column>

    <Column header="Modelo">
      <template #body="slotProps">
        <InputText v-model="slotProps.data.modelo" placeholder="Modelo" />
      </template>
    </Column>

    <Column header="No. Serie">
      <template #body="slotProps">
        <InputText v-model="slotProps.data.serie" placeholder="No. Serie" />
      </template>
    </Column>

    <Column header="Descripción">
      <template #body="slotProps">
        <InputText v-model="slotProps.data.descripcion" placeholder="Descripción" />
      </template>
    </Column>

    <Column header="Acciones">
      <template #body="slotProps">
        <Button label="Eliminar" severity="danger" @click="removeRow(slotProps.index)" />
      </template>
    </Column>
  </DataTable>
</template>

<style scoped>
.btnAddComponente {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
}

:deep(.p-inputtext) {
  width: 100%;
}
</style>
