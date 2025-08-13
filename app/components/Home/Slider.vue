<script setup>
const containerRef = ref(null);

const slideData = [
  {
    title: "Elevate Your Style<br>Timeless Fashion, Sustainable<br>Choices",
    pictureLink:
      "https://as2.ftcdn.net/v2/jpg/02/15/29/23/1000_F_215292313_YylPUVeHHZ4B1XUsinDeK6DIyJYZrJGG.jpg",
  },
];

const swiper = useSwiper(containerRef);

function slidePrevious() {
  swiper.prev();
}

function slideNext() {
  swiper.next();
}
</script>
<template>
  <div class="h-[720px] w-full justify-center items-center relative">
    <ClientOnly>
      <swiper-container ref="containerRef" loop>
        <swiper-slide
          v-for="(slide, idx) in slideData"
          :key="idx"
          class="h-[720px]"
        >
          <nuxt-img
            :src="slide.pictureLink"
            class="h-full w-full object-cover object-top absolute top-0 left-0 z-10"
          />
          <div
            class="bg-black opacity-20 absolute top-0 left-0 w-full h-full z-20"
          ></div>
          <div
            class="relative z-40 w-full h-full top-0 left-0 flex flex-col justify-end items-start p-[100px]"
          >
            <div class="text-white text-3xl" v-html="slide.title"></div>
            <button class="mt-10 bg-white p-3 px-9 font-light">Shop now</button>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <!-- Go back one slide -->
    <button
      class="transition-all absolute top-[50%] left-10 z-50 bg-white/20 hover:bg-white/30 w-[50px] h-[50px] flex justify-center items-center rounded-full"
      @click="slidePrevious"
    >
      <nuxt-img src="/images/left.svg" class="w-[10px]" />
    </button>

    <!-- Go forward one slide -->
    <button
      class="transition-all absolute top-[50%] right-10 z-50 bg-white/20 hover:bg-white/30 w-[50px] h-[50px] flex justify-center items-center rounded-full"
      @click="slideNext"
    >
      <nuxt-img src="/images/right.svg" class="w-[10px]" />
    </button>
  </div>
</template>
