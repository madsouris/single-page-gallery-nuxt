<template>
  <div class="flex flex-col justify-center items-center gap-4 p-8">
    <p class="text-black font-bold font-mono text-4xl tracking-tighter">
      Here are some cats
    </p>
    <p
      class="w-full md:w-1/2 text-lg text-gray-800 text-center font-serif tracking-tight"
    >
      Whether you’re looking for cute and cuddly shots of kittens, hilarious
      memes featuring cats in funny poses, or breathtaking photographs of exotic
      breeds, our website has something for everyone. We’ve scoured the internet
      to bring you the very best cat images from around the globe, so you can
      indulge your passion for these lovable creatures anytime, anywhere.
    </p>
    <nuxt-img
      v-for="item in image.images.test"
      :key="item.id"
      provider="imagekit"
      :src="'/test/' + item.path"
      width="300"
    />
  </div>
</template>

<script setup lang="ts">
import { useImageStore } from "@/stores/imageStore";

const image: any = useImageStore();
</script>
