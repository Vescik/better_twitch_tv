<template>
  <header class="header_conteiner">
    <NavbarMain></NavbarMain>
  </header>
  <div class="container">
    <aside class="aside_menu">
    <NavbarMenu></NavbarMenu>
  </aside>
  <main class="main_conteiner">
    <RouterView/>
  </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarMain from "./components/NavbarMain.vue";
import NavbarMenu from "./components/NavbarMenu.vue";
export default defineComponent({
  name: "App",
  components: {
    NavbarMain,
    NavbarMenu,
  },
});
</script>
<style lang="scss">
@import "./scss/abstract/_variables.scss";
@import "./scss/abstract/_mixins.scss";
@import "./scss/base/_reset.scss";
@import "./scss/base/_typography.scss";
@import "./scss/page/global.scss";
@import "./scss/layout/_navbar_aside.scss";
@import "./scss/layout/_main_container.scss";

</style>
