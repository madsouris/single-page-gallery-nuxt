// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-windicss','@nuxt/image-edge'
    ],
    image: {    
        imagekit: {      
            baseURL: 'https://ik.imagekit.io/madsouris/'    
        }  
    }
});


