<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
    <router-link to="/test">Test</router-link>
  </nav>
  <div class="login">
    <form class="" action="/login" method="post">
      <input type="text" name="login" value="">
      <button type="button" name="button">Вход</button>
    </form>
    <h1>{{count}} </h1>
  </div>
</template>

<script>
export default {

  data() {
    
    return {
      info: 'null'
    }
  },
  methods: {
    async fetchData() {
      const res = await fetch( `v1/bpi/currentprice.json`)
      this.info = await res.json()
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
