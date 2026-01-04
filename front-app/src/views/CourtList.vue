<template>
  <div class="bg-background-light font-display text-gray-900 flex flex-col h-screen overflow-hidden">
    <!-- Top Navigation Area: Sticky -->
    <header class="flex-none bg-surface-light border-b border-gray-100 z-20 safe-top">
      <!-- Safe Area Top Spacer -->
      <div class="h-safe w-full"></div>
      <!-- Search Bar with Reset Button -->
      <div class="px-4 py-2 flex items-center gap-2">
        <label class="flex flex-col h-12 flex-1">
          <div class="flex w-full flex-1 items-center rounded-xl bg-gray-100 overflow-hidden ring-1 ring-transparent focus-within:ring-primary transition-all">
              <div class="flex items-center justify-center pl-4 text-gray-400">
                <span class="material-symbols-outlined">search</span>
              </div>
              <input v-model="searchQuery" class="w-full bg-transparent border-none focus:ring-0 text-base text-gray-900 placeholder:text-gray-400 h-full px-3 outline-none" placeholder="附近球场搜索..."/>
              <div class="pr-4 text-primary cursor-pointer">
                <span class="material-symbols-outlined">tune</span>
              </div>
            </div>
        </label>
        <!-- Reset Filter Button -->
        <button 
          @click="resetFilters"
          class="flex h-12 w-12 items-center justify-center rounded-xl transition-colors group bg-surface-light border border-gray-200 text-gray-600 hover:bg-gray-100"
          title="重置"
        >
          <span class="material-symbols-outlined text-[18px]">refresh</span>
        </button>
      </div>
      <!-- Toggle (Map / List) -->
      <div class="px-4 pb-3">
        <div class="flex h-10 w-full items-center justify-center rounded-lg bg-gray-100 p-1">
          <label class="flex cursor-pointer h-full grow items-center justify-center rounded-md bg-white shadow-sm text-gray-900 text-sm font-medium transition-all">
            <span class="material-symbols-outlined text-[18px] mr-2">format_list_bulleted</span>
            <span class="truncate">列表视图</span>
            <input checked class="hidden" name="view-toggle" type="radio" value="List View"/>
          </label>
          <label class="flex cursor-pointer h-full grow items-center justify-center rounded-md text-gray-500 text-sm font-medium hover:text-gray-900 transition-all">
            <span class="material-symbols-outlined text-[18px] mr-2">map</span>
            <span class="truncate">地图视图</span>
            <input class="hidden" name="view-toggle" type="radio" value="Map View"/>
          </label>
        </div>
      </div>
      <!-- Filters (Scrollable) -->
      <div class="px-4 pb-3">
        <div class="flex justify-between items-center mb-2">
          <div class="flex gap-1 overflow-x-auto scrollbar-hide">
            <!-- Filter: Distance -->
            <button 
              @click="toggleFilterPanel('distance')"
              class="flex h-8 shrink-0 items-center justify-center gap-x-0.5 rounded-full pl-2 pr-1.5 transition-colors group bg-surface-light border border-gray-200 text-gray-600"
            >
              <span class="material-symbols-outlined text-[16px] text-gray-600">location_on</span>
              <p class="text-xs font-medium whitespace-nowrap text-gray-600">{{ distanceRange > 0 ? `${distanceRange}km` : '距离' }}</p>
              <span class="material-symbols-outlined text-[14px] text-gray-600">expand_more</span>
            </button>
            <!-- Filter: Surface -->
            <button 
              @click="toggleFilterPanel('surface')"
              class="flex h-8 shrink-0 items-center justify-center gap-x-0.5 rounded-full pl-2 pr-1.5 transition-colors group bg-surface-light border border-gray-200 text-gray-600"
            >
              <span class="material-symbols-outlined text-[16px] text-gray-600">texture</span>
              <p class="text-xs font-medium whitespace-nowrap text-gray-600">{{ selectedSurface ? selectedSurfaceLabel : '场地' }}</p>
              <span class="material-symbols-outlined text-[14px] text-gray-600">expand_more</span>
            </button>
            <!-- Filter: Time Slot -->
            <button 
              @click="toggleFilterPanel('date')"
              class="flex h-8 shrink-0 items-center justify-center gap-x-0.5 rounded-full pl-2 pr-1.5 transition-colors group bg-surface-light border border-gray-200 text-gray-600"
            >
              <span class="material-symbols-outlined text-[16px] text-gray-600">calendar_today</span>
              <p class="text-xs font-medium whitespace-nowrap text-gray-600">{{ selectedDate ? selectedDateLabel : '时段' }}</p>
              <span class="material-symbols-outlined text-[14px] text-gray-600">expand_more</span>
            </button>
            <!-- Filter: Price -->
            <button 
              @click="toggleFilterPanel('price')"
              class="flex h-8 shrink-0 items-center justify-center gap-x-0.5 rounded-full pl-2 pr-1.5 transition-colors group bg-surface-light border border-gray-200 text-gray-600"
            >
              <span class="material-symbols-outlined text-[16px] text-gray-600">attach_money</span>
              <p class="text-xs font-medium whitespace-nowrap text-gray-600">{{ priceRange > 0 ? `¥${priceRange}` : '价格' }}</p>
              <span class="material-symbols-outlined text-[14px] text-gray-600">expand_more</span>
            </button>
            <!-- Filter: Duration -->
            <button 
              @click="toggleFilterPanel('duration')"
              class="flex h-8 shrink-0 items-center justify-center gap-x-0.5 rounded-full pl-2 pr-1.5 transition-colors group bg-surface-light border border-gray-200 text-gray-600"
            >
              <span class="material-symbols-outlined text-[16px] text-gray-600">timer</span>
              <p class="text-xs font-medium whitespace-nowrap text-gray-600">{{ selectedDuration ? selectedDurationLabel : '时长' }}</p>
              <span class="material-symbols-outlined text-[14px] text-gray-600">expand_more</span>
            </button>
          </div>
        </div>
        
        <!-- Filter Panels -->
        <!-- Distance Range Slider -->
        <div v-if="activePanel === 'distance'" class="pt-3 pb-2 border-t border-gray-100">
          <div class="flex justify-between items-center mb-2">
            <p class="text-sm font-medium">距离范围</p>
            <p class="text-sm font-bold text-primary">{{ distanceRange }} km</p>
          </div>
          <input 
            v-model="distanceRange" 
            type="range" 
            name="distance"
            min="0" 
            max="10" 
            step="0.5"
            class="w-full h-2 rounded-lg appearance-none cursor-pointer accent-primary"
            :style="{'--distance-range': distanceRange}"
          />
          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <span>0 km</span>
            <span>10 km</span>
          </div>
        </div>
        
        <!-- Surface Type Options -->
        <div v-if="activePanel === 'surface'" class="pt-3 pb-2 border-t border-gray-100">
          <p class="text-sm font-medium mb-2">场地类型</p>
          <div class="grid grid-cols-3 gap-2">
            <button 
              v-for="option in surfaceOptions" 
              :key="option.value"
              @click="selectSurface(option.value)"
              class="py-2 px-4 rounded-lg transition-colors text-sm font-medium"
              :class="selectedSurface === option.value ? 'bg-primary text-background-dark' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
        
        <!-- Date Options -->
        <div v-if="activePanel === 'date'" class="pt-3 pb-2 border-t border-gray-100">
          <p class="text-sm font-medium mb-2">日期</p>
          <div class="grid grid-cols-2 gap-2">
            <button 
              v-for="option in dateOptions" 
              :key="option.value"
              @click="selectDate(option.value)"
              class="py-2 px-4 rounded-lg transition-colors text-sm font-medium"
              :class="selectedDate === option.value ? 'bg-primary text-background-dark' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
        
        <!-- Price Range Slider -->
        <div v-if="activePanel === 'price'" class="pt-3 pb-2 border-t border-gray-100">
          <div class="flex justify-between items-center mb-2">
            <p class="text-sm font-medium">价格范围</p>
            <p class="text-sm font-bold text-primary">¥{{ priceRange }}</p>
          </div>
          <input 
            v-model="priceRange" 
            type="range" 
            name="price"
            min="0" 
            max="500" 
            step="10"
            class="w-full h-2 rounded-lg appearance-none cursor-pointer accent-primary"
            :style="{'--price-range': priceRange}"
          />
          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <span>¥0</span>
            <span>¥500</span>
          </div>
        </div>
        
        <!-- Duration Options -->
        <div v-if="activePanel === 'duration'" class="pt-3 pb-2 border-t border-gray-100">
          <p class="text-sm font-medium mb-2">时长</p>
          <div class="grid grid-cols-2 gap-2">
            <button 
              v-for="option in durationOptions" 
              :key="option.value"
              @click="selectDuration(option.value)"
              class="py-2 px-4 rounded-lg transition-colors text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
              :class="selectedDuration === option.value ? 'bg-primary text-background-dark' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Area: List of Courts -->
    <main class="flex-1 overflow-y-auto bg-background-light p-4 pb-24 space-y-4">
      <!-- Result Count -->
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">找到 {{ filteredAndSortedCourts.length }} 个球场</h2>
        <!-- Sort Options -->
        <div class="relative">
          <button 
            @click="toggleSortOptions"
            class="flex items-center text-primary text-sm font-medium hover:text-primary/80 transition-colors"
          >
            <span class="material-symbols-outlined text-[16px] mr-1">sort</span> {{ selectedSortLabel }}
          </button>
          <!-- Sort Options Dropdown -->
          <div 
            v-if="showSortOptions" 
            class="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 z-50 min-w-[120px] overflow-hidden"
          >
            <button 
              v-for="option in sortOptions" 
              :key="option.value"
              @click="selectSort(option.value)"
              class="w-full text-left py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-50"
              :class="sortBy === option.value ? 'bg-primary/10 text-primary' : 'text-gray-700'"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
      <!-- Dynamic Court Cards -->
      <router-link 
        v-for="court in filteredAndSortedCourts" 
        :key="court.courtId" 
        :to="`/courts/${court.courtId}`" 
        class="block group bg-surface-light rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-primary/20"
      >
        <div class="relative h-44 w-full rounded-xl overflow-hidden mb-3 bg-gray-200">
          <!-- Using real tennis court images from Unsplash -->
          <img 
            :src="`https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop`" 
            :alt="court.name" 
            class="w-full h-full object-cover"
          />
          <div class="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
            <span class="material-symbols-outlined text-yellow-500 text-[14px]" style="font-variation-settings: 'FILL' 1;">star</span> 
            {{ court.rating }}
          </div>
          <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-medium text-white flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">directions_car</span> {{ Math.random() * 10 + 0.5 | 0 }}.{{ Math.random() * 9 | 0 }} km
          </div>
          <div v-if="!court.available" class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
            不可用
          </div>
        </div>
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="text-lg font-bold text-gray-900 leading-tight">{{ court.name }}</h3>
            <div class="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <span class="flex items-center gap-1">
                <span class="w-2 h-2 rounded-full" :class="{
                  'bg-blue-500': court.surfaceType === 'Hard',
                  'bg-orange-600': court.surfaceType === 'Clay',
                  'bg-green-500': court.surfaceType === 'Grass',
                  'bg-purple-500': court.surfaceType === 'Carpet'
                }"></span> {{ court.surfaceType === 'Hard' ? '硬地' : court.surfaceType === 'Clay' ? '红土' : court.surfaceType === 'Grass' ? '草地' : '地毯' }}球场
              </span>
              <span>•</span>
              <span>{{ court.indoor ? '室内' : '室外' }}</span>
            </div>
          </div>
          <div class="text-right">
            <p class="text-primary font-bold text-lg">¥{{ court.pricePerHour }}</p>
            <p class="text-xs text-gray-400">/小时</p>
          </div>
        </div>
        <div class="flex gap-2 mt-3 pt-3 border-t border-gray-100">
          <div class="flex-1 flex items-center gap-1 text-xs font-medium" :class="court.available ? 'text-green-600' : 'text-red-600'">
            <span class="w-2 h-2 rounded-full animate-pulse" :class="court.available ? 'bg-green-500' : 'bg-red-500'"></span> 
            {{ court.available ? '立即预约' : '不可用' }}
          </div>
          <button class="flex-none bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 min-w-[90px] text-sm" 
            :class="court.available ? 
              '' : 
              'bg-gray-200 text-gray-500 cursor-not-allowed shadow-none hover:shadow-none'"
          >
            {{ court.available ? '预约' : '详情' }}
          </button>
        </div>
      </router-link>
    </main>

    <!-- Bottom Navigation Bar -->
    <nav class="fixed bottom-0 w-full z-50 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6">
      <div class="flex justify-between items-center max-w-md mx-auto">
        <!-- 球场 -->
        <router-link to="/courts" class="flex flex-col items-center gap-1 p-2 text-primary dark:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl fill-current">search</span>
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
        <router-link to="/profile" class="flex flex-col items-center gap-1 p-2 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl">person</span>
          <span class="text-[10px] font-medium">个人</span>
        </router-link>
      </div>
      <div class="h-6 w-full"></div> <!-- Safe area spacing -->
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { mockData } from '../api/mockData';

