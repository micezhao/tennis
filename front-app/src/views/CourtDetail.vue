<template>
  <div class="court-detail min-h-screen bg-background-light dark:bg-background-dark flex flex-col relative">
    <div v-if="loading" class="text-center py-4">加载中...</div>
    <div v-else-if="error" class="text-center py-4 text-red-500">{{ error }}</div>
    <div v-else-if="court" class="relative flex min-h-screen w-full flex-col group/design-root max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
      <!-- Top Navigation & Hero Carousel -->
      <div class="relative w-full h-80 shrink-0">
        <!-- Floating Nav -->
        <div class="absolute top-0 left-0 w-full z-20 flex items-center justify-between p-4 pt-8 bg-gradient-to-b from-black/50 to-transparent">
          <button @click="goBack" class="flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>

        </div>
        <!-- Image Carousel -->
        <div class="w-full h-full overflow-hidden flex snap-x snap-mandatory overflow-x-auto no-scrollbar">
          <div class="shrink-0 w-full h-full snap-center bg-cover bg-center" style='background-image: url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop");'></div>
          <div class="shrink-0 w-full h-full snap-center bg-cover bg-center" style='background-image: url("https://images.unsplash.com/photo-1616486368414-b4906629d326?w=600&h=400&fit=crop");'></div>
          <div class="shrink-0 w-full h-full snap-center bg-cover bg-center" style='background-image: url("https://images.unsplash.com/photo-1611542894391-3222c3d23f13?w=600&h=400&fit=crop");'></div>
        </div>
        <!-- Pagination Dots -->
        <div class="absolute bottom-10 left-0 w-full flex justify-center gap-2 z-20">
          <div class="h-1.5 w-6 rounded-full bg-primary shadow-sm"></div>
          <div class="h-1.5 w-1.5 rounded-full bg-white/70 shadow-sm"></div>
          <div class="h-1.5 w-1.5 rounded-full bg-white/70 shadow-sm"></div>
        </div>
      </div>

      <!-- Main Content Container (Overlapping Hero) -->
      <div class="relative z-10 -mt-6 flex flex-1 flex-col rounded-t-3xl bg-background-light dark:bg-background-dark px-5 pt-8 pb-32 w-full">
        <!-- Header Section -->
        <div class="flex flex-col gap-2 mb-4">
          <div class="flex justify-between items-start">
            <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">{{ court.name }}</h1>
            <div class="flex gap-2 items-start">
              <!-- Favorite Button -->
              <button 
                @click="toggleFavorite"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-surface-dark shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span 
                  class="material-symbols-outlined text-xl transition-all duration-300"
                  :class="isFavorite ? 'text-red-500 filled' : 'text-gray-400 dark:text-gray-500'"
                >
                  favorite
                </span>
              </button>
              <!-- Rating -->
              <div class="flex flex-col items-end">
                <div class="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-md">
                  <span class="material-symbols-outlined text-sm text-green-700 dark:text-primary" style="font-size: 18px;">star</span>
                  <span class="text-sm font-bold text-green-800 dark:text-primary">{{ court.rating }}</span>
                </div>
                <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ court.reviewCount }} 条评价</span>
              </div>
            </div>
          </div>
          <div class="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <span class="material-symbols-outlined text-[18px] mr-1">location_on</span>
            {{ court.address }}
          </div>
        </div>

        <!-- Facilities Icons -->
        <div class="flex flex-wrap gap-2 mb-6">
          <div class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm">
            <span class="material-symbols-outlined text-[16px] text-primary">light_mode</span>
            <span>灯光</span>
          </div>
          <div class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm">
            <span class="material-symbols-outlined text-[16px] text-primary">checkroom</span>
            <span>更衣室</span>
          </div>
          <div class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm">
            <span class="material-symbols-outlined text-[16px] text-primary">local_parking</span>
            <span>停车场</span>
          </div>
          <div class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm">
            <span class="material-symbols-outlined text-[16px] text-primary">shower</span>
            <span>淋浴</span>
          </div>
          <div class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm">
            <span class="material-symbols-outlined text-[16px] text-primary">chair</span>
            <span>休息区</span>
          </div>
          <div class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm">
            <span class="material-symbols-outlined text-[16px] text-primary">local_drink</span>
            <span>饮用水</span>
          </div>
        </div>

        <!-- Tabs Navigation -->
        <div class="flex border-b border-gray-200 dark:border-gray-800 mb-6">
          <button 
            v-for="tab in tabs" 
            :key="tab.value"
            @click="activeTab = tab.value"
            class="py-3 px-4 font-medium text-sm transition-colors relative"
            :class="activeTab === tab.value ? 'text-primary dark:text-primary' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'"
          >
            {{ tab.label }}
            <span v-if="activeTab === tab.value" class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          </button>
        </div>

        <!-- Tab Content -->
        <div class="flex-1">
          <!-- Available Time Slots Tab -->
        <div v-if="activeTab === 'slots'" class="space-y-2">
            <!-- Filters (Scrollable) -->
            <div class="px-4 pb-2">
              <div class="flex justify-between items-center">
                <div class="flex gap-1 overflow-x-auto scrollbar-hide">
                  <!-- Time Period Filter -->
                  <div class="relative">
                    <select 
                      v-model="filters.timePeriod" 
                      class="flex h-8 shrink-0 items-center justify-center gap-x-0.5 rounded-full pl-2 pr-8 transition-colors group bg-surface-light border border-gray-200 text-gray-600 text-xs font-medium appearance-none cursor-pointer"
                    >
                      <option value="">全部时段</option>
                      <option 
                        v-for="option in timePeriodOptions" 
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                    <span class="absolute right-2 top-1/2 -translate-y-1/2 material-symbols-outlined text-[14px] text-gray-600 pointer-events-none">expand_more</span>
                  </div>
                  
                  <!-- Court Number Filter -->
                  <div class="relative">
                    <select 
                      v-model="filters.courtNumber" 
                      class="flex h-8 shrink-0 items-center justify-center gap-x-0.5 rounded-full pl-2 pr-8 transition-colors group bg-surface-light border border-gray-200 text-gray-600 text-xs font-medium appearance-none cursor-pointer"
                    >
                      <option value="">全部场地</option>
                      <option 
                        v-for="option in courtNumberOptions" 
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                    <span class="absolute right-2 top-1/2 -translate-y-1/2 material-symbols-outlined text-[14px] text-gray-600 pointer-events-none">expand_more</span>
                  </div>
                  
                  <!-- Court Type Filter -->
                  <div class="relative">
                    <select 
                      v-model="filters.courtType" 
                      class="flex h-8 shrink-0 items-center justify-center gap-x-0.5 rounded-full pl-2 pr-8 transition-colors group bg-surface-light border border-gray-200 text-gray-600 text-xs font-medium appearance-none cursor-pointer"
                    >
                      <option value="">全部类型</option>
                      <option 
                        v-for="option in courtTypeOptions" 
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                    <span class="absolute right-2 top-1/2 -translate-y-1/2 material-symbols-outlined text-[14px] text-gray-600 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Available Slots -->
            <div class="space-y-2">
              <div v-for="(courtSlot, index) in filteredCourtSlots" :key="index" class="bg-surface-light dark:bg-surface-dark rounded-xl p-2 border border-gray-100 dark:border-gray-800 mx-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">{{ courtSlot.courtNumber }}</span>
                  <span class="text-xs text-gray-500">{{ courtSlot.date }}</span>
                </div>
                <div class="grid grid-cols-4 gap-2">
                  <button 
                    v-for="slot in courtSlot.slots" 
                    :key="slot.time"
                    @click="slot.available && toggleSlotSelection(courtSlot.courtNumber, slot.time)"
                    class="py-2 px-3 rounded-lg text-sm font-medium transition-all relative overflow-hidden"
                    :class="{
                      'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed border-2 border-gray-300 dark:border-gray-600': !slot.available,
                      'bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary': slot.available && !isSlotSelected(courtSlot.courtNumber, slot.time),
                      'bg-primary text-white hover:bg-primary-dark border-2 border-primary dark:border-primary': slot.available && isSlotSelected(courtSlot.courtNumber, slot.time)
                    }"
                  >
                    {{ formatTimeRange(slot.time) }}
                    <span v-if="!slot.available" class="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-xs font-medium">已预定</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Reviews Tab -->
        <div v-if="activeTab === 'reviews'" class="space-y-3">
            <!-- Review Filters -->
            <div class="px-4">
              <div class="flex gap-1 overflow-x-auto scrollbar-hide pb-2">
                <button 
                  v-for="option in reviewFilterOptions" 
                  :key="option.value"
                  @click="reviewFilter = option.value"
                  class="flex h-8 shrink-0 items-center justify-center gap-x-0.5 rounded-full pl-3 pr-3 transition-all group border text-xs font-medium"
                  :class="reviewFilter === option.value 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-surface-light border-gray-200 text-gray-600 hover:border-primary/50 hover:text-primary'
                  "
                >
                  {{ option.label }}
                </button>
              </div>
            </div>
            
            <div class="space-y-3 px-4">
              <div v-for="(review, index) in reviews" :key="index" class="bg-surface-light dark:bg-surface-dark rounded-xl p-3 border border-gray-100 dark:border-gray-800">
                <div class="flex justify-between items-start mb-2">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-300">
                      {{ review.user.charAt(0) }}
                    </div>
                    <div>
                      <div class="font-medium">{{ review.user }}</div>
                      <div class="flex items-center gap-1 text-sm text-yellow-500">
                        <span class="material-symbols-outlined" style="font-size: 14px; 'font-variation-settings': 'FILL 1'">star</span>
                        <span>{{ review.rating }}</span>
                      </div>
                    </div>
                  </div>
                  <span class="text-xs text-gray-500">{{ review.date }}</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ review.content }}</p>
              </div>
            </div>
          </div>

          <!-- Transportation Tab -->
        <div v-if="activeTab === 'transportation'" class="space-y-4">
            <div class="bg-surface-light dark:bg-surface-dark rounded-xl p-3 border border-gray-100 dark:border-gray-800">
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary mt-0.5">directions_car</span>
                  <div>
                    <div class="font-medium">驾车</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">{{ court.address }}</div>
                    <div class="text-sm text-gray-500 mt-1">附近有停车场，收费标准：5元/小时</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary mt-0.5">directions_bus</span>
                  <div>
                    <div class="font-medium">公交</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">乘坐123路、456路公交车到XX站下车，步行5分钟即到</div>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-primary mt-0.5">directions_subway</span>
                  <div>
                    <div class="font-medium">地铁</div>
                    <div class="text-sm text-gray-600 dark:text-gray-300">乘坐地铁2号线到XX站，从A出口步行10分钟即到</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Section (Bottom Fixed) -->
        <div class="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t-2 border-gray-200 dark:border-gray-700 p-4 z-30 shadow-lg">
          <div class="max-w-md mx-auto flex items-center justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-end gap-1">
                <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">价格</span>
                <span class="text-3xl font-bold text-primary">¥{{ court.pricePerHour }}</span>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">/小时</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">选择时段后点击立即预约</p>
            </div>
            <button @click="handleBooking" class="flex-none bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 min-w-[120px]">
              立即预约
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mockData } from '../api/mockData';

