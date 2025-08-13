<script setup>
const links = [
  { title: "Shop", link: "/" },
  { title: "New Arrivals", link: "/" },
  { title: "Sales", link: "/" },
  { title: "Journal", link: "/" },
  { title: "About", link: "/about" },
];
</script>
<template>
  <header>
    <!-- Discounts texts -->
    <div class="py-3 text-center text-white bg-black text-sm">
      Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now
    </div>

    <!-- Main header -->
    <div class="py-4 border-b border-b-[#dddddd]">
      <div
        class="container mx-auto h-100px flex flex-row items-center justify-between"
      >
        <div class="items-center flex flex-row gap-[40px]">
          <nuxt-link to="/" class="text-3xl font-bold">Lina's.</nuxt-link>
          <nuxt-link v-for="link in links" :to="link.link">
            {{ link.title }}
          </nuxt-link>
        </div>
        <div class="items-center flex flex-row gap-[40px]">
          <nuxt-img src="/images/zoom.svg" class="w-5" />
          <nuxt-link to="/">Stores</nuxt-link>
          <nuxt-img src="/images/user.svg" class="w-6" />
          <div class="flex gap-2 items-center">
            <nuxt-img src="/images/heart.svg" class="w-6" />
            <span>0</span>
          </div>
          <div class="flex gap-2 items-center">
            <nuxt-img src="/images/portfolio.svg" class="h-6" />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
