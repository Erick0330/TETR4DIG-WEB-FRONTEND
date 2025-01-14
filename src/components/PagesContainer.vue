<script setup lang="ts">
import { computed, ref } from "vue";
import { useCurrentTetraStore } from "../stores/StoreT";
import { useRouter } from "vue-router";

const router = useRouter();

// Controla el estado del sidebar (abierto/cerrado)
const isSidebarActive = ref(false);
const state = useCurrentTetraStore();
const currentView = computed(() => state.currentView);
const goToReports = () => {
  state.changeToReports();
  router.push("/reports");
};
const goToQuestions = () =>{
  state.changeToQuestions();
  router.push("/questions");
}
const goToSettings = () => {
  state.changeToSettings();
  router.push("/settings")
}

const gotoLogin = () =>{
  state.changeToLogin();
  router.push("/login");
}

const goToLP = () =>{
  state.changeToLP();
  router.push("/");
}

// Función para alternar la clase "active" en el sidebar
const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value;
};
</script>

<template>
  <div class="page-container">


    <div
      class="main-content"
      :class="{ 'not-lp': currentView !== 'LandingPage' }"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.main-content {
  width: 100%;
}

.main-content.not-lp {
  position: absolute;
  display: flex;
  justify-content: center;
}

/* Header  */

header h1 {
  color: antiquewhite;
  font-weight: bold;
}

header .navbar {
  background-color: rgb(0, 0, 102);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif,
    "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva,
    Verdana, sans-serif;
}

header .navbar .container-fluid {
  background-color: rgb(0, 0, 102);
  margin: 0;
}

header .navbar .container-fluid .offcanvas-body li a {
  color: black;
  font-size: 150%;
  font-weight: bold;
}

header .navbar .container-fluid .offcanvas-body li a:hover {
  color: rgb(237, 237, 248);
}

header .navbar .container-fluid .offcanvas-body li .margin {
  margin-right: 50px;
}

header .navbar .container-fluid .offcanvas-body .border {
  background-color: rgb(0, 0, 102);
  border-color: rgb(0, 0, 102);
  width: 90%;
  height: 3px;
}

header .navbar .container-fluid #toggle-button {
  display: none;
}

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
  z-index: 100;
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
}


.sidebar .list-group-item.reports{
  font-size: 30px;
  text-shadow: 0 0 10px #afb7e0;
  font-weight: bolder;
}

.sidebar .list-group-item.questions{
  font-size: 30px;
  text-shadow: 0 0 10px #afb7e0;
  font-weight: bolder;
}

.sidebar .list-group-item.settings{
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

/* Estilos para pantallas pequeñas del Header*/
@media (max-width: 990px) {
  header .navbar .container-fluid #toggle-button {
    display: block;
  }

  header .navbar .container-fluid #toggle-button i {
    color: antiquewhite;
    background-color: rgb(0, 0, 102);
    font-size: 20px;
  }

  header .navbar .container-fluid button i {
    color: antiquewhite;
  }

  header .navbar {
    height: 90px;
  }
}

@media (min-width: 990px) {
  header .navbar .container-fluid .offcanvas-body li a {
    color: antiquewhite;
    font-size: 150%;
  }

  header .navbar .container-fluid .offcanvas-body .border {
    display: none;
  }
}

@media (max-width: 430px) {
  header .navbar {
    height: 80px;
  }

  .sidebar {
    margin-top: 2.5%;
  }

  .sidebar.active {
    margin-top: 2.5%;
  }
}
</style>
