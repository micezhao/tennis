<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-surface-light dark:bg-surface-dark shadow-sm">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <button @click="goBack" class="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 class="text-lg font-bold text-gray-900 dark:text-white">订单详情</h1>
        <div class="size-10"></div> <!-- Spacer -->
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-6">
      <!-- Order Status Card -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-yellow-500">timer</span>
            <h2 class="text-base font-semibold text-gray-900 dark:text-white">待支付</h2>
          </div>
          <div class="text-right">
            <p class="text-sm text-gray-500 dark:text-gray-400">支付倒计时</p>
            <p class="text-lg font-bold text-red-500">{{ formatCountdown }}</p>
          </div>
        </div>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
          <p class="text-sm text-yellow-700 dark:text-yellow-300">请在{{ formatCountdown }}内完成支付，否则订单将自动取消</p>
        </div>
      </div>

      <!-- Payment Amount -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
        <div class="flex items-center justify-between">
          <p class="text-base font-medium text-gray-600 dark:text-gray-300">支付金额</p>
          <p class="text-2xl font-bold text-primary">¥{{ order.totalAmount.toFixed(2) }}</p>
        </div>
      </div>

      <!-- Order Information -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
        <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-3">订单信息</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-400">订单编号</span>
            <span class="text-sm font-medium text-gray-900 dark:text-white">{{ order.orderId }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-400">创建时间</span>
            <span class="text-sm font-medium text-gray-900 dark:text-white">{{ formatDate(order.createTime) }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-400">订单类型</span>
            <span class="text-sm font-medium text-primary">{{ getOrderTypeText(order.type) }}</span>
          </div>
        </div>
      </div>

      <!-- Order Content -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
        <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-3">订单内容</h3>
        
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
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white">{{ order.content.courtName }}</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ order.content.courtAddress }}</p>
              <div class="mt-2 space-y-1">
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">日期</span>
                  <span class="text-xs font-medium text-gray-900 dark:text-white">{{ order.content.date }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">时段</span>
                  <span class="text-xs font-medium text-gray-900 dark:text-white">{{ order.content.timeSlots.join(', ') }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">场地</span>
                  <span class="text-xs font-medium text-gray-900 dark:text-white">{{ order.content.courtNumber }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">类型</span>
                  <span class="text-xs font-medium text-gray-900 dark:text-white">{{ order.content.courtType }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Price Details -->
          <div class="pt-3 border-t border-gray-100 dark:border-gray-800">
            <div class="flex justify-between items-center space-y-2">
              <div>
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ order.content.duration }}小时</span>
                <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">×</span>
                <span class="text-sm text-gray-600 dark:text-gray-400">¥{{ order.content.pricePerHour }}/小时</span>
              </div>
              <span class="text-sm font-medium text-gray-900 dark:text-white">¥{{ order.totalAmount.toFixed(2) }}</span>
            </div>
          </div>
        </div>

        <!-- Product Content (Placeholder) -->
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
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white">{{ order.content.productName }}</h4>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ order.content.productDescription }}</p>
              <div class="mt-2 flex justify-between items-center">
                <div>
                  <span class="text-xs text-gray-600 dark:text-gray-400">数量：{{ order.content.quantity }}</span>
                </div>
                <span class="text-sm font-medium text-gray-900 dark:text-white">¥{{ order.totalAmount.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Match Activity Content (Placeholder) -->
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
              <h4 class="text-sm font-semibold text-gray-900 dark:text-white">{{ order.content.matchName }}</h4>
              <div class="mt-2 space-y-1">
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">时间</span>
                  <span class="text-xs font-medium text-gray-900 dark:text-white">{{ order.content.matchTime }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">地点</span>
                  <span class="text-xs font-medium text-gray-900 dark:text-white">{{ order.content.matchLocation }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs text-gray-600 dark:text-gray-400">人数</span>
                  <span class="text-xs font-medium text-gray-900 dark:text-white">{{ order.content.playerCount }}人</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Price Details -->
          <div class="pt-3 border-t border-gray-100 dark:border-gray-800">
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600 dark:text-gray-400">活动费用</span>
              <span class="text-sm font-medium text-gray-900 dark:text-white">¥{{ order.totalAmount.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 mb-8">
        <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-3">支付方式</h3>
        <div class="space-y-3">
          <button 
            @click="selectPaymentMethod('wechat')" 
            class="w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all duration-300"
            :class="selectedPaymentMethod === 'wechat' ? 'border-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50'"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <span class="text-green-600 dark:text-green-400 text-lg">💚</span>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900 dark:text-white">微信支付</h4>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">推荐使用微信支付</p>
              </div>
            </div>
            <span 
              class="material-symbols-outlined text-lg"
              :class="selectedPaymentMethod === 'wechat' ? 'text-primary' : 'text-gray-300 dark:text-gray-600'"
            >
              radio_button_checked
            </span>
          </button>
          
          <button 
            @click="selectPaymentMethod('alipay')" 
            class="w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all duration-300"
            :class="selectedPaymentMethod === 'alipay' ? 'border-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50'"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span class="text-blue-600 dark:text-blue-400 text-lg">💙</span>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900 dark:text-white">支付宝</h4>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">支持支付宝支付</p>
              </div>
            </div>
            <span 
              class="material-symbols-outlined text-lg"
              :class="selectedPaymentMethod === 'alipay' ? 'text-primary' : 'text-gray-300 dark:text-gray-600'"
            >
              radio_button_checked
            </span>
          </button>
        </div>
      </div>
    </main>

    <!-- Bottom Payment Bar -->
    <footer class="fixed bottom-0 left-0 right-0 bg-white dark:bg-surface-dark shadow-lg border-t border-gray-100 dark:border-gray-800">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <div class="text-xs text-gray-600 dark:text-gray-400">需支付</div>
          <div class="text-lg font-bold text-primary">¥{{ order.totalAmount.toFixed(2) }}</div>
        </div>
        <button 
          @click="confirmPayment" 
          class="flex-none bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 min-w-[140px]"
        >
          立即支付
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// Order Type Definitions
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
  orderId: string;
  createTime: Date;
  totalAmount: number;
  type: 'COURT_BOOKING' | 'PRODUCT' | 'MATCH_SIGNUP';
  content: CourtBookingContent | ProductContent | MatchSignupContent;
}

const router = useRouter();
const route = useRoute();

// Payment countdown
const countdown = ref(900); // 15 minutes in seconds
let countdownInterval: ReturnType<typeof setInterval> | null = null;

// Selected payment method
const selectedPaymentMethod = ref('wechat');

// Mock order data - will be replaced with actual data from route params or API
const order = ref<Order>({
  orderId: `ORDER${Date.now()}`,
  createTime: new Date(),
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
  }
});

// Format countdown display
const formatCountdown = computed(() => {
  const minutes = Math.floor(countdown.value / 60);
  const seconds = countdown.value % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

// Format date
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

// Get order type text
const getOrderTypeText = (type: Order['type']) => {
  switch (type) {
    case 'COURT_BOOKING':
      return '场地预定';
    case 'PRODUCT':
      return '商品购买';
    case 'MATCH_SIGNUP':
      return '约球活动';
    default:
      return '未知类型';
  }
};

// Select payment method
const selectPaymentMethod = (method: string) => {
  selectedPaymentMethod.value = method;
};

// Confirm payment
const confirmPayment = () => {
  // Here we would implement the actual payment logic
  // For now, we'll just simulate a successful payment
  alert('支付成功！');
  router.push('/profile');
};

// Go back
const goBack = () => {
  router.back();
};

// Start countdown
const startCountdown = () => {
  countdownInterval = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
      // Handle order timeout
      alert('订单已超时，请重新下单');
      router.back();
    }
  }, 1000);
};

// Lifecycle hooks
onMounted(() => {
  // Get order data from route params if available
  if (route.params.orderData) {
    try {
      order.value = JSON.parse(decodeURIComponent(route.params.orderData as string));
    } catch (error) {
      console.error('Failed to parse order data:', error);
    }
  }
  startCountdown();
});

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>