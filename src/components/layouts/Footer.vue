<template>
  <footer>
    <p>Desenvolvido por Junior Rodrigues</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  position: relative; /* ou fixed */
  bottom: 0;
  background-color: #212529;
}

footer p {
  color: #ffffff;
  padding: 10px 0;
  text-align: center;
}
</style>