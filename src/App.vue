<template>
  <NavBar />

  <main>
    <router-view />
  </main>
</template>

<script>
import NavBar from "../src/components/layouts/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
main {
  padding: 40px;
}
</style>
