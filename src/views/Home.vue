<template>
  <v-container
          fluid
          class="d-flex flex-column"
  >
      <horizontal-menu></horizontal-menu>
      <v-row
              justify="center"
              align="center"
      >
          <v-col
                  cols="12"
                  class="hidden-md-and-up"
                  style="min-height: calc(100vh - 600px);"
          >
              <v-card-text class="greet">
                  Приветствую вас на моем персональном сайте учителя начальных классов!<br/>
                  Сайт создан для учителей начальных классов, родителей и учеников.<br/>
                  Предназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями.<br/>
                  На сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы.<br/>
                  Буду рада, если каждый найдёт здесь много интересной и полезной информации.<br/>
              </v-card-text>
          </v-col>
          <v-col
                  cols="6"
                  class="hidden-sm-and-down"
                  style="min-height: calc(100vh - 600px);"
          >
              <v-card-text class="greet">
                  Приветствую вас на моем персональном сайте учителя начальных классов!<br/>
                  Сайт создан для учителей начальных классов, родителей и учеников.<br/>
                  Предназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями.<br/>
                  На сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы.<br/>
                  Буду рада, если каждый найдёт здесь много интересной и полезной информации.<br/>
              </v-card-text>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="4">
              <v-card
                      class="mx-auto mx-4 my-12"
              >
                  <v-img
                          height="250"
                          :src="require('../assets/t1.jpg')"
                  ></v-img>

                  <v-card-title>Хотите, чтобы ваш ребёнок полюбил книги?</v-card-title>
              </v-card>
          </v-col>
          <v-col cols="4">
              <v-card
                      class="mx-auto mx-4 my-12"
              >
                  <v-img
                          height="250"
                          :src="require('../assets/t2.jpg')"
                  ></v-img>

                  <v-card-title>Чтобы его речь была чистой и ясной?</v-card-title>
              </v-card>
          </v-col>
          <v-col cols="4">
              <v-card
                      class="mx-auto mx-4 my-12"
              >
                  <v-img
                          height="250"
                          :src="require('../assets/t3.jpg')"
                  ></v-img>

                  <v-card-title>Хотите сделать это дело семейной традицией?</v-card-title>
              </v-card>
          </v-col>
      </v-row>
      <!--
      <v-parallax
              :height="800"
              :src="require('../assets/t1.jpg')"
      >
          <v-row
                  align="center"
                  justify="center"
          >
              <v-col class="text-center articles" cols="12">
                  <h1 class="display-1 font-weight-thin mb-4" style="color: rgba(40, 40, 40, 0.9)">Хотите, чтобы ваш ребёнок полюбил книги?</h1>
              </v-col>
          </v-row>
      </v-parallax>
      <v-parallax
              :height="800"
              :src="require('../assets/t2.jpg')"
      >
          <v-row
                  align="center"
                  justify="center"
          >
              <v-col class="text-center articles" cols="12">
                  <h1 class="display-1 font-weight-thin mb-4" style="color: rgba(40, 40, 40, 0.9)">Чтобы его речь была чистой и ясной?</h1>
              </v-col>
          </v-row>
      </v-parallax>
      <v-parallax
              :height="800"
              :src="require('../assets/t3.jpg')"
              style="backdrop-filter: blur(10px)"
      >
          <v-row
                  align="center"
                  justify="center"
          >
              <v-col class="text-center articles" cols="12">
                  <h1 class="display-1 font-weight-thin mb-4" style="color: rgba(40, 40, 40, 0.9)">Хотите сделать это дело семейной традицией?</h1>
              </v-col>
          </v-row>
      </v-parallax>-->
  </v-container>
</template>

<script>
import HorizontalMenu from '../components/HorizontalMenu'

export default {
  name: 'Home',
  data() {
    return {
      items: []
    }
  },
  components: {
      HorizontalMenu
  }
}
</script>

<style lang="less" scoped>
  @font-face {
    font-family: "RobotoCondensed-Regular";
    src: url("../assets/fonts/RobotoCondensed-Regular.ttf") format("ttf");
  }

  @font-face {
  font-family: "RobotoCondensed-Bold";
      src: url("../assets/fonts/RobotoCondensed-Bold.ttf") format("ttf");
  }

  .articles {
      font-family: "RobotoCondensed-Bold", sans-serif !important;
  }

  .greet {
      font-family: "RobotoCondensed-Regular", sans-serif;
      font-size: 1.2em;
      text-align: center;
  }

  .padder {
    padding-bottom: 12px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
</style>