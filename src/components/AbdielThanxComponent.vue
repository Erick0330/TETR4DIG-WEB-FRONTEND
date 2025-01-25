<script setup lang='ts'>
import { ref, onMounted } from 'vue';

interface BallStyle {
  top: string;
  left: string;
  transform: string;
  transition: string;
}

const ballStyle = ref<BallStyle>({
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  transition: 'top 5s ease-in-out, left 5s ease-in-out',
});

const animateBall = () => {
  const moveBall = () => {
    ballStyle.value = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      transition: 'top 5s ease-in-out, left 5s ease-in-out',
      transform: 'translate(-50%, -50%)',
    };
  };
  moveBall();
  setInterval(moveBall, 2000);
};

onMounted(() => {
  animateBall();
});
</script>


<template>
  <div class="background">
    <div class="ball" :style="ballStyle"></div>
  </div>
  <div class="container-thanx">
    <div class="text">
      <div class="inner-text">
        <h2 class="title">ABDIEL</h2>
        <p>En caso de que no me recuerde soy el del cerito cruz jump force jajajaja. Y nada,
          realmente cuando me hablaron de una página en agradeciminto para usted no lo pensé dos veces,
          verdaderamente me parecía una gran idea, y creo que es muy poco para lo que merece. Su
          presencia ha impactado mi vida y estoy bastante seguro de que sin usted hubiera sido muy diferente la
          asignatura. Cada manera de retarnos, de hacernos competir, de hacernos hasta un BOT DE TELEGRAMMMM!!!
          Cada pequeño detalle de decicación nos impulsó a crecer muchísimo más, hizo que simplemente no seamos
          programadores promedio que apenas saben centrar un div, sino que hasta nos enseñó a desplegar nuestras páginas
          y
          con mieles incluidas jajaj. Fuimos muy afortunados de dar clases con usted, y al menos yo me considero muy
          suertudo de haber sido su estudiante a lo largo de esta asignatura. Puedo decir que gracias a sus clases he
          podido
          conseguir trabajo en esto que me apasiona, que es la programacion web. Solo le quiero pedir que nunca cambie
          su
          manera de enseñar, de ser excelente, de pedirnos más y hacernos crecer. Tal vez pase el
          tiempo y no nos recuerde ya que somos tantos jajaj, y seguro tendrá muchos más estudiantes, pero si quiero que
          recuerde que al menos uno de sus estudiantes siempre lo recordará, como modelo a seguir y con mucho
          agradecimiento en mi
          corazón.
        </p>

        <div class="desp">
          <p> Con un corazón agradecido,</p>
        </div>
        <div class="desp2">
          <p>Abdiel</p>
        </div>
      </div>
      <div class="text-car">
        <h3>Proyectos logrados gracias a usted</h3>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/AbdielImg/Portfolio.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Portfolio</h5>
              <p>Un proyecto que me servirá para toda la vida</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/AbdielImg/Cero-cruz.png" class="ttt d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block ">
              <h5>TIC-TAC-TOE</h5>
              <p>Mi primer juego creado</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/AbdielImg/Tetradig.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>TETRADIG WEB</h5>
              <p>Un proyecto completo que me abre muchas puertas</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>


  </div>
</template>


<style scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #18141d;
  overflow: hidden;
}

.ball {
  position: absolute;
  width: 1200px;
  height: 1500px;
  background: radial-gradient(circle, rgba(165, 59, 165, 0.8), rgba(107, 1, 107, 0));
  border-radius: 50%;
  filter: blur(90px);
  z-index: 1;
}

.container-thanx {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100;
}

.text {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 100px 20px 20px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;

}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.inner-text {
  width: 83%;
  font-size: 17px;
  color: white;
  text-align: justify;
  padding: 20px;
}

.desp {
  margin-top: 20px;
  text-align: end;
  margin-right: 20px;
}

.desp2 {
  margin-top: 10px;
  text-align: end;
}

.desp2 p {
  font-weight: bold;
}

.container-thanx .text-car {
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-thanx .text-car h3 {
  font-weight: bold;
  font-size: 30px;
  color: #fff
}

.container-thanx .carousel {
  width: 90%;
  height: 80%;
  margin-bottom: 30px;
  justify-self: center;
}

.container-thanx .carousel .carousel-inner img {
  filter: blur(2px);
}

@media (max-width: 850px) {
  .text {
    margin-top: 20px;
    font-size: 14px;
    padding: 15px;
    width: 90%;
  }
  .container-thanx .text-car{
    margin-top: 23px;
    text-align: center;
  }

  .container-thanx .text-car h3 {
    font-weight: bold;
    font-size: 20px;
    color: #fff
  }

}


</style>
