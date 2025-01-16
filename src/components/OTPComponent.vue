<script setup lang="ts">
import { useCurrentTetraStore } from "@/stores/StoreT";
import { ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const state = useCurrentTetraStore();

const otp = ref(["", "", "", ""]);
const moveToNext = (event: KeyboardEvent, index: number) => {
  if (event.key !== "Bacspace" && event.target instanceof HTMLInputElement) {
    if (index < otp.value.length - 1 && otp.value[index]) {
      (event.target.nextElementSibling as HTMLInputElement).focus();
    }
  }
};

const resendOTP = () => {
  // Implement your resend OTP logic here
  console.log("Resend OTP");
};

const verifyOTP = () => {
  // Implement your verify OTP logic here
  console.log("Verifying OTP:", otp.value.join(""));
  goToQuestions();
};


const goToQuestions = () => {
  state.changeToQuestions();
  router.push("/questions");
};
</script>


<template>
  <div class="difuminado">
    <div class="form container">
      <h3>VERIFICACIÓN</h3>
      <div class="ip">
        <input  type="text" maxlength="1" v-for="n in 4" :key="n" v-model="otp[n - 1]"
          @keyup="moveToNext($event, n - 1)">
      </div>
      <p>Don't get the code? <a href="#" @click.prevent="resendOTP">Resend</a></p>
      <button class="submit-button" @click="verifyOTP">Verify</button>

    </div>
  </div>
</template>


<style scoped>
.difuminado {
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


.submit-button {
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

.submit-button:hover {
  background-color: #00ff7f;
  color: #161616;
  cursor: pointer;
}


.container {
  height: 220px;
  width: 299px;
  color: #1dcf57;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 15px;
  background-color: #1f3f64;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
}

.ip input {
  width: 25px;
  height: 25px;
  font-size: 18px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid #1dcf57;
  border-radius: 5px;
  color: #1dcf57;
  background: transparent;
}

.form {
  display: grid;
  place-items: center;
  width: 300px;
  padding: 25px;
  background-color: rgb(0, 0, 102);
  box-shadow: 0px 15px 60px rgb(0, 0, 102);
  outline: 1px solid #298dc7;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
</style>
