<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>{{ currentText }}</h1>
        <h1>{{ currentTime }}</h1>
      </v-col>
      <v-col cols="12">
        <v-btn
          variant="text" icon="mdi-play"
          :disabled="status === STATUS.COUNTING || (currentItem.length === 0 && items.length === 0)"
          @click="startTimer"
        ></v-btn>
        <v-btn
          variant="text" icon="mdi-pause" :disabled="status !== STATUS.COUNTING"
          @click="pauseTimer"
        ></v-btn>
        <v-btn variant="text" icon="mdi-skip-next" :disabled="currentItem.length === 0"
      @click="finishTimer"
        ></v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
    <!-- 卡片插槽 -->
    <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="有種來啊!!!"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
    <v-card title="對不起，我錯了">
      <v-card-text>
       <v-icon icon="mdi-close"></v-icon>
       <v-icon icon="mdi-close"></v-icon>
       <br>
       <span>　O</span>
    </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false">
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
    </v-dialog>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-date-picker width="600" color="blue-lighten-3"></v-date-picker>
    </v-row>

  </v-container>
  <v-footer
  class="bg-indigo-lighten-1 text-center d-flex flex-column"
  id="footer"
>

  <v-divider></v-divider>

  <div>
    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
  </div>
</v-footer>
</template>

<script setup>
import { useListStore } from '@/store/list'
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useWebNotification } from '@vueuse/core'

const list = useListStore()
const { currentItem, items, timeleft } = storeToRefs(list)
const { setCurrentItem, countdown, setFinishedItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)

// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2
}

const status = ref(STATUS.STOP)

let timer = 0
const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }

  status.value = STATUS.COUNTING

  timer = setInterval(() => {
    countdown()
    if (timeleft.value === 0) {
      finishTimer()
    }
  }, 1000)
}

const pauseTimer = () => {
  status.value = STATUS.PAUSE
  clearInterval(timer)
}

const finishTimer = () => {
  clearInterval(timer)
  status.value = STATUS.STOP

  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()

  if (notify.value) {
    const { show, isSupported } = useWebNotification({
      title: '事項完成',
      body: currentItem.value,
      icon: new URL('@/assets/tomato.png', import.meta.url).href
    })
    if (isSupported.value) {
      show()
    }
  }
  setFinishedItem()

  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  if (currentItem.value.length > 0) {
    return currentItem.value
  } else if (items.value.length > 0) {
    return '點擊開始'
  } else {
    return '沒有事項'
  }
})

const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})

</script>

<style>
#footer{
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
