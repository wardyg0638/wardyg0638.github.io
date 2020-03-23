new Vue({
    el: '#app',
    data: {
        value: '',
        dB1: '',
        dB2: ''
    },
    methods: {
        Calculation() {
            var h = this.dB1;
            var w = this.dB2;
            var t = 10 * ((Math.log(Math.pow(10, (0.1 * h)) + Math.pow(10, (0.1 * w)))) / (Math.log(10)));
            this.value = t
        }
    },
})