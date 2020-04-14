new Vue({

	el:'#vue-app',

	data: {


		name: 'Shaun',
		job: 'Ninja',
		website: 'http://google.com',
		websiteTag: '<a href="http://google.com">Porfolio</a>',

	},

	methods: {

		greet: function(time){

			return 'Good ' + time + ', ' + this.name;

		}


	}

});