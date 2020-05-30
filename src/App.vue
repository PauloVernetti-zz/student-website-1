<template>
  <v-app dark>
    <v-app-bar
            elevation="20"
            dark
            color="rgba(0, 0, 0, 0.4)"
            absolute
            prominent
            class="flex-fill"
    >
      <div class="d-flex align-center fill-height flex-fill"><!--class="flex flex-row flex-fill fill-height align-center hidden-xs-only"-->
        <v-img
                alt="Logo"
                class="shrink mt-1 hidden-xs-only"
                contain
                min-width="100"
                :src="require('./assets/logo.png')"
                width="100"
        />
        <v-toolbar-title class="d-flex align-center fill-height">
          <div class="flex-column">
            <p class="title nomargin">Виктория Камалетдинова</p>
            <p class="subtitle-2 nomargin">Учитель начальных классов</p>
          </div>
        </v-toolbar-title>
        <div class="d-flex flex-fill fill-height justify-end align-center">
          <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <v-btn
                  class="ma-2 white--text hidden-sm-and-down"
                  text
                  :ripple="false"
                  v-for="menu in menus"
                  :key="menu.id"
                  :to="menu.link"
          >
            <v-icon left>{{menu.icon}}</v-icon>
            {{menu.text}}
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
            v-model="drawer"
            dark

            fixed
            right
            temporary
            color="rgba(39, 174, 96, 0.5)"
    >
      <v-list
              nav
              dense
      >
        <v-list-item
                v-for="menu in menus"
                :key="menu.id"
                link
                :to="menu.link"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menu.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <scroll-top-button />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import ScrollTopButton from "@/components/ScrollTopButton";

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      group: null,
      menus: [
        {
          id: 0,
          icon: "mdi-home",
          text: "Главная страница",
          link: "/"
        },
        {
          id: 1,
          icon: "mdi-help",
          text: "Чаво",
          link: "/about"
        },
        {
          id: 2,
          icon: "mdi-help",
          text: "Чаво",
          link: "/about"
        },
        {
          id: 3,
          icon: "mdi-help",
          text: "Чаво",
          link: "/about"
        }
      ]
    }
  },
  components: {
    ScrollTopButton
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>

<style  scoped>
  @font-face {
    font-family: "RobotoCondensed-Regular";
    src: url("assets/fonts/RobotoCondensed-Regular.ttf") format("ttf");
  }

  html, body {
  font-family: "RobotoCondensed-Regular", sans-serif;
}

  .title-col {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    justify-content: center;
    align-items: flex-start;
  }

  .nomargin {
    margin: 0;
    user-select: none;
  }
</style>
