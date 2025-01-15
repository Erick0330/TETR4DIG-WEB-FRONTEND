<script setup lang="ts">
import { onMounted } from 'vue';
import HeaderComponent from './HeaderComponent.vue';
import SideBarComponent from './SideBarComponent.vue';
import { useCurrentTetraStore } from '@/stores/StoreT';

const state = useCurrentTetraStore();

onMounted(() =>{
  state.changeToQuestions();
})
</script>

<template>


  <HeaderComponent />
  <SideBarComponent />
  <!--Tabla de Consultoria-->

  <div class="container ">
    <div class="texto">
      <h2 class="consultoria">Tabla de Consultoria</h2>
    </div>
    <div class="col">

      <table class="table table-bordered">
        <ul class="lista_">
          <li>PP - Diseño Organizacional</li>
          <li>DD - Liderazgo Digital</li>
        </ul>
        <thead>
          <tr class="encab table-primary">
            <th>No.</th>
            <th>Requisitos, iniciativas y
              buenas práticas de traformación digital(DO/LD)</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              La entidad diagnostica la situación actual y la madurez digital; identifica fortalezas, debilidades,
              oportunidades, amenazas y riesgos de la transformación digital.</td>
            <td>
              <select class="form-select" aria-label="Seleccionar valor">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              La alta dirección asegura que el propósito organizacional es dinámico y sensible al contexto cambiante y
              digital, con una visión y misión documentadas, y que está disponible para todas las partes interesadas.
            </td>
            <td>
              <select class="form-select" aria-label="Seleccionar valor">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              La alta dirección asegura que se identifiquen e involucren las partes interesadas en el contexto digital
              (p. ej. clientes, personal, proveedores, accionistas e inversionistas, sindicato, reguladores,
              administración pública, gobierno, etc.) y el ambiente natural.</td>
            <td>
              <select class="form-select" aria-label="Seleccionar valor">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              La alta dirección redefine digitalmente el modelo y objetivos de generación de valor, y considera el
              contexto, expectativas de partes interesadas, marco regulatorio, cambio tecnológico, ambiente natural
              presente y futuro, asuntos socio-económicos, KPI, etc.</td>
            <td>
              <select class="form-select" aria-label="Seleccionar valor">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              La alta dirección establece resultados estratégicos digitales claros y compatibles con la dirección
              estratégica de la organización, considerando contextos interno y externo, políticas de gobernanza
              digital y las capacidades actuales y futuras de TIC y datos.</td>
            <td>
              <select class="form-select" aria-label="Seleccionar valor">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              La entidad define como un objetivo de digitalización la mejora de la experiencia del cliente, por las
              vías de personalizar y adaptar productos/servicios, brindar atención a medida y omnicanal, así como de
              los puntos de contacto con partes interesadas. </td>
            <td>
              <select class="form-select" aria-label="Seleccionar valor">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              La entidad define como un objetivo de digitalización una mayor flexibilidad y eficiencia en operaciones,
              que posibiliten la personalización, la creación de productos/servicios digitales y/o la adaptación a las
              capacidades digitales que demanden los clientes.</td>
            <td>
              <select class="form-select" aria-label="Seleccionar valor">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="text-end">
              <button type="button" class="btn btn-primary">Enviar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
          <img src="/logoheader.png" alt="página oficial de ETECSA" />
        </a>
      </div>
    </div>

    <p>&copy; 2024, TETRADIG. Todos los derechos reservados</p>
  </footer>

</template>

<style scoped>
/*Tabla de consultoria*/

.container {
  margin-bottom: 100px;
  width: 100%;
  height: 100%;
}

.consultoria {
  text-align: center;
  font-size: 40px;
  margin-top: 70px;
}

.table {
  width: 70%;
  padding: 70px;
  text-align: center;
  margin: 150px auto;
  margin-top: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(237, 237, 248);
  background-color: rgb(0, 0, 102);
  border-collapse: collapse;
}

.encab {
  background-color: rgb(0, 0, 102);
}

th,
td {
  max-width: 400px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

form-select {
  text-align: center;
}

.lista_ {
  margin-top: 60px;
  text-align: center;
  font-weight: 700;
  color: rgb(0, 0, 102);
  list-style-type: none;
  font-size: 17px;
}

.row {
  width: 100%;
}

/* Estilos para pantallas pequeñas de la Tabla de Consultoria*/
@media screen and (max-width: 650px) {
  .container {
    margin-bottom: 190px;
  }

  .table {
    margin: 60px auto;
    width: 10%;
  }

  .lista_ {
    padding-left: 10px;
    margin: 40px;
    margin-top: 60px;
  }

  @media screen and (max-width: 650px) {}

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
  z-index: 10; /* Asegura que esté encima del footer */
  position: relative; /* Ya configurado correctamente */
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
</style>
