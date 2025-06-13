<template>
  <v-container 
    class="d-flex flex-column justify-space-between align-center" 
    style="height: 100%; max-width: 1200px;"
  >
    <div class="homepage-images object-appearance" style="top: 300px; left: -20px;">
      <img class="base-image human" src="../assets/homepage_human/human.svg" alt="human">
      <img class="base-image items1 swimming-inf1" src="../assets/homepage_human/items1.svg" alt="items1">
      <img class="base-image items2 swimming-inf1" src="../assets/homepage_human/items2.svg" alt="items2">
      <img class="base-image items3 swimming-inf2" src="../assets/homepage_human/items3.svg" alt="items3">
      <img class="base-image items4 swimming-inf2" src="../assets/homepage_human/items4.svg" alt="items4">
    </div>
  
    <h1 style="z-index: 10;" class="text-h1 text-center">
      Ваша охота на работу <br> начинается здесь
    </h1>
  </v-container>

  <div 
    class="mt-16 pt-16" 
    style="height: 100%; clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0% 100%); background-color: #F9C784;"
  >
    <v-container style="height: 100%; max-width: 1200px;">
      <v-row class="mt-16" no-gutters>
        <v-col cols="6" class="d-flex flex-column justify-space-between mt-10 pa-10">
          <div>
            <h1 class="text-h2 text-black">Продвигайте свои услуги</h1>
            <div class="text-body-1 mt-10 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at dolorum optio commodi obcaecati placeat nisi perferendis ullam dolore vitae inventore, nostrum cum! Eligendi fugiat tempora maxime. Tempore, nihil saepe.</div>
          </div>
          <v-btn color="primary" class="w-100" text to="/auth/signup">Начать работу</v-btn>
        </v-col>
        <v-col cols="6" class="pa-10"> 
          <v-img src="../assets/homepage_pc.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container style="height: 100%; max-width: 1200px;">
    <v-row class="" no-gutters>
      <v-col cols="6" class="mt-10 pa-10">
        <div class="homepage-images object-appearance" style="top: 220px; left: 0;">
          <img class="base-image" src="../assets/homepage_girlrocket/all.svg" alt="all">
          <img class="base-image" style="top: -120px; left: 127px;" src="../assets/homepage_girlrocket/face.svg" alt="face">
          <img class="base-image" style="top: 50px; left: 250px;" src="../assets/homepage_girlrocket/line1.svg" alt="line1">
          <img class="base-image" style="top: 100px; left: 120px;" src="../assets/homepage_girlrocket/line2.svg" alt="line2">
          <img class="base-image" style="top: -50px; left: -120px;" src="../assets/homepage_girlrocket/paper1.svg" alt="paper1">
          <img class="base-image" style="top: -50px; left: -50px;" src="../assets/homepage_girlrocket/paper2.svg" alt="paper2">
        </div>
      </v-col>
      <v-col cols="6" class="d-flex flex-column justify-space-between mt-10 pa-10 h-100">
        <div class="mb-16">
          <h1 class="text-h2">Начните сейчас</h1>
          <div class="text-body-1 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis at dolorum optio commodi obcaecati placeat nisi perferendis ullam dolore vitae inventore, nostrum cum! Eligendi fugiat tempora maxime. Tempore, nihil saepe.</div>
        </div>
        <v-btn color="primary" class="w-100 mt-16" text to="/auth/signup">Начать работу</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-footer class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3" color="surface-light">
    <v-btn 
      text
      to="/about"
      rounded
    >О нас</v-btn>
  </v-footer>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
.homepage-images {
  position: relative;
  height: 100%;
}
.base-image {
  position: absolute;
  scale: 4;
  @media (min-width: 600px) and (max-width: 960px){
    scale: 1;
  }
  @media (min-width: 960px) and (max-width: 1264px){
    scale: 2;
  }
}
.items1 {
  top: 0;
  left: -35px;
}
.items2 {
  top: -50px;
  left: -185px;
}
.items3 {
  top: 25px;
  left: -215px;
}
.items4 {
  top: -40px;
  left: -55px;
}
.human {
  top: 0;
  left: 0;
}


.object-appearance{
  animation: appearance 1.5s ease;
}
@keyframes appearance {
  0%{
    opacity: 0;
    transform: translateY(50px);
  }
  100%{
    opacity:1;
    transform: translateY(0);
  }
}


.swimming-inf1{
  animation: swimming1 5s ease-in-out infinite;
}
.swimming-inf2{
  animation: swimming2 5s ease-in-out infinite;
}
@keyframes swimming1{
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes swimming2{
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