const courts = ref(mockData.courts);
const searchQuery = ref('');

// Filter panel state
const activePanel = ref<string | null>(null);

// Filter state management
const distanceRange = ref(0);
const selectedSurface = ref<string | null>(null);
const selectedDate = ref<string | null>(null);
const priceRange = ref(0);
const selectedDuration = ref<string | null>(null);

// Sorting state
const sortBy = ref<string | null>(null);
const showSortOptions = ref(false);

// Surface type options
const surfaceOptions = [
  { label: '室外', value: 'outdoor' },
  { label: '室内', value: 'indoor' },
  { label: '风雨棚', value: 'covered' }
];

// Date options
const dateOptions = [
  { label: '今天', value: 'today' },
  { label: '明天', value: 'tomorrow' },
  { label: '近3日', value: '3days' },
  { label: '近5日', value: '5days' }
];

// Duration options
const durationOptions = [
  { label: '1小时', value: '1h' },
  { label: '2小时', value: '2h' },
  { label: '3小时', value: '3h' },
  { label: '4小时', value: '4h' }
];

// Sort options
const sortOptions = [
  { label: '距离', value: 'distance' },
  { label: '时间', value: 'time' },
  { label: '价格', value: 'price' },
  { label: '评分', value: 'rating' }
];

// Toggle filter panel
const toggleFilterPanel = (panelType: string) => {
  if (activePanel.value === panelType) {
    activePanel.value = null;
  } else {
    activePanel.value = panelType;
    showSortOptions.value = false;
  }
};

