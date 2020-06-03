<template>
  <v-app dark style="padding: 0 !important;">
    <scroll-top-button />
    <v-app-bar
            elevation="0"
            dark
            color="transparent"
            absolute
            prominent
            style="z-index: 1000000001;"
    >
      <v-row
              align="center"
              justify="center"
      >
        <v-col class="text-right hidden-lg-and-up">
          <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
        </v-col>
        <v-col class="text-sm-center hidden-md-and-down" cols="6">
          <v-btn
                  fab
                  color="#597da3"
                  class="mx-4 white--text"
                  link
                  href="https://vk.com/id507152403"
          >
            <v-icon>mdi-vk</v-icon>
          </v-btn>
          <v-btn
                  fab
                  color="#E1306C"
                  class="mx-4 white--text"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn
                  fab
                  color="#1DA1F2"
                  class="mx-4 white--text"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
            app
            v-model="drawer"
            fixed
            dark
            right
            color="rgba(33, 140, 116, 0.45)"
            style="z-index: 1000000005;"
    >
      <v-list>
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
    <v-content itemscope itemtype="http://schema.org/Person">
      <v-parallax style="z-index: 1000000000;" :src="require('./assets/background.jpg')">
        <v-row
                align="center"
                justify="center"
        >
          <v-col class="text-center" cols="12">
            <h1 itemprop="name" class="display-1 font-weight-thin mb-4" style="rgba(236, 240, 241, 0.75)">Виктория Камалетдинова</h1>
            <h4 itemprop="jobTitle" class="subtitle-1">Учитель начальных классов</h4>
          </v-col>
        </v-row>
      </v-parallax>
      <div class="avatar-box">
        <v-avatar height="300px" width="300px">
          <v-img itemprop="image" :src="require('./assets/photo.jpg')" />
        </v-avatar>
      </div>
      <router-view />
    </v-content>
    <v-footer
            dark
            color="rgba(52, 73, 94, 0.75)"
            class="footer-content"
    >
      <div class="d-flex flex-row fill-height flex-fill justify-center align-center">
        <v-col
                cols="6"
                class="text-right"
        >
          {{ new Date().getFullYear() === 2016 ? "2016 ©" : "2016 - " + new Date().getFullYear() + " ©" }} Kenift Inc
        </v-col>
        <v-col
                cols="6"
                class="text-left"
        >
          Privacy Policy
        </v-col>
      </div>
    </v-footer>
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
          icon: "mdi-teach",
          text: "Учителям",
          link: "/teachers"
        },
        {
          id: 2,
          icon: "mdi-human-male-boy",
          text: "Родителям",
          link: "/parents"
        },
        {
          id: 3,
          icon: "mdi-account-group",
          text: "Ученикам",
          link: "/students"
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
    padding: 0 !important;
    font-family: "RobotoCondensed-Regular", sans-serif;
}
  .footer-content {
    font-family: "RobotoCondensed-Regular", sans-serif;
    font-size: 0.8em;
  }

  .avatar-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
    position: absolute;
    left: calc(50% - 150px);
    top: calc(500px - 150px);
    z-index: 1000000003;
  }
</style>
