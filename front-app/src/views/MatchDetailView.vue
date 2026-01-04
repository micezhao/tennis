<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased pb-24">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
      <button @click="goBack" class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 class="text-lg font-bold text-text-main dark:text-white">比赛详情</h1>
      <div class="w-10"></div>
    </header>

    <!-- Match Detail Content -->
    <main class="px-4 py-4">
      <!-- Match Overview -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-text-main dark:text-white">{{ match.title }}</h2>
          <div 
            class="px-3 py-1 rounded-full text-xs font-bold"
            :class="match.result === 'win' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'"
          >
            {{ match.result === 'win' ? '胜利' : '失败' }}
          </div>
        </div>

        <div class="space-y-3 text-sm">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">calendar_today</span>
            <span class="text-gray-600 dark:text-gray-400">{{ match.date }}</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">schedule</span>
            <span class="text-gray-600 dark:text-gray-400">{{ match.time }}</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">location_on</span>
            <span class="text-gray-600 dark:text-gray-400">{{ match.location }}</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">sports_tennis</span>
            <span class="text-gray-600 dark:text-gray-400">{{ match.surfaceType }}</span>
          </div>
        </div>
      </div>

      <!-- Match Score -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">比赛比分</h3>
        <div class="flex items-center justify-around py-3 bg-primary/5 dark:bg-primary/10 rounded-xl">
          <div class="text-center">
            <p class="text-lg font-bold text-primary dark:text-primary">{{ match.myScore }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">我的分数</p>
          </div>
          <div class="text-2xl font-bold text-gray-400 dark:text-gray-500">:</div>
          <div class="text-center">
            <p class="text-lg font-bold text-gray-600 dark:text-gray-300">{{ match.opponentScore }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">对手分数</p>
          </div>
        </div>
        <div class="mt-3 space-y-2">
          <div class="flex justify-between items-center py-1 border-b border-gray-100 dark:border-white/5">
            <span class="text-xs text-gray-500 dark:text-gray-400">对手</span>
            <span class="text-sm font-medium text-text-main dark:text-white">{{ match.opponent }}</span>
          </div>
          <div class="flex justify-between items-center py-1">
            <span class="text-xs text-gray-500 dark:text-gray-400">比赛类型</span>
            <span class="text-sm font-medium text-text-main dark:text-white">{{ match.matchType }}</span>
          </div>
        </div>
      </div>

      <!-- Match Stats -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">比赛数据</h3>
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">ACE球</p>
            <p class="text-lg font-bold text-text-main dark:text-white">{{ match.stats.ace }}</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">双误</p>
            <p class="text-lg font-bold text-text-main dark:text-white">{{ match.stats.doubleFault }}</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">一发成功率</p>
            <p class="text-lg font-bold text-text-main dark:text-white">{{ match.stats.firstServePercentage }}%</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">制胜分</p>
            <p class="text-lg font-bold text-text-main dark:text-white">{{ match.stats.winners }}</p>
          </div>
        </div>
      </div>

      <!-- Match Comments -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">比赛评价</h3>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-3">
          <div class="flex items-center gap-2 mb-2">
            <div class="flex items-center text-yellow-500 dark:text-yellow-400 gap-0.5">
              <span class="text-sm font-bold">{{ match.rating }}</span>
              <span class="material-symbols-outlined text-[16px] filled">star</span>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">{{ match.ratingDate }}</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300">{{ match.comment }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

interface MatchStats {
  ace: number;
  doubleFault: number;
  firstServePercentage: number;
  winners: number;
}

interface Match {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  surfaceType: string;
  opponent: string;
  matchType: string;
  result: 'win' | 'lose';
  myScore: number;
  opponentScore: number;
  stats: MatchStats;
  rating: number;
  ratingDate: string;
  comment: string;
}

const router = useRouter();
const route = useRoute();

// Mock match detail data
const match = ref<Match>({
  id: route.params.id as string,
  title: '友谊赛',
  date: '2026-01-03',
  time: '14:00-15:30',
  location: '阳光网球场',
  surfaceType: '硬地',
  opponent: '张三',
  matchType: '单打',
  result: 'win',
  myScore: 2,
  opponentScore: 0,
  stats: {
    ace: 3,
    doubleFault: 1,
    firstServePercentage: 75,
    winners: 12
  },
  rating: 4.8,
  ratingDate: '2026-01-03',
  comment: '这场比赛发挥得不错，发球很稳定，底线进攻也很有威胁。对手的回球质量不高，我抓住了机会赢得了比赛。希望下次能继续保持这样的状态。'
});

// Go back
const goBack = () => {
  router.back();
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>