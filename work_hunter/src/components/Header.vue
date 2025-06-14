<template>
  <v-app-bar
    class="px-16"
    color="transparent"
    scroll-behavior="hide" 
    scroll-threshold="500"
    :elevation="0"
  >
    <template #prepend>
      <v-app-bar-nav-icon />
    </template>
    <v-app-bar-title class="cursor-pointer" color="primary"><router-link class="text-decoration-none text-white" to="/">WorkHunt</router-link></v-app-bar-title>

    <div class="d-flex flex-columns ga-2">
      <v-btn plain to="/about">О нас</v-btn>
      <v-btn text to="/auth/login" variant="tonal">Вход</v-btn>
      <v-btn class="button-gradient" color="primary" text to="/auth/signup" variant="flat">Регистрация</v-btn>
      <v-avatar @click="$router.push('/user/profile')" color="accent" class="cursor-pointer">
        <span class="text-h5">CJ</span>
      </v-avatar>
    </div>
  </v-app-bar>
</template>

<script setup>

</script>

<style lang="">

</style>
