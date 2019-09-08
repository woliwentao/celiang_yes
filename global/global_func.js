exports.install = function(Vue, options) {
	Vue.prototype.text1 = function() { //全局函数1
		alert('执行成功1');
	};
	Vue.prototype.text2 = function() { //全局函数2
		alert('执行成功2');
	};
	Vue.prototype.Student = function(name) {
		this.name = name;
		this.hello = function() {
			alert('Hello, ' + this.name + '!');
		}
	};
	Vue.prototype.angle = function(degree=0, minute=0, second=0) {
		this.degree = degree;
		this.minute = minute;
		this.second = second;
		var that = this;
		this.add = function(_angle) {
			var second = (this.second + _angle.second) % 60;
			var minute = parseInt((this.second + _angle.second) / 60) + (this.minute + _angle.minute) % 60;
			var degree = parseInt((this.minute + _angle.minute) / 60) + (this.degree + _angle.degree);
			var temp=new Vue.prototype.angle(degree,minute,second);
			console.log(degree,minute,second);
			return temp;
		};
		this.minus = function(_angle) {
			var second = ((60 + this.second) - _angle.second) % 60;
			var minute = (parseInt((60 + this.second - _angle.second) / 60) + 60 + this.minute - 1 - _angle.minute) % 60;
			var degree = parseInt((parseInt((60 + this.second - _angle.second) / 60) + 60 + this.minute - 1 - _angle.minute)/ 60)+ this.degree - _angle.degree - 1;
			var temp=new Vue.prototype.angle(degree,minute,second);
			return temp;
		};
		this.divide = function(i) {
			var degree = parseInt(this.degree / i);
			var minute = parseInt((this.minute + 60 * (this.degree % i)) / i);
			var second = (this.second + (this.minute + 60 * (this.degree % i)) % i) / i;
			var temp=new Vue.prototype.angle(degree,minute,second);
			return temp;
		}
		this.setsecond = function(second) {
			this.second = second;
		};
		this.setminute = function(minute) {
			this.minute = minute;
		};
		this.setdegree = function(degree) {
			this.degree = degree;
		};
	}
	Vue.prototype.ldrs = function() {
		this.ldr = new Array();
		this.ldr[0] = new Vue.prototype.angle();//左盘一目标读数；
		this.ldr[1] = new Vue.prototype.angle();//左盘二目标读数；
		this.ldr[2] = new Vue.prototype.angle();//右盘一目标读数；
		this.ldr[3] = new Vue.prototype.angle();//右盘二目标读数；
		this.ldr[4] =this.ldr[1].minus(this.ldr[0]);//右盘二目标读数；
		this.ldr[5] =this.ldr[3].minus(this.ldr[2]);//右盘二目标读数；
		this.ldr[6]=(this.ldr[4].add(this.ldr[5])).divide(2);//一测回角值
		this.reset=function(){
			this.ldr[5] =this.ldr[3].minus(this.ldr[2]);
			this.ldr[4] =this.ldr[1].minus(this.ldr[0]);
			this.ldr[6]=(this.ldr[4].add(this.ldr[5])).divide(2);
			
		};
	}
	Vue.prototype.vvs=function(){
		var vva=new Vue.prototype.angle(90,0,0);
		var vvb=new Vue.prototype.angle(270,0,0);
		var vvc=new Vue.prototype.angle(360,0,0);
		this.vv=new Array();
		this.vv[0]=new Vue.prototype.angle();//左盘一目标读数
		this.vv[1]=new Vue.prototype.angle();//左盘二目标读数
		this.vv[2]=new Vue.prototype.angle();//右盘一目标读数
		this.vv[3]=new Vue.prototype.angle();//右盘二目标读数
		this.vv[4]=vva.minus(this.vv[0]);//一目标左半测回竖角
		this.vv[5]=vva.minus(this.vv[1]);//二目标左半测回竖角
		this.vv[6]=this.vv[2].minus(vvb);//一目标右半测回竖角
		this.vv[7]=this.vv[3].minus(vvb);//一目标右半测回竖角
		this.vv[8]=(this.vv[4].add(this.vv[6])).divide(2);// 一目标一测回竖角值
		this.vv[9]=(this.vv[5].add(this.vv[7])).divide(2);//二目标一测回竖角值
		this.vv[10]=((this.vv[0].add(this.vv[2])).minus(vvc)).divide(2);//一目标竖盘指标差
		this.vv[11]=((this.vv[1].add(this.vv[3])).minus(vvc)).divide(2);//二目标竖盘指标差
		this.reset=function(){
			this.vv[4]=vva.minus(this.vv[0]);//一目标左半测回竖角
			this.vv[5]=vva.minus(this.vv[1]);//二目标左半测回竖角
			this.vv[6]=this.vv[2].minus(vvb);//一目标右半测回竖角
			this.vv[7]=this.vv[3].minus(vvb);//
			this.vv[8]=(this.vv[4].add(this.vv[6])).divide(2);// 一目标一测回竖角值
			this.vv[9]=(this.vv[5].add(this.vv[7])).divide(2);//二目标一测回竖角值
			this.vv[10]=((this.vv[0].add(this.vv[2])).minus(vvc)).divide(2);//一目标竖盘指标差
			this.vv[11]=((this.vv[1].add(this.vv[3])).minus(vvc)).divide(2);//二目标竖盘指标差
		};
	}
};
