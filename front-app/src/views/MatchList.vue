<template>
  <div class="bg-background-light font-display antialiased transition-colors duration-200 min-h-screen flex flex-col">
    <!-- Sticky Header Section -->
    <div class="sticky top-0 z-30 bg-background-light/95 backdrop-blur-sm border-b border-gray-100 safe-top">
      <!-- Safe Area Top Spacer -->
      <div class="h-safe w-full"></div>

      <!-- Search Bar with Reset Button -->
      <div class="px-4 py-2 flex items-center gap-2">
        <label class="flex flex-col h-12 flex-1">
          <div class="flex w-full flex-1 items-center rounded-xl bg-gray-100 overflow-hidden ring-1 ring-transparent focus-within:ring-primary transition-all">
              <div class="flex items-center justify-center pl-4 text-gray-400">
                <span class="material-symbols-outlined">search</span>
              </div>
              <input v-model="searchQuery" class="w-full bg-transparent border-none focus:ring-0 text-base text-gray-900 placeholder:text-gray-400 h-full px-3 outline-none" placeholder="搜索活动名称、球场或地点"/>
              <div class="pr-4 text-primary cursor-pointer" @click="showFilterDialog = true">
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

    </div>

    <!-- Scrollable Content -->
    <div class="flex-1 px-4 py-2 space-y-4 pb-24 overflow-y-auto">
      <!-- Sort Bar -->
      <div class="flex items-center justify-between text-xs text-gray-500 px-1">
        <span>共找到 {{ filteredMatches.length }} 个活动</span>
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

      <!-- Dynamic Match Cards -->
      <template v-for="match in filteredMatches" :key="match.matchId">
        <router-link 
          :to="`/matches/${match.matchId}`" 
          class="group relative flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md border border-transparent"
          :class="{ 'opacity-90': match.currentPlayers === match.maxPlayers }"
        >
          <!-- Header with Badge and Image -->
          <div class="flex justify-between items-start gap-4">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary-dark ring-1 ring-inset ring-primary/20">{{ getLevelBadge(match.levelMin, match.levelMax) }}</span>
                <span v-if="getStatusBadge(match.currentPlayers, match.maxPlayers)" 
                  class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset"
                  :class="getStatusBadge(match.currentPlayers, match.maxPlayers)?.class.replace(/dark:\w+\s*/g, '')"
                >
                  {{ getStatusBadge(match.currentPlayers, match.maxPlayers)?.text }}
                </span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 leading-tight truncate">{{ match.description }}</h3>
              <p class="mt-1 flex items-center text-sm text-gray-500">
                <span class="material-symbols-outlined mr-1 shrink-0" style="font-size: 16px;">schedule</span>
                {{ match.date }} {{ match.startTime }} - {{ match.endTime }}
              </p>
              <p class="mt-0.5 flex items-center text-sm text-gray-500">
                <span class="material-symbols-outlined mr-1 shrink-0" style="font-size: 16px;">location_on</span>
                {{ match.courtName }} <span class="ml-1 text-gray-400">({{ match.distance }}km)</span>
              </p>
            </div>
            <div class="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <!-- Placeholder for court image -->
              <div class="w-full h-full flex items-center justify-center text-gray-400">
                <span class="material-symbols-outlined text-3xl">sports_tennis</span>
              </div>
            </div>
          </div>
          <!-- Divider -->
          <div class="h-px w-full bg-gray-100"></div>
          <!-- Footer: Participants & Action -->
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-1">
              <div class="flex -space-x-2 overflow-hidden">
                <!-- Placeholder avatars -->
                <div v-for="i in Math.min(2, match.currentPlayers)" :key="i" 
                  class="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-300"
                ></div>
                <div v-if="match.currentPlayers > 2" 
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white"
                >
                  <span class="text-xs font-medium text-gray-500">{{ match.currentPlayers }}/{{ match.maxPlayers }}</span>
                </div>
                <div v-else-if="match.currentPlayers < match.maxPlayers" 
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white"
                >
                  <span class="text-xs font-medium text-gray-500">{{ match.currentPlayers }}/{{ match.maxPlayers }}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="text-right">
                <p class="text-lg font-bold text-primary-dark">
                  {{ match.costType === 'Free' ? '免费' : `¥${match.costPerPerson}` }}
                  <span v-if="match.costType !== 'Free'" class="text-xs font-normal text-gray-500">/人</span>
                </p>
              </div>
              <button 
                class="flex-none bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 min-w-[90px] text-sm active:scale-95"
                :class="{
                  'bg-gray-200 text-gray-500 cursor-not-allowed shadow-none hover:shadow-none': match.currentPlayers >= match.maxPlayers
                }"
                :disabled="match.currentPlayers >= match.maxPlayers"
              >
                {{ match.currentPlayers >= match.maxPlayers ? '满员' : '报名' }}
              </button>
            </div>
          </div>
        </router-link>
      </template>
    </div>

    <!-- Filter Dialog -->
    <div v-if="showFilterDialog" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-center">
      <div class="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-auto p-5">
        <!-- Dialog Header -->
        <div class="flex justify-between items-center mb-5">
          <h2 class="text-xl font-bold text-gray-900">筛选条件</h2>
          <button @click="applyFilters" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-all shadow-md shadow-primary/20 active:scale-95">
            确认
          </button>
        </div>
        
        <!-- Filter Form -->
        <div class="space-y-6">
          <!-- Filter Controls -->
          <div>
            <div class="flex gap-3">
              <!-- Time Slot Filter -->
              <div class="relative flex-1">
                <button 
                  @click="toggleFilterPanel('timeSlot')"
                  class="flex h-10 w-full items-center justify-center gap-x-0.5 rounded-full pl-3 pr-2 transition-colors group bg-surface-light border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  <span class="material-symbols-outlined text-[18px] text-gray-600">calendar_today</span>
                  <p class="text-sm font-medium whitespace-nowrap text-gray-600">{{ getSelectedLabel(selectedTimeSlot, timeSlotOptions, '时段') }}</p>
                  <span class="material-symbols-outlined text-[16px] text-gray-600">expand_more</span>
                </button>
                <!-- Time Slot Dropdown Panel -->
                <div v-if="activePanel === 'timeSlot'" class="absolute mt-1 bg-white rounded-xl shadow-lg border border-gray-100 z-50 w-full overflow-hidden">
                  <button 
                    v-for="option in timeSlotOptions" 
                    :key="option.value"
                    @click="selectFilter('timeSlot', option.value)"
                    class="w-full text-left py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-50"
                    :class="selectedTimeSlot === option.value ? 'bg-primary/10 text-primary' : 'text-gray-700'"
                  >
                    {{ option.label }}
                  </button>
                </div>
              </div>
              
              <!-- Court Type Filter -->
              <div class="relative flex-1">
                <button 
                  @click="toggleFilterPanel('courtType')"
                  class="flex h-10 w-full items-center justify-center gap-x-0.5 rounded-full pl-3 pr-2 transition-colors group bg-surface-light border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  <span class="material-symbols-outlined text-[18px] text-gray-600">texture</span>
                  <p class="text-sm font-medium whitespace-nowrap text-gray-600">{{ getSelectedLabel(selectedCourtType, courtTypeOptions, '场地') }}</p>
                  <span class="material-symbols-outlined text-[16px] text-gray-600">expand_more</span>
                </button>
                <!-- Court Type Dropdown Panel -->
                <div v-if="activePanel === 'courtType'" class="absolute mt-1 bg-white rounded-xl shadow-lg border border-gray-100 z-50 w-full overflow-hidden">
                  <button 
                    v-for="option in courtTypeOptions" 
                    :key="option.value"
                    @click="selectFilter('courtType', option.value)"
                    class="w-full text-left py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-50"
                    :class="selectedCourtType === option.value ? 'bg-primary/10 text-primary' : 'text-gray-700'"
                  >
                    {{ option.label }}
                  </button>
                </div>
              </div>
              
              <!-- Match Type Filter -->
              <div class="relative flex-1">
                <button 
                  @click="toggleFilterPanel('matchType')"
                  class="flex h-10 w-full items-center justify-center gap-x-0.5 rounded-full pl-3 pr-2 transition-colors group bg-surface-light border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  <span class="material-symbols-outlined text-[18px] text-gray-600">sports_tennis</span>
                  <p class="text-sm font-medium whitespace-nowrap text-gray-600">{{ getSelectedLabel(selectedMatchType, matchTypeOptions, '单双打') }}</p>
                  <span class="material-symbols-outlined text-[16px] text-gray-600">expand_more</span>
                </button>
                <!-- Match Type Dropdown Panel -->
                <div v-if="activePanel === 'matchType'" class="absolute mt-1 bg-white rounded-xl shadow-lg border border-gray-100 z-50 w-full overflow-hidden">
                  <button 
                    v-for="option in matchTypeOptions" 
                    :key="option.value"
                    @click="selectFilter('matchType', option.value)"
                    class="w-full text-left py-2 px-4 text-sm font-medium transition-colors hover:bg-gray-50"
                    :class="selectedMatchType === option.value ? 'bg-primary/10 text-primary' : 'text-gray-700'"
                  >
                    {{ option.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Slider Filters -->
          <div>
            <!-- Distance Filter -->
            <div class="mb-5">
              <div class="flex justify-between items-center mb-2">
                <label class="block text-sm font-medium text-gray-700">距离</label>
                <span class="text-sm font-bold text-primary">{{ distanceRange < 0.1 ? '不限' : `${distanceRange} km 之内` }}</span>
              </div>
              <div class="relative">
                <input 
                  v-model="distanceRange" 
                  type="range" 
                  min="0" 
                  max="20" 
                  step="0.5"
                  class="w-full h-4 rounded-lg appearance-none cursor-pointer custom-slider"
                  :style="{'--slider-value': distanceRange}"
                />
              </div>
              <div class="flex justify-between text-xs text-gray-500 mt-1">
                <span>不限</span>
                <span>20 km</span>
              </div>
            </div>
            
            <!-- Price Filter -->
            <div class="mb-5">
              <div class="flex justify-between items-center mb-2">
                <label class="block text-sm font-medium text-gray-700">价格</label>
                <span class="text-sm font-bold text-primary">{{ priceRange < 1 ? '不限' : `¥${priceRange} 之内` }}</span>
              </div>
              <div class="relative">
                <input 
                  v-model="priceRange" 
                  type="range" 
                  min="0" 
                  max="500" 
                  step="10"
                  class="w-full h-4 rounded-lg appearance-none cursor-pointer custom-slider"
                  :style="{'--slider-value': priceRange}"
                />
              </div>
              <div class="flex justify-between text-xs text-gray-500 mt-1">
                <span>不限</span>
                <span>¥500</span>
              </div>
            </div>
            
            <!-- Level Filter (Converted to Slider) -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="block text-sm font-medium text-gray-700">水平</label>
                <span class="text-sm font-bold text-primary">{{ getLevelLabel(levelRange) }}</span>
              </div>
              <div class="relative">
                <input 
                  v-model="levelRange" 
                  type="range" 
                  min="0" 
                  max="6" 
                  step="1"
                  class="w-full h-4 rounded-lg appearance-none cursor-pointer custom-slider"
                  :style="{'--slider-value': levelRange}"
                />
              </div>
              <div class="flex justify-between text-xs text-gray-500 mt-1">
                <span>不限</span>
                <span>职业</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Dialog Actions -->
        <div class="flex gap-3 mt-8 pt-5 border-t border-gray-100">
          <button 
            @click="resetAllFilters"
            class="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors"
          >
            重置
          </button>
          <button 
            @click="applyFilters"
            class="flex-1 py-3 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors shadow-md shadow-primary/20"
          >
            应用筛选
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation Bar -->
    <nav class="fixed bottom-0 w-full z-50 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6">
      <div class="flex justify-between items-center max-w-md mx-auto">
        <!-- 球场 -->
        <router-link to="/courts" class="flex flex-col items-center gap-1 p-2 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl">search</span>
          <span class="text-[10px] font-medium">球场</span>
        </router-link>
        <!-- 约球 -->
        <router-link to="/matches" class="flex flex-col items-center gap-1 p-2 text-primary dark:text-primary transition-colors">
          <span class="material-symbols-outlined text-2xl fill-current">sports_tennis</span>
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
import { useRouter } from 'vue-router';
import { mockData } from '../api/mockData';

const router = useRouter();
const matches = ref(mockData.matches);
const searchQuery = ref('');

// Filter dialog state
const showFilterDialog = ref(false);

// Active filter panel state
const activePanel = ref<string | null>(null);

// Filter state management
const selectedTimeSlot = ref<string | null>('all'); // Set default to 'all'
const distanceRange = ref(0);
const selectedCourtType = ref<string | null>('all'); // Set default to 'all'
const selectedMatchType = ref<string | null>('all'); // Set default to 'all'
const priceRange = ref(0);
const levelRange = ref(0); // Changed from selectedLevel to levelRange for slider

// Sorting state
const sortBy = ref<string | null>(null);
const showSortOptions = ref(false);

// Sort options
const sortOptions = [
  { label: '推荐', value: 'recommend' },
  { label: '距离', value: 'distance' },
  { label: '时间', value: 'time' },
  { label: '价格', value: 'price' }
];

// Options for filters
const timeSlotOptions = [
  { label: '不限', value: 'all' },
  { label: '今天', value: 'today' },
  { label: '明天', value: 'tomorrow' },
  { label: '近3天', value: '3days' },
  { label: '近5天', value: '5days' }
];

const courtTypeOptions = [
  { label: '不限', value: 'all' },
  { label: '室内', value: 'indoor' },
  { label: '室外', value: 'outdoor' },
  { label: '风雨棚', value: 'covered' }
];

const matchTypeOptions = [
  { label: '不限', value: 'all' },
  { label: '单打', value: 'singles' },
  { label: '双打', value: 'doubles' }
];

// Level labels for slider
const levelLabels = [
  '不限', '菜鸟', '新手', '进阶', '高手', '专业', '职业'
];

// Get level label from slider value
const getLevelLabel = (value: number) => {
  return levelLabels[value] || levelLabels[0];
};

// Toggle filter panel
const toggleFilterPanel = (panelType: string) => {
  if (activePanel.value === panelType) {
    activePanel.value = null;
  } else {
    activePanel.value = panelType;
  }
};

// Get selected label for filter button
const getSelectedLabel = (value: string | null, options: { label: string; value: string }[], defaultLabel: string) => {
  if (!value || value === 'all') return defaultLabel;
  const option = options.find(opt => opt.value === value);
  return option ? option.label : defaultLabel;
};

// Select filter option
const selectFilter = (filterType: string, value: string) => {
  switch (filterType) {
    case 'timeSlot':
      selectedTimeSlot.value = value;
      break;
    case 'courtType':
      selectedCourtType.value = value;
      break;
    case 'matchType':
      selectedMatchType.value = value;
      break;
  }
  activePanel.value = null;
};

// Sorting functionality
const selectedSortLabel = computed(() => {
  const option = sortOptions.find(opt => opt.value === sortBy.value);
  return option ? option.label : '排序方式';
});

// Toggle sort options dropdown
const toggleSortOptions = () => {
  showSortOptions.value = !showSortOptions.value;
};

// Select sort option
const selectSort = (value: string) => {
  sortBy.value = sortBy.value === value ? null : value;
  showSortOptions.value = false;
};

const filteredMatches = computed(() => {
  let filtered = matches.value.filter(match => {
    // Search query filter
    const matchesSearch = !searchQuery.value || 
      match.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      match.courtName.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    // Time slot filter (mock implementation)
    const matchesTimeSlot = !selectedTimeSlot.value || selectedTimeSlot.value === 'all'; // In real app, this would check actual dates
    
    // Distance filter (mock implementation)
    const mockDistance = Math.random() * 20; // Mock distance between 0-20km
    const matchesDistance = distanceRange.value === 0 || mockDistance <= distanceRange.value;
    
    // Court type filter (mock implementation)
    const matchesCourtType = !selectedCourtType.value || selectedCourtType.value === 'all'; // In real app, this would check actual court type
    
    // Match type filter (mock implementation)
    const matchesMatchType = !selectedMatchType.value || selectedMatchType.value === 'all'; // In real app, this would check actual match type
    
    // Price filter (mock implementation)
    const matchesPrice = priceRange.value === 0 || match.costPerPerson <= priceRange.value;
    
    // Level filter (mock implementation)
    const matchesLevel = levelRange.value === 0; // In real app, this would check actual level based on slider value
    
    // All filters must pass
    return matchesSearch && matchesTimeSlot && matchesDistance && matchesCourtType && matchesMatchType && matchesPrice && matchesLevel;
  });
  
  // Apply sorting
  if (sortBy.value) {
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy.value) {
        case 'recommend':
          // Mock recommendation sorting
          return Math.random() - 0.5;
        case 'distance':
          // Mock distance sorting
          const distanceA = Math.random() * 20;
          const distanceB = Math.random() * 20;
          return distanceA - distanceB;
        case 'time':
          // Mock time sorting
          return Math.random() - 0.5;
        case 'price':
          return a.costPerPerson - b.costPerPerson;
        default:
          return 0;
      }
    });
  }
  
  return filtered;
});

