<template>
  <div class="bg-background-light font-display antialiased transition-colors duration-200 min-h-screen flex flex-col">
    <!-- Sticky Header Section -->
    <div class="sticky top-0 z-30 bg-background-light/95 backdrop-blur-sm border-b border-gray-100 safe-top">
      <!-- Safe Area Top Spacer -->
      <div class="h-safe w-full"></div>
      <!-- Top App Bar -->
      <div class="flex items-center justify-between px-4 py-3">
        <button @click="router.back()" class="flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
          <span class="material-symbols-outlined text-gray-900" style="font-size: 24px;">arrow_back</span>
        </button>
        <h1 class="text-xl font-bold text-gray-900 tracking-tight">约球列表</h1>
        <div class="w-10"></div>
      </div>
      <!-- Search Bar -->
      <div class="px-4 pb-2">
        <div class="relative flex w-full items-center">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span class="material-symbols-outlined text-gray-400" style="font-size: 20px;">search</span>
          </div>
          <input v-model="searchQuery" class="block w-full rounded-xl border-none bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary shadow-sm outline-none" placeholder="搜索活动名称、球场或地点" type="text"/>
        </div>
      </div>
      <!-- Filter Chips -->
      <div class="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
        <!-- Active Filter -->
        <button class="flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 shadow-sm shadow-primary/20 transition-transform active:scale-95">
          <span class="material-symbols-outlined text-black" style="font-size: 18px;">calendar_month</span>
          <span class="text-sm font-semibold text-black">全部日期</span>
          <span class="material-symbols-outlined text-black" style="font-size: 18px;">arrow_drop_down</span>
        </button>
        <!-- Inactive Filter -->
        <button class="flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white border border-gray-100 px-4 shadow-sm transition-transform active:scale-95">
          <span class="text-sm font-medium text-gray-700">区域</span>
          <span class="material-symbols-outlined text-gray-500" style="font-size: 18px;">arrow_drop_down</span>
        </button>
        <button class="flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white border border-gray-100 px-4 shadow-sm transition-transform active:scale-95">
          <span class="text-sm font-medium text-gray-700">水平</span>
          <span class="material-symbols-outlined text-gray-500" style="font-size: 18px;">arrow_drop_down</span>
        </button>
        <button class="flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white border border-gray-100 px-4 shadow-sm transition-transform active:scale-95">
          <span class="material-symbols-outlined text-gray-500" style="font-size: 18px;">tune</span>
          <span class="text-sm font-medium text-gray-700">筛选</span>
        </button>
      </div>
    </div>

    <!-- Scrollable Content -->
    <div class="flex-1 px-4 py-2 space-y-4 pb-24 overflow-y-auto">
      <!-- Sort Bar -->
      <div class="flex items-center justify-between text-xs text-gray-500 px-1">
        <span>共找到 {{ filteredMatches.length }} 个活动</span>
        <div class="flex items-center gap-1">
          <span>按推荐排序</span>
          <span class="material-symbols-outlined" style="font-size: 16px;">sort</span>
        </div>
      </div>

      <!-- Dynamic Match Cards -->
      <template v-for="match in filteredMatches" :key="match.matchId">
        <router-link 
          :to="`/matches/${match.matchId}`" 
          class="group relative flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md border border-transparent"
          :class="{ 'opacity-90': match.currentPlayers === match.maxPlayers }"
        >
          <!-- Header with Badge and Image -->
          <div class="flex justify-between items-start gap-4">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary-dark ring-1 ring-inset ring-primary/20">{{ getLevelBadge(match.levelMin, match.levelMax) }}</span>
                <span v-if="getStatusBadge(match.currentPlayers, match.maxPlayers)" 
                  class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset"
                  :class="getStatusBadge(match.currentPlayers, match.maxPlayers)?.class.replace(/dark:\w+\s*/g, '')"
                >
                  {{ getStatusBadge(match.currentPlayers, match.maxPlayers)?.text }}
                </span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 leading-tight truncate">{{ match.description }}</h3>
              <p class="mt-1 flex items-center text-sm text-gray-500">
                <span class="material-symbols-outlined mr-1 shrink-0" style="font-size: 16px;">schedule</span>
                {{ match.date }} {{ match.startTime }} - {{ match.endTime }}
              </p>
              <p class="mt-0.5 flex items-center text-sm text-gray-500">
                <span class="material-symbols-outlined mr-1 shrink-0" style="font-size: 16px;">location_on</span>
                {{ match.courtName }} <span class="ml-1 text-gray-400">({{ match.distance }}km)</span>
              </p>
            </div>
            <div class="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <!-- Placeholder for court image -->
              <div class="w-full h-full flex items-center justify-center text-gray-400">
                <span class="material-symbols-outlined text-3xl">sports_tennis</span>
              </div>
            </div>
          </div>
          <!-- Divider -->
          <div class="h-px w-full bg-gray-100"></div>
          <!-- Footer: Participants & Action -->
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-1">
              <div class="flex -space-x-2 overflow-hidden">
                <!-- Placeholder avatars -->
                <div v-for="i in Math.min(2, match.currentPlayers)" :key="i" 
                  class="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-300"
                ></div>
                <div v-if="match.currentPlayers > 2" 
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white"
                >
                  <span class="text-xs font-medium text-gray-500">{{ match.currentPlayers }}/{{ match.maxPlayers }}</span>
                </div>
                <div v-else-if="match.currentPlayers < match.maxPlayers" 
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white"
                >
                  <span class="text-xs font-medium text-gray-500">{{ match.currentPlayers }}/{{ match.maxPlayers }}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="text-right">
                <p class="text-lg font-bold text-primary-dark">
                  {{ match.costType === 'Free' ? '免费' : `¥${match.costPerPerson}` }}
                  <span v-if="match.costType !== 'Free'" class="text-xs font-normal text-gray-500">/人</span>
                </p>
              </div>
              <button 
                class="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-black shadow-md shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95"
                :class="{
                  'bg-gray-100 text-gray-400 shadow-none cursor-not-allowed': match.currentPlayers >= match.maxPlayers
                }"
                :disabled="match.currentPlayers >= match.maxPlayers"
              >
                {{ match.currentPlayers >= match.maxPlayers ? '满员' : '报名' }}
              </button>
            </div>
          </div>
        </router-link>
      </template>
    </div>



    <!-- Bottom Navigation Bar -->
    <nav class="fixed bottom-0 w-full z-50 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6">
      <div class="flex justify-between items-center max-w-md mx-auto">
        <!-- 球场 -->
        <router-link to="/courts" class="flex flex-col items-center gap-1 p-2 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl">search</span>
          <span class="text-[10px] font-medium">球场</span>
        </router-link>
        <!-- 约球 -->
        <router-link to="/matches" class="flex flex-col items-center gap-1 p-2 text-primary dark:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl fill-current">sports_tennis</span>
          <span class="text-[10px] font-medium">约球</span>
        </router-link>
        <!-- 发布 -->
        <router-link to="/matches/create" class="flex flex-col items-center gap-1 p-2 -mt-8">
          <div class="size-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 text-white">
            <span class="material-symbols-outlined text-3xl">add</span>
          </div>
          <span class="text-[10px] font-bold text-primary mt-1">发布</span>
        </router-link>
        <!-- 商城 -->
        <router-link to="/shop" class="flex flex-col items-center gap-1 p-2 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl">storefront</span>
          <span class="text-[10px] font-medium">商城</span>
        </router-link>
        <!-- 个人 -->
        <router-link to="/profile" class="flex flex-col items-center gap-1 p-2 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl">person</span>
          <span class="text-[10px] font-medium">个人</span>
        </router-link>
      </div>
      <div class="h-6 w-full"></div> <!-- Safe area spacing -->
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { mockData } from '../api/mockData';

const router = useRouter();
const matches = ref(mockData.matches);
const searchQuery = ref('');

const filteredMatches = computed(() => {
  if (!searchQuery.value) return matches.value;
  return matches.value.filter(match => 
    match.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    match.courtName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const getLevelBadge = (min: number, _max: number) => {
  return `NTRP ${min}+`;
};

const getStatusBadge = (current: number, max: number) => {
  const remaining = max - current;
  if (remaining === 0) return { text: '已满员', class: 'bg-gray-100 text-gray-600' };
  if (remaining === 1) return { text: '仅剩1位', class: 'bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-600/20' };
  return null;
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
