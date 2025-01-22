<script setup lang="ts">

import { useCurrentTetraStore } from "../stores/StoreT";
import { useRouter } from "vue-router";
import SideBarComponent from "./SideBarComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import { onMounted, ref } from "vue";
import type { UserTest } from "@/types/userTest";
import { getUserTests } from "@/services/userTestsService";


const state = useCurrentTetraStore();
const router = useRouter();

const tests = ref<UserTest[]>([]);

const goToReports = () => {
  state.changeToReports();
  router.push("/reports");
};

onMounted(async () => {
  state.changeToProfile();
  try {
    tests.value = await getUserTests(state.idUser);
    tests.value.sort((a, b) => a.id - b.id); // Ordenar preguntas por ID de menor a mayor
  } catch (error) {
    console.error("Error al cargar los test:", error);
  }
});

</script>
<template>
  <SideBarComponent />
  <HeaderComponent />
  <div class="main">
    <section class="cambiarUsuario">
      <div class="container">
        <h2>Nombre de Usuario</h2>

        <input placeholder="Nombre de Usuario" required type="text" />

        <p>Si deseas cambiar tu nombre de usuario, ingresa el nuevo nombre en el campo anterior y haz clic en "Cambiar
          Usuario".</p>
        <button type="button" class="btn btn-primary">Cambiar Usuario</button>
      </div>

      <div class="container mt-5">
        <h2>Contraseña</h2>

        <input placeholder="Contraseña" required type="text" />

        <p>Si deseas cambiar tu contraseña, ingresa la nueva contraseña en el campo anterior y haz clic en "Cambiar
          Contraseña", y se le enviará un email para guardar los cambios.</p>
        <button type="button" class="btn btn-primary">Cambiar Contraseña</button>
      </div>

    </section>
  </div>
  <div class="main">
    <section class="historialTest">
      <div class="container">
        <h2>Historia de Tests</h2>
        <table class="table table-bordered">
          <thead>
            <tr class="encab table-primary">
              <th>No.</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr class="redic" @click="goToReports()" v-for="(test) in tests" :key="test.id">
              <td>{{ test.id }}</td>
              <td >
                {{ test.testDate }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>

  <footer>
    <div class="button">
      <a href="#"><i class="bi bi-chevron-double-up"></i></a>
    </div>
    <div class="contenedor">
      <div class="redes">
        <a class="mail" href="mailto:mafiasupport@gmail.com" target="_blank">
          <i class="bi bi-envelope"></i>
        </a>

        <a href="https://www.etecsa.cu/" target="_blank">
          <img src="/logoheader.png" alt="página oficial de ETECSA" />
        </a>
      </div>
    </div>

    <p>&copy; 2024, TETRADIG. Todos los derechos reservados</p>
  </footer>
</template>

<style scoped>
.table {
  text-align: center;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 100px;
  margin-bottom: 100px;
  min-height: 23vh;
}

.redic {
  cursor: pointer;
}



.cambiarUsuario,
.historialTest {
  border: 2px solid rgb(116, 116, 117);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 40%;
}

input {
  width: 60%;
}

p {
  color: rgba(38, 38, 38, 0.663);
  font-size: 15px;
  margin: 20px;
  margin-left: 0;
}

h2 {
  margin-bottom: 20px;
}

/* Footer  */

footer {
  padding: 0 0 0 0;
  width: 100%;
  background-color: rgb(0, 0, 102);
  display: grid;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  z-index: 10;
  /* Asegura que esté encima del footer */
  position: relative;
  /* Ya configurado correctamente */
}

footer .contenedor {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-self: center;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
}

footer .button {
  font-size: 30px;
  justify-self: center;
  margin-top: -20px;
  width: 13%;
  background-color: #39c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

footer .button i {
  color: antiquewhite;
}

footer .contenedor .redes {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .contenedor .redes img {
  width: 100%;
}

footer .contenedor .redes i {
  color: antiquewhite;
  font-size: 30px;
}

footer .contenedor .redes {
  a {
    margin-left: 7%;
  }

  .mail {
    margin-left: 20%;
  }
}

footer p {
  color: antiquewhite;
}

@media screen and (max-width: 990px) {

  .cambiarUsuario,
  .historialTest {
    width: 80%;
  }

  input{
    font-size: 10px;
  }
}
</style>
