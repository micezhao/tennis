<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased pb-24">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
      <button @click="goBack" class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 class="text-lg font-bold text-text-main dark:text-white">场地预订</h1>
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

    <!-- Court Bookings List -->
    <main class="px-4 py-4">
      <div v-if="filteredBookings.length === 0" class="text-center py-12">
        <span class="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-4">calendar_month</span>
        <p class="text-gray-500 dark:text-gray-400">暂无场地预订</p>
      </div>
      
      <div v-else class="space-y-4">
        <div 
          v-for="booking in filteredBookings" 
          :key="booking.id"
          class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow duration-300"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <span class="material-symbols-outlined">calendar_month</span>
              </div>
              <h3 class="font-medium text-base text-text-main dark:text-white">{{ booking.courtName }}</h3>
            </div>
            <div 
              class="px-2 py-1 rounded-full text-xs font-bold"
              :class="booking.status === 'completed' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'"
            >
              {{ booking.status === 'completed' ? '已完成' : '已预订' }}
            </div>
          </div>
          
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">date_range</span>
              <span class="text-gray-600 dark:text-gray-400">{{ booking.date }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">schedule</span>
              <span class="text-gray-600 dark:text-gray-400">{{ booking.timeSlots.join(', ') }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">place</span>
              <span class="text-gray-600 dark:text-gray-400">{{ booking.courtAddress }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[16px]">credit_card</span>
              <span class="text-gray-600 dark:text-gray-400">¥{{ booking.totalAmount }}</span>
            </div>
          </div>
          
          <div class="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
            <button 
              class="text-primary font-medium text-sm hover:underline"
              @click="viewBookingDetail(booking.id)"
            >
              查看详情
            </button>
            <button 
              v-if="booking.status !== 'completed'"
              class="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              取消预订
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

interface CourtBooking {
  id: string;
  courtId: string;
  courtName: string;
  courtAddress: string;
  date: string;
  timeSlots: string[];
  totalAmount: number;
  status: 'completed' | 'booked';
}

const router = useRouter();

// Mock booking data
const courtBookings = ref<CourtBooking[]>([
  {
    id: '1',
    courtId: 'court1',
    courtName: '阳光网球场',
    courtAddress: '北京市朝阳区建国路88号',
    date: '2026-01-05',
    timeSlots: ['9:00～10:00', '10:00～11:00'],
    totalAmount: 120,
    status: 'booked'
  },
  {
    id: '2',
    courtId: 'court2',
    courtName: '俱乐部网球场',
    courtAddress: '北京市海淀区中关村大街1号',
    date: '2025-12-28',
    timeSlots: ['14:00～15:00', '15:00～16:00'],
    totalAmount: 160,
    status: 'completed'
  },
  {
    id: '3',
    courtId: 'court1',
    courtName: '阳光网球场',
    courtAddress: '北京市朝阳区建国路88号',
    date: '2025-12-20',
    timeSlots: ['18:00～19:00'],
    totalAmount: 70,
    status: 'completed'
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

// Filtered bookings based on selected time range
const filteredBookings = computed(() => {
  // For demo purposes, we'll just return all bookings regardless of time range
  // In a real application, you would filter based on the booking date and selected time range
  return courtBookings.value;
});

// Select time range
const selectTimeRange = (range: string) => {
  selectedTimeRange.value = range;
};

// View booking detail
const viewBookingDetail = (id: string) => {
  router.push(`/profile/court-bookings/${id}`);
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