const fullName = Vue.createApp({
    data: function() {
        return{
            name: 'Joshé' + '' + 'Theys'
        }
    }
});
fullName.mount('#fullName');