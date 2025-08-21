<script setup>
const progress = ref(0);
const { $gsap } = useNuxtApp();

onMounted(() => {
  let images = document.querySelectorAll("img, video");
  let imagesLength = images.length;

  const incrementProgres = () => {
    progress.value += 100 / imagesLength;

    if (progress.value >= 100) {
      $gsap.fromTo(
        ".animated-counter-model-1",
        { textContent: 0 },
        {
          textContent: progress.value.toFixed(0),
          duration: 5,
          snap: { textContent: 1 },
          ease: "power2.out",
          onComplete() {
            $gsap.to(".preloader", {
              yPercent: -100,
              duration: 1.5,
              ease: "power3.inOut",
            });
          },
        }
      );
    }
  };

  images.forEach((img) => {
    if (img.complete) incrementProgres();
    img.addEventListener("load", incrementProgres);
    img.addEventListener("error", incrementProgres);
  });
});
</script>
<template>
  <div class="w-screen h-screen fixed top-0 left-0 bg-white preloader">
    <div class="h-full w-full flex justify-center items-center">
      <div class="counter text-5xl">
        <span class="animated-counter-model-1">0</span
        ><span class="text-xl">%</span>
      </div>
    </div>
  </div>
</template>
