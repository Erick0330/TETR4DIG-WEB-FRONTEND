<script setup lang="ts">
import { ref } from 'vue';

// Controla el estado del sidebar (abierto/cerrado)
const isSidebarActive = ref(false);

// Función para alternar la clase "active" en el sidebar
const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value;
};
</script>

<template>
   <div class="page-container">
    <header class="navbar navbar-expand-lg bd-navbar sticky-top">
      <nav class="navbar bg fixed-top">
        <div class="container-fluid">
          <div id="toggle-button" @click="toggleSidebar">
            <i class="bi bi-list"></i>
          </div>

          <h1>TETR4DIG</h1>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-three-dots"></i>
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
                  <a class="nav-link active margin" aria-current="page" href="#about">Acerca de la app</a>
                </li>

                <div class="border"></div>
                <li class="nav-item">
                  <a class="nav-link margin" href="#como-usar">¿Cómo usar?</a>
                </li>

                <div class="border"></div>
                <li class="nav-item">
                  <a class="nav-link margin" href="#resultados">Resultados</a>
                </li>

                <div class="border"></div>
                <li class="nav-item">
                  <a class="nav-link" href="/assets/login/login.html">Mi perfil</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- SideBar -->
    <div class="sidebar" :class="{ active: isSidebarActive }" id="sidebar">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <a href="/assets/question/question.html">Cuestionario</a>
        </li>

        <li class="list-group-item">
          <a href="/assets/report/report.html">Reportes</a>
        </li>

        <li class="list-group-item">
          <a href="/assets/setting/settings.html">Configuración</a>
        </li>

        <li class="list-group-item">A fourth item</li>

        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>

    <div class="main-content">
      <router-view></router-view>
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
            <!-- <img src="assets/img/logoheader.png" alt="página oficial de ETECSA" /> -->
          </a>
        </div>
      </div>

      <p>&copy; 2024, TETRADIG. Todos los derechos reservados</p>
    </footer>
  </div>

</template>


<style scoped>

.page-container {
  display: flex;
  flex-direction: column;

  width: 100%;
}

.main-content{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
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
  top: 70px; /* Para que esté debajo del header */
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.sidebar ul li a {
  color: black;
  text-decoration: none;
}

.sidebar.hidden {
  transform: translateX(-100%);
}

.sidebar.active {
  transform: translateX(0); /* Mostrar el sidebar */
}

/* Sidebar for smaller screens */
@media (max-width: 990px) {
  .sidebar {
    transform: translateX(-100%); /* Ocultar en pantallas pequeñas */
    margin-top: 2%;
  }

  .sidebar.active {
    transform: translateX(0); /* Mostrar cuando esté activo */
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


@media (max-width:430px) {
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

/* Footer  */
footer {
    padding: 40px 0 20px 0;
    width: 100%;
    background-color: rgb(0, 0, 102);
    display: grid;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-bottom: 0;
    margin-top: 70%;
    z-index: 110;
}

footer .contenedor {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-self: center;
    margin-bottom: 30px;
    margin-left: 30px;
    justify-content: center;
    align-items: center;
}

footer .button {
    font-size: 30px;
    justify-self: center;
    margin-top: -85px;
    width: 13%;
    background-color: #39c;
    border-radius: 50%;
    display: flex;
    justify-content: center;
}

footer .button i {
    color: antiquewhite;
    ;
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


</style>
