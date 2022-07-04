const fullName = Vue.createApp({
    data: function() {
        return{
            name: 'Joshé', 
            surname: 'Theys'
        }
    }
});
fullName.mount('#fullName');