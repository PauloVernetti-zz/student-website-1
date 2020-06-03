<template>
    <div class="menu-bar">
        <v-row
                align="center"
                justify="center"
                class="hidden-md-and-down"
        >
            <v-col class="d-flex justify-end align-center" cols="4">
                <v-btn
                        class="white--text mx-4"
                        color="rgba(39, 174, 96, 0.75)"
                        to="/teachers"
                >
                    <v-icon left>mdi-teach</v-icon> Учителям
                </v-btn>
                <v-btn
                        class="white--text mx-4"
                        color="rgba(22, 160, 133, 0.75)"
                        to="/"
                >
                    <v-icon left>mdi-home</v-icon> Главная
                </v-btn>
            </v-col>
            <div style="width: 300px; height: 150px;" cols="2" />
            <v-col cols="4">
                <v-btn
                        class="white--text mx-4"
                        color="rgba(41, 128, 185, 0.75)"
                        to="/parents"
                >
                    <v-icon left>mdi-human-male-boy</v-icon> Родителям
                </v-btn>
                <v-btn
                        class="white--text mx-4"
                        color="rgba(155, 89, 182, 0.75)"
                        to="/students"
                >
                    <v-icon left>mdi-account-group</v-icon> Ученикам
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "HorizontalMenu"
    }
</script>

<style lang="less" scoped>
    .menu-bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 126px;
    }
</style>