<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginUser } from "@/services/authService"; // Importamos el servicio de autenticación

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = async () => {
  try {
    await loginUser(email.value, password.value); // Llamada al servicio de login
    router.push("/questions"); // Redirige a la página de preguntas si el login es exitoso
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    error.value = "Credenciales incorrectas. Por favor, inténtalo nuevamente.";
  }
};
</script>


<template>
  <div id="difuminado">
    <div id="form-ui">
      <form @submit.prevent="handleLogin" id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">ETECSA</div>
            <div id="welcome-line-2">Bienvenido de nuevo</div>
          </div>
          <div id="input-area">
            <div class="form-inp">
              <input
                v-model="email"
                placeholder="Correo electrónico"
                required
                type="email"
              />
            </div>
            <div class="form-inp">
              <input
                v-model="password"
                placeholder="Contraseña"
                required
                type="password"
              />
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">Iniciar sesión</button>
          </div>
          <div id="forgot-pass">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <div id="bar"></div>
          <p v-if="error" class="error">{{ error }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Estilos personalizados para tu formulario de login */
.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}

#difuminado {
  backdrop-filter: blur(10px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
}

#form {
  display: grid;
  place-items: center;
  width: 300px;
  height: 400px;
  padding: 25px;
  background-color: rgb(0, 0, 102);
  box-shadow: 0px 15px 60px rgb(0, 0, 102);
  outline: 1px solid #298dc7;
  border-radius: 10px;
  position: relative;
  overflow: hidden; /* Evita que los formularios se vean fuera del contenedor durante la transición */
}

#form-body {
  width: 230px;
  margin: auto;
}

#welcome-lines {
  text-align: center;
  line-height: 1;
}

#welcome-line-1 {
  color: #fafffd;
  font-weight: 600;
  font-size: 40px;
}

#welcome-line-2 {
  color: #ffffff;
  font-size: 18px;
  margin-top: 17px;
}

#input-area {
  margin-top: 40px;
}

.form-inp {
  padding: 11px 25px;
  margin: 15px auto;
  background: transparent;
  border: 1px solid #e3e3e3;
  line-height: 1;
  border-radius: 8px;
}

.form-inp input {
  width: 100%;
  background: none;
  font-size: 13.4px;
  color: #00ff7f;
  border: none;
  padding: 0;
  margin: 0;
}

.form-inp input:focus {
  outline: none;
}

#submit-button-cvr {
  margin-top: 20px;
}

#submit-button {
  display: block;
  width: 100%;
  color: #00ff7f;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  padding: 14px 13px 12px 13px;
  border: 0;
  outline: 1px solid #00ff7f;
  border-radius: 8px;
  line-height: 1;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
}

#submit-button:hover {
  background-color: #00ff7f;
  color: #161616;
  cursor: pointer;
}

#forgot-pass {
  text-align: center;
  margin-top: 10px;
}

#forgot-pass a {
  color: #868686;
  font-size: 12px;
  text-decoration: none;
}

#bar {
  position: absolute;
  left: 50%;
  bottom: -50px;
  width: 28px;
  height: 8px;
  margin-left: -33px;
  background-color: #00ff7f;
  border-radius: 10px;
}

#bar:before,
#bar:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #ececec;
  border-radius: 50%;
}

#bar:before {
  right: -20px;
}

#bar:after {
  right: -38px;
}

/* Transiciones personalizadas para el efecto slide-left */
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.slide-left-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-left-leave {
  transform: translateX(0);
  opacity: 1;
}

.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Botones transparentes */
.transparent-button {
  background: none;
  border: none;
  color: #00ff7f;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.transparent-button:hover {
  color: #ffffff;
}
</style>
