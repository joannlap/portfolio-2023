import { useAuth } from '@/utils/useAuth'

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }

  const { user } = useAuth();
  
  if (to.meta.requiresAuth && !user.value) {
    return navigateTo('/') // Redirect to home if not authenticated
  }
})