const getLevelBadge = (min: number, _max: number) => {
  return `NTRP ${min}+`;
};

const getStatusBadge = (current: number, max: number) => {
  const remaining = max - current;
  if (remaining === 0) return { text: '已满员', class: 'bg-gray-100 text-gray-600' };
  if (remaining === 1) return { text: '仅剩1位', class: 'bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-600/20' };
  return null;
};

// Reset all filters
const resetFilters = () => {
  searchQuery.value = '';
  resetAllFilters();
};

// Reset all filter dialog filters
const resetAllFilters = () => {
  selectedTimeSlot.value = null;
  distanceRange.value = 0;
  selectedCourtType.value = null;
  selectedMatchType.value = null;
  priceRange.value = 0;
  levelRange.value = 0;
};

// Apply filters
const applyFilters = () => {
  // Here you would typically apply the filters to your data
  console.log('Applying filters:', {
    selectedTimeSlot: selectedTimeSlot.value,
    distanceRange: distanceRange.value,
    selectedCourtType: selectedCourtType.value,
    selectedMatchType: selectedMatchType.value,
    priceRange: priceRange.value,
    levelRange: levelRange.value
  });
  
  // Close the dialog after applying filters
  showFilterDialog.value = false;
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar,
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.no-scrollbar,
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Custom slider styles */
.custom-slider {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  position: relative;
}

/* Track styles */
.custom-slider::-webkit-slider-runnable-track {
  background: #e5e7eb;
  border-radius: 10px;
  height: 8px;
  position: relative;
  overflow: hidden;
}

/* Custom fill for selected range */
.custom-slider::-webkit-slider-runnable-track::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #3b82f6;
  border-radius: 10px;
  transition: width 0.1s ease;
}

/* Distance slider fill */
input[type=range][class*="custom-slider"]::-webkit-slider-runnable-track::before {
  width: calc(var(--slider-value) / 20 * 100%);
}

/* Price slider fill */
input[type=range][class*="custom-slider"][max="500"]::-webkit-slider-runnable-track::before {
  width: calc(var(--slider-value) / 500 * 100%);
}

/* Level slider fill */
input[type=range][class*="custom-slider"][max="6"]::-webkit-slider-runnable-track::before {
  width: calc(var(--slider-value) / 6 * 100%);
}

/* Thumb styles */
.custom-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: #3b82f6;
  border: 2px solid white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-top: -6px;
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.custom-slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Firefox styles */
.custom-slider::-moz-range-track {
  background: #e5e7eb;
  border-radius: 10px;
  height: 8px;
}

.custom-slider::-moz-range-progress {
  background: #3b82f6;
  border-radius: 10px;
  height: 8px;
}

.custom-slider::-moz-range-thumb {
  background: #3b82f6;
  border: 2px solid white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.custom-slider::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>
