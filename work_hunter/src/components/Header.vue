<template>
  <v-app-bar
    class="px-16"
    color="none"
    :elevation="0"
    scroll-behavior="hide"
  >
    <template #prepend>
      <v-app-bar-nav-icon />
    </template>
    <v-app-bar-title class="cursor-pointer" color="primary"><router-link class="text-decoration-none text-white" to="/">WorkHunt</router-link></v-app-bar-title>

    <div>
      <v-btn plain to="/about">О нас</v-btn>
      <v-btn class="mx-2" text to="/auth/login" variant="tonal">Вход</v-btn>
      <v-btn color="accent" text to="/auth/signup" variant="flat">Регистрация</v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>

</script>

<style lang="">

</style>
