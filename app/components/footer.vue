<script setup lang="ts">
import { useTemplate } from '~/composables/useTemplate';
import { useNavigation } from '~/composables/useNavigation';

const { t } = useTemplate()
const { footerLinks } = useNavigation()
</script>

<template>
    <footer class="bg-black pt-16 pb-8 border-t border-white/5">
        <UContainer class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            <section class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <div class="flex items-center gap-3 group cursor-default">
                    <div class="p-1 rounded-xl flex items-center justify-center transition-all duration-500 overflow-hidden relative group-hover:scale-110">
                        <NuxtImg v-if="t('navbar_brand_icon').startsWith('/')" :src="t('navbar_brand_icon')" class="h-10 w-auto object-contain transition-transform duration-700" />
                        <UIcon v-else :name="t('navbar_brand_icon')" class="text-white text-xl" />
                    </div>
                    <span class="font-black text-white text-2xl tracking-tighter uppercase">
                        SHOWTIME
                    </span>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
                    {{ t('footer_company_description') }}
                </p>
            </section>

            <nav class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 class="font-black text-white uppercase text-xs tracking-widest">{{ t('footer_nav_column_1_title') }}
                </h3>
                <div class="flex flex-col gap-4">
                    <ULink to="#" class="text-gray-400 hover:text-primary text-sm transition-colors duration-300">{{ t('footer_link_projects') }}</ULink>
                    <ULink to="#" class="text-gray-400 hover:text-primary text-sm transition-colors duration-300">{{ t('footer_link_consulting') }}</ULink>
                    <ULink to="#" class="text-gray-400 hover:text-primary text-sm transition-colors duration-300">{{ t('footer_link_catalog') }}</ULink>
                    <ULink to="#" class="text-gray-400 hover:text-primary text-sm transition-colors duration-300">{{ t('footer_link_processes') }}</ULink>
                </div>
            </nav>

            <section class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 class="font-black text-white uppercase text-xs tracking-widest">{{ t('footer_nav_column_2_title') }}
                </h3>
                <div class="flex flex-col gap-4">
                    <ULink :to="`tel:${t('footer_contact_phone')}`" class="text-gray-400 hover:text-primary text-sm font-medium transition-colors duration-300">
                        {{ t('footer_contact_phone') }}
                    </ULink>
                    <ULink :to="`mailto:${t('footer_contact_email')}`" class="text-gray-400 hover:text-primary text-sm font-medium transition-colors duration-300">
                        {{ t('footer_contact_email') }}
                    </ULink>
                </div>
            </section>

            <section class="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 class="font-black text-white uppercase text-xs tracking-widest">{{ t('footer_nav_column_3_title') }}
                </h3>
                <div class="flex flex-col gap-2">
                    <p class="text-white text-sm font-black">{{ t('footer_hours_title') }}</p>
                    <p class="text-gray-400 text-sm font-medium">{{ t('footer_hours_detail') }}</p>
                </div>
            </section>

        </UContainer>

        <UContainer class="pt-8 border-t border-white/5 text-center">
            <p class="text-[10px] md:text-xs font-black text-[#666666] tracking-[0.3em] uppercase leading-loose">
                © {{ new Date().getFullYear() }} {{ t('footer_copyright_text') }}
            </p>
        </UContainer>
    </footer>
</template>