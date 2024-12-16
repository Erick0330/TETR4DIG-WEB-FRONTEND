<script setup lang="ts"></script>

<template>
  <div class="big">
    <div class="cont-1"></div>
    <div class="cont-2"></div>
    <div class="cont-3"></div>
    <div class="cont-4"></div>
  </div>

  <footer>
        <div class="button">
          <a href="#"><i class="bi bi-chevron-double-up"></i></a>
        </div>
        <div class="contenedor">
          <div class="redes">
            <a
              class="mail"
              href="mailto:mafiasupport@gmail.com"
              target="_blank"
            >
              <i class="bi bi-envelope"></i>
            </a>

            <a href="https://www.etecsa.cu/" target="_blank">
              <!-- <img src="assets/img/logoheader.png" alt="página oficial de ETECSA" /> -->
            </a>
          </div>
        </div>

        <p>&copy; 2024, TETRADIG. Todos los derechos reservados</p>
      </footer>
</template>

<style scoped>
  .big{
    display: grid;
    width: 100%;
    height: 100%;
  }

  .cont-1{
   background-color: red;
   height: 500px;
  }

  .cont-2{
   background-color: blue;
   height: 500px;
  }
  .cont-3{
   background-color: green;
   height: 500px;
  }
  .cont-4{
   background-color: yellow;
   height: 500px;
   margin-bottom: 50px;
  }

  /* Footer  */
  footer {
    padding: 40px 0 20px 0;
    width: 100%;
    background-color: rgb(0, 0, 102);
    display: grid;
    justify-content: center;
    align-items: center;
    height: 150px;
    bottom: 0;
    position: absolute;
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

  .button p {
    color: antiquewhite;
  }
</style>
