<template>
    <div class="k-page" :class="{ 'prominent-padding': prominent }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "page",
        props: {
            prominent: {
                type: Boolean
            }
        }
    }
</script>

<style scoped>
.k-page {
    width: 100vw;
    min-height: 100vh;
    background-image: url("../assets/background.jpg");
    background-position: center center;
    background-size: cover;
}

    .prominent-padding {
        padding-top: 130px;
    }
</style>