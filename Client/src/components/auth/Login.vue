<script setup>
import { z } from "zod";
import { Form } from "@primevue/forms";
import { FormField } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useRouter } from "vue-router";
import { login } from "../../services/authServices";
import imgLogo from "../../assets/webp/mri_borde.webp";
import "../../styles/auth/login.css";

const router = useRouter();

async function onFormSubmit({ values }) {
  try {
    const data = await login(values);
    console.log("Respuesta API:", data);
    router.replace("/equipos/Computadoras");
  } catch (error) {
    console.log("Error al iniciar sesión:", error.response?.data || error.message);
    alert("Error al iniciar sesión");
  }
}

const schema = z.object({
  usuario: z.string().min(1, "Ingrese su Usuario"),
  contrasena: z.string().min(1, "Ingrese su Contraseña"),
});

const resolver = zodResolver(schema);
</script>

<template>
  <div class="LoginContainer">
    <img class="imgLogin" src="../../assets/webp/components.webp" alt="imgLogin" />
    <div class="LoginContent">
      <Card class="LoginCard">
        <template #header>
          <Avatar :image="imgLogo" class="mr-3 AvatarLogo" size="xlarge" shape="circle" />
        </template>
        <template #title>Bienvenido al Sistema de Gestion de Equipos de TI</template>
        <template #subtitle>Ingrese sus credenciales para iniciar sesión</template>
        <template #content>
          <Form :resolver="resolver" @submit="onFormSubmit" class="LoginForm">
            <FormField v-slot="$field" as="section" name="usuario" initialValue="">
              <InputText v-bind="$field" placeholder="Usuario" fluid />
              <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                {{ $field.error?.message }}
              </Message>
            </FormField>

            <FormField v-slot="$field" as="section" name="contrasena" initialValue="">
              <Password v-bind="$field" placeholder="Contraseña" :feedback="false" toggleMask fluid />
              <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">
                {{ $field.error?.message }}
              </Message>
            </FormField>
            <Button type="submit" severity="contrast" label="Iniciar Sesión" />
          </Form>
        </template>
      </Card>
    </div>
  </div>
</template>
