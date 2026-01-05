<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-50 antialiased pb-10">
    <div class="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-transparent dark:border-white/5 transition-all">
      <div class="flex items-center px-4 py-3 justify-between max-w-md mx-auto">
        <button @click="router.push('/matches')" class="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span class="material-symbols-outlined text-slate-900 dark:text-white" style="font-size: 24px;">arrow_back_ios_new</span>
        </button>
        <h2 class="text-slate-900 dark:text-white text-base font-bold tracking-wide">活动详情</h2>
        <div class="size-10"></div>
      </div>
    </div>
    <div class="max-w-md mx-auto px-5 pt-6 flex flex-col gap-6">
      <div class="flex flex-col items-center justify-center text-center py-4">
        <div class="relative mb-5">
          <div class="absolute inset-0 bg-primary/30 rounded-full blur-3xl transform scale-150"></div>
          <div class="relative bg-surface-light dark:bg-surface-dark rounded-full p-2 shadow-glow ring-4 ring-primary/10">
            <span class="material-symbols-outlined text-primary filled" style="font-size: 64px;">check_circle</span>
          </div>
        </div>
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">报名成功！</h1>
        <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">
          您已成功报名该活动
        </p>
      </div>
      <div class="bg-surface-light dark:bg-surface-dark rounded-3xl shadow-soft border border-white/50 dark:border-white/5 overflow-hidden">
        <div class="px-5 py-4 border-b border-slate-50 dark:border-white/5 flex items-center gap-4">
          <img alt="组织者头像" class="size-12 rounded-full border-2 border-slate-100 dark:border-slate-700 object-cover shadow-sm shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBI338_kh4WMsh9aHQevbHFIRJ0oK1qQJOlXw6a-WN0Gq1cZP5i-mpsZ48H2h0VppHhv4QmuXtoVLLonXSkavuJPe1Ltj9405z9pLpdR6U7tBj3OmohAmoCEx7-6GOprY_xsG990T-O4AhMPzJ_sV-gMHXoXV3OMZL0wucszkzvCdlKrwORPVYwwtCUOWkgR_rVx1g0zHG_mh8A14h2SZfnXMGyVtMeOaFjv69d1BNsO2mlRCebTxhjt_HmWJ7yfKepxaVzQnSN2g"/>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="bg-primary/10 text-primary-dark dark:text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">已确认</span>
              <span class="text-xs text-slate-400 dark:text-slate-500 truncate">公开活动</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white leading-tight truncate">周末网球友谊赛</h3>
          </div>
        </div>
        <div class="p-5 flex flex-col gap-5">
          <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-6">
            <div class="size-10 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 shrink-0">
              <span class="material-symbols-outlined" style="font-size: 20px;">calendar_clock</span>
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 dark:text-slate-500 mb-0.5 uppercase tracking-wider">时间</p>
              <div class="flex flex-wrap items-baseline gap-x-2">
                <p class="text-sm font-bold text-slate-900 dark:text-white">10月24日 (周六)</p>
                <p class="text-sm font-medium text-slate-500">09:00 - 11:00</p>
              </div>
            </div>
            <div class="size-10 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 shrink-0">
              <span class="material-symbols-outlined filled" style="font-size: 20px;">location_on</span>
            </div>
            <div class="min-w-0">
              <p class="text-xs font-bold text-slate-400 dark:text-slate-500 mb-0.5 uppercase tracking-wider">地点</p>
              <p class="text-sm font-bold text-slate-900 dark:text-white mb-3 truncate">朝阳公园网球中心</p>
              <div class="w-full h-24 rounded-2xl bg-slate-100 dark:bg-white/5 relative overflow-hidden group shadow-inner">
                <img alt="地图预览" class="w-full h-full object-cover opacity-80 dark:opacity-60 grayscale-[10%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB26HtzHADOqjjPQtDttdpfcpPIbAQHtS1xT1jF2MKl1BZifckMyXCKoo50gd6ehQO09ttnrsYTCqqV4j2311XoHaBsbH_gUq-nlmgjdTg7_eqsViOPSiJEb877KkRY7Ip_icT5kSvusnCAgCNG70JKsqSJ-jKQ1vTq4v3bh_lRtAqO-de_XyB6InjNHG3w_2__DRIS_nNVbZXLFH20e1LFoz21fVijCPDUmrHsYRJTvZ3eo1l5n_6-xdAxnNc2NrGuN_c40rML0fw"/>
                <div class="absolute inset-0 bg-black/5 dark:bg-black/20"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="bg-white/95 dark:bg-surface-dark/95 backdrop-blur shadow-sm text-xs font-bold px-3 py-1.5 rounded-full text-slate-800 dark:text-white flex items-center gap-1.5 hover:scale-105 transition-transform">
                    <span class="material-symbols-outlined text-primary text-[16px]">navigation</span>
                    导航前往
                  </span>
                </div>
              </div>
            </div>
            <div class="size-10 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 shrink-0">
              <span class="material-symbols-outlined" style="font-size: 20px;">groups</span>
            </div>
            <div>
              <div class="flex justify-between items-end mb-2">
                <p class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">已报名</p>
                <p class="text-sm font-bold text-slate-900 dark:text-white">4 <span class="text-slate-400 font-normal text-xs">/ 4 人</span></p>
              </div>
              <div class="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                <div class="bg-primary h-full rounded-full shadow-[0_0_12px_rgba(19,236,73,0.6)]" style="width: 100%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-surface-light dark:bg-surface-dark rounded-3xl shadow-soft border border-white/50 dark:border-white/5 p-6 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div class="flex items-center justify-between mb-4 relative z-10">
          <div class="flex items-center gap-4">
            <div class="size-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-primary-dark dark:text-primary filled" style="font-size: 24px;">notifications_active</span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">设置提醒</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">活动开始前提醒您热身</p>
            </div>
          </div>
          <button 
            @click="showWechatReminderPicker"
            class="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md shadow-primary/30 transition-all active:scale-95"
          >
            去设置
          </button>
        </div>
      </div>

      <!-- WeChat Reminder Picker (Simulated) -->
      <div v-if="showPicker" class="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-white/10 p-4 rounded-t-2xl shadow-xl z-50 animate-slide-up">
        <div class="flex justify-between items-center mb-4">
          <h4 class="text-lg font-bold text-slate-900 dark:text-white">选择提醒时间</h4>
          <button @click="showPicker = false" class="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300">
            <span class="material-symbols-outlined" style="font-size: 24px;">close</span>
          </button>
        </div>
        <div class="flex flex-col gap-3">
          <button class="w-full py-3 px-4 bg-primary/10 text-primary-dark dark:text-primary rounded-lg text-center font-medium">
            提前1小时
          </button>
          <button class="w-full py-3 px-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-lg text-center font-medium">
            提前30分钟
          </button>
          <button class="w-full py-3 px-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-lg text-center font-medium">
            提前15分钟
          </button>
          <button class="w-full py-3 px-4 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-lg text-center font-medium">
            提前5分钟
          </button>
        </div>
        <div class="flex gap-3 mt-4">
          <button @click="showPicker = false" class="flex-1 py-3 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-lg text-center font-medium">
            取消
          </button>
          <button @click="confirmReminder" class="flex-1 py-3 bg-primary text-white rounded-lg text-center font-medium">
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const showPicker = ref(false);

const showWechatReminderPicker = () => {
  showPicker.value = true;
};

const confirmReminder = () => {
  showPicker.value = false;
  // 这里可以添加确认后的逻辑
};
</script>

<style scoped>
.filled { font-variation-settings: 'FILL' 1; }
</style>
