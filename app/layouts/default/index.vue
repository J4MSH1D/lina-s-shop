<template>
  <main class="bg-gray-100 flex flex-col min-h-screen">
    <!-- Animated overlay -->
    <MainLines />
    <MainHeader />
    <MainPreloader />

    <!-- Nuxt Page -->
    <section class="flex-1 bg-gray-50">
      <NuxtPage :transition="customTransition" />
    </section>
  </main>
</template>

<script setup>
const customTransition = {
  name: "custom-page",
  mode: "out-in",

  // Called when leaving the old page
  async onLeave(el, done) {
    try {
      const { $gsap } = useNuxtApp();

      // Debug: Check if GSAP is available
      if (!$gsap) {
        done();
        return;
      }

      // Debug: Check if elements exist
      const lines = document.querySelectorAll(".animated-lines .line");

      if (lines.length === 0) {
        done();
        return;
      }

      // Ensure elements are ready
      await nextTick();

      // Animate lines to cover the page
      $gsap.fromTo(
        ".animated-lines .line",
        { width: 0, transformOrigin: "left center" },
        {
          width: "100vw",
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: done,
        }
      );
    } catch (error) {
      done(); // Always call done to prevent hanging
    }
  },

  // Called when entering the new page
  async onEnter(el, done) {
    try {
      const { $gsap } = useNuxtApp();

      if (!$gsap) {
        done();
        return;
      }

      // Debug: Check if elements exist
      const lines = document.querySelectorAll(".animated-lines .line");

      if (lines.length === 0) {
        done();
        return;
      }

      // Wait for DOM to be ready
      await nextTick();

      // Animate lines away to reveal new page
      $gsap.to(".animated-lines .line", {
        width: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: done,
      });
    } catch (error) {
      done();
    }
  },
};
</script>
