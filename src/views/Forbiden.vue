<template>
    <div class="forbiden">
        <p class="greet">404 Страница не найдена</p>
        <router-link to="/">
            <p class="greet">Вернуться на главную страницу</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Forbiden.vue"
    }
</script>

<style scoped>
.forbiden {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 500px;
}

.greet {
    font-family: "RobotoCondensed-Regular", sans-serif;
    font-size: 1.2em;
    text-align: center;
}
</style>