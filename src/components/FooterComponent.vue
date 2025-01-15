<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {

  }
});

</script>

<template>


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

/* Estilos para el footer */


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

footer .contenedor .redes a {
    margin-left: 7%;
}

footer .contenedor .redes .mail {
    margin-left: 20%;
}

footer p {
    color: antiquewhite;
}

</style>
