const { createApp } = Vue

createApp({
    setup() {
        const message = 'Hello world'
        return {
            message
        }
    }
}).mount('#app')