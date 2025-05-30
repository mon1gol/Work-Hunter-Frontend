<template lang="">
  <div class="mt-10">
    <v-container class="mx-auto" max-width="500">
      <v-card class="px-4 py-8">
        <v-card-title class="text-center text-h4 mb-8">Вход</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Email" placeholder="Введите" />
            <v-text-field label="Пароль" placeholder="Введите" type="password" />
            <v-text-field label="Повторите пароль" placeholder="Введите" type="password" />
            <v-btn class="w-100" color="accent" size="large">Войти</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>

</script>

<style lang="">

</style>