// Surface selection
const selectSurface = (value: string) => {
  selectedSurface.value = selectedSurface.value === value ? null : value;
};

// Date selection
const selectDate = (value: string) => {
  selectedDate.value = selectedDate.value === value ? null : value;
};

// Duration selection
const selectDuration = (value: string) => {
  selectedDuration.value = selectedDuration.value === value ? null : value;
};

// Sort selection
const selectSort = (value: string) => {
  sortBy.value = sortBy.value === value ? null : value;
  showSortOptions.value = false;
};

// Toggle sort options
const toggleSortOptions = () => {
  showSortOptions.value = !showSortOptions.value;
  if (showSortOptions.value) {
    activePanel.value = null;
  }
};

// Reset all filters
const resetFilters = () => {
  distanceRange.value = 0;
  selectedSurface.value = null;
  selectedDate.value = null;
  priceRange.value = 0;
  selectedDuration.value = null;
  sortBy.value = null;
  activePanel.value = null;
  showSortOptions.value = false;
};

// Computed properties for display labels
const selectedSurfaceLabel = computed(() => {
  const option = surfaceOptions.find(opt => opt.value === selectedSurface.value);
  return option ? option.label : '';
});

const selectedDateLabel = computed(() => {
  const option = dateOptions.find(opt => opt.value === selectedDate.value);
  return option ? option.label : '';
});

