<template>
  <div class="arrow-container">
    <div class="arrow"></div>
    <div class="arrow"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.arrow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px; /* Espaciado entre las flechas */
  height: 100px; /* Ajusta la altura del contenedor si es necesario */
}

.arrow {
  width: 20px; /* Ancho de la flecha */
  height: 20px; /* Altura de la flecha */
  border-left: 2px solid gray; /* Grosor y color de la línea izquierda */
  border-bottom: 2px solid gray; /* Grosor y color de la línea inferior */
  transform: rotate(-45deg); /* Rotación para formar la flecha */
  animation: moveDown 1.5s infinite; /* Animación continua */
}

.arrow:nth-child(2) {
  animation-delay: 0.2s; /* Retraso para sincronizar las dos flechas */
}

@keyframes moveDown {
  0% {
    transform: translateY(0) rotate(-45deg);
    border-color: gray; /* Color inicial */
  }
  50% {
    transform: translateY(10px) rotate(-45deg);
    border-color: white; /* Efecto de destello */
  }
  100% {
    transform: translateY(0) rotate(-45deg);
    border-color: gray; /* Color final */
  }
}
</style>
