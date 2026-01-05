import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/courts',
      name: 'court-list',
      component: () => import('../views/CourtList.vue')
    },
    {
      path: '/courts/:id',
      name: 'court-detail',
      component: () => import('../views/CourtDetail.vue')
    },
    {
      path: '/courts/:id/redesign',
      name: 'court-detail-redesign',
      component: () => import('../views/CourtDetailRedesign.vue')
    },
    {
      path: '/matches',
      name: 'match-list',
      component: () => import('../views/MatchList.vue')
    },
    {
      path: '/matches/create',
      name: 'create-match',
      component: () => import('../views/CreateMatch.vue')
    },
    {
      path: '/matches/:id',
      name: 'match-detail',
      component: () => import('../views/MatchDetailView.vue')
    },
    {
      path: '/matches/:id/success',
      name: 'match-success',
      component: () => import('../views/MatchSuccess.vue')
    },
    {
      path: '/matches/:id/manage',
      name: 'match-manage',
      component: () => import('../views/OrganizerMatchManagement.vue')
    },
    {
      path: '/skill-assessment',
      name: 'skill-assessment',
      component: () => import('../views/SkillAssessment.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/profile/edit',
      name: 'edit-profile',
      component: () => import('../views/EditProfile.vue')
    },
    {
      path: '/profile/skill-history',
      name: 'skill-history',
      component: () => import('../views/SkillHistory.vue')
    },
    {
      path: '/shop',
      name: 'shop-home',
      component: () => import('../views/ShopHome.vue')
    },
    {
      path: '/shop/:id',
      name: 'product-detail',
      component: () => import('../views/ProductDetail.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/matches/:id/register',
      name: 'match-registration',
      component: () => import('../views/MatchRegistration.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    // Profile related routes
    {
      path: '/profile/match-history',
      name: 'match-history',
      component: () => import('../views/MatchHistoryView.vue')
    },
    {
      path: '/profile/match-history/:id',
      name: 'profile-match-detail',
      component: () => import('../views/MatchDetailView.vue')
    },
    {
      path: '/profile/court-bookings',
      name: 'court-bookings',
      component: () => import('../views/CourtBookingsView.vue')
    },
    {
      path: '/profile/court-bookings/:id',
      name: 'booking-detail',
      component: () => import('../views/BookingDetailView.vue')
    },
    {
      path: '/profile/my-orders',
      name: 'my-orders',
      component: () => import('../views/MyOrdersView.vue')
    },
    {
      path: '/profile/my-orders/:id',
      name: 'order-detail',
      component: () => import('../views/OrderDetailView.vue')
    }
  ]
})

export default router
