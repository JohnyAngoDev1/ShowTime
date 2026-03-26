<script setup lang="ts">
import { computed } from 'vue'
import { useTemplate } from '~/composables/useTemplate'
import { useServices } from '~/composables/useServices'

const props = defineProps<{
  limit?: number
}>()

const { t } = useTemplate()
const { servicesList } = useServices()

const displayedServices = computed(() => props.limit ? servicesList.value.slice(0, props.limit) : servicesList.value)

const onclick = (nombre: string): void => {
  const phone = '593979224354'
  const message = `Hola, estoy interesado en el servicio de ${nombre}. ¿Podrían darme más información?`
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script>

<template>
  <UPageSection class="bg-black">
    <UContainer>
      <div class="flex flex-col items-center text-center mb-16 px-4">
        <span class="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm block mb-4">
          {{ t('cards_section_subtitle') }}
        </span>

        <h2 class="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 uppercase">
          {{ t('cards_section_title') }}
        </h2>

        <p class="text-gray-400 text-base md:text-lg max-w-xl font-medium">
          {{ t('cards_section_description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        <UPageCard v-for="item in displayedServices" :key="item.title"
          class="rounded-3xl bg-zinc-950/40 backdrop-blur-xl transition-all duration-700 hover:shadow-[0_20px_60px_rgba(255,240,0,0.12)] hover:-translate-y-3 group border border-white/5 hover:border-primary/40 cursor-pointer shadow-2xl overflow-hidden h-full"
          @click="onclick(item.title)">

          <div class="flex flex-col h-full space-y-6 p-6 relative z-10">
            <div class="relative w-max">
              <div
                class="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary transition-all duration-500 relative z-10">
                <UIcon :name="item.icon"
                  class="w-8 h-8 text-primary group-hover:text-black transition-colors duration-500 drop-shadow-[0_0_10px_rgba(255,240,0,0.3)] group-hover:drop-shadow-none" />
              </div>
              <div
                class="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              </div>
            </div>

            <div class="flex-1 space-y-3">
              <h3
                class="text-xl font-black text-white tracking-[0.05em] leading-tight group-hover:text-primary transition-colors duration-500 uppercase">
                {{ item.title }}
              </h3>
              <p
                class="text-gray-400 text-xs leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-500">
                {{ item.description }}
              </p>
            </div>

            <div class="flex items-center justify-between group/btn pt-3 border-t border-white/5">
              <span
                class="text-primary text-[9px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                Saber más
              </span>
              <div
                class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:text-black border border-white/10 group-hover:border-transparent transition-transform duration-500 group-hover:scale-110">
                <UIcon name="i-heroicons-arrow-right-20-solid"
                  class="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </UPageCard>
      </div>

      <div v-if="props.limit && servicesList.length > props.limit" class="flex justify-center mt-20">
        <UButton to="/servicios" variant="outline" color="primary" 
          class="rounded-2xl px-12 py-5 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/10 group">
          Explorar todos los servicios
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </template>
        </UButton>
      </div>
    </UContainer>
  </UPageSection>
</template>
style>