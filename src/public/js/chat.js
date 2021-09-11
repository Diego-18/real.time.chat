const socket = io();

new Vue({
    el: '#app',
    data: {
        step: 'nick',
        nick: null, 
        message: null,
        messages: []
        // nick: 'Diego'
    },
    methods: {
        send(){
            console.log(typeof(this.message));
            if(typeof(this.message) === 'object' ){
                alert('El campo no puede estar vacio');
            }
            else{
                socket.emit('chat-message',{
                    nick: this.nick,
                    message: this.message,
                    date: new Date().getTime()
                });
            }
            this.message = null;
        },
        signIn(){
            if(!this.nick){
                return;
            }

            this.step = 'chat';
        }
    },
    mounted() {
        socket.on('chat-message', (msg) =>{
            this.messages.push(msg);

            setTimeout(() => {
                const chatContainer = document.querySelector('.chat-container');
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 10);
        })
    },
});