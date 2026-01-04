<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark antialiased pb-24 font-display">
    <!-- Top App Bar -->
    <header class="sticky top-0 z-50 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div class="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        <button @click="router.back()" class="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main-light dark:text-text-main-dark">
          <span class="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 class="text-lg font-bold tracking-tight text-center flex-1">Skill Assessment & History</h1>
        <button class="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main-light dark:text-text-main-dark">
          <span class="material-symbols-outlined">more_horiz</span>
        </button>
      </div>
    </header>

    <main class="max-w-md mx-auto px-4 py-6 space-y-8">
      <!-- Upload Section -->
      <section class="flex flex-col gap-4">
        <div class="flex justify-between items-end">
          <h2 class="text-2xl font-bold tracking-tight text-text-main-light dark:text-text-main-dark">
            New Assessment
          </h2>
          <span class="text-xs font-medium px-2 py-1 bg-primary/20 text-green-800 dark:text-green-300 rounded-full mb-1">AI Powered</span>
        </div>
        <div class="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl dark:shadow-soft transition-all active:scale-[0.98]">
          <!-- Background Image Overlay -->
          <div class="absolute inset-0 opacity-40 mix-blend-overlay" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvv-j_xcCKv_zhIeQ19qfx9SMKnBVLMyPu5tKqL9_nQ-c2MjOM9BvBEqZQSUxzin2GpAtbrGpVP_UOvilTglmjU84W2RZIe_3D8EEweqFcwF74hN4bcrhUMVx8n2FspaGRHM3Zwtfd2xOy8WeKt72frpjR2KrVNpjFCoHiWqPLf5-otXjmvJAtymS8TDgUuSKxe2wm28_pPY5r_SSxCpqKLYVtSwPqxOJ7M_erBnCsuufdEut6ph9NWc0Nnes7IPG25ZyJlA1fmrg'); background-size: cover; background-position: center;"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="relative z-10 p-6 flex flex-col items-center justify-center gap-4 text-center min-h-[200px]">
            <div class="size-14 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(19,236,73,0.4)] group-hover:scale-110 transition-transform duration-300">
              <span class="material-symbols-outlined text-black text-3xl">videocam</span>
            </div>
            <div>
              <h3 class="text-white text-lg font-bold mb-1">Upload or Record Video</h3>
              <p class="text-gray-300 text-sm max-w-[240px] mx-auto">AI will analyze 6 key technical indicators including forehand, backhand, serve, etc.</p>
            </div>
          </div>
          <!-- Corner Decoration -->
          <div class="absolute top-4 right-4 flex gap-2">
            <span class="material-symbols-outlined text-white/50 text-xl">upload_file</span>
          </div>
        </div>
      </section>

      <!-- Latest Assessment Results -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-text-main-light dark:text-text-main-dark">Latest Analysis</h2>
          <p class="text-xs text-text-sub-light dark:text-text-sub-dark">Oct 24, 2023</p>
        </div>
        <!-- Main Score Card -->
        <div class="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-card border border-gray-100 dark:border-gray-800 relative overflow-hidden">
          <!-- Decorative background blob -->
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div class="flex flex-col gap-6">
            <!-- Overall Score Header -->
            <div class="flex items-center gap-6">
              <div class="relative flex items-center justify-center size-24 shrink-0">
                <!-- Circular Progress SVG -->
                <svg class="transform -rotate-90 size-full" viewbox="0 0 100 100">
                  <circle class="dark:stroke-gray-700" cx="50" cy="50" fill="none" r="45" stroke="#e5e7eb" stroke-width="8"></circle>
                  <circle cx="50" cy="50" fill="none" r="45" stroke="#13ec49" stroke-dasharray="283" stroke-dashoffset="42" stroke-linecap="round" stroke-width="8"></circle>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center text-text-main-light dark:text-text-main-dark">
                  <span class="text-3xl font-black leading-none">85</span>
                  <span class="text-[10px] font-medium text-text-sub-light uppercase tracking-wider mt-0.5">Score</span>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold mb-1">Advanced (NTRP 4.0)</h3>
                <p class="text-sm text-text-sub-light dark:text-text-sub-dark leading-relaxed">
                  Your forehand stability is excellent. Suggest strengthening <span class="text-primary font-bold mx-1">net volley</span> footwork training.
                </p>
              </div>
            </div>
            <div class="h-px w-full bg-gray-100 dark:bg-gray-800"></div>
            <!-- Detailed Stats Grid -->
            <div class="grid grid-cols-3 gap-3">
              <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center p-2 rounded-lg bg-background-light dark:bg-black/20">
                <span class="text-xs text-text-sub-light dark:text-text-sub-dark mb-1">{{ stat.label }}</span>
                <span class="text-lg font-bold text-text-main-light dark:text-text-main-dark">{{ stat.score }}</span>
                <div class="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                  <div class="h-full rounded-full" :class="stat.color" :style="{ width: stat.score + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Progress Chart Section -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-text-main-light dark:text-text-main-dark">Growth Curve</h2>
          <select class="bg-transparent text-sm text-text-sub-light dark:text-text-sub-dark font-medium focus:outline-none cursor-pointer">
            <option>Last 6 Months</option>
            <option>Last 1 Year</option>
          </select>
        </div>
        <div class="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-card border border-gray-100 dark:border-gray-800">
          <div class="flex items-baseline gap-2 mb-4">
            <span class="text-3xl font-black text-text-main-light dark:text-text-main-dark">+12%</span>
            <span class="text-sm text-primary font-medium">↑ Improving</span>
          </div>
          <!-- Chart SVG Placeholder -->
          <div class="w-full h-[180px] relative">
             <svg class="w-full h-full overflow-visible" viewbox="0 0 350 150">
                <!-- Grid Lines -->
                <line class="dark:stroke-gray-800" stroke="#e5e7eb" stroke-width="1" x1="0" x2="350" y1="150" y2="150"></line>
                <line class="dark:stroke-gray-800" stroke="#e5e7eb" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="350" y1="100" y2="100"></line>
                <line class="dark:stroke-gray-800" stroke="#e5e7eb" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="350" y1="50" y2="50"></line>
                <line class="dark:stroke-gray-800" stroke="#e5e7eb" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="350" y1="0" y2="0"></line>
                <!-- Gradient Definition -->
                <defs>
                <lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#13ec49" stop-opacity="0.3"></stop>
                <stop offset="100%" stop-color="#13ec49" stop-opacity="0"></stop>
                </lineargradient>
                </defs>
                <!-- Area Path -->
                <path d="M0,120 Q50,110 70,90 T140,85 T210,60 T280,50 T350,30 V150 H0 Z" fill="url(#chartGradient)"></path>
                <!-- Line Path -->
                <path d="M0,120 Q50,110 70,90 T140,85 T210,60 T280,50 T350,30" fill="none" stroke="#13ec49" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                <!-- Data Points -->
                <circle cx="0" cy="120" fill="#ffffff" r="4" stroke="#13ec49" stroke-width="2"></circle>
                <circle cx="70" cy="90" fill="#ffffff" r="4" stroke="#13ec49" stroke-width="2"></circle>
                <circle cx="140" cy="85" fill="#ffffff" r="4" stroke="#13ec49" stroke-width="2"></circle>
                <circle cx="210" cy="60" fill="#ffffff" r="4" stroke="#13ec49" stroke-width="2"></circle>
                <circle cx="280" cy="50" fill="#ffffff" r="4" stroke="#13ec49" stroke-width="2"></circle>
                <circle cx="350" cy="30" fill="#13ec49" r="6" stroke="#ffffff" stroke-width="2"></circle>
            </svg>
          </div>
          <!-- X Axis Labels -->
          <div class="flex justify-between text-xs text-text-sub-light dark:text-text-sub-dark mt-4 font-medium">
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
          </div>
        </div>
      </section>

      <!-- History List -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-text-main-light dark:text-text-main-dark">History</h2>
          <button class="text-sm text-primary font-bold">View All</button>
        </div>
        <div class="flex flex-col gap-3">
          <div v-for="(item, index) in history" :key="index" class="flex items-center gap-4 bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-gray-50 dark:border-gray-800">
            <div class="relative size-16 shrink-0 rounded-lg overflow-hidden bg-gray-200">
              <img :src="item.image" alt="Video thumbnail" class="w-full h-full object-cover" />
              <div class="absolute inset-0 flex items-center justify-center bg-black/30">
                <span class="material-symbols-outlined text-white text-xl">play_circle</span>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-bold text-text-main-light dark:text-text-main-dark truncate">{{ item.title }}</h4>
              <p class="text-xs text-text-sub-light dark:text-text-sub-dark mt-1">{{ item.date }}</p>
            </div>
            <div class="flex flex-col items-end gap-1">
              <span class="text-lg font-bold text-text-main-light dark:text-text-main-dark">{{ item.score }}</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded font-medium" :class="item.statusClass">{{ item.status }}</span>
            </div>
          </div>
        </div>
      </section>
    </main>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const stats = ref([
  { label: 'Forehand', score: 88, color: 'bg-primary' },
  { label: 'Backhand', score: 82, color: 'bg-yellow-400' },
  { label: 'Serve', score: 79, color: 'bg-orange-400' },
  { label: 'Baseline', score: 85, color: 'bg-primary' },
  { label: 'Net', score: 72, color: 'bg-red-400' },
  { label: 'Movement', score: 90, color: 'bg-primary' }
]);

const history = ref([
  {
    title: 'Forehand Drill - 200 Balls',
    date: '2023-09-15 · 14:30',
    score: 82,
    status: 'Good',
    statusClass: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDM9z7aEFPjL9XB46qUbf9EkjmoM6P0hi8itQPrXkql6wUIqxuzG4j8rRROVAFfqR9Vih2m1Nu6Ftc_0SyUInAyxg-Bk1aCE7MVoFAf5SFfHX90fzmHBHKpi0zno5nZntjq9ETzCZQRMT9mtBsAZ4AqxK_x9kQOH5CqfZpahAgoxnFsqVZbYMAy0eCxCnulj5dg_dHjaWEqxyjccsjGUue_NP8DTbcmO9obQEKMx-Okn_hRo2rDkk3YPunmkk-SUxmj4yLtIEYUVQ'
  },
  {
    title: 'Saturday Club Friendly',
    date: '2023-08-28 · 10:00',
    score: 79,
    status: 'Average',
    statusClass: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbDzzEJF22HTCbmAKsq_9M3hEKK-HN9KGMggBCRcTRUEAXBfAhRTJ4xoCNMAqF63zCLNJ3lU5DTzICrw1Lsw6TYjgsmTu2dk5mrepWf_EzJ4uNfIYfoLr0XSiGC4U_yPo1sk69okJWbDSPyMrtW1rt3PO47hw1B8bpINxaBomYcZDjG6Dieh2Ww18zWEKh3QaVZ_i8czPIJsFjCvTqFamyXvNUTQ3FCqgDlc5AxZz-BCcUFmO2Qwd4yGh6Ly7bNO4T5Almt7mm10Y'
  },
  {
    title: 'Serve Test',
    date: '2023-08-05 · 16:45',
    score: 75,
    status: 'Stable',
    statusClass: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDM9z7aEFPjL9XB46qUbf9EkjmoM6P0hi8itQPrXkql6wUIqxuzG4j8rRROVAFfqR9Vih2m1Nu6Ftc_0SyUInAyxg-Bk1aCE7MVoFAf5SFfHX90fzmHBHKpi0zno5nZntjq9ETzCZQRMT9mtBsAZ4AqxK_x9kQOH5CqfZpahAgoxnFsqVZbYMAy0eCxCnulj5dg_dHjaWEqxyjccsjGUue_NP8DTbcmO9obQEKMx-Okn_hRo2rDkk3YPunmkk-SUxmj4yLtIEYUVQ'
  }
]);
</script>
