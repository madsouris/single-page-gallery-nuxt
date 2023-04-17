<template>
  <div class="flex flex-col justify-center items-center gap-4 p-8">
    <p class="text-black font-bold font-mono text-4xl tracking-tighter">
      Here are some cats
    </p>
    <p class="w-full md:w-1/2 text-lg text-gray-800 text-center font-serif tracking-tight">
      Whether you’re looking for cute and cuddly shots of kittens, hilarious
      memes featuring cats in funny poses, or breathtaking photographs of exotic
      breeds, our website has something for everyone. We’ve scoured the internet
      to bring you the very best cat images from around the globe, so you can
      indulge your passion for these lovable creatures anytime, anywhere.
    </p>

    <div class="spotlight-group flex flex-row flex-wrap justify-center">
      <a v-for="item in image.images.test" :key="item.id"
        :href="'https://ik.imagekit.io/madsouris/test/' + 'tr:w-1080/' + item.path" rel="noreferrer" class="spotlight"
        data-control="fullscreen,close">
        <nuxt-img provider="imagekit" :src="'/test/' + item.path" width="300" height="300" alt="Hairy kitty" />
      </a>

    </div>


  </div>
</template>

<script lang="ts" setup>


import { useImageStore } from "@/stores/imageStore";
const image = useImageStore();

useHead({
  script: [
    {
      src: 'https://rawcdn.githack.com/nextapps-de/spotlight/0.7.8/dist/spotlight.bundle.js',
      type: 'text/javascript'
    }
  ]
})

</script>




