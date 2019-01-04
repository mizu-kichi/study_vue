var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['りんご', 'ばなな', 'いちご'],
        show: true,
        is_show: true,
    },
    methods: {
        handleClick: function(event) {
            alert(event.target)
        }
    }
});