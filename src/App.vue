<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { songs } from './constants';

const randomIndex = ref<number>(0);

const getRandomIndex = (): number => {
  return Math.floor(Math.random() * songs.length);
}

const checkAndSetRandomIndex = () => {
  const lastUpdated = localStorage.getItem('lastUpdated');
  const currentDate = new Date().toDateString();

  if (lastUpdated === currentDate) {
    randomIndex.value = parseInt(localStorage.getItem('randomIndex') || '0');
  } else {
    randomIndex.value = getRandomIndex();
    localStorage.setItem('randomIndex', randomIndex.value.toString());
    localStorage.setItem('lastUpdated', currentDate); 
  }
}

onMounted(() => {
  checkAndSetRandomIndex();
});
</script>

<template>


  <div class="d-flex flex-column align-center justify-center">
    <div class="marquee ">
    <span style="font-size: 1.3rem;">  ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ ЛЮБЛЮ </span>
  </div>
    <span style="z-index: 3; color: white; font-size: 1.4rem;" class="py-3"> Трек Дня</span> 
    <v-card class="pa-2 rounded-lg v-card-with-blur" style="z-index: 3" variant="outlined">
      <v-card-title style="font-size: 1.5rem">{{ songs[randomIndex].songName }}</v-card-title>
      <v-card-subtitle style="font-size: 1.3rem">{{songs[randomIndex].artistName }}</v-card-subtitle>
      <v-img class="rounded-lg" src="src\assets\333.png"></v-img>
    </v-card>
    <v-slide-y-reverse-transition></v-slide-y-reverse-transition>
  </div>

  <div 
    style="z-index: 2; position: relative; color: white; font-size: 1.4rem; text-align: center; top: 20px;"
    class="d-flex flex-column align-center justify-center"
  >
    <!-- <v-card-title style="font-size: 1.3rem; text-wrap: wrap; max-width: 200px;">{{songs[randomIndex].textForLerik }} </v-card-title>  -->
  </div>
  <div>
    <spline-viewer
      url="https://prod.spline.design/nGCrGcjkskMDevKS/scene.splinecode"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"
    ></spline-viewer>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

#app {
  height: 100%;
}

.marquee {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  top: 0;
  color: rgb(247, 17, 224);
  z-index: 4;
  text-align: center; 
}

.marquee span {
  display: inline-block;
  animation: fadeInOut 3s ease-in-out infinite;
  -webkit-text-stroke: 1px white; 
}

@keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
.v-card-with-blur {
  position: relative;
  background-color: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(6px);
  z-index: 2; 
}


.v-card-with-blur::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  filter: blur(10px);
  z-index: -1; 
}

</style>
