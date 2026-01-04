<template>
  <div class="home-view min-h-screen bg-background-light p-4 safe-bottom">
    <header class="mb-6 pt-safe">
      <h1 class="text-2xl font-bold text-gray-900">Tennis Community</h1>
      <p class="text-gray-600">Find courts, meet players, play tennis.</p>
    </header>

    <div class="grid grid-cols-2 gap-3">
      <router-link to="/courts" class="card bg-surface-light p-5 rounded-xl shadow-sm">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-3xl text-primary">stadium</span>
          <div class="flex-1">
            <h2 class="text-lg font-semibold text-gray-900">Find Courts</h2>
            <p class="text-xs text-gray-500">Search and book tennis courts nearby.</p>
          </div>
        </div>
      </router-link>

      <router-link to="/matches" class="card bg-surface-light p-5 rounded-xl shadow-sm">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-3xl text-primary">sports_tennis</span>
          <div class="flex-1">
            <h2 class="text-lg font-semibold text-gray-900">Find Matches</h2>
            <p class="text-xs text-gray-500">Join matches or find hitting partners.</p>
          </div>
        </div>
      </router-link>

      <router-link to="/matches/create" class="card bg-surface-light p-5 rounded-xl shadow-sm">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-3xl text-primary">add_circle</span>
          <div class="flex-1">
            <h2 class="text-lg font-semibold text-gray-900">Create Match</h2>
            <p class="text-xs text-gray-500">Host a match and invite others.</p>
          </div>
        </div>
      </router-link>

      <router-link to="/profile" class="card bg-surface-light p-5 rounded-xl shadow-sm">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-3xl text-primary">person</span>
          <div class="flex-1">
            <h2 class="text-lg font-semibold text-gray-900">My Profile</h2>
            <p class="text-xs text-gray-500">Manage your profile and history.</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
