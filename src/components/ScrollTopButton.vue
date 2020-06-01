<template>
    <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            right
            bottom
            class="ScrollTopButton"
            color="rgba(39, 174, 96, 0.5)"
            @click="toTop"
    >
        <v-icon>mdi-apple-keyboard-control</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "ScrollTopButton",
        data() {
          return {
              fab: false
          }
        },
        methods: {
            onScroll (e) {
                if (typeof window === 'undefined') return
                const top = window.pageYOffset ||   e.target.scrollTop || 0
                this.fab = top > 20
            },
            toTop () {
                this.$vuetify.goTo(0)
            }
        }
    }
</script>

<style lang="less" scoped>
.ScrollTopButton {
    z-index: 100000010;
}
</style>