function packageFunc(param) {
	this.name=param;
	console.log(this.name);
	alert(param)
};
function df(dfd){
	this.er=new packageFunc(dfd);
};
function ag(degree, minute, second) {
	this.degree = degree;
	this.minute = minute;
	this.second = second;
	var that = this;
	this.add = function(_angle) {
		var second = (this.second + _angle.second) % 60;
		var minute = parseInt((this.second + _angle.second) / 60) + (this.minute + _angle.minute) % 60;
		var degree = parseInt((this.minute + _angle.minute) / 60) + (this.degree + _angle.degree);
		this.degree = degree;
		this.minute = minute;
		this.second = second;
	};
	this.minus = function(_angle) {
		var second = ((60 + this.second) - _angle.second) % 60;
		var minute = parseInt((60 + this.second - _angle.second) / 60) + (60 + this.minute - 1 - _angle.minute) % 60;
		var degree = parseInt((60 + this.minute - _angle.minute - 1) / 60) + this.degree - _angle.degree - 1;
		this.degree = degree;
		this.minute = minute;
		this.second = second;
	};
	this.divide = function(i) {
		var degree = parseInt(this.degree / i);
		var minute = parseInt((this.minute + 60 * (this.degree % i)) / i);
		var second = (this.second + (this.minute + 60 * (this.degree % i)) % i) / i;
		this.degree = degree;
		this.minute = minute;
		this.second = second;
	}

	function changeName(seconds) {
		that.second = seconds;
	};
};

function ldrs(params) {
	this.ldr = new Array();
	this.i = new angle(20, 30, 50);
};
export default {
	// Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
	install: function(Vue) {
		Vue.prototype.global_func = (param) => packageFunc(param);
		Vue.prototype.angle = (degree, minute, second) => ag(degree, minute, second);
		Vue.prototype.ldrs = (params) => sd(params);
		Vue.prototype.df = (dfd) => df(dfd);
	}
}
