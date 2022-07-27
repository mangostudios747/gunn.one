<template>
  <div
  id="body"
    class="flex flex-col w-full h-screen overflow-y-auto bg-white snap-y snap-mandatory"
  >
    <div class="relative flex flex-col w-full h-screen pt-12 sm:pt-16 md:pt-24 shrink-0 snap-start">
      <h1
        class="block text-3xl font-extrabold tracking-wide text-center md:mb-16 sm:text-5xl md:text-8xl font-display decoration-macaroni"
      >
        Gunn<span class="text-yonder">.</span>One
      </h1>

      <div class="flex h-full px-5 mx-6 sm:mt-8 md:mx-12 lg:mx-24">
        <img
        :style="`transform: translate(-50%, -50%) rotate(${12 - 24*(percentScroll)}deg); left: ${20+ 30*percentScroll}%; top:${35+115*percentScroll}%;`"
          class="absolute transform img-24"
          src="/sgy.png"
        />
        <img
         :style="`transform:  translate(-50%, -50%) rotate(${48*percentScroll-12}deg); top: ${65+85*percentScroll}%; left: ${25+25*percentScroll}%;`"
          class="absolute transform -rotate-12 img-20"
          src="/gmail.png"
        />
        <img
        :style="`transform: translate(-50%, -50%) rotate(${12 - 48*(percentScroll)}deg); top: ${65+85*percentScroll}%; left:${75-25*percentScroll}%;`"
          class="absolute transform rotate-12 img-20 bottom-1/4 right-1/4"
          src="/watt.png"
        />
        <img
        :style="`transform: translate(-50%, -50%) rotate(${24*percentScroll-12}deg); top:${35+115*percentScroll}%; left:${80-30*percentScroll}%;`"
          class="absolute transform -rotate-12 img-24"
          src="/InfiniteCampus.png"
        />
        <img
        :style="`transform: translate(-50%, -50%) rotate(${24*percentScroll+12}deg); left: ${40 + 10*percentScroll}%; top: ${70+ percentScroll * 80}%`"
          class="absolute transform rotate-12 img-24"
          src="/pomodone.png"
        />
        <img
        :style="`transform: translate(-50%, -50%) rotate(${24*percentScroll-12}deg); left: ${50}%; top: ${30+ percentScroll * 120}%`"
          class="absolute transform img-24 "
          src="/edpuzzle.png"
        />
        <img
        :style="`transform: translate(-50%, -50%) rotate(${24*percentScroll-12}deg); left:${60-10*percentScroll}%; top:${75+75*percentScroll}%;`"
          class="absolute transform -rotate-12 bottom-[20%] img-24 right-[40%]"
          src="/docs.png"
        />
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 slogan-heading z-10"
          >Everything at <span class="font-bold text-yonder">Gunn</span> . . .</span
        >
      </div>
      <div class="flex flex-row">
        <outline-chevron-down-icon
          class=" h-12 w-12 md:w-20 md:h-20 mx-auto sm:mt-16 animate-bounce"
        />
      </div>
    </div>
    <div class="relative flex flex-col w-full h-screen shrink-0 snap-start snap-always">
      <span class="slogan-heading mt-44">. . . all in <span class="font-bold text-yonder">one</span>.</span>
      <div class="absolute z-20 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-36 sm:w-36 md:h-44 md:w-44 bg-yonder shrink-0 top-1/2 left-1/2" />
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

.img-24 {
  @apply max-h-10 sm:max-h-16 md:max-h-24 ;
}

.img-20 {
  @apply max-h-6 sm:max-h-12 md:max-h-20 ;
}

.monochrome {
  filter: sepia(1); /*saturate(100%) hue-rotate(240deg);*/
}

.slogan-heading {
  @apply block text-3xl md:text-5xl font-extrabold tracking-wider text-center;
}
</style>