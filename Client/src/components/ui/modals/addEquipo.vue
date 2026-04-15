<script setup>
import { onMounted, ref } from "vue";
import { Form, FormField } from "@primevue/forms";
import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { getSucursales, getClaves, getAreas, addEquipo } from "../../../services/equiposServices";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const sucursales = ref([]);
const tiposEquipo = ref([]);
const areasEquipo = ref([]);

const props = defineProps({
  dataEquipo: {
    type: Object,
    required: true,
  },
});

onMounted(async () => {
  sucursales.value = await getSucursales();
  tiposEquipo.value = await getClaves();
  areasEquipo.value = await getAreas();
});

const schema = z.object({
  Laptop: z.boolean().optional(),
  SucursalEquipo: z.number().min(1, "Seleccione una Sucursal"),
  TipoEquipo: z.string().min(1, "Seleccione un Tipo de Equipo"),
  NombreEquipo: z.string().min(1, "Ingrese un nombre válido"),
  CodigoEquipo: z.string().min(1, "Ingrese un código válido"),
  AreaEquipo: z.string().min(1, "Seleccione un Área"),
});

const resolver = zodResolver(schema);

async function onFormSubmit({ values }) {
  try {
    const data = await addEquipo(props.dataEquipo?.Id, values);
    toast.add({
      severity: "success",
      summary: "Equipo Registrado",
      detail: "El equipo se registro correctamente",
      life: 1200,
    });
    setTimeout(() => {
      location.reload();
    }, 1300);
  } catch (error) {
    console.log("Error al registrar el Equipo: ", error.response?.data || error.message);
    toast.add({
      severity: "error",
      summary: "Error al registrar el Equipo",
      detail: "El equipo no se registro correctamente",
      life: 1200,
    });
  }
}
</script>

<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '30rem' }">
    <template #header>
      <div class="inline-flex items-center justify-center gap-2">
        <span class="font-bold whitespace-nowrap"><strong>Agregar Equipo</strong></span>
      </div>
    </template>
    <Form :resolver="resolver" @submit="onFormSubmit">
      <FormField
        v-slot="$field"
        name="Laptop"
        :initialValue="props.dataEquipo?.Descripcion === 'Laptop' ? true : false"
      >
        <div class="flex items-center gap-2">
          <Checkbox v-model="$field.value" binary inputId="Laptop" style="margin-right: 10px" />
          <label for="Laptop" class="eslaptop">Es Laptop</label>
        </div>
      </FormField>

      <FormField
        v-slot="$field"
        name="SucursalEquipo"
        :initialValue="props.dataEquipo?.Sucursal ?? 0"
        style="margin-top: 20px"
      >
        <small>Sucursal</small>
        <Select
          v-bind="$field"
          :options="sucursales"
          optionLabel="label"
          optionValue="value"
          fluid
          placeholder="---- Seleccionar ----"
        />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField
        v-slot="$field"
        name="TipoEquipo"
        :initialValue="String(props.dataEquipo?.Clave ?? '')"
        style="margin-top: 20px"
      >
        <small>Tipo de Equipo</small>
        <Select
          v-bind="$field"
          :options="tiposEquipo"
          optionLabel="label"
          optionValue="value"
          fluid
          placeholder="---- Seleccionar ----"
        />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField
        v-slot="$field"
        name="NombreEquipo"
        :initialValue="props.dataEquipo?.Nombre ?? ''"
        style="margin-top: 20px"
      >
        <small>Nombre del Equipo</small>
        <InputText v-bind="$field" fluid />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField
        v-slot="$field"
        name="CodigoEquipo"
        :initialValue="props.dataEquipo?.Codigo ?? ''"
        style="margin-top: 20px"
      >
        <small>Codigo del Equipo</small>
        <InputText v-bind="$field" fluid />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField
        v-slot="$field"
        name="AreaEquipo"
        :initialValue="String(props.dataEquipo?.Area ?? '')"
        style="margin-top: 20px"
      >
        <small>Area del Equipo</small>
        <Select
          v-bind="$field"
          :options="areasEquipo"
          optionLabel="label"
          optionValue="value"
          fluid
          placeholder="---- Seleccionar ----"
        />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <div class="btnsGroup">
        <Button type="submit" label="Guardar" severity="info" />
      </div>
    </Form>
  </Dialog>
</template>

<style scoped>
.btnsGroup {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
