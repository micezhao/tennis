<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased pb-24">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
      <button @click="goBack" class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 class="text-lg font-bold text-text-main dark:text-white">场地预订详情</h1>
      <div class="w-10"></div>
    </header>

    <!-- Booking Detail Content -->
    <main class="px-4 py-4">
      <!-- Booking Status -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-text-main dark:text-white">{{ booking.courtName }}</h2>
          <div 
            class="px-3 py-1 rounded-full text-xs font-bold"
            :class="booking.status === 'completed' ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'"
          >
            {{ booking.status === 'completed' ? '已完成' : '已预订' }}
          </div>
        </div>
      </div>

      <!-- Booking Information -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">预订信息</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <div class="mt-0.5 w-5 h-5 flex items-center justify-center text-gray-400 dark:text-gray-500">
              <span class="material-symbols-outlined text-[16px]">date_range</span>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-400">预订日期</p>
              <p class="text-sm font-medium text-text-main dark:text-white">{{ booking.date }}</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="mt-0.5 w-5 h-5 flex items-center justify-center text-gray-400 dark:text-gray-500">
              <span class="material-symbols-outlined text-[16px]">schedule</span>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-400">预订时段</p>
              <div class="flex flex-wrap gap-2 mt-1">
                <span 
                  v-for="(slot, index) in booking.timeSlots" 
                  :key="index"
                  class="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-xs font-medium text-primary dark:text-primary"
                >
                  {{ slot }}
                </span>
              </div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="mt-0.5 w-5 h-5 flex items-center justify-center text-gray-400 dark:text-gray-500">
              <span class="material-symbols-outlined text-[16px]">place</span>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-400">场地地址</p>
              <p class="text-sm font-medium text-text-main dark:text-white">{{ booking.courtAddress }}</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="mt-0.5 w-5 h-5 flex items-center justify-center text-gray-400 dark:text-gray-500">
              <span class="material-symbols-outlined text-[16px]">confirmation_number</span>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-400">预订编号</p>
              <p class="text-sm font-medium text-text-main dark:text-white">{{ booking.bookingNumber }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Court Information -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">场地信息</h3>
        <div class="flex gap-3">
          <div class="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
            <img 
              :src="booking.courtImage" 
              :alt="booking.courtName" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1">
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-xs text-gray-500 dark:text-gray-400">场地类型</span>
                <span class="text-sm font-medium text-text-main dark:text-white">{{ booking.courtType }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-xs text-gray-500 dark:text-gray-400">场地数量</span>
                <span class="text-sm font-medium text-text-main dark:text-white">{{ booking.courtNumber }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-xs text-gray-500 dark:text-gray-400">场地设施</span>
                <div class="flex gap-1">
                  <span 
                    v-for="(facility, index) in booking.facilities" 
                    :key="index"
                    class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-300"
                  >
                    {{ facility }}
                  </span>
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
            <span class="text-sm text-gray-600 dark:text-gray-300">支付金额</span>
            <span class="text-base font-bold text-primary">¥{{ booking.totalAmount }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-300">支付时间</span>
            <span class="text-sm font-medium text-text-main dark:text-white">{{ booking.paymentTime }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-300">支付方式</span>
            <span class="text-sm font-medium text-text-main dark:text-white">{{ booking.paymentMethod }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-300">支付订单号</span>
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-text-main dark:text-white">{{ booking.paymentOrderNumber }}</span>
              <button 
                @click="viewOrder"
                class="text-sm text-primary font-medium hover:underline"
              >
                详情
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Rating Section -->
      <div v-if="booking.status === 'completed'" class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-6">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">评价球场</h3>
        <div class="space-y-4">
          <!-- Rating Dimensions -->
          <div class="space-y-3">
            <div v-for="dimension in ratingDimensions" :key="dimension.key" class="flex items-center justify-between">
              <span class="text-sm font-medium text-text-main dark:text-white">{{ dimension.label }}</span>
              <div class="flex items-center gap-1">
                <span 
                  v-for="star in 5" 
                  :key="star"
                  class="material-symbols-outlined text-[18px] cursor-pointer transition-all duration-300"
                  :class="rating[dimension.key] >= star ? 'text-yellow-500 filled' : 'text-gray-300 dark:text-gray-600'"
                  @click="setRating(dimension.key, star)"
                >
                  star
                </span>
                <span class="text-xs text-gray-500 dark:text-gray-400 ml-1">{{ rating[dimension.key] }}</span>
              </div>
            </div>
          </div>

          <!-- Review Content -->
          <div>
            <textarea 
              v-model="reviewContent"
              placeholder="请写下您的评价（最多400字）"
              class="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-text-main dark:text-white text-sm resize-none"
              rows="4"
              maxlength="400"
            ></textarea>
            <div class="flex justify-end mt-1">
              <span class="text-xs text-gray-500 dark:text-gray-400">{{ reviewContent.length }}/400</span>
            </div>
          </div>

          <!-- Image Upload -->
          <div>
            <h4 class="text-sm font-medium text-text-main dark:text-white mb-2">上传图片（最多9张）</h4>
            <div class="flex gap-2 flex-wrap">
              <!-- Upload Button -->
              <button 
                v-if="uploadedImages.length < 9"
                @click="triggerImageUpload"
                class="w-16 h-16 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center hover:border-primary/50 transition-colors cursor-pointer"
              >
                <span class="material-symbols-outlined text-gray-400 dark:text-gray-500">add_photo_alternate</span>
                <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">添加图片</span>
              </button>
              <!-- Hidden File Input -->
              <input 
                ref="fileInputRef"
                type="file"
                accept="image/*"
                multiple
                @change="handleImageUpload"
                class="hidden"
              />
              <!-- Uploaded Images -->
              <div 
                v-for="(image, index) in uploadedImages" 
                :key="index"
                class="w-16 h-16 rounded-xl overflow-hidden relative group"
              >
                <img 
                  :src="image" 
                  alt="Uploaded image" 
                  class="w-full h-full object-cover"
                />
                <button 
                  @click="removeImage(index)"
                  class="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span class="material-symbols-outlined text-xs">close</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button 
            @click="submitRating"
            class="w-full px-4 py-3 rounded-xl text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            提交评价
          </button>
        </div>
      </div>

      <!-- Action Buttons -->
      <div v-if="booking.status !== 'completed'" class="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/5">
        <h3 class="text-base font-semibold text-text-main dark:text-white mb-3">操作</h3>
        <div class="flex gap-3">
          <button 
            class="flex-1 px-4 py-3 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            取消预订
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

interface Booking {
  id: string;
  courtName: string;
  courtAddress: string;
  courtImage: string;
  courtType: string;
  courtNumber: string;
  facilities: string[];
  date: string;
  timeSlots: string[];
  duration: number;
  pricePerHour: number;
  totalAmount: number;
  bookingNumber: string;
  status: 'completed' | 'booked';
  paymentTime: string;
  paymentMethod: string;
  paymentOrderNumber: string;
}

interface RatingDimension {
  key: string;
  label: string;
}

const router = useRouter();
const route = useRoute();

// Mock booking data
const booking = ref<Booking>({
  id: route.params.id as string,
  courtName: '阳光网球场',
  courtAddress: '北京市朝阳区建国路88号',
  courtImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  courtType: '室内',
  courtNumber: '1号场地',
  facilities: ['更衣室', '停车场', '灯光'],
  date: '2026-01-05',
  timeSlots: ['9:00～10:00', '10:00～11:00'],
  duration: 2,
  pricePerHour: 60,
  totalAmount: 120,
  bookingNumber: 'BK20260105001',
  status: 'completed',
  paymentTime: '2026-01-05 14:30',
  paymentMethod: '微信支付',
  paymentOrderNumber: 'PAY20260105001'
});

// Go back
const goBack = () => {
  router.back();
};

// View order
const viewOrder = () => {
  // In a real application, you would use the actual order ID from the booking data
  // For demo purposes, we'll use a mock order ID
  router.push('/profile/my-orders/1');
};

// Rating functionality
const ratingDimensions: RatingDimension[] = [
  { key: 'transportation', label: '交通' },
  { key: 'facilities', label: '配套' },
  { key: 'courtCondition', label: '场地状态' },
  { key: 'service', label: '球场服务' },
  { key: 'lighting', label: '灯光' }
];

const rating = ref({
  transportation: 0,
  facilities: 0,
  courtCondition: 0,
  service: 0,
  lighting: 0
});

const reviewContent = ref('');
const uploadedImages = ref<string[]>([]);
const fileInputRef = ref<HTMLInputElement | null>(null);

// Set rating for a dimension
const setRating = (dimension: string, value: number) => {
  rating.value[dimension as keyof typeof rating.value] = value;
};

// Trigger image upload
const triggerImageUpload = () => {
  fileInputRef.value?.click();
};

// Handle image upload
const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    for (let i = 0; i < input.files.length && uploadedImages.value.length < 9; i++) {
      const file = input.files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        uploadedImages.value.push(result);
      };
      reader.readAsDataURL(file);
    }
    // Reset input to allow re-uploading the same files
    input.value = '';
  }
};

// Remove uploaded image
const removeImage = (index: number) => {
  uploadedImages.value.splice(index, 1);
};

// Submit rating
const submitRating = () => {
  // Check if all dimensions are rated
  const allRated = Object.values(rating.value).every(score => score > 0);
  if (!allRated) {
    alert('请对所有维度进行评分');
    return;
  }
  
  // Check if review content is provided
  if (!reviewContent.value.trim()) {
    alert('请填写评价内容');
    return;
  }
  
  // In a real application, you would submit the rating to the server
  console.log('Rating submitted:', {
    ...rating.value,
    reviewContent: reviewContent.value,
    uploadedImages: uploadedImages.value.length
  });
  
  // Show success message
  alert('评价提交成功');
  
  // Reset rating form
  Object.keys(rating.value).forEach(key => {
    rating.value[key as keyof typeof rating.value] = 0;
  });
  reviewContent.value = '';
  uploadedImages.value = [];
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>