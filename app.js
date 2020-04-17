new Vue({
    el: '#vue-app-one',
    data: {
        output: 'Your favourite food',
        output_2: 'Your favourite food'
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            this.output = this.$refs.input.value;
            this.output_2 = this.$refs.input_2.outerHTML;
        }
    }
});