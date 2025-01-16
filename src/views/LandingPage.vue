<script setup lang="ts">
import ArrowComponent from "@/components/ArrowComponent.vue";
import router from "@/router";
const goToLogin = () => {
  router.push("/login");
};
</script>

<template>
  <!-- Welcome------------------------------------------------------------------------------------------------------------------------- -->
  <section class="welcome">
    <div class="overlay"></div>
    <div class="background"></div>
    <div class="hello">
      <h2 class="Bienv">BIENVENIDO A</h2>
      <h1>TETRADIG</h1>
      <h2>Consultoria en Gestión para la Transformación Digital</h2>

      <a href="#about" class="know">
        <p>CONÓCENOS</p>
      </a>
      <a href="#start">
        <ArrowComponent />
      </a>
    </div>
  </section>

  <!-- Seccion about--------------------------------------------------------------------------------------------------------------- -->

  <section class="about" id="about">
    <div class="about-container">
      <div class="texto">
        <h2>ACERCA DE LA APP</h2>
        <p>
          Esta aplicación fue creada para automátizar el proceso de evaluación
          de madurez de la transformación digital basada en el modelo TETR4DIG.
          Al finalizar el cuestionario de la aplicacion se generan reportes
          visuales en forma de gráficas que muestran el análisis de las
          respuestas. Puedes usar esta herramienta para realizar encuestas y
          obtener feedback de tus usuarios. Es importante aclarar que esta web
          es una versión resumida del cuestionario completo, contando solo con
          21 preguntas. Si desea el proceso de evaluación completo y más
          potente, puede realizar una reservación para un encuentro presencial
          con expertos de ETECSA, así completará el cuestionario en la
          aplicación de escritorio; tenga en cuenta que este proceso presencial
          es de pago.
        </p>
      </div>

      <div class="text-car">
        <h3>Modelo de escritorio</h3>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active arrow"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class="arrow"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class="arrow"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/img/Captura de pantalla (21).png"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/img/Captura de pantalla (28).png"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/img/Captura de pantalla (29).png"
              class="d-block"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="form">
        <input
          type="email"
          placeholder="Ingresa tu email"
          class="email-input"
        />
        <button type="submit" class="email-submit">Enviar</button>
      </div>
    </div>
  </section>

  <!-- Seccion como usar  -->
  <section class="como-usar" id="como-usar">
    <div class="contenedor">
      <h2>¿CÓMO USAR?</h2>
      <div class="evaluacion">
        <h3>CRITERIOS</h3>
        <p>
          Los requisitos se evalúan mediante 5 criterios, entre 0 y 4 puntos,
          según su nivel de implementación.
        </p>
      </div>
      <div class="niveles-implementacion">
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">0-No existente</div>
              Aún no se han adoptado actividades o iniciativas digitales
              disruptivas. Predominan enfoques o tecnologías analógicas,
              tradicionales u obsoletas (legacy).
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">1-Iniciando</div>
              <p>
                Se han iniciado actividades o iniciativas digitales que
                responden a necesidades o ideas aisladas. Aún no forman parte de
                la estrategia de la organización o de un plan de digitalización.
                La organización ha decidido avanzar hacia la transformación
                digital y está dando losarrimeros pasos en esta dirección.
              </p>
            </div>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">2-Habilitando</div>
              <p>
                Con actividades o iniciativas digitales incorporadas a la
                estrategia de la organización, o en etapa de planificación, o de
                inversiones; y que están siendo integradas a modo de pruebas,
                proyectos piloto o de experimentación y ajuste, para apoyar las
                capacidades en áreas de la organización.
              </p>
            </div>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">3-Operacional</div>
              <p>
                Actividad o iniciativa digital en etapa de puesta en marcha o
                generalización (se implementa en las operaciones diarias).
              </p>
            </div>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">3-Operacional</div>
              <p>
                Actividad o iniciativa digital en etapa de puesta en marcha o
                generalización (se implementa en las operaciones diarias).
              </p>
            </div>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">4-Optimizado</div>
              <p>
                Actividad o iniciativa digital en etapa de optimización y mejora
                continua. Se aplica la I+D+i para incrementar la eficiencia y
                eficacia de la gestión.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--resultados  -->
    <div class="resultados" id="resultados">
      <div class="contenedor">
        <h3>Resultados</h3>
        <p>
          Los resultados de este test se encuentran entre 4 posibles niveles.
        </p>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Porcentaje</th>
              <th scope="col">Explicación</th>
            </tr>
          </thead>

          <tbody>
            <tr class="table-primary">
              <th><div class="circle-1">1</div></th>
              <th>0 a 25%</th>
              <td>
                <strong>BÁSICO: </strong>Iniciativas digitales independientes y
                dispersas
              </td>
            </tr>
            <tr class="table-secondary">
              <th><div class="circle-2">2</div></th>
              <th>25% a 50%</th>
              <td>
                <strong>INICIAL:</strong> Iniciada la implantación de proyectos
                digitales en algunas áreas de la entidad. Baja integración
                estratégica
              </td>
            </tr>
            <tr class="table-three">
              <th><div class="circle-3">3</div></th>
              <th>50% a 75%</th>
              <td>
                <strong>ESTRATÉGICO:</strong> Implantando hoja de ruta de
                transformación digital de forma holística e integrada, con
                orientación centrada en el cliente.
              </td>
            </tr>
            <tr class="table-four">
              <th><div class="circle-4">4</div></th>
              <th>75 a 100%</th>
              <td>
                <strong
                  >INNOVADOR DISRUPTIVO (Consolidando): Desarrollando su negocio
                  digital. Organizaciones</strong
                >
                ágiles, innovadoras, flexibles, conectadas, colaborativas,
                abiertas, uso de datos relevantes. Se adaptan de forma continua
                a los cambios. Al nivel del estado del arte Los requisitos se
                evalúan mediante 5 criterios, entre 0 y 4 puntos, según su nivel
                de implementación.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div id="start" @click="goToLogin" class="start-container">
      <a class="start">
        <p>Empezar</p>
      </a>
    </div>
  </section>

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

    <div class="Ftext">
      <div class="container">
        <p>&copy; 2025, TETRADIG. Todos los derechos reservados</p>
      </div>
    </div>

  </footer>
