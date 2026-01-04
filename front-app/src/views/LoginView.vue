<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display px-6">
    <div class="w-full max-w-sm space-y-8">
      <div class="text-center">
        <div class="mx-auto h-16 w-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 mb-4">
          <span class="material-symbols-outlined text-4xl text-black">sports_tennis</span>
        </div>
        <h2 class="text-3xl font-bold tracking-tight">Welcome Back</h2>
        <p class="mt-2 text-sm text-text-muted dark:text-gray-400">Sign in to your account</p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input id="email" name="email" type="email" autocomplete="email" required 
                   class="relative block w-full rounded-xl border-0 py-3 px-4 text-text-main ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-surface-dark dark:ring-white/10 dark:text-white" 
                   placeholder="Email address" v-model="email">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required 
                   class="relative block w-full rounded-xl border-0 py-3 px-4 text-text-main ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-surface-dark dark:ring-white/10 dark:text-white" 
                   placeholder="Password" v-model="password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" 
                   class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary bg-transparent">
            <label for="remember-me" class="ml-2 block text-sm text-text-main dark:text-gray-300">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-primary hover:text-primary/80">Forgot password?</a>
          </div>
        </div>

        <div>
          <button type="submit" 
                  class="group relative flex w-full justify-center rounded-xl bg-primary py-3 px-4 text-sm font-bold text-black hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-lg shadow-green-500/20 transition-all active:scale-[0.98]">
            Sign in
          </button>
        </div>
      </form>
      
      <p class="text-center text-sm text-text-muted dark:text-gray-400">
        Don't have an account?
        <a href="#" class="font-medium text-primary hover:text-primary/80">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  // Mock login
  console.log('Logging in with', email.value, password.value);
  router.push('/');
};
</script>
