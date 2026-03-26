<script setup lang="ts">
import { useTemplate } from '~/composables/useTemplate'
import { useNavigation } from '~/composables/useNavigation'

const { t } = useTemplate()
const { navItems } = useNavigation()
</script>

<template>
    <UHeader class="bg-black/80 backdrop-blur-lg border-b border-primary/20 sticky top-0 transition-all duration-500 hover:bg-black/95">
        <template #left>
            <div class="flex items-center gap-4 group cursor-pointer">
                <div class="p-1 rounded-2xl flex items-center justify-center transition-all duration-500 relative">
                    <NuxtImg v-if="t('navbar_brand_icon').startsWith('/')" :src="t('navbar_brand_icon')" 
                        class="h-12 w-auto object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,240,0,0.2)]" />
                    <UIcon v-else :name="t('navbar_brand_icon')" class="text-4xl text-primary" />
                </div>
            </div>
        </template>

        <UNavigationMenu :items="navItems" variant="link" :ui="{
            link: 'text-white/80 hover:text-primary transition-all duration-300 font-black uppercase tracking-widest text-xs'
        }" />

        <template #body>
            <div class="p-6 space-y-6 bg-black">
                <UNavigationMenu :items="navItems" orientation="vertical" :ui="{
                    link: 'text-white/80 hover:text-primary font-black uppercase tracking-widest text-lg py-4 border-b border-white/5'
                }" />
            </div>
        </template>
    </UHeader>
</template>