const selectedDurationLabel = computed(() => {
  const option = durationOptions.find(opt => opt.value === selectedDuration.value);
  return option ? option.label : '';
});

const selectedSortLabel = computed(() => {
  const option = sortOptions.find(opt => opt.value === sortBy.value);
  return option ? option.label : '排序方式';
});

// Comprehensive filtering logic
const filteredAndSortedCourts = computed(() => {
  let filtered = courts.value.filter(court => {
    // Search query filter
    const matchesSearch = !searchQuery.value || 
      court.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      court.address.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    // Distance filter - mock implementation
    // In real app, this would use actual distance calculation
    const mockDistance = Math.random() * 10; // Mock distance between 0-10km
    const matchesDistance = distanceRange.value === 0 || mockDistance <= distanceRange.value;
    
    // Surface filter
    let matchesSurface = true;
    if (selectedSurface.value) {
      switch (selectedSurface.value) {
        case 'outdoor':
          matchesSurface = !court.indoor;
          break;
        case 'indoor':
          matchesSurface = court.indoor;
          break;
        case 'covered':
          // Assuming all indoor courts have covers for this mock
          matchesSurface = court.indoor;
          break;
        default:
          matchesSurface = true;
      }
    }
    
    // Date filter - mock implementation
    const matchesDate = !selectedDate.value; // In real app, this would check actual dates
    
    // Price filter
    const matchesPrice = priceRange.value === 0 || court.pricePerHour <= priceRange.value;
    
    // Duration filter - mock implementation
    const matchesDuration = !selectedDuration.value; // In real app, this would check actual duration availability
    
    // All filters must pass
    return matchesSearch && matchesDistance && matchesSurface && matchesDate && matchesPrice && matchesDuration;
  });
  
  // Sorting logic
  if (sortBy.value) {
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy.value) {
        case 'distance':
          // Mock distance comparison
          const distanceA = Math.random() * 10;
          const distanceB = Math.random() * 10;
          return distanceA - distanceB;
        case 'price':
          return a.pricePerHour - b.pricePerHour;
        case 'time':
          // Mock time comparison
          return Math.random() - 0.5;
        case 'rating':
          // Sort by rating in descending order (higher rating first)
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }
  
  return filtered;
});
</script>

<style scoped>
/* Custom scrollbar hiding for horizontal scroll areas */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* Custom range slider styling */
input[type=range] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
}

/* Track styles */
input[type=range]::-webkit-slider-runnable-track {
  background: #e5e7eb;
  border-radius: 10px;
  height: 8px;
  position: relative;
}

/* Custom fill for selected range */
input[type=range]::-webkit-slider-runnable-track:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #3b82f6;
  border-radius: 10px;
  transition: width 0.1s ease;
}

input[type=range][name=distance]::-webkit-slider-runnable-track:before {
  width: calc(var(--distance-range) * 10%);
}

input[type=range][name=price]::-webkit-slider-runnable-track:before {
  width: calc(var(--price-range) * 0.2%);
}

/* Thumb styles */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: #3b82f6;
  border: 2px solid white;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  margin-top: -5px;
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

input[type=range]::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Firefox styles */
input[type=range]::-moz-range-track {
  background: #e5e7eb;
  border-radius: 10px;
  height: 8px;
}

input[type=range]::-moz-range-progress {
  background: #3b82f6;
  border-radius: 10px;
  height: 8px;
}

input[type=range]::-moz-range-thumb {
  background: #3b82f6;
  border: 2px solid white;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

input[type=range]::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>
