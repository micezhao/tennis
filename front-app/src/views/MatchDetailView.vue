<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary/30 overflow-x-hidden">
    <div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
      <!-- Header -->
      <header class="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-transparent dark:border-white/5 transition-all duration-200">
        <div @click="goBack" class="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer transition-opacity hover:opacity-70">
          <span class="material-symbols-outlined" style="font-size: 24px;">arrow_back_ios</span>
        </div>
        <h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">约球报名</h2>
        <div class="flex w-12 items-center justify-end">
          <button class="flex size-12 shrink-0 items-center justify-end cursor-pointer text-slate-900 dark:text-white transition-opacity hover:opacity-70">
            <span class="material-symbols-outlined" style="font-size: 24px;">ios_share</span>
          </button>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex flex-col gap-4 px-4 pt-2">
        <!-- Event Basic Info Card -->
        <div class="bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden p-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:text-green-300">
              报名中
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">NTRP {{ event.levelMin }}-{{ event.levelMax }}</span>
          </div>
          <h1 class="text-slate-900 dark:text-white text-2xl font-bold leading-tight mb-6">{{ event.title }}</h1>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/10 shrink-0 size-10 text-slate-900 dark:text-white">
                <span class="material-symbols-outlined" style="font-size: 20px;">calendar_month</span>
              </div>
              <div class="flex flex-col pt-0.5">
                <p class="text-slate-900 dark:text-white text-sm font-semibold leading-normal">{{ event.date }}</p>
                <p class="text-slate-500 dark:text-slate-400 text-sm leading-normal">{{ event.time }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/10 shrink-0 size-10 text-slate-900 dark:text-white">
                <span class="material-symbols-outlined" style="font-size: 20px;">location_on</span>
              </div>
              <div class="flex flex-col pt-0.5 flex-1">
                <p class="text-slate-900 dark:text-white text-sm font-semibold leading-normal">{{ event.location.name }}</p>
                <p class="text-slate-500 dark:text-slate-400 text-sm leading-normal">{{ event.location.address }}</p>
              </div>
              <div class="flex items-center justify-center size-8 rounded-full border border-slate-200 dark:border-white/20 text-slate-400 dark:text-slate-500">
                <span class="material-symbols-outlined" style="font-size: 18px;">near_me</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/10 shrink-0 size-10 text-slate-900 dark:text-white">
                <span class="material-symbols-outlined" style="font-size: 20px;">payments</span>
              </div>
              <p class="text-slate-900 dark:text-white text-sm font-semibold leading-normal flex-1">¥{{ event.cost }} / 人 <span class="text-xs font-normal text-slate-500 dark:text-slate-400">(含场地费与新球)</span></p>
            </div>
          </div>
          <div class="mt-8 pt-6 border-t border-slate-100 dark:border-white/10">
            <div class="flex justify-between items-end mb-2">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">当前参与人数</span>
              <div class="text-right">
                <span class="text-lg font-bold text-slate-900 dark:text-white">{{ event.currentParticipants }}</span>
                <span class="text-sm text-slate-400 dark:text-slate-500">/ {{ event.maxParticipants }}</span>
              </div>
            </div>
            <div class="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
              <div class="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out" :style="{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }"></div>
            </div>
            <div class="flex items-center gap-3 mt-4">
              <div class="flex -space-x-2 overflow-hidden">
                <img alt="Participant 1 profile picture" class="inline-block size-8 rounded-full ring-2 ring-white dark:ring-[#1a1a1a] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJoiDGfmib1QaNdSLU79FUvpBdmSFoBcvyqxquILwRmtFxifPe-LV1Bl1rYBnIO3g3I28hGt27Srr15H-iTpZPOvO5ZxNQKa7EWjF8-5p4UR5IEhLJx68jZlFa1Pf6-ehvn0Vq1Gomc5WHKi5wIRYB_ip6sUOvxDfCTip0ROFxnYplIpFwu9INmK9ek4e1zUwukViTDrZFd15wIw4slGtY3_yFfRoAMrRgUltgECehUT-ghFUyh2VDELBA0ZnCmTsMwz5HfFB4JFM" onerror="this.onerror=null; this.src='/images/default-avatar.png'" />
                <img alt="Participant 2 profile picture" class="inline-block size-8 rounded-full ring-2 ring-white dark:ring-[#1a1a1a] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpMLp13m1bIaAb302TpIdMqz03LrjW1rtr-mRFRn5D1lu1cyURZoPOC4b_vUM_WHSe3vbFpBdu0P4yq-Nx0YkWaL5axz5H3sLcgOnxFSOUd1S-YAHbls5-RuJ4Wqk613JKdDL3Fdrz3YSqKI-IVYx2gHqRwjD6enle9OlSED3I2YXuVPER8mnCyXbyQksOrfxLQnU5r5YK2k1QwhNydKGz9tNX_FV2Mf_DiZ6UxpnD1vfGq-bY323lppoazdejdTG3OKLXQfY5IqI" onerror="this.onerror=null; this.src='/images/default-avatar.png'" />
                <img alt="Participant 3 profile picture" class="inline-block size-8 rounded-full ring-2 ring-white dark:ring-[#1a1a1a] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7FhuETe8_oVpuYx_7Db8-LqkPdHMcVjQeXIj_8ua8O0hMud16iquSyZCzIKBRIuKcFIzHkMahKXcewbw1Qyj92iw58zIGxVfaqlvfNECDaHZxzoNPLCiZvxwIjFhWVhaVRcOa6EgpFgA4hjU4bOeQCevYhht9iQWHw2mW50iW6mQBdFdexTIjjxvkfnYu6WGfjl5tls8B7R0BcvB-ldrlLTjYjVMnA11eUjt1UWdiHeaX8qz52xmKe6NfeAiShoPbnga4IfizURc" onerror="this.onerror=null; this.src='/images/default-avatar.png'" />
              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400">仅剩 {{ event.maxParticipants - event.currentParticipants }} 个名额，欲报从速</span>
            </div>
          </div>
        </div>

        <!-- Organizer Info Card -->
        <div class="bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 p-5">
          <div class="flex items-center gap-4 mb-4">
            <div class="relative">
              <img alt="Organizer profile picture" class="size-14 rounded-full object-cover border-2 border-slate-100 dark:border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC7VNB__-EEFsHzIISRPR_bNRdm3nyMabDjpDCaZrNDSo_qMCnf3gcT59LjhK8J92nMN7Ba3wIucqsoRCWzEMi89QqBt17drg-PlrqeyADiK8sUQPljRJS4FcfLNTTk74Gr54k92_UzETby3OpnvYH7pGjJPRn5RB3mty4W_kEnzfY7ZuPPPr2tWkds7Cyz2-pp0i-xjZz3RhaUkymLqYwby-mGob5iFc40YrEdU_viM_5N1Ikz6vbiA78t5G5gDjKokePQPL8V6U" onerror="this.onerror=null; this.src='/images/default-avatar.png'" />
              <div class="absolute -bottom-1 -right-1 bg-primary text-[10px] text-black font-bold px-1.5 py-0.5 rounded-md border border-white dark:border-[#1a1a1a]">
                组织者
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-base font-bold text-slate-900 dark:text-white truncate">{{ event.organizer.name }}</h3>
              <div class="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span class="material-symbols-outlined text-yellow-500" style="font-size: 16px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="font-medium text-slate-700 dark:text-slate-200">{{ event.organizer.rating }}</span>
                <span>•</span>
                <span>实名认证</span>
              </div>
            </div>
            <button @click="showOrganizerPopup = true" class="flex items-center justify-center size-8 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer transition-colors">
              <span class="material-symbols-outlined" style="font-size: 24px;">chevron_right</span>
            </button>
          </div>
          <div class="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-white/5 rounded-xl p-3">
            <div class="text-center">
              <div class="text-lg font-bold text-slate-900 dark:text-white">{{ event.organizer.eventCount }}</div>
              <div class="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400">组局次数</div>
            </div>
            <div class="text-center border-l border-slate-200 dark:border-white/10">
              <div class="text-lg font-bold text-slate-900 dark:text-white">{{ event.organizer.completionRate }}%</div>
              <div class="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400">完成率</div>
            </div>
            <div class="text-center border-l border-slate-200 dark:border-white/10">
              <div class="text-lg font-bold text-slate-900 dark:text-white">{{ event.organizer.reviews }}</div>
              <div class="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400">获得好评</div>
            </div>
          </div>
        </div>

        <!-- Organizer Detail Popup -->
        <div v-if="showOrganizerPopup" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div class="bg-white dark:bg-background-dark rounded-2xl shadow-2xl w-full max-w-md overflow-hidden max-h-[90vh] flex flex-col">
            <!-- Popup Content -->
            <div class="flex-1 overflow-y-auto p-5">
              <!-- Organizer Basic Info -->
              <div class="flex flex-col items-center mb-6">
                <img alt="Organizer profile picture" class="size-24 rounded-full object-cover border-4 border-white dark:border-white/10 mb-4 shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC7VNB__-EEFsHzIISRPR_bNRdm3nyMabDjpDCaZrNDSo_qMCnf3gcT59LjhK8J92nMN7Ba3wIucqsoRCWzEMi89QqBt17drg-PlrqeyADiK8sUQPljRJS4FcfLNTTk74Gr54k92_UzETby3OpnvYH7pGjJPRn5RB3mty4W_kEnzfY7ZuPPPr2tWkds7Cyz2-pp0i-xjZz3RhaUkymLqYwby-mGob5iFc40YrEdU_viM_5N1Ikz6vbiA78t5G5gDjKokePQPL8V6U" onerror="this.onerror=null; this.src='/images/default-avatar.png'" />
                <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-1">{{ event.organizer.name }}</h4>
                <div class="flex items-center gap-1 text-sm text-yellow-500 mb-3">
                  <span class="material-symbols-outlined" style="font-size: 16px; font-variation-settings: 'FILL' 1;">star</span>
                  <span class="font-medium text-slate-700 dark:text-slate-200">{{ event.organizer.rating }}</span>
                  <span class="text-slate-500 dark:text-slate-400">• 实名认证</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span>NTRP {{ organizerDetails.level }}</span>
                  <span>•</span>
                  <span>{{ organizerDetails.age }}岁</span>
                </div>
              </div>
              
              <!-- Organizer Stats -->
              <div class="grid grid-cols-3 gap-3 mb-6">
                <div class="bg-slate-50 dark:bg-white/5 rounded-xl p-3 text-center">
                  <div class="text-lg font-bold text-slate-900 dark:text-white">{{ event.organizer.eventCount }}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">组局次数</div>
                </div>
                <div class="bg-slate-50 dark:bg-white/5 rounded-xl p-3 text-center">
                  <div class="text-lg font-bold text-slate-900 dark:text-white">{{ event.organizer.completionRate }}%</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">完成率</div>
                </div>
                <div class="bg-slate-50 dark:bg-white/5 rounded-xl p-3 text-center">
                  <div class="text-lg font-bold text-slate-900 dark:text-white">{{ event.organizer.reviews }}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">获得好评</div>
                </div>
              </div>
              
              <!-- Organizer Bio -->
              <div class="mb-6">
                <h5 class="text-sm font-semibold text-slate-900 dark:text-white mb-3">个人简介</h5>
                <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {{ organizerDetails.bio }}
                </p>
              </div>
              
              <!-- Organizer Reviews -->
              <div class="mb-6">
                <h5 class="text-sm font-semibold text-slate-900 dark:text-white mb-3">球友评价</h5>
                <div class="space-y-4">
                  <div v-for="review in organizerDetails.reviews" :key="review.id" class="bg-slate-50 dark:bg-white/5 rounded-xl p-3">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-300">{{ review.user.charAt(0) }}</div>
                      <div class="flex-1">
                        <div class="flex items-center justify-between">
                          <span class="text-sm font-medium text-slate-900 dark:text-white">{{ review.user }}</span>
                          <span class="text-xs text-slate-500 dark:text-slate-400">{{ review.date }}</span>
                        </div>
                        <div class="flex items-center gap-1 text-xs text-yellow-500 mt-0.5">
                          <span class="material-symbols-outlined" style="font-size: 14px; font-variation-settings: 'FILL' 1;">star</span>
                          <span>{{ review.rating }}</span>
                        </div>
                      </div>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{{ review.content }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Organizer Media -->
              <div>
                <h5 class="text-sm font-semibold text-slate-900 dark:text-white mb-3">近期动态</h5>
                <div class="grid grid-cols-3 gap-3">
                  <div v-for="media in organizerDetails.media" :key="media.id" class="rounded-xl overflow-hidden aspect-square bg-slate-200 dark:bg-white/10 relative group cursor-pointer">
                    <img :src="media.url" :alt="media.alt" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <span v-if="media.type === 'video'" class="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span class="material-symbols-outlined text-white" style="font-size: 32px;">play_arrow</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Popup Footer -->
            <div class="p-5 border-t border-slate-200 dark:border-white/10">
              <button @click="showOrganizerPopup = false" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
                返回活动
              </button>
            </div>
          </div>
        </div>

        <!-- Video Upload Section -->
        <div class="pt-2">
          <div class="flex items-center justify-between mb-3 px-1">
            <h3 class="text-base font-bold text-slate-900 dark:text-white">展示你的球技</h3>
            <span class="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-white/10 px-2 py-1 rounded-md">可选</span>
          </div>
          <label class="group relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl bg-white dark:bg-white/5 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/10 hover:border-primary transition-all duration-300">
            <div class="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
              <div class="bg-primary/10 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-primary" style="font-size: 32px;">videocam</span>
              </div>
              <p class="mb-1 text-sm font-medium text-slate-900 dark:text-white">上传一段 15秒 对拉视频</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">帮助组织者和其他球友了解你的水平</p>
            </div>
            <input accept="video/*" class="hidden" id="dropzone-file" type="file" />
          </label>
        </div>

        <!-- Message Section -->
        <div class="pb-6">
          <div class="flex items-center justify-between mb-3 px-1">
            <h3 class="text-base font-bold text-slate-900 dark:text-white">添加留言</h3>
            <span class="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-white/10 px-2 py-1 rounded-md">可选</span>
          </div>
          <div class="relative">
            <textarea class="w-full h-28 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 resize-none text-sm shadow-sm" placeholder="给组织者留言（例如：是否需要借用球拍，或备注个人水平）"></textarea>
          </div>
        </div>
      </main>

      <!-- Bottom Action Button -->
      <div class="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t-2 border-gray-200 dark:border-gray-700 p-4 z-30 shadow-lg">
        <div class="max-w-md mx-auto flex items-center justify-between gap-4">
          <div class="flex-1">
            <div class="flex items-end gap-1">
              <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">总费用</span>
              <span class="text-3xl font-bold text-primary">¥{{ event.cost }}</span>
              <span class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">/人</span>
            </div>
          </div>
          <button 
            @click="isRegistered ? toggleRegistration() : showPaymentPrompt = true"
            class="flex-none bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 min-w-[120px]"
          >
            {{ isRegistered ? '取消报名' : '报名参与' }}
          </button>
        </div>
      </div>

      <!-- Payment Prompt Dialog -->
      <div v-if="showPaymentPrompt" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div class="bg-white dark:bg-background-dark rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          <!-- Dialog Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">报名须知</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6">
              根据组织者要求，需要提前支付活动费用，若组局失败费用将原路返回
            </p>
          </div>
          
          <!-- Dialog Footer -->
          <div class="flex border-t border-gray-200 dark:border-white/10">
            <button 
              @click="showPaymentPrompt = false"
              class="flex-1 py-4 px-6 text-center text-sm font-medium transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
            >
              返回
            </button>
            <div class="w-px bg-gray-200 dark:bg-white/10"></div>
            <button 
              @click="goToPayment"
              class="flex-1 py-4 px-6 text-center text-sm font-bold text-primary transition-colors hover:bg-gray-50 dark:hover:bg-white/5"
            >
              去支付
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

interface Location {
  name: string;
  address: string;
}

interface Organizer {
  name: string;
  rating: number;
  eventCount: number;
  completionRate: number;
  reviews: number;
}

interface Event {
  id: string;
  title: string;
  levelMin: number;
  levelMax: number;
  cost: number;
  currentParticipants: number;
  maxParticipants: number;
  date: string;
  time: string;
  location: Location;
  organizer: Organizer;
}

interface OrganizerReview {
  id: string;
  user: string;
  rating: number;
  date: string;
  content: string;
}

interface OrganizerMedia {
  id: string;
  url: string;
  alt: string;
  type: 'image' | 'video';
}

interface OrganizerDetails {
  level: string;
  age: number;
  bio: string;
  reviews: OrganizerReview[];
  media: OrganizerMedia[];
}

const router = useRouter();
const route = useRoute();

// Mock event data
const event = ref<Event>({
  id: route.params.id as string || 'match_001',
  title: '周日清晨双打进阶局',
  levelMin: 3.0,
  levelMax: 4.0,
  cost: 50,
  currentParticipants: 3,
  maxParticipants: 4,
  date: '10月24日 周日',
  time: '10:00 AM - 12:00 PM',
  location: {
    name: '中央公园网球中心',
    address: '朝阳区朝阳公园南路1号'
  },
  organizer: {
    name: '李教练 (Coach Li)',
    rating: 4.9,
    eventCount: 52,
    completionRate: 98,
    reviews: 321
  }
});

// Registration functionality
const isRegistered = ref(false);
const showPaymentPrompt = ref(false);

// Organizer popup
const showOrganizerPopup = ref(false);

// Organizer details mock data
const organizerDetails = ref<OrganizerDetails>({
  level: '4.5',
  age: 35,
  bio: '前职业网球运动员，拥有10年执教经验，擅长双打击球技巧和战术指导。曾获得全国大学生网球锦标赛双打冠军，现任中央公园网球中心主教练。',
  reviews: [
    {
      id: 'review_001',
      user: '网球爱好者',
      rating: 5,
      date: '2025-12-28',
      content: '李教练组织的活动非常专业，场地安排合理，对手水平匹配。' 
    },
    {
      id: 'review_002',
      user: '运动达人',
      rating: 5,
      date: '2025-12-20',
      content: '教练很负责任，会根据大家的水平调整分组，每次活动都很开心。' 
    },
    {
      id: 'review_003',
      user: '新手小白',
      rating: 4,
      date: '2025-12-15',
      content: '虽然我是新手，但教练和其他球友都很友好，学到了很多东西。' 
    }
  ],
  media: [
    {
      id: 'media_001',
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
      alt: '网球比赛照片',
      type: 'image'
    },
    {
      id: 'media_002',
      url: 'https://images.unsplash.com/photo-1616486368414-b4906629d326?w=600&h=600&fit=crop',
      alt: '网球训练照片',
      type: 'image'
    },
    {
      id: 'media_003',
      url: 'https://images.unsplash.com/photo-1611542894391-3222c3d23f13?w=600&h=600&fit=crop',
      alt: '网球教练指导照片',
      type: 'image'
    },
    {
      id: 'media_004',
      url: 'https://images.unsplash.com/photo-1557958114-3d2440208c9b?w=600&h=600&fit=crop',
      alt: '网球场地照片',
      type: 'image'
    },
    {
      id: 'media_005',
      url: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=600&h=600&fit=crop',
      alt: '网球比赛照片',
      type: 'image'
    },
    {
      id: 'media_006',
      url: 'https://images.unsplash.com/photo-1531465077265-9a65b32622d5?w=600&h=600&fit=crop',
      alt: '网球训练视频',
      type: 'video'
    }
  ]
});

// Go back
const goBack = () => {
  router.back();
};

// Toggle registration status
const toggleRegistration = () => {
  isRegistered.value = !isRegistered.value;
  if (isRegistered.value) {
    event.value.currentParticipants++;
  } else {
    event.value.currentParticipants--;
  }
  console.log('Registration status changed:', isRegistered.value);
};

// Go to payment page (Mock Implementation)
const goToPayment = () => {
  showPaymentPrompt.value = false;
  
  // Mock payment success toast/alert
  alert('支付成功！');
  
  // Simulate payment processing delay
  setTimeout(() => {
    // Navigate to match success page
    router.push({
      path: `/matches/${event.value.id}/success`,
      query: {
        eventName: event.value.title
      }
    });
  }, 1500);
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>