<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/login">Login</router-link>
  <router-link to="/test">Test</router-link>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  {{ count }}<br>
  <button @click="decCounter">-</button>
  <button @click="incCounter">+</button>
</template>

<script setup>
import { ref,computed} from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const count =  computed(() => store.state.count)

function decCounter(){
  store.commit({
    type: 'decrement',
    amount: 5
  });
  console.log('dec conunet '+count.value+' '+store.state.count);
}
function incCounter(){
  store.commit({
    type: 'increment',
    amount: 5
  });
  console.log('inc conunet '+count.value);
}


</script>
