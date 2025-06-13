<template>
  <v-container 
    class="d-flex flex-column justify-space-between align-center" 
    style="height: 100%; max-width: 1200px;"
  >
    <div class="homepage-images object-appearance" style="top: 300px; left: -20px;">
      <img class="base-image human" src="../assets/homepage_human/human.svg" alt="human">
      <img class="base-image items1 swimming-inf1" src="../assets/homepage_human/items1.svg" alt="">
      <img class="base-image items2 swimming-inf1" src="../assets/homepage_human/items2.svg" alt="">
      <img class="base-image items3 swimming-inf2" src="../assets/homepage_human/items3.svg" alt="">
      <img class="base-image items4 swimming-inf2" src="../assets/homepage_human/items4.svg" alt="">
    </div>
    
    <h1 style="z-index: 10;" class="text-h1 text-center">
      Ваша охота на работу <br> начинается здесь
    </h1>
  </v-container>

  <div 
    class="mt-16" 
    style="height: 100%; clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0% 100%); background-color: #F9C784;"
  >
    <v-container
      style="height: 100%; max-width: 1200px;"
    >
      <v-row>
        <v-col cols="6">
        </v-col>
        <v-col cols="6"> 
        </v-col>
      </v-row>
    </v-container>
  </div>
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
