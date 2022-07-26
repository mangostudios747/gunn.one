<template>
  <div
  id="body"
    class="flex flex-col w-full h-screen overflow-y-auto bg-white snap-y snap-mandatory"
  >
    <div class="relative flex flex-col w-full h-screen pt-24 shrink-0 snap-start">
      <h1
        class="block mb-16 font-extrabold tracking-wide text-center text-8xl font-display decoration-macaroni"
      >
        Gunn<span class="text-yonder">.</span>One
      </h1>

      <div class="flex h-full px-5 mx-12 mt-8 md:mx-24">
        <img
        :style="`transform: rotate(${12 - 24*(percentScroll)}deg); left: ${20+ 30*percentScroll}%; top:${35+115*percentScroll}%;`"
          class="absolute transform max-h-24"
          src="/sgy.png"
        />
        <img
         :style="`transform: rotate(${48*percentScroll-12}deg); top: ${70+80*percentScroll}%; left: ${20+30*percentScroll}%;`"
          class="absolute transform -rotate-12 max-h-20"
          src="/gmail.png"
        />
        <img
        :style="`transform: rotate(${12 - 48*(percentScroll)}deg); top: ${65+85*percentScroll}%; left:${70-20*percentScroll}%;`"
          class="absolute transform rotate-12 max-h-20 bottom-1/4 right-1/4"
          src="/watt.png"
        />
        <img
        :style="`transform: rotate(${24*percentScroll-12}deg); top:${35+115*percentScroll}%; left:${75-25*percentScroll}%;`"
          class="absolute transform -rotate-12 max-h-24"
          src="/InfiniteCampus.png"
        />
        <img
        :style="`transform: rotate(${24*percentScroll+12}deg); left: ${40 + 10*percentScroll}%; top: ${70+ percentScroll * 80}%`"
          class="absolute transform rotate-12 max-h-24"
          src="/pomodone.png"
        />
        <img
        :style="`transform: rotate(${24*percentScroll-12}deg); left: ${100*(0.5)}%; top: ${30+ percentScroll * 120}%`"
          class="absolute transform max-h-24 "
          src="/edpuzzle.png"
        />
        <img
        :style="`transform: rotate(${24*percentScroll-12}deg); left:${60-10*percentScroll}%; top:${75+75*percentScroll}%;`"
          class="absolute transform -rotate-12 bottom-[20%] max-h-24 right-[40%]"
          src="/docs.png"
        />
        <span class="!mx-auto !my-48 slogan-heading z-10"
          >Everything at <span class="font-bold text-yonder">Gunn</span> . . .</span
        >
      </div>
      <div class="flex flex-row">
        <outline-chevron-down-icon
          class="w-20 h-20 mx-auto mt-16 animate-bounce"
        />
      </div>
    </div>
    <div class="relative flex flex-col w-full h-screen pt-44 shrink-0 snap-start snap-always">
      <span class="slogan-heading">. . . all in <span class="font-bold text-yonder">one</span>.</span>
      <div class="absolute z-20 -translate-x-10 -translate-y-16 rounded-full h-44 w-44 bg-yonder shrink-0 top-1/2 left-1/2" />
    </div>
    <div class="relative flex flex-col w-full h-screen pt-24 shrink-0 snap-start"></div>
  </div>
</template>

<script>
export default {
  data: ()=>({
    scroll: 0,
    percentScroll: 0,
    h: 1,
    w: 1,
  }),
  mounted(){
    document.getElementById("body").addEventListener("scroll", this.updateScroll)
  },
  beforeUnmount(){
    document.getElementById("body").removeEventListener("scroll", this.updateScroll)
  },
  methods: {
   updateScroll(){
    const root = document.getElementById("body")
    const frameHeight = window.innerHeight;
    const frameWidth = window.innerWidth;
    [this.h, this.w] = [frameHeight, frameWidth];
    this.scroll = Math.min(root.scrollTop, frameHeight)
    this.percentScroll = this.scroll / frameHeight
   } 
  },
}
</script>

<style>
img {
  @apply saturate-100;
}

.monochrome {
  filter: sepia(1); /*saturate(100%) hue-rotate(240deg);*/
}

.slogan-heading {
  @apply block  text-5xl font-extrabold tracking-wider text-center;
}
</style>