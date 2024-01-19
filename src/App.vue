<template>
  <v-app>
    <v-app-bar image="../images/bg1.jpg">
      <v-container class="d-flex align-center">
        <v-app-bar-title>番茄鐘</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-list-status" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
         <!-- 更改背景色 -->
         <v-btn @click="toggleTheme" class="switchButton">switch</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- Component = 目前該顯示的路由原件 -->
      <router-view v-slot="{Component}">
        <!--
        keep-alive 保持被包住的原件不被銷毀
        使用 include 指定只有 HomeView 這個元件不被銷毀
        -->
        <!--
        component = 動態元件
        使用 is 綁定的元件
        -->
      <keep-alive include="HomeView">
        <component :is="Component"></component>
      </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

// 背景切換
function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style>
.switchButton:hover{
 color: rgb(23, 183, 211);
}
</style>
