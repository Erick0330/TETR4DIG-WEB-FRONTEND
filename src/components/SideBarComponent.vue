<script setup lang="ts">
import { computed } from "vue";
import { useCurrentTetraStore } from "../stores/StoreT";
import { useRouter } from "vue-router";

const router = useRouter();



// Controla el estado del sidebar (abierto/cerrado)
const state = useCurrentTetraStore();

const isAdmin = computed(() => state.isAdmin)

const isSidebarActive = computed(() => state.getIsSideBarActive())

const currentView = computed(() => state.currentView);
const goToReports = () => {
  state.changeToReports();
  router.push("/reports");
};
const goToQuestions = () => {
  state.changeToQuestions();
  router.push("/questions");
}
const goToSettings = () => {
  state.changeToSettings();
  router.push("/settings")
}

const goToProfile = () => {
  state.changeToProfile();
  router.push("/profile")
}


</script>

<template>
  <!-- SideBar -->

  <div class="sidebar" :class="{ active: isSidebarActive }" id="sidebar">
    <ul class="list-group list-group-flush">
        <li class="list-group-item" :class="{ 'questions': currentView === 'Questions' }">
          <a @click="goToQuestions">Cuestionario</a>
        </li>

      <li class="list-group-item" :class="{ 'reports': currentView === 'Reports' }">
        <a @click="goToReports">Reportes</a>
      </li>

      <li v-if="isAdmin === true" class="list-group-item" :class="{ 'settings': currentView === 'Settings' }">
        <a @click="goToSettings">Configuración</a>
      </li>

      <li v-else class="list-group-item" :class="{ 'settings': currentView === 'Profile' }">
        <a @click="goToProfile">Perfil</a>
      </li>
    </ul>
  </div>



</template>


<style scoped>
/* Sidebar (Fixed on the left) */
.sidebar {
  width: 250px;
  transition: transform 0.3s ease;
  position: fixed;
  top: 70px;
  /* Para que esté debajo del header */
  left: 0;
  height: 100%;
  border-right: 2px solid #020e4a;
  background-color: rgb(237, 237, 248);
  z-index: 1;
}

.sidebar ul {
  list-style-type: none;
  padding: 1px;
}

.sidebar ul li {
  margin: 10px 0;
  background-color: rgb(237, 237, 248);
  border-color: rgb(0, 0, 102);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif,
    "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva,
    Verdana, sans-serif;
}

.sidebar .list-group-item {
  cursor: pointer;
  font-size: 20px;
  transition: font-size 0.3s ease, text-shadow 0.3s ease, color 0.3s ease;
}

.sidebar .list-group-item.reports,
.sidebar .list-group-item.questions,
.sidebar .list-group-item.settings {
  font-size: 30px;
  text-shadow: 0 0 10px #afb7e0;
  font-weight: bolder;
}


.sidebar ul li a {
  color: black;
  text-decoration: none;
}

.sidebar.hidden {
  transform: translateX(-100%);
}

.sidebar.active {
  transform: translateX(0);
  /* Mostrar el sidebar */
}

/* Sidebar for smaller screens */
@media (max-width: 990px) {
  .sidebar {
    transform: translateX(-100%);
    /* Ocultar en pantallas pequeñas */
    margin-top: 2%;
  }

  .sidebar.active {
    transform: translateX(0);
    /* Mostrar cuando esté activo */
    margin-top: 2%;
  }
}
</style>