</template>

<style scoped>
.start-container {
  display: flex;
  justify-content: center;
}
.start {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-radius: 2px;
  background-color: #1f7ace;
  width: 60%;
  max-width: 300px; /* Limita el ancho máximo */
  padding-top: 14px;
  text-decoration: none;
  transition: transform 0.3s, background-color 0.3s;
  margin-bottom: 100px;
  cursor: pointer;
}

.start:hover {
  transform: scale(1.05);
  background-color: rgb(53, 136, 219);
}

.start p {
  font-size: 1.5rem;
  font-weight: bold;
  color: antiquewhite;
  transition: color 0.3s, font-size 0.3s;
  text-shadow: 0 0 5px #b1b2b4;
}

.start:hover p {
  font-size: 1.7rem;
}
/* Background------------------------------------------------------------------------------------------------------------------------- */
.background {
  background: url(/img/lpBack.webp) center/cover no-repeat;
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100vh;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(34, 34, 34, 0.6);
  z-index: -9;
}

/* Welcome Section -------------------------------------------------------------------------------------------------------------------- */
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center; /* Asegura centrado del texto */
}

.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px; /* Espaciado entre los elementos */
}

.Bienv {
  font-size: 2.5vw;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

h1 {
  font-size: 7vw; /* Escala según el ancho de la pantalla */
  color: aliceblue;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

h2 {
  font-size: 1.5vw; /* Escala según el ancho de la pantalla */
  color: aliceblue;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.know {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-radius: 2px;
  background-color: #1f7ace;
  width: 60%;
  max-width: 300px; /* Limita el ancho máximo */
  padding-top: 14px;
  text-decoration: none;
  transition: transform 0.3s, background-color 0.3s;
}

.know:hover {
  transform: scale(1.05);
  background-color: rgb(53, 136, 219);
}

.know p {
  font-size: 1.5rem;
  font-weight: bold;
  color: antiquewhite;
  transition: color 0.3s, font-size 0.3s;
  text-shadow: 0 0 5px #b1b2b4;
}

.know:hover p {
  font-size: 1.7rem;
}

/* Media Queries ---------------------------------------------------------------------------------------------------------------------- */
@media (max-width: 935px) {
  .hello {
    gap: 15px;
  }

  h1 {
    font-size: 10vw; /* Ajusta el título principal en tablets */
  }

  .Bienv,
  h2 {
    font-size: 4vw; /* Escala títulos secundarios en tablets */
  }

  .know {
    width: 80%; /* Amplía el botón en pantallas pequeñas */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 12vw; /* Ajusta el título principal en móviles */
  }

  .Bienv,
  h2 {
    font-size: 5vw; /* Ajusta los títulos secundarios en móviles */
  }

  .know {
    width: 90%; /* Botón casi de ancho completo */
  }

  .know p {
    font-size: 1rem; /* Reduce el tamaño del texto en el botón */
  }
}

/* Seccion about ----------------------------------------------------------------------------------------------------------------------------*/
.about {
  padding: 90px 0 20px 0;
  width: 100%;
  left: 0;
}

.texto {
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-self: center;
  align-items: center;
  justify-content: center;
}

.about h2 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  color: black;
}

.about p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 25px;
  text-align: justify;
}

.text-car {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-car h3 {
  font-weight: bold;
  font-size: 30px;
}

.carousel {
  width: 90%;
  height: 40%;
  justify-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #e3f2fd, #bbdefb); /* Degradado azul suave */
  border: 3px solid #85c6fc;
}

.carousel .carousel-inner,
.carousel .carousel-inner .carousel-item {
  width: 100%;
  height: 100%;
  padding: 2%;
}

.carousel img {
  height: 100%;
  width: 90%;
  justify-self: center;
  border: 2px solid rgb(14, 1, 102);
  margin-bottom: 2%;
}

.carousel-control-prev,
.carousel-control-next {
  width: 10% !important;
  font-weight: bold;
}


.carousel-indicators {
  margin-bottom: 0 !important;
}


.form {
  display: flex;
  justify-content: center;
  justify-self: center;
  margin-top: 30px;
  width: 90%;
  padding: 0;
  gap: 10px;
}

.email-input {
  flex: 1;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #1f7ace;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.email-input:focus {
  border-color: #357fdb;
  box-shadow: 0 0 10px rgba(53, 127, 219, 0.5);
}

.email-submit {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #1f7ace;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.email-submit:hover {
  background-color: #357fdb;
  transform: scale(1.05);
}
/* Estilos para pantallas grandes de la seccion about*/

@media (max-width: 525px) {
  .carousel {
    height: 50%;
  }

  .form {
    height: 60%;
  }

  .form input {
    margin-left: 5px;
    height: 35px;
  }
}

@media (min-width: 990px) {
  .carousel {
    width: 70%;
  }

  .form {
    width: 50%;
  }

  .form input {
    margin-left: 5px;
    height: 37px;
  }

  .texto {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-self: center;
  }

  .carousel-indicators {
    margin-bottom: 0.5rem !important;
  }
}

/* Seccion Como usar----------------------------------------------------------------------------------------------------------------------*/
.como-usar {
  left: 0;
  padding: 100px 0 20px 0;
  width: 100%;
  background-color: #ebf0f7;
  z-index: 1;
  padding-top: 20px;
}

.como-usar .contenedor {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-self: center;
  padding: 50px;
}

.como-usar .contenedor h2 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  color: #000;
}

.evaluacion {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.como-usar h3 {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 35px;
  text-align: justify;
}

.como-usar p {
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.niveles-implementacion p {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.niveles-implementacion ul li:hover {
  background-color: #c6def1; /* Azul claro para el fondo */
  color: #0d47a1; /* Azul oscuro para el texto */
  transition: background-color 0.3s ease, color 0.3s ease; /* Suaviza el cambio */
  cursor: pointer; /* Indica interactividad */
}

@media (max-width: 430px) {
  .como-usar {
    margin-top: 0;
    padding: 30px;
  }
}

@media (min-width: 820px) {
  .como-usar {
    margin-top: 70px;
  }
}

@media (min-width: 990px) {
  .como-usar .contenedor {
    margin-left: 70px;
    width: 50%;
    justify-self: center;
  }
  .como-usar {
    margin-top: 330px;
  }
}

@media (min-width: 1024px) {
  .como-usar {
    margin-top: 260px;
    padding: 0;
  }
}

/* Seccion resultados  ---------------------------------------------------------------------------------------------------------------------*/

.resultados {
  padding: 90px 0 20px 0;
  width: 100%;
  margin-bottom: 100px;
}

.resultados .contenedor {
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-self: center;
  align-items: center;
  margin-bottom: 50px;
}

.resultados h3 {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 35px;
  text-align: justify;
}

.resultados p {
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.table-primary {
  --bs-table-bg: #fff !important;
  border-color: black !important;
  /* font-size: 20px; */
}

.table-secondary {
  --bs-table-bg: #fff !important;
  border-color: black !important;
}

.table-three {
  --bs-table-bg: #fff !important;
  border-color: black !important;
}

.table-four {
  --bs-table-bg: #fff !important;
  border-color: black !important;
}

.table .circle-1,
.circle-2,
.circle-3,
.circle-4 {
  width: 100%;
  border-radius: 50%;
  justify-content: center;
  display: flex;
  border: 1px solid black;
}

.table {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.table .circle-1 {
  background-color: #928e9d !important;
}

.table .circle-2 {
  background-color: #46e15d !important;
}

.table .circle-3 {
  background-color: #e8ee27 !important;
}

.table .circle-4 {
  background-color: #ef1515 !important;
}

.table strong {
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.table-bordered {
  --bs-border-opacity: 1;
  border-color: black !important;
}

.table thead {
  font-size: 22px;
  --bs-table-bg: #a5d2f7 !important;
}

.table thead th {
  color: black;
}

.table th {
  font-size: 20px;
}

@media (min-width: 990px) {
  .resultados .contenedor {
    margin-left: 70px;
    width: 50%;
    justify-self: center;
  }
}

footer {
  padding: 0 0 0 0;
  width: 100%;
  background-color: rgb(0, 0, 102);
  display: grid;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  z-index: 150;
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

footer .Ftext {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
