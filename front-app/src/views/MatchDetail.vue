<template>
  <div class="match-detail min-h-screen bg-background-light dark:bg-background-dark flex flex-col pb-24">
    <div v-if="loading" class="text-center py-4">Loading...</div>
    <div v-else-if="error" class="text-center py-4 text-red-500">{{ error }}</div>
    <div v-else-if="match" class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
      <header class="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-transparent dark:border-white/5 transition-all duration-200">
        <div @click="goBack" class="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer transition-opacity hover:opacity-70">
          <span class="material-symbols-outlined" style="font-size: 24px;">arrow_back_ios</span>
        </div>
        <h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Match Details</h2>
        <div class="flex w-12 items-center justify-end">
          <button class="flex size-12 shrink-0 items-center justify-end cursor-pointer text-slate-900 dark:text-white transition-opacity hover:opacity-70">
            <span class="material-symbols-outlined" style="font-size: 24px;">ios_share</span>
          </button>
        </div>
      </header>
      <main class="flex flex-col gap-4 px-4 pt-2">
        <div class="bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden p-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:text-green-300">
              {{ match.status }}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">NTRP {{ match.levelMin }}-{{ match.levelMax }}</span>
          </div>
          <h1 class="text-slate-900 dark:text-white text-2xl font-bold leading-tight mb-6">{{ match.description }}</h1>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/10 shrink-0 size-10 text-slate-900 dark:text-white">
                <span class="material-symbols-outlined" style="font-size: 20px;">calendar_month</span>
              </div>
              <div class="flex flex-col pt-0.5">
                <p class="text-slate-900 dark:text-white text-sm font-semibold leading-normal">{{ match.date }}</p>
                <p class="text-slate-500 dark:text-slate-400 text-sm leading-normal">{{ match.startTime }} - {{ match.endTime }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/10 shrink-0 size-10 text-slate-900 dark:text-white">
                <span class="material-symbols-outlined" style="font-size: 20px;">location_on</span>
              </div>
              <div class="flex flex-col pt-0.5 flex-1">
                <p class="text-slate-900 dark:text-white text-sm font-semibold leading-normal">{{ match.courtName }}</p>
                <!-- Address would be here if available in match object -->
              </div>
              <div class="flex items-center justify-center size-8 rounded-full border border-slate-200 dark:border-white/20 text-slate-400 dark:text-slate-500">
                <span class="material-symbols-outlined" style="font-size: 18px;">near_me</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/10 shrink-0 size-10 text-slate-900 dark:text-white">
                <span class="material-symbols-outlined" style="font-size: 20px;">payments</span>
              </div>
              <p class="text-slate-900 dark:text-white text-sm font-semibold leading-normal flex-1">${{ match.costPerPerson }} / Person <span class="text-xs font-normal text-slate-500 dark:text-slate-400">({{ match.costType }})</span></p>
            </div>
          </div>
          <div class="mt-8 pt-6 border-t border-slate-100 dark:border-white/10">
            <div class="flex justify-between items-end mb-2">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Current Players</span>
              <div class="text-right">
                <span class="text-lg font-bold text-slate-900 dark:text-white">{{ match.currentPlayers }}</span>
                <span class="text-sm text-slate-400 dark:text-slate-500">/ {{ match.maxPlayers }}</span>
              </div>
            </div>
            <div class="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
              <div class="bg-primary h-2.5 rounded-full" :style="{ width: (match.currentPlayers / match.maxPlayers) * 100 + '%' }"></div>
            </div>
          </div>
        </div>
      </main>
      
      <!-- Join Button -->
      <div class="fixed bottom-0 left-0 w-full bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-white/5 p-4 z-30">
         <button class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-primary/30">
           Join Match
         </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import client from '../api/client';

interface Match {
  matchId: string;
  description: string;
  matchType: string;
  levelMin: number;
  levelMax: number;
  costPerPerson: number;
  costType: string;
  date: string;
  startTime: string;
  endTime: string;
  courtName: string;
  distance: number;
  currentPlayers: number;
  maxPlayers: number;
  status: string;
}

const route = useRoute();
const router = useRouter();
const match = ref<Match | null>(null);
const loading = ref(false);
const error = ref('');

const fetchMatch = async () => {
  loading.value = true;
  const id = route.params.id;
  try {
    // Similar to CourtDetail, we fetch list and find item for mock
    const response = await client.get('/match/list');
    const list = response.data.list as Match[];
    match.value = list.find(m => m.matchId === id) || null;
    
    if (!match.value) {
      error.value = 'Match not found';
    }
  } catch (err) {
    error.value = 'Failed to load match details';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.back();
};

onMounted(() => {
  fetchMatch();
});
</script>

<style scoped>
</style>
