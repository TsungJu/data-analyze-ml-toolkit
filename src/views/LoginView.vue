<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="email" />
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(['setUser','setToken']),
    async login(e) {
      e.preventDefault();
      const response = await fetch("https://leonardapi.herokuapp.com/login",{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          email:this.email,
          password:this.password 
        }),
      });
      const { message, access_token } = await response.json();
      console.log(message)
      this.setUser(message);
      this.setToken(access_token);
      this.$router.push('/about');
    },
  },
};
</script>