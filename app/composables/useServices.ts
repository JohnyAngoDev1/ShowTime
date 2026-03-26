import { computed } from 'vue'
import { useTemplate } from '~/composables/useTemplate'

export const useServices = () => {
    const { tm } = useTemplate()

    const servicesList = computed(() => tm('services_items') || [])

    return {
        servicesList
    }
}
