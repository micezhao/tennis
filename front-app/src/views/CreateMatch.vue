<template>
  <div class="font-display bg-background-light dark:bg-background-dark text-text-main dark:text-white antialiased transition-colors duration-200 min-h-screen flex flex-col pb-24">
    <!-- Top App Bar -->
    <header class="sticky top-0 z-50 flex items-center bg-surface-light dark:bg-surface-dark p-4 shadow-sm transition-colors">
      <button @click="router.back()" class="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
        <span class="material-symbols-outlined text-text-main dark:text-white" style="font-size: 24px;">arrow_back</span>
      </button>
      <h1 class="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-text-main dark:text-white pr-10">
        发布约球
      </h1>
    </header>

    <!-- Progress Indicators -->
    <div class="flex w-full flex-row items-center justify-center gap-3 py-4 bg-background-light dark:bg-background-dark">
      <div class="h-1.5 w-8 rounded-full bg-primary"></div>
      <div class="h-1.5 w-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
      <div class="h-1.5 w-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    </div>

    <main class="flex flex-col gap-6 px-4">
      <!-- Section 1: Location -->
      <section>
        <h2 class="text-xl font-bold leading-tight text-text-main dark:text-white mb-3">球场与时间</h2>
        <!-- Court Card -->
        <div class="rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
          <div class="flex items-start justify-between gap-4">
            <div class="flex flex-1 flex-col gap-3">
              <div class="flex flex-col gap-1">
                <h3 class="text-base font-bold leading-tight text-text-main dark:text-white">奥林匹克森林公园网球中心</h3>
                <p class="text-sm text-text-light dark:text-gray-400">朝阳区科荟路33号</p>
              </div>
              <button class="flex items-center gap-1 w-fit rounded-lg bg-background-light dark:bg-background-dark px-3 py-1.5 text-xs font-medium text-text-main dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span class="material-symbols-outlined text-primary" style="font-size: 16px;">map</span>
                <span>更换球场</span>
              </button>
            </div>
            <div class="h-20 w-24 rounded-lg bg-cover bg-center shrink-0" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgbwFbZdibVG-ioZlTIvP5ffsBZuFbVjyx-ovghOd8wqSYzxY02e3OK70PlHJcKo3-V1uYEa6YTvSfmcua-V4p-Jrw6J8HdM-aACpWafaTo8SyMaO-DmapjlrvmKpilhWlaAopGNwgY4GltRQ3TQHELjfwOwFJ4OXVXuE60JaFhd9AuD08N4ftRzDhNazYAqp7g2zNooq-OoY9PHfRETMA7eW2dovxDIcNJ8kLNTjc9PIdKtgbrdzXDwUBIQNLhYk5RTbfYCOpZ1Q");'></div>
          </div>
        </div>
      </section>

      <!-- Section 2: Date & Time Picker -->
      <section class="rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800">
        <!-- Month Navigator -->
        <div class="flex items-center justify-between mb-4">
          <button class="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span class="material-symbols-outlined text-text-main dark:text-white">chevron_left</span>
          </button>
          <span class="text-base font-bold text-text-main dark:text-white">2023年 10月</span>
          <button class="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span class="material-symbols-outlined text-text-main dark:text-white">chevron_right</span>
          </button>
        </div>
        <!-- Calendar Days (Simplified for UI view) -->
        <div class="grid grid-cols-7 gap-y-2 mb-6">
          <!-- Weekday Headers -->
          <div class="text-center text-xs font-medium text-gray-400">S</div>
          <div class="text-center text-xs font-medium text-gray-400">M</div>
          <div class="text-center text-xs font-medium text-gray-400">T</div>
          <div class="text-center text-xs font-medium text-gray-400">W</div>
          <div class="text-center text-xs font-medium text-gray-400">T</div>
          <div class="text-center text-xs font-medium text-gray-400">F</div>
          <div class="text-center text-xs font-medium text-gray-400">S</div>
          <!-- Days -->
          <div class="flex justify-center"><span class="flex size-8 items-center justify-center rounded-full text-sm text-gray-400">29</span></div>
          <div class="flex justify-center"><span class="flex size-8 items-center justify-center rounded-full text-sm text-gray-400">30</span></div>
          <div class="flex justify-center"><span class="flex size-8 items-center justify-center rounded-full text-sm font-medium text-text-main dark:text-white">1</span></div>
          <div class="flex justify-center"><span class="flex size-8 items-center justify-center rounded-full text-sm font-medium text-text-main dark:text-white">2</span></div>
          <div class="flex justify-center"><span class="flex size-8 items-center justify-center rounded-full text-sm font-medium text-text-main dark:text-white">3</span></div>
          <div class="flex justify-center"><span class="flex size-8 items-center justify-center rounded-full text-sm font-medium text-text-main dark:text-white">4</span></div>
          <!-- Selected Day -->
          <div class="flex justify-center"><span class="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-black shadow-md shadow-primary/30">5</span></div>
        </div>
        <!-- Time Duration -->
        <div class="flex flex-col gap-3 border-t border-gray-100 dark:border-gray-800 pt-4">
          <label class="text-sm font-medium text-text-light dark:text-gray-400">时段</label>
          <div class="flex items-center gap-3">
            <div class="flex-1 rounded-lg bg-background-light dark:bg-background-dark p-3 text-center text-lg font-semibold text-text-main dark:text-white border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
              18:00
            </div>
            <span class="text-gray-400">-</span>
            <div class="flex-1 rounded-lg bg-background-light dark:bg-background-dark p-3 text-center text-lg font-semibold text-text-main dark:text-white border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
              20:00
            </div>
          </div>
          <p class="text-xs text-orange-500 mt-1 flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">warning</span>
            球场营业至 22:00
          </p>
        </div>
      </section>

      <!-- Section 3: Match Details -->
      <section>
        <h2 class="text-xl font-bold leading-tight text-text-main dark:text-white mb-3">活动详情</h2>
        <div class="flex flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800">
          <!-- Match Type -->
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-text-light dark:text-gray-400">模式</label>
            <div class="flex gap-2">
              <button class="flex-1 rounded-lg bg-primary py-2 text-sm font-bold text-black shadow-sm transition-colors">单打</button>
              <button class="flex-1 rounded-lg bg-background-light dark:bg-background-dark py-2 text-sm font-medium text-text-main dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors">双打</button>
              <button class="flex-1 rounded-lg bg-background-light dark:bg-background-dark py-2 text-sm font-medium text-text-main dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors">练球</button>
            </div>
          </div>
          <!-- Level Slider -->
          <div class="flex flex-col gap-3 pt-2">
            <div class="flex justify-between items-center">
              <label class="text-sm font-medium text-text-light dark:text-gray-400">等级要求 (NTRP)</label>
              <span class="text-lg font-bold text-primary">3.0 - 4.0</span>
            </div>
            <div class="relative w-full h-6 flex items-center">
              <input class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" max="70" min="10" type="range" value="30"/>
            </div>
            <div class="flex justify-between text-xs text-gray-400 px-1">
              <span>1.0</span>
              <span>3.0</span>
              <span>5.0</span>
              <span>7.0</span>
            </div>
          </div>
          <!-- Player Count -->
          <div class="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
            <label class="text-sm font-medium text-text-main dark:text-white">招募人数</label>
            <div class="flex items-center gap-4 rounded-lg bg-background-light dark:bg-background-dark p-1">
              <button class="size-8 rounded-md bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span class="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <span class="text-base font-bold w-4 text-center">3</span>
              <button class="size-8 rounded-md bg-primary shadow-sm flex items-center justify-center text-black hover:bg-primary-dark transition-colors">
                <span class="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Cost -->
      <section>
        <h2 class="text-xl font-bold leading-tight text-text-main dark:text-white mb-3">费用分摊</h2>
        <div class="rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800">
          <div class="flex flex-col gap-4">
            <!-- Tabs -->
            <div class="inline-flex rounded-lg bg-background-light dark:bg-background-dark p-1">
              <button class="flex-1 rounded-md bg-white dark:bg-surface-dark py-1.5 px-3 text-sm font-bold text-text-main dark:text-white shadow-sm transition-colors">AA制</button>
              <button class="flex-1 rounded-md py-1.5 px-3 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">群主请客</button>
              <button class="flex-1 rounded-md py-1.5 px-3 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">定额</button>
            </div>
            <!-- Price Input -->
            <div class="flex items-center justify-between">
              <span class="text-sm text-text-light dark:text-gray-400">预计人均</span>
              <div class="flex items-baseline gap-1">
                <span class="text-sm font-bold text-text-main dark:text-white">¥</span>
                <input class="w-16 bg-transparent text-right text-2xl font-bold text-text-main dark:text-white border-none p-0 focus:ring-0 outline-none" type="number" value="45"/>
                <span class="text-sm text-gray-400">/人</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Description -->
      <section class="mb-4">
        <h2 class="text-xl font-bold leading-tight text-text-main dark:text-white mb-3">备注</h2>
        <textarea class="w-full rounded-xl bg-surface-light dark:bg-surface-dark p-4 text-sm text-text-main dark:text-white placeholder-gray-400 border-none shadow-sm focus:ring-2 focus:ring-primary min-h-[100px] resize-none outline-none" placeholder="写点什么... 例如：带球情况，是否提供水等"></textarea>
      </section>
    </main>

    <!-- Sticky Bottom Action Bar -->
    <div class="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 p-4">
      <div class="mx-auto max-w-md flex items-center justify-between gap-4">
        <div class="flex flex-col">
          <span class="text-xs text-gray-500 dark:text-gray-400">总计费用</span>
          <span class="text-xl font-bold text-text-main dark:text-white">¥180</span>
        </div>
        <button class="flex-1 rounded-full bg-primary h-12 flex items-center justify-center text-base font-bold text-black shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors">
          发布约球
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
/* Custom Slider Styling */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #13ec49;
  cursor: pointer;
  margin-top: -10px;
  border: 2px solid #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: #dbe6de;
  border-radius: 2px;
}
.dark input[type=range]::-webkit-slider-runnable-track {
  background: #2a4030;
}
</style>
