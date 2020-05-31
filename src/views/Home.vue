<template>
  <v-container
          fluid
          class="d-flex flex-column justify-center align-center"
  >
      <horizontal-menu></horizontal-menu>
      <v-row
              justify="center"
              align="center"
      >
          <v-col
                  cols="12"
          >
              <v-card-text class="greet">
                  Приветствую вас на моем персональном сайте учителя начальных классов!
                  Сайт создан для учителей начальных классов, родителей и учеников.
                  Предназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями.
                  На сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы.
                  Буду рада, если каждый найдёт здесь много интересной и полезной информации.
              </v-card-text>
          </v-col>
      </v-row>
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