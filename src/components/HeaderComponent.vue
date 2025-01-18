<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCurrentTetraStore } from "../stores/StoreT";
import { useRouter } from "vue-router";
import { getCurrentUserName } from "@/services/usersService";


const router = useRouter();

const state = useCurrentTetraStore();
//const currentView = computed(() => state.currentView);

const currentUser = computed(() => state.currentUser);

const gotoLogin = () => {
  state.changeToLogin();
  router.push("/login");
}

const goToLP = () => {
  state.changeToLP();
  router.push("/");
}

// Función para alternar la clase "active" en el sidebar
const toggleSidebar = () => {
  state.changeSideBar();


};

onMounted(async () => {
  try {

    state.changeCurrentUser(await getCurrentUserName())
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (e) {
    alert("Problema al obtener los usuarios");
  }
});
</script>


<template>

  <div class="page-container">
    <header class="navbar navbar-expand-lg bd-navbar sticky-top">
      <nav class="navbar bg fixed-top">
        <div class="container-fluid">
          <div id="toggle-button" @click="toggleSidebar()">
            <i class="bi bi-list"></i>
          </div>

          <h1 @click="goToLP" style="cursor: pointer;">TETR4DIG</h1>

          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <img src="/img/SolarUserCircleOutline.svg" width="50px">
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header px-4 pb-0">
              <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 list-group">

                <div class="border"></div>
                <li class="nav-item">
                  <a class="nav-link margin">{{ currentUser }}</a>
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
  </div>
</template>


<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 100%;

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
}
</style>
