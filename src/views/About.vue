<template>
  <v-container
          fluid
          class="d-flex flex-column justify-center align-center"
  >
    <horizontal-menu></horizontal-menu>
  </v-container>
</template>

<script>
  import HorizontalMenu from "../components/HorizontalMenu";

  export default {
    name: "About",
    components: {
      HorizontalMenu
    }
  }
</script>
