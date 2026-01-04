<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200 font-display">
    <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
      <div class="sticky top-0 z-50 flex items-center bg-surface-light dark:bg-surface-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <button @click="router.back()" class="text-text-main dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 class="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">我的约球管理</h2>
      </div>
      <div class="flex-1 flex flex-col gap-5 p-4 pb-24">
        <div class="flex flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none dark:border dark:border-gray-800">
          <div class="flex gap-4">
            <div class="w-24 h-24 shrink-0 rounded-lg bg-center bg-no-repeat bg-cover relative overflow-hidden" data-alt="Tennis court view with green surface" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB00xU_jbkzTjBw6uU8diDqbSvdf9Sku3w9kEBSscAlIFAH-phCX52JVH9vs8RV9AJ8P9wgv9cOU4q-VEoxQx-wTQnlB47sB19ATSPg6-ykwIM44nX84MM4omu04FmHPwiNwaflxGruA23cWHJlMF7FAFBCjuBiTtApeG43o5uxk-q3iOnXBwrHeM9drE4ck7xZ5lOYGmTor2okPoSIQr8oUCbGmeKA-6un9mpbQpQDVDGQ2Q7f-UzACHwjlYe6_C00z5B9vQxp-is");'>
              <div class="absolute inset-0 bg-black/10"></div>
            </div>
            <div class="flex flex-col justify-between py-0.5 flex-1">
              <div>
                <div class="flex justify-between items-start">
                  <h3 class="text-text-main dark:text-white text-lg font-bold leading-snug line-clamp-2">周六下午进阶双打</h3>
                  <span class="shrink-0 bg-primary/20 text-green-800 dark:text-green-300 text-xs font-bold px-2 py-0.5 rounded-full">¥50/人</span>
                </div>
                <div class="flex items-center gap-1 mt-1 text-text-secondary dark:text-gray-400">
                  <span class="material-symbols-outlined text-[16px]">location_on</span>
                  <p class="text-xs font-normal leading-normal line-clamp-1">奥林匹克森林公园网球中心</p>
                </div>
              </div>
              <div class="flex items-center gap-1 text-text-secondary dark:text-gray-400">
                <span class="material-symbols-outlined text-[16px]">schedule</span>
                <p class="text-xs font-normal leading-normal">10月24日 14:00 - 16:00</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
            <div class="flex justify-between items-end">
              <span class="text-sm font-medium text-text-secondary dark:text-gray-400">已批准人数</span>
              <div class="flex items-baseline gap-1">
                <span class="text-xl font-bold text-primary">3</span>
                <span class="text-sm text-text-secondary dark:text-gray-400">/ 6</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full border-2 border-surface-light dark:border-surface-dark bg-gray-300 first:ml-0 -ml-3 bg-center bg-cover z-30" data-alt="Avatar 1" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgdFxqLM8lQbRdzGRFXX_bDAZmo71eipUlT_OlNJUy2w1HyigDWsFowu3XnUZYH9KvoiyeIS5nS09iTrUFO37lBFJcgklBv5Cz8XLpJ0A4b667k03st9SMrUDTGMOmh_uno7-EIDReZn-VitoojDw6mByf7s8vpWIHwRzhAv0evewUSzsU6cp62JbBbnMZqvBNGO0jt8tX30Y9lNFEtCBsyd-cUaVxyZO8fOLgSFC8Wbt7_H5s3gL9S_qRytGDSa_N0q6c2kdfR14");'></div>
                <div class="w-10 h-10 rounded-full border-2 border-surface-light dark:border-surface-dark bg-gray-300 -ml-3 bg-center bg-cover z-20" data-alt="Avatar 2" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuq-bY0gAus03GpPrazgugGvAyOHQ2QtndeN5mdhHNuTABWBkm-EqbVGoXs3Ggbpkf8aLITzMT7y5834R6Qw_rTuZJdXGk9nIIzAkIxw9yh-WV1-sVxanZGiy_VfHbLB3j3AKo7Bb4VXn2U_ow441GeYztHXmfyZw9P80CkoriWyCmQ0t0CX9JY2zhPTa6de61ydIFLc9nKyGi7up6nbaENze1cYVTlF1Czzia25XGMnncGrFm5z3zJQdCV1QIql6elwREmOR7EgI");'></div>
                <div class="w-10 h-10 rounded-full border-2 border-surface-light dark:border-surface-dark bg-gray-300 -ml-3 bg-center bg-cover z-10" data-alt="Avatar 3" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaj-0zsF8xwwMRB1-7ODapaSPBpDqdHuyhFoizlxxJvHOGifAYhOhwWbERTaxEnFIedvTuq07ZcZ3kPnd32Y7fh-Kks0xy8Q9IThbmTa2CppeJ4KgtEb-SWny3asktQSe-DSbsCKDfqoyaiSyLtcIqhPdNtrnTe1Dp_SksgsbXCoWixaa_NTyNtbwIycWuZdpXXIu527TirR8pRo0aKNsfKzg8do6VIrvw5BUgguGTzKY6I_sq83YlKJqJnRa7At3frY1DNuasoos");'></div>
                <div class="w-10 h-10 rounded-full border-2 border-surface-light dark:border-surface-dark bg-gray-100 dark:bg-gray-700 -ml-3 flex items-center justify-center text-xs font-bold text-gray-500 z-0">
                  +3
                </div>
              </div>
              <button class="py-1.5 px-4 rounded-full bg-[#e5fceb] dark:bg-[#13ec49]/10 text-green-800 dark:text-[#13ec49] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#d4f9dd] dark:hover:bg-[#13ec49]/20 transition-colors border border-transparent">
                <span class="material-symbols-outlined text-[16px]">share</span>
                邀请
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between px-1">
            <h3 class="text-lg font-bold text-text-main dark:text-white">邀请状态</h3>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between p-3 rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-transparent dark:border-gray-800">
              <div class="flex items-center gap-3">
                <div class="relative">
                  <div class="w-10 h-10 rounded-full bg-gray-200 bg-center bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgdFxqLM8lQbRdzGRFXX_bDAZmo71eipUlT_OlNJUy2w1HyigDWsFowu3XnUZYH9KvoiyeIS5nS09iTrUFO37lBFJcgklBv5Cz8XLpJ0A4b667k03st9SMrUDTGMOmh_uno7-EIDReZn-VitoojDw6mByf7s8vpWIHwRzhAv0evewUSzsU6cp62JbBbnMZqvBNGO0jt8tX30Y9lNFEtCBsyd-cUaVxyZO8fOLgSFC8Wbt7_H5s3gL9S_qRytGDSa_N0q6c2kdfR14");'></div>
                  <div class="absolute -bottom-1 -right-1 bg-surface-light dark:bg-surface-dark rounded-full p-0.5 shadow-sm">
                    <span class="material-symbols-outlined text-[14px] text-blue-500">forward_to_inbox</span>
                  </div>
                </div>
                <div class="flex flex-col">
                  <span class="text-sm font-bold text-text-main dark:text-white">刘思思</span>
                  <span class="text-xs text-text-secondary dark:text-gray-400">NTRP 3.0</span>
                </div>
              </div>
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">等待回复</span>
            </div>
            <div class="flex items-center justify-between p-3 rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-transparent dark:border-gray-800 opacity-60">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gray-200 bg-center bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuq-bY0gAus03GpPrazgugGvAyOHQ2QtndeN5mdhHNuTABWBkm-EqbVGoXs3Ggbpkf8aLITzMT7y5834R6Qw_rTuZJdXGk9nIIzAkIxw9yh-WV1-sVxanZGiy_VfHbLB3j3AKo7Bb4VXn2U_ow441GeYztHXmfyZw9P80CkoriWyCmQ0t0CX9JY2zhPTa6de61ydIFLc9nKyGi7up6nbaENze1cYVTlF1Czzia25XGMnncGrFm5z3zJQdCV1QIql6elwREmOR7EgI");'></div>
                <div class="flex flex-col">
                  <span class="text-sm font-bold text-text-main dark:text-white">陈建国</span>
                  <span class="text-xs text-text-secondary dark:text-gray-400">NTRP 4.0</span>
                </div>
              </div>
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400">已谢绝</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between px-1">
            <h3 class="text-lg font-bold text-text-main dark:text-white">待审核申请 <span class="text-sm font-normal text-text-secondary dark:text-gray-400 ml-1">(2)</span></h3>
            <button class="text-sm text-text-secondary dark:text-gray-400">管理已通过</button>
          </div>
          <div class="group flex flex-col gap-3 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-transparent dark:border-gray-800">
            <div class="flex items-start justify-between gap-3">
              <div class="flex gap-3 items-center">
                <div class="h-12 w-12 rounded-full bg-gray-200 bg-center bg-cover" data-alt="Portrait of a male tennis player" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJvRojFiI5-36I-7aGYYkyqzDC1iFFhWFWNqYwtZNoPxMysSqb4sVNujk40KjgTjf_vCu9eOYesTzglSTLwP2R6Vk8lZMrJA5Bf2D_kcIMKg_Wrfxo9t1Lo5d1N_Sb8l2TqrEcuK2k4GagbQF8g62swdpsn5IRx5bOdP5hVQNJmgxKxg4iJnnSUX_lmLOtC9pSADUUco2BzEjjdxoOKqXfyAlS9oqRm4uydidK8OZigR2y7keUq9vFDaVTgSc-9SPu1Q3g6mBfWbU");'></div>
                <div class="flex flex-col">
                  <div class="flex items-center gap-2">
                    <p class="text-base font-bold text-text-main dark:text-white">王大力</p>
                    <span class="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-blue-200 dark:border-blue-800">NTRP 4.0</span>
                  </div>
                  <div class="flex items-center gap-1 mt-0.5">
                    <span class="material-symbols-outlined text-[14px] text-orange-400">star</span>
                    <span class="text-xs text-text-secondary dark:text-gray-400">信用分 98</span>
                  </div>
                </div>
              </div>
              <span class="text-xs text-text-secondary dark:text-gray-500 whitespace-nowrap">10分钟前</span>
            </div>
            <div class="bg-background-light dark:bg-gray-800/50 rounded-lg p-3">
              <p class="text-sm text-text-main dark:text-gray-300">"你好，我就住在附近，每周都打球，水平稳定，希望能一起切磋！"</p>
            </div>
            <div class="flex gap-3 pt-1">
              <button class="flex-1 h-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-text-main dark:text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span class="material-symbols-outlined text-[18px]">close</span>
                拒绝
              </button>
              <button class="flex-[2] h-10 rounded-lg bg-primary text-black text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#0fd640] transition-colors shadow-sm shadow-green-200 dark:shadow-none">
                <span class="material-symbols-outlined text-[18px]">check</span>
                批准加入
              </button>
            </div>
          </div>
          <div class="group flex flex-col gap-3 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-transparent dark:border-gray-800">
            <div class="flex items-start justify-between gap-3">
              <div class="flex gap-3 items-center">
                <div class="h-12 w-12 rounded-full bg-gray-200 bg-center bg-cover" data-alt="Portrait of a female tennis player" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD__IVYUXC2_Nr0LAsNDdi8RxRPb65n7mg-PlLhdhhYsyuew97oRos8S0Ds4OvmIOBu0TQ4pIfYv7wi9hM_avTvCChlrSk23QRvADVDWj3TOIx-61DJPBHc0A32H4JCk29c6VcM50dQWejVrY-RvylZ0wiSZQ21W0DL8XEbDEzZGu5tPgCTwzLKKO97pV2jstDs9q7Nvfxo_ChAJKbn4-hXyJlljrd23esnz_JaZiLWZBxyx7_v_SnR3V8t5rtVLupeHQCRoOBNlHg");'></div>
                <div class="flex flex-col">
                  <div class="flex items-center gap-2">
                    <p class="text-base font-bold text-text-main dark:text-white">张小丽</p>
                    <span class="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-purple-200 dark:border-purple-800">NTRP 3.5</span>
                  </div>
                  <div class="flex items-center gap-1 mt-0.5">
                    <span class="material-symbols-outlined text-[14px] text-orange-400">star</span>
                    <span class="text-xs text-text-secondary dark:text-gray-400">信用分 100</span>
                  </div>
                </div>
              </div>
              <span class="text-xs text-text-secondary dark:text-gray-500 whitespace-nowrap">30分钟前</span>
            </div>
            <div class="flex gap-3">
              <div class="flex-1 bg-background-light dark:bg-gray-800/50 rounded-lg p-3">
                <p class="text-sm text-text-main dark:text-gray-300 line-clamp-3">"第一次来这边打球，请多关照。"</p>
              </div>
              <div class="relative w-20 h-20 shrink-0 rounded-lg bg-gray-900 overflow-hidden group/video cursor-pointer" data-alt="Thumbnail of a tennis swing video" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuChD3lca36blHziLTxO4_WvW8OoiWWSN4PBn4DBtsWWs1ZNjqqWhfbeHP6MpkHim66KHQCv2jGr6gzjKHkafR2O15hGscqZjFpOJmIrcg-9FhqZ_mIWTV99AJ5pXxQDxceq-UYLBeJKNM8EYUhfznXRzDRbNl7SMBqYI-9BDRQnGBue4IuzPTqESwOQX7nsifAljxmbvgGvJSubcupdciY58Gcex5BMz74ilvQhapU6YmhUqg42wxefbD0z9q4xaYED3WXswadgsgc"); background-size: cover; background-position: center;'>
                <div class="absolute inset-0 bg-black/30 flex items-center justify-center group-hover/video:bg-black/40 transition-all">
                  <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50">
                    <span class="material-symbols-outlined text-white text-[16px]">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-3 pt-1">
              <button class="flex-1 h-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-text-main dark:text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span class="material-symbols-outlined text-[18px]">close</span>
                拒绝
              </button>
              <button class="flex-[2] h-10 rounded-lg bg-primary text-black text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#0fd640] transition-colors shadow-sm shadow-green-200 dark:shadow-none">
                <span class="material-symbols-outlined text-[18px]">check</span>
                批准加入
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pointer-events-none flex justify-center max-w-md mx-auto">
        <button class="pointer-events-auto shadow-lg shadow-green-900/20 bg-text-main dark:bg-white text-white dark:text-black rounded-full px-6 py-3 font-bold flex items-center gap-2 hover:scale-105 transition-transform">
          <span class="material-symbols-outlined">edit_square</span>
          编辑活动
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
