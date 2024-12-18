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
    <header
      v-if="currentView !== 'LandingPage'"
      class="navbar navbar-expand-lg bd-navbar sticky-top"
    >
      <nav class="navbar bg fixed-top">
        <div class="container-fluid">
          <div id="toggle-button" @click="toggleSidebar">
            <i class="bi bi-list"></i>
          </div>

          <h1 @click="goToLP" style="cursor: pointer;">TETR4DIG</h1>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <img src="/img/SolarUserCircleOutline.svg" width="50px">
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header px-4 pb-0">
              <button
                type="button"
                class="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div class="offcanvas-body">
              <ul
                class="navbar-nav justify-content-end flex-grow-1 pe-3 list-group"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active margin"
                    aria-current="page"

                    >Admin</a
                  >
                </li>

                <div class="border"></div>
                <li class="nav-item">
                  <a class="nav-link margin" >luis@gmail.com</a>
                </li>

                <div class="border"></div>
                <li class="nav-item">
                  <a class="nav-link margin" style="cursor: pointer;" @click="gotoLogin">Editar usuario</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- SideBar -->
    <div
      class="sidebar"
      v-if="currentView !== 'LandingPage'"
      :class="{ active: isSidebarActive }"
      id="sidebar"
    >
      <ul class="list-group list-group-flush">
        <li class="list-group-item" :class="{'questions': currentView === 'Questions'}">
          <a @click="goToQuestions">Cuestionario</a>
        </li>

        <li class="list-group-item" :class="{'reports': currentView === 'Reports'}">
          <a @click="goToReports">Reportes</a>
        </li>

        <li class="list-group-item" :class="{'settings': currentView === 'Settings'}">
          <a @click="goToSettings">Configuración</a>
        </li>
      </ul>
    </div>

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
