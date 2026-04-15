<script setup>
import { ref } from "vue";
import { Form } from "@primevue/forms";
import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useToast } from "primevue/usetoast";
import { updateComponentsEquipo } from "../../../services/equiposServices";
import FormComputadora from "../form/formComputadora.vue";

const toast = useToast();
const props = defineProps({
  idEquipo: {
    type: Number,
    required: true,
  },
  tipoEquipo: {
    type: String,
    required: true,
  },
  componentesEquipo: {
    type: Array,
    required: true,
  },
});

const schema = z.object({});
const resolver = zodResolver(schema);
const visible = ref(true);
const componentesData = ref([...props.componentesEquipo]);

async function onFormSubmit() {
  try {
    const JsonData = JSON.stringify({
      Componentes: componentesData.value,
    });
    await updateComponentsEquipo(props.idEquipo, JsonData);
    toast.add({
      severity: "success",
      summary: "Componentes Guardados",
      detail: "Los componentes se guardaron correctamente",
      life: 3000,
    });
    setTimeout(() => {
      location.reload();
    }, 1300);
  } catch (error) {
    console.error(error);
    toast.add({ severity: "error", summary: "Error", detail: "Error al guardar componentes", life: 3000 });
  }
}
</script>

<template>
  <Dialog v-model:visible="visible" modal :style="{ width: 'auto' }">
    <template #header>
      <div class="inline-flex items-center justify-center gap-2">
        <span class="font-bold whitespace-nowrap"><strong>Agregar Componentes</strong></span>
      </div>
    </template>
    <Form :resolver="resolver" @submit="onFormSubmit">
      <FormComputadora
        v-if="tipoEquipo === 'Computadora'"
        :initialComponents="props.componentesEquipo"
        @update:components="componentesData = $event"
      />
      <div v-else>Otro</div>
      <div class="btnsGroup">
        <Button type="submit" label="Guardar Componentes" severity="info" />
      </div>
    </Form>
  </Dialog>
</template>
