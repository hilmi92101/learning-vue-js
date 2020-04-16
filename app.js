
Vue.component('greeting', {

    template: `
    	<div>
	    	<p style="color:red;">Hey there, I am {{ name }}</p>
	    	<button @click="changeName">Change name</button>
    	</div>


    `,
   
    data: function(){

    	return {

    		name: 'Yoshi'

    	}
    },

    methods: {

    	changeName: function(){

    		this.name = 'Mario';
    	}

    }



});

var one = new Vue({
    el: '#vue-app-one',
    data: {
    },
    computed: {
      
    },
    methods: {
      
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
    },
    computed: {
      
    },
    methods: {
     
    }
});

