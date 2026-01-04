<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased pb-24">
    <!-- Top App Bar -->
    <header class="sticky top-0 z-50 flex items-center justify-between bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 border-b border-border-light dark:border-border-dark transition-colors">
      <button @click="router.back()" class="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
        <span class="material-symbols-outlined text-text-main dark:text-white" style="font-size: 24px;">arrow_back_ios_new</span>
      </button>
      <h1 class="text-lg font-bold leading-tight tracking-tight text-center flex-1 pr-10">编辑个人资料</h1>
    </header>

    <!-- Main Content Scroll Area -->
    <main class="flex-1 w-full max-w-md mx-auto">
      <!-- Profile Header / Avatar -->
      <div class="flex flex-col items-center pt-6 pb-6 px-4">
        <div class="relative group cursor-pointer">
          <div class="bg-center bg-no-repeat bg-cover rounded-full h-28 w-28 shadow-lg ring-4 ring-white dark:ring-surface-dark transition-all" 
               style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBy9FRvrCmu_jsZUPTDLMa3Ru-j5pHeFPdWqtt7iEFzHDRk6rSJ7-wOj7wAoj46LkQMyxJftSgJ_TbFUvhJmBDKUx3_Ic9qKF_H4rBx7eW33-WYB2rizS3wvikmBL0myHnZ_F5ccCG5OfT7X4AGc3daJOTWDR3o785O_2SH4_x_9baiSq-kUth4BRlmU_PVnbeY6xZVotarWLaaKnIvjsUPMR3XBMBMVGhdgGe20L3kWQR0ANGoyTh461ErpGLm-iTHdk8p-5wX3ZU");'>
          </div>
          <div class="absolute bottom-0 right-0 bg-primary p-2 rounded-full shadow-md flex items-center justify-center border-2 border-white dark:border-surface-dark">
            <span class="material-symbols-outlined text-black" style="font-size: 18px;">photo_camera</span>
          </div>
        </div>
        <button class="mt-3 text-primary font-semibold text-sm hover:underline">更换头像</button>
      </div>

      <!-- Section: Basic Info -->
      <section class="px-4 mb-6">
        <h2 class="text-lg font-bold px-1 mb-3">基本信息</h2>
        <div class="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-border-light dark:border-border-dark space-y-4">
          <!-- Username Input -->
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-medium text-text-main dark:text-gray-200">用户名</label>
            <input v-model="form.username" class="w-full rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark px-4 py-3 text-base text-text-main dark:text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder-text-muted" type="text" />
          </div>
          <!-- Contact Input -->
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-medium text-text-main dark:text-gray-200">联系方式</label>
            <input v-model="form.contact" class="w-full rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark px-4 py-3 text-base text-text-main dark:text-white focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder-text-muted" type="tel" />
          </div>
        </div>
      </section>

      <!-- Section: Playing Style -->
      <section class="px-4 mb-6">
        <h2 class="text-lg font-bold px-1 mb-3">打球风格</h2>
        <div class="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark space-y-6">
          <!-- Hand Preference -->
          <div>
            <p class="text-sm font-medium text-text-muted mb-3 uppercase tracking-wider text-xs">惯用手</p>
            <div class="flex gap-3">
              <label class="cursor-pointer flex-1">
                <input v-model="form.hand" value="right" class="peer sr-only" name="hand" type="radio"/>
                <div class="flex items-center justify-center py-2.5 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main dark:text-gray-300 font-medium peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-all text-sm">
                  右手
                </div>
              </label>
              <label class="cursor-pointer flex-1">
                <input v-model="form.hand" value="left" class="peer sr-only" name="hand" type="radio"/>
                <div class="flex items-center justify-center py-2.5 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main dark:text-gray-300 font-medium peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-all text-sm">
                  左手
                </div>
              </label>
            </div>
          </div>
          <!-- Backhand Style -->
          <div>
            <p class="text-sm font-medium text-text-muted mb-3 uppercase tracking-wider text-xs">反拍类型</p>
            <div class="flex gap-3">
              <label class="cursor-pointer flex-1">
                <input v-model="form.backhand" value="one" class="peer sr-only" name="backhand" type="radio"/>
                <div class="flex items-center justify-center py-2.5 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main dark:text-gray-300 font-medium peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-all text-sm">
                  单手反拍
                </div>
              </label>
              <label class="cursor-pointer flex-1">
                <input v-model="form.backhand" value="two" class="peer sr-only" name="backhand" type="radio"/>
                <div class="flex items-center justify-center py-2.5 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main dark:text-gray-300 font-medium peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-all text-sm">
                  双手反拍
                </div>
              </label>
            </div>
          </div>
          <!-- Spin Style -->
          <div>
            <p class="text-sm font-medium text-text-muted mb-3 uppercase tracking-wider text-xs">击球风格</p>
            <div class="flex gap-3">
              <label class="cursor-pointer flex-1">
                <input v-model="form.spin" value="topspin" class="peer sr-only" name="spin" type="radio"/>
                <div class="flex items-center justify-center py-2.5 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main dark:text-gray-300 font-medium peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-all text-sm">
                  上旋
                </div>
              </label>
              <label class="cursor-pointer flex-1">
                <input v-model="form.spin" value="flat" class="peer sr-only" name="spin" type="radio"/>
                <div class="flex items-center justify-center py-2.5 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main dark:text-gray-300 font-medium peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-all text-sm">
                  平击
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Preferences -->
      <section class="px-4 mb-6">
        <h2 class="text-lg font-bold px-1 mb-3">偏好设定</h2>
        <div class="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark">
          <!-- Court Preference -->
          <button class="w-full flex items-center justify-between p-4 hover:bg-background-light dark:hover:bg-background-dark transition-colors text-left group">
            <div class="flex items-center gap-3">
              <div class="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary dark:text-primary">
                <span class="material-symbols-outlined" style="font-size: 18px;">location_on</span>
              </div>
              <span class="text-base font-medium">球场区域偏好</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm text-text-muted">朝阳区</span>
              <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors" style="font-size: 20px;">chevron_right</span>
            </div>
          </button>
          <!-- Opponent Style Preference -->
          <button class="w-full flex items-center justify-between p-4 hover:bg-background-light dark:hover:bg-background-dark transition-colors text-left group">
            <div class="flex items-center gap-3">
              <div class="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary dark:text-primary">
                <span class="material-symbols-outlined" style="font-size: 18px;">sports_tennis</span>
              </div>
              <span class="text-base font-medium">对手风格偏好</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm text-text-muted">底线型</span>
              <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors" style="font-size: 20px;">chevron_right</span>
            </div>
          </button>
        </div>
      </section>
    </main>

    <!-- Sticky Footer -->
    <div class="fixed bottom-0 left-0 w-full z-40 px-4 py-4 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-t border-border-light dark:border-border-dark">
      <div class="max-w-md mx-auto">
        <button @click="saveProfile" class="w-full bg-primary hover:bg-primary/90 text-black font-bold text-lg h-12 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
          <span class="material-symbols-outlined">save</span>
          保存
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  username: 'TennisFan99',
  contact: '+86 138 0000 0000',
  hand: 'right',
  backhand: 'two',
  spin: 'topspin'
})

const saveProfile = () => {
  // Implement save logic here
  console.log('Saving profile:', form.value)
  router.back()
}
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
