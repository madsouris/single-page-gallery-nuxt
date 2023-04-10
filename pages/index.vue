<template>
  <div class="flex flex-col justify-center items-center gap-4 p-8">
    <p class="text-black font-bold font-mono text-4xl tracking-tighter">
      We collect cat images
    </p>
    <p
      class="w-full md:w-1/2 text-lg text-gray-800 text-center font-serif tracking-tight"
    >
      Welcome to our website dedicated to the love and collection of cat images!
      If you’re a feline fanatic like us, then you know that there’s something
      truly special about these adorable creatures. From their playful antics to
      their curious personalities, cats have captured the hearts of millions
      around the world. And what better way to express that love than through a
      collection of stunning cat images?
    </p>
    <p class="text-lg text-gray-800 text-center font-serif tracking-tight">
      Join our newsletter now to receive a cat photo to your inbox every weekday
      morning
    </p>
    <form action="#" class="inline-flex gap-2">
      <input
        type="email"
        placeholder="Email"
        class="placeholder-gray-600 bg-gray-100 p-4 cursor-pointer font-serif tracking-tight text-black border border-gray-300"
      />
      <input
        type="submit"
        value="Sign up"
        class="font-serif tracking-tight font-medium text-black border border-gray-300 p-4 cursor-pointer"
      />
    </form>
  </div>

  <GallerySection />
</template>
