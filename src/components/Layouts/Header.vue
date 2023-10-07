<script setup>

</script>

<template>
    <v-app-bar title="Assignment 12" :elevation="1">
            <template v-slot:append>
                <v-menu transition="slide-y-reverse-transition" width="180">
                    <template v-slot:activator="{props}">
                        <v-avatar v-bind="props" class="mr-3" image="/public/rafiq.png"></v-avatar>
                    </template>

                    <v-list>
                        <v-list-item>
                        <v-list-item-title>My Account</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                        <v-list-item-title>Profile</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                        <v-list-item-title>Setting</v-list-item-title>
                        </v-list-item>
                    </v-list>

                </v-menu>
            </template>
        </v-app-bar>
</template>

<style scoped>

</style>