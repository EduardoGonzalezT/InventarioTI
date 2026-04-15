<script setup>
import { Form, FormField } from "@primevue/forms";
import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { updateInfoEquipo } from "../../../services/equiposServices";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const props = defineProps({
  infoEquipo: {
    type: Object,
    required: true,
  },
  idEquipo: {
    type: Number,
    required: true,
  },
});

const schema = z.object({
  SO: z.string().min(1, "Seleccione un Sistema Operativo"),
  Mac: z.string().min(1, "Ingrese una Direccion MAC"),
  Ip: z.string().min(1, "Ingrese una Direccion IP"),
  Usuario: z.string().min(1, "Ingrese un Usuario"),
});
const resolver = zodResolver(schema);

async function onFormSubmit({ values }) {
  try {
    const data = await updateInfoEquipo(props.idEquipo, values);
    toast.add({
      severity: "success",
      summary: "Informacion Actualizada",
      detail: "La informacion se actualizo correctamente",
      life: 1200,
    });
    setTimeout(() => {
      location.reload();
    }, 1300);
  } catch (error) {
    console.log("Error al actualizar la informacion: ", error.response?.data || error.message);
    toast.add({
      severity: "error",
      summary: "Error al actualizar la informacion",
      detail: "La informacion no se actualizo correctamente",
      life: 1200,
    });
  }
}
</script>

<template>
  <Dialog v-model:visible="visible" modal :style="{ width: '30rem' }">
    <template #header>
      <div class="inline-flex items-center justify-center gap-2">
        <span class="font-bold whitespace-nowrap"><strong>Informacion General</strong></span>
      </div>
    </template>
    <Form :resolver="resolver" @submit="onFormSubmit">
      <FormField class="formField" v-slot="$field" name="SO" :initialValue="infoEquipo.SO ?? ''">
        <small>Sistema Operativo</small>
        <Select
          v-bind="$field"
          :options="['Windows', 'MacOS', 'Linux', 'Android', 'ChromeOS']"
          fluid
          placeholder="---- Seleccionar ----"
        />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField class="formField" v-slot="$field" name="Mac" :initialValue="infoEquipo.Mac ?? ''">
        <small>Direccion MAC</small>
        <InputText v-bind="$field" fluid />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField class="formField" v-slot="$field" name="Ip" :initialValue="infoEquipo.Ip ?? ''">
        <small>Direccion IP</small>
        <InputText v-bind="$field" fluid />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <FormField class="formField" v-slot="$field" name="Usuario" :initialValue="infoEquipo.Usuario ?? ''">
        <small>Usuario</small>
        <InputText v-bind="$field" fluid />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
          {{ $field.error?.message }}
        </Message>
      </FormField>

      <div class="formField btnInfo">
        <Button type="submit" label="Guardar Informacion" severity="info" />
      </div>
    </Form>
  </Dialog>
</template>

<style scoped>
.formField {
  margin-top: 20px;
}

.formField.btnInfo {
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
}
</style>
