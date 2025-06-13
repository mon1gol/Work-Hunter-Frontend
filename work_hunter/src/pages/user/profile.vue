<template>
  <v-container class="mt-10">
    <!-- Карточка профиля -->
    <v-card elevation="6" rounded="lg" class="pa-6">
      <!-- Заголовок -->
      <div class="d-flex align-center justify-space-between flex-wrap mb-6">
        <h2 class="text-h5 font-weight-bold">Профиль пользователя</h2>
        <v-btn color="primary" prepend-icon="mdi-account-edit">Редактировать</v-btn>
      </div>

      <!-- Информация о пользователе -->
      <v-row>
        <!-- Левая колонка - фото и основная информация -->
        <v-col cols="12" md="4" class="d-flex flex-column align-center">
          <v-avatar size="128" color="primary" class="mb-4">
            <img :src="user.avatar || 'https://via.placeholder.com/128'"  alt="Фото профиля" />
          </v-avatar>
          <h3 class="text-h6 text-center">{{ user.name }}</h3>
          <p class="text-caption text-center text-grey-darken-1">{{ user.email }}</p>
        </v-col>

        <!-- Правая колонка - дополнительная информация -->
        <v-col cols="12" md="8">
          <v-tabs v-model="tab" bg-color="transparent">
            <v-tab value="about">Обо мне</v-tab>
            <v-tab value="settings">Настройки</v-tab>
          </v-tabs>

          <v-window v-model="tab">
            <!-- Обо мне -->
            <v-window-item value="about">
              <v-list lines="two" density="comfortable">
                <v-list-item title="Имя" :subtitle="user.name" />
                <v-list-item title="Email" :subtitle="user.email" />
                <v-list-item title="Телефон" :subtitle="user.phone || 'Не указан'" />
                <v-list-item title="Дата регистрации" :subtitle="user.registeredAt" />
              </v-list>
            </v-window-item>

            <!-- Настройки -->
            <v-window-item value="settings">
              <v-form @submit.prevent="saveSettings">
                <v-switch v-model="user.notifications" label="Уведомления"></v-switch>
                <v-switch v-model="user.darkMode" label="Темная тема"></v-switch>
                <v-btn type="submit" color="success">Сохранить</v-btn>
              </v-form>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

// Данные пользователя (можно получать с бэкенда)
const user = ref({
  name: 'Александр Иванов',
  email: 'alex@example.com',
  phone: '+7 999 123-45-67',
  registeredAt: '15.04.2023',
  avatar: null,
  notifications: true,
  darkMode: false
})

// Текущий активный таб
const tab = ref('about')

// Метод сохранения настроек
const saveSettings = () => {
  alert('Настройки сохранены!')
}
</script>

<style scoped>
.v-card {
  max-width: 960px;
  margin: 0 auto;
}
</style>