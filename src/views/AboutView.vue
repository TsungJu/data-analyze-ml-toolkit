<template>
  <div class="about">
    <h1>This is an about page</h1>
    Welcome
    <router-link v-if="isLoggedIn" to="/login"><button>Login</button></router-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>