interface Court {
  courtId: string;
  name: string;
  address: string;
  pricePerHour: number;
  rating: number;
  reviewCount: number;
  surfaceType: string;
  indoor: boolean;
  hasLights: boolean;
  amenities: string[];
  available: boolean;
  phone?: string;
  businessHours?: string;
  latitude?: number;
  longitude?: number;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface CourtSlot {
  courtNumber: string;
  date: string;
  slots: TimeSlot[];
}

interface Review {
  user: string;
  rating: number;
  date: string;
  content: string;
}

interface Tab {
  label: string;
  value: string;
}

const route = useRoute();
const router = useRouter();
const court = ref<Court | null>(null);
const loading = ref(false);
const error = ref('');

const activeTab = ref('slots');

// Favorite functionality
const isFavorite = ref(false);

// Selected time slots management - structured by court
const selectedSlots = ref<Record<string, Record<string, boolean>>>({});

// Filter states
const filters = ref({
  timePeriod: '',
  courtNumber: '',
  courtType: ''
});

// Filter options
const timePeriodOptions = [
  { label: '上午', value: 'morning' },
  { label: '下午', value: 'afternoon' },
  { label: '晚上', value: 'evening' },
  { label: '夜间', value: 'night' }
];

const courtNumberOptions = [
  { label: '1号', value: '场地1' },
  { label: '2号', value: '场地2' }
];

const courtTypeOptions = [
  { label: '室内', value: 'indoor' },
  { label: '室外', value: 'outdoor' },
  { label: '风雨', value: 'covered' }
];

// Filtered court slots
const filteredCourtSlots = computed(() => {
  return courtSlots.filter(slot => {
    // Filter by court number
    if (filters.value.courtNumber && slot.courtNumber !== filters.value.courtNumber) {
      return false;
    }
    
    // Filter by time period - this would typically use actual slot times
    // For mock data, we'll just return all slots for now
    
    return true;
  });
});

// Tabs definition
const tabs: Tab[] = [
  { label: '可订时段', value: 'slots' },
  { label: '场地评价', value: 'reviews' },
  { label: '交通信息', value: 'transportation' }
];

// Mock data for court slots
const courtSlots: CourtSlot[] = [
  {
    courtNumber: '场地1',
    date: '今天',
    slots: [
      { time: '09:00', available: true },
      { time: '10:00', available: true },
      { time: '11:00', available: false },
      { time: '12:00', available: true },
      { time: '13:00', available: true },
      { time: '14:00', available: false },
      { time: '15:00', available: true },
      { time: '16:00', available: true }
    ]
  },
  {
    courtNumber: '场地2',
    date: '今天',
    slots: [
      { time: '09:00', available: false },
      { time: '10:00', available: true },
      { time: '11:00', available: true },
      { time: '12:00', available: false },
      { time: '13:00', available: true },
      { time: '14:00', available: true },
      { time: '15:00', available: true },
      { time: '16:00', available: false }
    ]
  }
];

// Format time to display as range (e.g., 9:00～10:00)
const formatTimeRange = (time: string): string => {
  const currentHourStr = time.split(':')[0] || '0';
  const currentHour = parseInt(currentHourStr);
  const nextHour = currentHour + 1;
  return `${currentHour}:00～${nextHour}:00`;
};

// Toggle slot selection - with court boundary
const toggleSlotSelection = (courtNumber: string, time: string): void => {
  if (!selectedSlots.value[courtNumber]) {
    selectedSlots.value[courtNumber] = {};
  }
  selectedSlots.value[courtNumber][time] = !selectedSlots.value[courtNumber][time];
};

// Handle booking button click
const handleBooking = () => {
  // Calculate selected slots and total duration
  let totalDuration = 0;
  const selectedTimeSlots: string[] = [];
  const selectedCourts: string[] = [];
  
  // Process selected slots by court
  Object.entries(selectedSlots.value).forEach(([courtNumber, slots]) => {
    Object.entries(slots).forEach(([time, isSelected]) => {
      if (isSelected) {
        totalDuration++;
        selectedTimeSlots.push(formatTimeRange(time));
        if (!selectedCourts.includes(courtNumber)) {
          selectedCourts.push(courtNumber);
        }
      }
    });
  });
  
  // Check if any slots are selected
  if (totalDuration === 0) {
    alert('请先选择预约时段');
    return;
  }
  
  // Calculate total amount
  const totalAmount = totalDuration * (court.value?.pricePerHour || 0);
  
  // Create order data
  const orderData = {
    orderId: `ORDER${Date.now()}`,
    createTime: new Date(),
    totalAmount: totalAmount,
    type: 'COURT_BOOKING' as const,
    content: {
      courtId: court.value?.courtId || '',
      courtName: court.value?.name || '',
      courtAddress: court.value?.address || '',
      courtImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      courtNumber: selectedCourts.join(', '),
      courtType: court.value?.surfaceType || '',
      date: '2026-01-05', // This would typically come from selected date
      timeSlots: selectedTimeSlots,
      duration: totalDuration,
      pricePerHour: court.value?.pricePerHour || 0
    }
  };
  
  // Navigate to order page with order data
  router.push({
    path: '/order',
    query: { orderData: encodeURIComponent(JSON.stringify(orderData)) }
  });
};

// Check if slot is selected - with court boundary
const isSlotSelected = (courtNumber: string, time: string): boolean => {
  return !!selectedSlots.value[courtNumber]?.[time];
};

// Review filter states
const reviewFilter = ref('all');

// Review filter options
const reviewFilterOptions = [
  { label: '全部', value: 'all' },
  { label: '近期评价', value: 'recent' },
  { label: '有图/视频', value: 'media' }
];

// Mock data for reviews
const reviews: Review[] = [
  {
    user: '网球爱好者',
    rating: 5,
    date: '2026-01-01',
    content: '场地非常好，设施齐全，服务态度也很好，下次还会再来！'
  },
  {
    user: '运动达人',
    rating: 4,
    date: '2025-12-28',
    content: '场地不错，就是价格有点贵，不过整体体验很好。'
  },
  {
    user: '新手小白',
    rating: 5,
    date: '2025-12-25',
    content: '非常适合初学者，教练很耐心，场地环境也很好。'
  }
];

const fetchCourt = () => {
  loading.value = true;
  const id = route.params.id;
  try {
    // Find court from mock data
    court.value = mockData.courts.find(c => c.courtId === id) || null;
    
    if (!court.value) {
      error.value = '场地未找到';
    }
  } catch (err) {
    error.value = '加载场地详情失败';
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.back();
};

// Toggle favorite status
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  // In a real application, you would also update this in the database
  console.log('Favorite status changed:', isFavorite.value);
};



onMounted(() => {
  fetchCourt();
});
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
