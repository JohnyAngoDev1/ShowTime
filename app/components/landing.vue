<script setup lang="ts">
import { useTemplate } from '~/composables/useTemplate'

const { t } = useTemplate()
</script>

<template>
    <UPageSection class="bg-black" :ui="{ wrapper: 'py-12 sm:py-20' }">
        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div class="flex flex-col justify-between gap-12 py-4">

                    <div class="space-y-8">
                        <div class="space-y-2">
                            <h2 class="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                                {{ t('landing_hero_title_main') }}
                            </h2>
                            <h2 class="text-5xl lg:text-7xl font-black text-primary tracking-tighter leading-[0.85] uppercase">
                                {{ t('landing_hero_title_highlight') }}
                            </h2>
                        </div>

                        <p class="text-gray-400 text-xl leading-relaxed max-w-lg font-medium">
                            {{ t('landing_hero_description') }}
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row items-center gap-5">
                        <UButton :label="t('landing_primary_button_text')"
                            class="w-full sm:w-auto justify-center rounded-2xl px-10 py-5 bg-primary text-black font-black text-xl shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-300" />
                        <UButton :label="t('landing_secondary_button_text')" variant="outline"
                            class="w-full sm:w-auto justify-center rounded-2xl px-10 py-5 text-white border-white/20 hover:bg-white/5 font-black text-xl transition-all duration-300" />
                    </div>

                    <div class="flex items-center gap-4 pt-4">
                        <div class="flex -space-x-3">
                            <div class="w-10 h-10 rounded-full bg-primary border-4 border-black shadow-2xl"></div>
                            <div class="w-10 h-10 rounded-full bg-zinc-800 border-4 border-black shadow-2xl"></div>
                            <div class="w-10 h-10 rounded-full bg-zinc-600 border-4 border-black shadow-2xl"></div>
                        </div>
                        <p class="text-gray-500 text-sm font-medium">
                            {{ t('landing_trust_badge_text') }}
                        </p>
                    </div>

                </div>

                <NuxtImg :src="t('landing_hero_image_path')"
                    class="w-full aspect-square object-cover rounded-3xl shadow-2xl" />
            </div>
        </UContainer>
    </UPageSection>
</template>