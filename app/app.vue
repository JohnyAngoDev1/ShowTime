<script setup lang="ts">
import CardsSrvCorp from './components/cards.vue';
import LandingSrvCorp from './components/landing.vue';
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
</script>

<template>
    <div class="bg-black min-h-screen">
        <Navbar />
        <NuxtPage />
        <Footer id="contacto" />
    </div>
</template>