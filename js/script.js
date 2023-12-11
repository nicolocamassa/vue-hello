const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'ciao Mondo!',
            imagePath: 'https://www.psicosocial.it/wp-content/uploads/2020/10/immagine-fissa-si-muove.jpg'
        }
    }
}).mount('#app')
