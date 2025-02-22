<script setup>
import PageFooter from './components/PageFooter.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
    <title>Brady Zalasky</title>
    <Navbar
    v-if="['404'].indexOf($route.name) < 0"
    siteTitle="Brady Zalasky"
    logoPath=""
    />

    <RouterView />

    <PageFooter 
    v-if="['404'].indexOf($route.name) < 0"
      siteTitle="Brady Zalasky"
      logoPath=""
    />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Red+Rose:wght@300..700&display=swap');

header {
  line-height: 1.5;
}
</style>
