<template>
  <v-container
          fluid
          class="d-flex flex-fill fill-height page prominent-padding padder"
  >
    <v-card
            elevation="0"
            class="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-fill fill-height justify-md-center card-padding"
            color="rgba(0, 0, 0, 0.4)"
    >
        <div class="teacher-avatar flex-sm-fill" />

        <p class="greet">
          Приветствую вас на моем персональном сайте учителя начальных классов! Сайт создан для учителей начальных классов, родителей и учеников. Предназначен для обобщения и распространения педагогического опыта в преподавании, для организации дистанционной работы с обучающимися и их родителями. На сайте представлены методические разработки уроков, внеклассных мероприятий, фотоматериалы из опыта работы. Буду рада, если каждый найдёт здесь много интересной и полезной информации.
        </p>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src
import page from "../components/page";

export default {
  name: 'Home',
  data() {
    return {
      items: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    }
  },
  components: {
    page
  }
}
</script>

<style lang="less" scoped>
  @font-face {
    font-family: "RobotoCondensed-Regular";
    src: url("../assets/fonts/RobotoCondensed-Regular.ttf") format("ttf");
  }

  .page {
    background-image: url("../assets/background.jpg");
    background-position: center center;
    background-size: cover;
  }

  .greet {
    float: right;
    width: 50%;
    font-size: 2em;
    color: rgba(236, 240, 241, 0.8);
    font-family: "RobotoCondensed-Regular", sans-serif !important;
  }

  .teacher-avatar {
    width: calc(40vw - 60px);
    height: calc(40vw - 60px);
    background-image: url("../assets/photo.jpg");
    background-position: center center;
    background-size: cover;
    border-radius: 50% !important;
  }

  @media screen and (max-width: 600px) {
    .teacher-avatar {
      width: calc(100vw - 60px);
      height: calc(100vw - 60px);
    }

    .greet {
      margin-top: 12px;
      width: 100%;
      font-size: 1.2em
    }
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    .teacher-avatar {
      width: calc(100vw - 60px);
      height: calc(100vw - 60px);
    }

    .greet {
      width: 100%;
      font-size: 1.2em
    }
  }

  .padder {
    padding-bottom: 12px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .rounded {
    vertical-align: middle;
    width: 100%;
    border-radius: 50% !important;
    overflow: hidden !important;
  }

  .card-padding {
    padding: 12px;
  }

  .prominent-padding {
    padding-top: 142px;
  }
</style>