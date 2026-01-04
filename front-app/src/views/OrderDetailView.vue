<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased pb-24">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
      <button @click="goBack" class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 class="text-lg font-bold text-text-main dark:text-white">订单详情</h1>
      <div class="w-10"></div>
    </header>

    <!-- Order Detail Content -->
    <main class="px-4 py-4">
      <!-- Order Status -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-text-main dark:text-white">订单 #{{ order.orderId }}</h2>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">创建于 {{ order.createTime }}</p>
          </div>
          <div 
            class="px-3 py-1 rounded-full text-xs font-bold"
            :class="order.status === 'paid' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : order.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400' : 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'"
          >
            {{ getStatusText(order.status) }}
          </div>
        </div>
      </div>

      <!-- Order Content -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">订单内容</h3>
        
        <!-- Court Booking Content -->
        <div v-if="order.type === 'COURT_BOOKING'" class="space-y-4">
          <div class="flex gap-3">
            <div class="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
              <img 
                :src="order.content.courtImage" 
                :alt="order.content.courtName" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h4 class="text-sm font-semibold text-text-main dark:text-white">{{ order.content.courtName }}</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ order.content.courtAddress }}</p>
              <div class="mt-2 space-y-1">
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">日期</span>
                  <span class="text-xs font-medium text-text-main dark:text-white">{{ order.content.date }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">时段</span>
                  <div class="flex flex-wrap gap-1">
                    <span 
                      v-for="(slot, index) in order.content.timeSlots" 
                      :key="index"
                      class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-300"
                    >
                      {{ slot }}
                    </span>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">场地</span>
                  <span class="text-xs font-medium text-text-main dark:text-white">{{ order.content.courtNumber }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">类型</span>
                  <span class="text-xs font-medium text-text-main dark:text-white">{{ order.content.courtType }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Content -->
        <div v-else-if="order.type === 'PRODUCT'" class="space-y-4">
          <div class="flex gap-3">
            <div class="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
              <img 
                :src="order.content.productImage" 
                :alt="order.content.productName" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h4 class="text-sm font-semibold text-text-main dark:text-white">{{ order.content.productName }}</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ order.content.productDescription }}</p>
              <div class="mt-2 space-y-1">
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">价格</span>
                  <span class="text-xs font-medium text-text-main dark:text-white">¥{{ order.content.price.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">数量</span>
                  <span class="text-xs font-medium text-text-main dark:text-white">{{ order.content.quantity }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Match Signup Content -->
        <div v-else-if="order.type === 'MATCH_SIGNUP'" class="space-y-4">
          <div class="flex gap-3">
            <div class="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
              <img 
                :src="order.content.matchImage" 
                :alt="order.content.matchName" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h4 class="text-sm font-semibold text-text-main dark:text-white">{{ order.content.matchName }}</h4>
              <div class="mt-2 space-y-1">
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">时间</span>
                  <span class="text-xs font-medium text-text-main dark:text-white">{{ order.content.matchTime }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">地点</span>
                  <span class="text-xs font-medium text-text-main dark:text-white">{{ order.content.matchLocation }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">人数</span>
                  <span class="text-xs font-medium text-text-main dark:text-white">{{ order.content.playerCount }}人</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Information -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">支付信息</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-300">订单类型</span>
            <span class="text-sm font-medium text-text-main dark:text-white">{{ getOrderTypeText(order.type) }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-300">支付方式</span>
            <span class="text-sm font-medium text-text-main dark:text-white">{{ order.paymentMethod }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-300">支付时间</span>
            <span class="text-sm font-medium text-text-main dark:text-white">{{ order.paymentTime || '未支付' }}</span>
          </div>
          <div class="h-px bg-gray-100 dark:bg-white/5 my-1"></div>
          <div class="flex justify-between items-center">
            <span class="text-base font-bold text-text-main dark:text-white">支付金额</span>
            <span class="text-base font-bold text-primary">¥{{ order.totalAmount.toFixed(2) }}</span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">操作</h3>
        <div class="flex gap-3">
          <button 
            v-if="order.status === 'pending'"
            class="flex-1 px-4 py-3 rounded-xl text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            立即支付
          </button>
          <button 
            v-if="order.status === 'paid'"
            class="flex-1 px-4 py-3 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            查看凭证
          </button>
          <button 
            class="flex-1 px-4 py-3 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            联系客服
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

interface CourtBookingContent {
  courtId: string;
  courtName: string;
  courtAddress: string;
  courtImage: string;
  courtNumber: string;
  courtType: string;
  date: string;
  timeSlots: string[];
  duration: number;
  pricePerHour: number;
}

interface ProductContent {
  productId: string;
  productName: string;
  productDescription: string;
  productImage: string;
  quantity: number;
  price: number;
}

interface MatchSignupContent {
  matchId: string;
  matchName: string;
  matchLocation: string;
  matchTime: string;
  matchImage: string;
  playerCount: number;
  price: number;
}

interface Order {
  id: string;
  orderId: string;
  createTime: string;
  paymentTime: string | null;
  totalAmount: number;
  type: 'COURT_BOOKING' | 'PRODUCT' | 'MATCH_SIGNUP';
  content: CourtBookingContent | ProductContent | MatchSignupContent;
  paymentMethod: string;
  status: 'pending' | 'paid' | 'cancelled';
}

const router = useRouter();
const route = useRoute();

// Mock order data
const order = ref<Order>({
  id: route.params.id as string,
  orderId: 'ORDER20260103001',
  createTime: '2026-01-03 14:30',
  paymentTime: '2026-01-03 14:35',
  totalAmount: 120,
  type: 'COURT_BOOKING',
  content: {
    courtId: 'court1',
    courtName: '阳光网球场',
    courtAddress: '北京市朝阳区建国路88号',
    courtImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    courtNumber: '1号场地',
    courtType: '室内',
    date: '2026-01-05',
    timeSlots: ['9:00～10:00', '10:00～11:00'],
    duration: 2,
    pricePerHour: 60
  },
  paymentMethod: '微信支付',
  status: 'paid'
});

// Get status text
const getStatusText = (status: Order['status']) => {
  switch (status) {
    case 'paid':
      return '已支付';
    case 'pending':
      return '待支付';
    case 'cancelled':
      return '已取消';
    default:
      return '未知';
  }
};

// Get order type text
const getOrderTypeText = (type: Order['type']) => {
  switch (type) {
    case 'COURT_BOOKING':
      return '场地预订';
    case 'PRODUCT':
      return '商品购买';
    case 'MATCH_SIGNUP':
      return '约球活动';
    default:
      return '未知类型';
  }
};

// Go back
const goBack = () => {
  router.back();
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>