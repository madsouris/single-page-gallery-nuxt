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
    <div id="gallery" class="flex flex-row flex-wrap">
      <a v-for="item in image.images.test" :key="item.id"
        :href="'https://ik.imagekit.io/madsouris/test/' + 'tr:w-1080/' + item.path" data-pswp-width="300"
        data-pswp-height="300" target="_blank" rel="noreferrer">
        <nuxt-img provider="imagekit" :src="'/test/' + item.path" width="300" height="300" />
      </a>

    </div>

  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useImageStore } from "@/stores/imageStore";
import { DefineComponent } from 'vue';

export default defineComponent({
  name: 'GalleryPage',
  setup() {
    const image = useImageStore();

    return {
      image
    }
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },

})


</script>

