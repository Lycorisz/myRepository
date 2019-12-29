var app = new Vue({
	el: '#app',
	data: {
		list: [{
				id: 1,
				name: 'iPhone 7',
				price: 6188,
				count: 1,
				isChecked: true,
			},
			{
				id: 2,
				name: 'iPad Pro',
				price: 5888,
				count: 1,
				isChecked: true,
			},
			{
				id: 3,
				name: 'MacBook Pro',
				price: 21488,
				count: 1,
				isChecked: true,
			},
		],
		total: 0,
		allChecked:true,
	},
	computed: {
		totalPrice: function() {
			var total = 0;
			for (var i = 0; i < this.list.length; i++) {
				total += this.list[i].price * this.list[i].count;
			}

		},
		chosenPrice: function() {
			var total = 0,
				count = 0;
			for (var i = 0; i < this.list.length; i++){
				if (this.list[i].isChecked) {
					total += this.list[i].price * this.list[i].count;
					count++;
				}
			}
			this.total=count;
			this.AllChecked = count === this.list.length;
			return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
		}
	},
methods: {
	handleReduce: function(index) {
		if (this.list[index].count === 1) {
			return;
		}
		this.list[index].count--;
	},
	handleAdd: function(index) {
		this.list[index].count++;
	},
	handleDel: function(index) {
		this.list.splice(index, 1);
	},
	checkAll: function() {
		var list = this.list;
		if (this.total === list.length) {
			list.forEach(element => {
				element.isChecked = false;
			});
		}else{
			list.forEach(element => {
				element.isChecked = true;
			});
		}
	},
	check:function(){
		this.list.forEach(element=>{
			if(element.isChecked&&this.allChecked){
				this.allChecked=false;
			}
		})
	}
}
});
