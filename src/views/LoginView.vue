<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
    <router-link to="/test">Test</router-link>
  </nav>
  <div class="login">
    <form class="form-group">
      <input v-model="phoneLogin" type="phone" class="form-control" placeholder="Phone" required>
      <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
      <input type="submit" class="btn btn-primary" @click="doLogin">

    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

const phoneLogin = ref('')
const passwordLogin = ref('')
const confirmReg = ref(false)

function doLogin() {
    if (phoneLogin.value != "" && passwordLogin.value != "") {
              store.commit({
                type: 'auth',
                status: true
              });
           } else {
              alert("You are now logged in");
           }
}
</script>
