<template>
    <div class="home">
      <h1>Akiba Paul L. Jimenez </h1>
      <h2>
        <img src="@/assets/myimage.jpg" alt="My Image" height="500" width="500">
      </h2>
    </div>
    <wrapper-background>

    </wrapper-background>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import wrapperBackground from '@/components/wrapper-background.vue';
  export default defineComponent({
    name: 'HomeViews',

    components: {
    wrapperBackground
    }
  });
  </script>