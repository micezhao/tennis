<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased pb-24">
    <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div class="w-10"></div>
      <button @click="goToEdit" class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
        <span class="material-symbols-outlined">settings</span>
      </button>
    </header>

    <section class="flex flex-col items-center pt-6 pb-6 px-4">
      <div class="relative group cursor-pointer">
        <div class="w-28 h-28 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden shadow-lg border-4 border-white dark:border-surface-dark bg-center bg-cover" 
             style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLm2U7ucaVmUGjFFkxeZo9pohZEEb55XxguzkxvWmM7WIhHRyITlhXiUoZ7259AlsmJ3mTlGO-XAyzToprvHwEzyi5i0vZbSyHLSBkFZKtLU5YbMAMPZ5HVGdnyl3RshT-MCDzMcRc7TxrACe9aiHzpLJ1YikX2ZccWmsNWGoSi29HCuhS_ydnM3UiMIq3KP0shMpIvmtOqeOlzzByDPCSB5ZAEkWgwEdFNfssbKnyu7R5DjG-aS-DfqGlUnGQw3lzsmSHJC9hPUo');">
        </div>
        <router-link to="/profile/edit" class="absolute bottom-0 right-0 bg-primary text-black rounded-full p-1.5 border-2 border-white dark:border-surface-dark flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
          <span class="material-symbols-outlined text-[16px]">edit</span>
        </router-link>
      </div>
      <div class="mt-4 flex flex-col items-center">
        <h2 class="text-2xl font-bold text-text-main dark:text-white mb-2">网球爱好者</h2>
        <router-link to="/profile/skill-history" class="group flex items-center gap-2 pl-4 pr-2 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
          <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          <span class="text-text-muted dark:text-gray-300 font-medium text-sm">NTRP 4.0 | 高级初学者</span>
          <span class="material-symbols-outlined text-[18px] text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
        </router-link>
      </div>
    </section>

    <section class="px-4 mb-6">
      <div class="flex flex-wrap gap-3 bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5">
        <div class="flex-1 flex flex-col items-center justify-center text-center p-2">
          <p class="text-primary text-2xl font-bold tracking-tight">24</p>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">比赛</p>
        </div>
        <div class="w-px bg-gray-100 dark:bg-white/10 my-2"></div>
        <div class="flex-1 flex flex-col items-center justify-center text-center p-2">
          <p class="text-primary text-2xl font-bold tracking-tight">65%</p>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">胜率</p>
        </div>
        <div class="w-px bg-gray-100 dark:bg-white/10 my-2"></div>
        <div class="flex-1 flex flex-col items-center justify-center text-center p-2">
          <p class="text-primary text-2xl font-bold tracking-tight">2</p>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">预订</p>
        </div>
      </div>
    </section>

    <section class="px-4 mb-6">
      <h3 class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-1">我的活动</h3>
      <div class="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
        <router-link to="/profile/match-history" class="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-primary/20 dark:bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary">
              <span class="material-symbols-outlined">history</span>
            </div>
            <span class="font-medium text-base text-text-main dark:text-white">活动记录</span>
          </div>
          <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
        </router-link>
        <div class="h-px bg-gray-100 dark:bg-white/5 mx-4"></div>
        <router-link to="/profile/court-bookings" class="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <span class="material-symbols-outlined">calendar_month</span>
            </div>
            <span class="font-medium text-base text-text-main dark:text-white">场地预订</span>
          </div>
          <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
        </router-link>
        <div class="h-px bg-gray-100 dark:bg-white/5 mx-4"></div>
        <router-link to="/profile/my-orders" class="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <span class="material-symbols-outlined">shopping_bag</span>
            </div>
            <span class="font-medium text-base text-text-main dark:text-white">我的订单</span>
          </div>
          <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
        </router-link>
      </div>
    </section>

    <section class="px-4 mb-6">
      <h3 class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-1">社区</h3>
      <div class="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
        <button class="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <span class="material-symbols-outlined">groups</span>
            </div>
            <span class="font-medium text-base text-text-main dark:text-white">我的球队</span>
          </div>
          <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
        </button>
        <div class="h-px bg-gray-100 dark:bg-white/5 mx-4"></div>
        <button class="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
              <span class="material-symbols-outlined">diversity_1</span>
            </div>
            <span class="font-medium text-base text-text-main dark:text-white">好友</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3 新</span>
            <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
          </div>
        </button>
        <div class="h-px bg-gray-100 dark:bg-white/5 mx-4"></div>
        <button class="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
              <span class="material-symbols-outlined">reviews</span>
            </div>
            <span class="font-medium text-base text-text-main dark:text-white">球员评价</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex items-center text-yellow-500 dark:text-yellow-400 gap-0.5 px-2 py-0.5 bg-yellow-50 dark:bg-yellow-900/20 rounded-full">
              <span class="text-xs font-bold">4.9</span>
              <span class="material-symbols-outlined text-[14px] filled">star</span>
            </div>
            <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
          </div>
        </button>
      </div>
    </section>

    <section class="px-4 mb-6">
      <h3 class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-1">账户</h3>
      <div class="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5">
        <button class="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <span class="material-symbols-outlined">credit_card</span>
            </div>
            <span class="font-medium text-base text-text-main dark:text-white">支付方式</span>
          </div>
          <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
        </button>
        <div class="h-px bg-gray-100 dark:bg-white/5 mx-4"></div>
        <button class="w-full flex items-center justify-between p-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500">
              <span class="material-symbols-outlined">logout</span>
            </div>
            <span class="font-medium text-base text-red-500">退出登录</span>
          </div>
        </button>
      </div>
    </section>

    <nav class="fixed bottom-0 w-full z-50 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6">
      <div class="flex justify-between items-center max-w-md mx-auto">
        <!-- 球场 -->
        <router-link to="/courts" class="flex flex-col items-center gap-1 p-2 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl">search</span>
          <span class="text-[10px] font-medium">球场</span>
        </router-link>
        <!-- 约球 -->
        <router-link to="/matches" class="flex flex-col items-center gap-1 p-2 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl">sports_tennis</span>
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
        <router-link to="/profile" class="flex flex-col items-center gap-1 p-2 text-primary dark:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl fill-current">person</span>
          <span class="text-[10px] font-medium">个人</span>
        </router-link>
      </div>
      <div class="h-6 w-full"></div> <!-- Safe area spacing -->
    </nav>
    <div class="h-24"></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToEdit = () => {
  router.push('/profile/edit');
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
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
