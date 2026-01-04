<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased pb-24">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
      <button @click="goBack" class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 class="text-lg font-bold text-text-main dark:text-white">活动记录</h1>
      <div class="w-10"></div>
    </header>

    <!-- Time Range Filter -->
    <section class="px-4 py-3 bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-white/5">
      <div class="flex overflow-x-auto no-scrollbar gap-2 pb-2">
        <button 
          v-for="option in timeRangeOptions" 
          :key="option.value"
          @click="selectTimeRange(option.value)"
          class="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="selectedTimeRange === option.value ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary'"
        >
          {{ option.label }}
        </button>
      </div>
    </section>

    <!-- Match History List -->
    <main class="px-4 py-4">
      <div v-if="filteredMatches.length === 0" class="text-center py-12">
        <span class="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-4">history</span>
        <p class="text-gray-500 dark:text-gray-400">暂无活动记录</p>
      </div>
      
      <div v-else class="space-y-4">
        <div 
          v-for="match in filteredMatches" 
          :key="match.id"
          class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow duration-300"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary">
                <span class="material-symbols-outlined">sports_tennis</span>
              </div>
              <h3 class="font-medium text-base text-text-main dark:text-white">{{ match.title }}</h3>
            </div>
            <div 
              class="px-2 py-1 rounded-full text-xs font-bold"
              :class="match.result === 'win' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'"
            >
              {{ match.result === 'win' ? '胜利' : '失败' }}
            </div>
          </div>
          
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">calendar_today</span>
              <span class="text-gray-600 dark:text-gray-400">{{ match.date }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">location_on</span>
              <span class="text-gray-600 dark:text-gray-400">{{ match.location }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">groups</span>
              <span class="text-gray-600 dark:text-gray-400">
                {{ match.opponent }} vs {{ match.score }}
              </span>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
            <button 
              class="text-primary font-medium text-sm hover:underline"
              @click="viewMatchDetail(match.id)"
            >
              查看详情
            </button>
            <div class="flex items-center gap-1 text-yellow-500 dark:text-yellow-400">
              <span class="text-xs font-bold">{{ match.rating }}</span>
              <span class="material-symbols-outlined text-[14px] filled">star</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

interface Match {
  id: string;
  title: string;
  date: string;
  location: string;
  opponent: string;
  score: string;
  result: 'win' | 'lose';
  rating: number;
}

const router = useRouter();

// Mock match data
const matchHistory = ref<Match[]>([
  {
    id: '1',
    title: '友谊赛',
    date: '2026-01-03',
    location: '阳光网球场',
    opponent: '张三',
    score: '6-4, 6-3',
    result: 'win',
    rating: 4.8
  },
  {
    id: '2',
    title: '俱乐部联赛',
    date: '2026-01-01',
    location: '俱乐部网球场',
    opponent: '李四',
    score: '3-6, 6-2, 4-6',
    result: 'lose',
    rating: 4.5
  },
  {
    id: '3',
    title: '练习赛',
    date: '2025-12-28',
    location: '社区网球场',
    opponent: '王五',
    score: '6-1, 6-0',
    result: 'win',
    rating: 4.9
  },
  {
    id: '4',
    title: '地区赛',
    date: '2025-12-20',
    location: '地区体育中心',
    opponent: '赵六',
    score: '6-3, 5-7, 6-4',
    result: 'win',
    rating: 4.7
  },
  {
    id: '5',
    title: '友谊赛',
    date: '2025-12-15',
    location: '阳光网球场',
    opponent: '钱七',
    score: '4-6, 3-6',
    result: 'lose',
    rating: 4.3
  }
]);

// Time range options
const timeRangeOptions = [
  { label: '近1个月', value: '1m' },
  { label: '近3个月', value: '3m' },
  { label: '近6个月', value: '6m' },
  { label: '近12个月', value: '12m' },
  { label: '其他', value: 'other' }
];

// Selected time range
const selectedTimeRange = ref('1m');

// Filtered matches based on selected time range
const filteredMatches = computed(() => {
  // For demo purposes, we'll just return all matches regardless of time range
  // In a real application, you would filter based on the match date and selected time range
  return matchHistory.value;
});

// Select time range
const selectTimeRange = (range: string) => {
  selectedTimeRange.value = range;
};

// View match detail
const viewMatchDetail = (id: string) => {
  router.push(`/profile/match-history/${id}`);
};

// Go back
const goBack = () => {
  router.back();
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