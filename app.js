new Vue({

	el:'#vue-app',

	data: {
        available: false,
        borderCard: false,
        nearby: false
    },

    methods: {

    	classChange(){

    		this.available = !this.available;
    		this.borderCard = !this.borderCard;
    	}

    },

    computed: {

        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby,
            }
        }
    }

});