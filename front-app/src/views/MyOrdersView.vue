<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased pb-24">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
      <button @click="goBack" class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 class="text-lg font-bold text-text-main dark:text-white">我的订单</h1>
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

    <!-- Orders List -->
    <main class="px-4 py-4">
      <div v-if="filteredOrders.length === 0" class="text-center py-12">
        <span class="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-4">shopping_bag</span>
        <p class="text-gray-500 dark:text-gray-400">暂无订单</p>
      </div>
      
      <div v-else class="space-y-4">
        <div 
          v-for="order in filteredOrders" 
          :key="order.id"
          class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow duration-300"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                <span class="material-symbols-outlined">shopping_bag</span>
              </div>
              <div>
                <h3 class="font-medium text-base text-text-main dark:text-white">订单 #{{ order.orderId }}</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">创建于 {{ order.createTime }}</p>
              </div>
            </div>
            <div 
              class="px-2 py-1 rounded-full text-xs font-bold"
              :class="order.status === 'paid' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : order.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400' : 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'"
            >
              {{ getStatusText(order.status) }}
            </div>
          </div>
          
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">receipt_long</span>
              <span class="text-gray-600 dark:text-gray-400">{{ getOrderTypeText(order.type) }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">credit_card</span>
              <span class="text-gray-600 dark:text-gray-400">¥{{ order.totalAmount.toFixed(2) }}</span>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
            <button 
              class="text-primary font-medium text-sm hover:underline"
              @click="viewOrderDetail(order.id)"
            >
              查看详情
            </button>
            <button 
              v-if="order.status === 'pending'"
              class="px-3 py-1 rounded-full text-xs font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              立即支付
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

interface Order {
  id: string;
  orderId: string;
  createTime: string;
  totalAmount: number;
  type: 'COURT_BOOKING' | 'PRODUCT' | 'MATCH_SIGNUP';
  status: 'pending' | 'paid' | 'cancelled';
}

const router = useRouter();

// Mock order data
const orders = ref<Order[]>([
  {
    id: '1',
    orderId: 'ORDER20260103001',
    createTime: '2026-01-03 14:30',
    totalAmount: 120,
    type: 'COURT_BOOKING',
    status: 'paid'
  },
  {
    id: '2',
    orderId: 'ORDER20260102001',
    createTime: '2026-01-02 10:15',
    totalAmount: 89,
    type: 'PRODUCT',
    status: 'paid'
  },
  {
    id: '3',
    orderId: 'ORDER20251230001',
    createTime: '2025-12-30 18:45',
    totalAmount: 200,
    type: 'MATCH_SIGNUP',
    status: 'cancelled'
  },
  {
    id: '4',
    orderId: 'ORDER20251225001',
    createTime: '2025-12-25 09:30',
    totalAmount: 160,
    type: 'COURT_BOOKING',
    status: 'paid'
  },
  {
    id: '5',
    orderId: 'ORDER20251220001',
    createTime: '2025-12-20 16:20',
    totalAmount: 45,
    type: 'PRODUCT',
    status: 'pending'
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

// Filtered orders based on selected time range
const filteredOrders = computed(() => {
  // For demo purposes, we'll just return all orders regardless of time range
  // In a real application, you would filter based on the order createTime and selected time range
  return orders.value;
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

// Select time range
const selectTimeRange = (range: string) => {
  selectedTimeRange.value = range;
};

// View order detail
const viewOrderDetail = (id: string) => {
  router.push(`/profile/my-orders/${id}`);
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