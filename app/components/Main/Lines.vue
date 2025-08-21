<template>
  <div
    class="animated-lines fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999] flex flex-col justify-between"
  >
    <div v-for="i in 10" :key="i" class="line h-[10vh] bg-[#e9e9e9] w-0"></div>
  </div>
</template>
