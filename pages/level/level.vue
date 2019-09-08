<template>
	<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000"
	style="position:absolute;top:0upx;height:100%;width:100%;text-align: center;">
	<view class="" style="position:absolute;left:350upx">
			{{id}}测站
	</view>
		<swiper-item>
			<view class="swiper-item">
				<view class="content" style="position:absolute;top:0upx;height:100%;width:100%;">
				<form style="position:absolute;top:100upx;height:100%;width:100%;">
					<view class="cu-form-group margin-top">
						<view class="title">左盘一目标读数：</view>
						<input placeholder="度" name="input" @input="inputdegree" data-cur=0></input>
						<input placeholder="分" name="input" @input="inputminute" data-cur=0></input>
						<input placeholder="秒" name="input" @input="inputsecond" data-cur=0></input>
					</view>
					<view class="cu-form-group margin-top">
						<view class="title">左盘二目标读数：</view>
					<input placeholder="度" name="input" @input="inputdegree" data-cur=1></input>
					<input placeholder="分" name="input" @input="inputminute" data-cur=1></input>
					<input placeholder="秒" name="input" @input="inputsecond" data-cur=1></input>
					</view>                                                                                                                           
					<view class="cu-form-group margin-top">
						<view class="title">右盘一目标读数：</view>
						<input placeholder="度" name="input" @input="inputdegree" data-cur=2></input>
						<input placeholder="分" name="input" @input="inputminute" data-cur=2></input>
						<input placeholder="秒" name="input" @input="inputsecond" data-cur=2></input>
					</view>
					<view class="cu-form-group margin-top">
						<view class="title">预判二目标读数：</view>
						<input placeholder="度" name="input" @input="inputdegree" data-cur=3></input>
						<input placeholder="分" name="input" @input="inputminute" data-cur=3></input>
						<input placeholder="秒" name="input" @input="inputsecond" data-cur=3></input>
					</view>
				</form>
				<view class="" style="position:absolute;top:600upx;width: 550upx;">
				<view class="cu-form-group margin-top" >
					<view class="title">半测回角值1：</view>
					<text>{{ldr1.degree}}</text>
					<text>{{ldr1.minute}}</text>
					<text>{{ldr1.second}}</text>
				</view>
				<view class="cu-form-group margin-top">
					<view class="title">半测回角值2：</view>
					<text>{{ldr2.degree}}</text>
					<text>{{ldr2.minute}}</text>
					<text>{{ldr2.second}}</text>
				</view>
				<view class="cu-form-group margin-top">
					<view class="title">一测回角值：</view>
					<text>{{ldr3.degree}}</text>
					<text>{{ldr3.minute}}</text>
					<text>{{ldr3.second}}</text>
				</view>
				
				</view>
				</view>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<view class="content" style="position:absolute;top:0upx;height:100%;width:100%;">
				<form style="position:absolute;top:0upx;height:100%;width:100%;">
					<view class="cu-form-group margin-top">
						<view class="title">左盘一目标读数：</view>
						<input placeholder="度" name="input" @input="inputvvdegree" data-cur=0></input>
						<input placeholder="分" name="input" @input="inputvvminute" data-cur=0></input>
						<input placeholder="秒" name="input" @input="inputvvsecond" data-cur=0></input>
					</view>
				<view class="cu-form-group margin-top">
					<view class="title">左盘二目标读数：</view>
					<input placeholder="度" name="input" @input="inputvvdegree" data-cur=1></input>
					<input placeholder="分" name="input" @input="inputvvminute" data-cur=1></input>
					<input placeholder="秒" name="input" @input="inputvvsecond" data-cur=1></input>
				</view>                                                                                                                           
					<view class="cu-form-group margin-top">
						<view class="title">右盘一目标读数：</view>
						<input placeholder="度" name="input" @input="inputvvdegree" data-cur=2></input>
						<input placeholder="分" name="input" @input="inputvvminute" data-cur=2></input>
						<input placeholder="秒" name="input" @input="inputvvsecond" data-cur=2></input>
					</view>
					<view class="cu-form-group margin-top">
						<view class="title">右盘二目标读数：</view>
						<input placeholder="度" name="input" @input="inputvvdegree" data-cur=3></input>
						<input placeholder="分" name="input" @input="inputvvminute" data-cur=3></input>
						<input placeholder="秒" name="input" @input="inputvvsecond" data-cur=3></input>
					</view>
				</form>
				<view class="" style="position:absolute;top:500upx;width: 550upx;height:300upx">
				<view class="cu-form-group margin-top" >
					<view class="title">半测回角值1：</view>
					<text>{{vv1.degree}}</text>
					<text>{{vv1.minute}}</text>
					<text>{{vv1.second}}</text>
				</view>
				<view class="cu-form-group margin-top" >
					<view class="title">半测回角值1：</view>
					<text>{{vv2.degree}}</text>
					<text>{{vv2.minute}}</text>
					<text>{{vv2.second}}</text>
				</view>
				<view class="cu-form-group margin-top" >
					<view class="title">半测回角值1：</view>
					<text>{{vv3.degree}}</text>
					<text>{{vv3.minute}}</text>
					<text>{{vv3.second}}</text>
				</view>
				<view class="cu-form-group margin-top" >
					<view class="title">半测回角值1：</view>
					<text>{{vv4.degree}}</text>
					<text>{{vv4.minute}}</text>
					<text>{{vv4.second}}</text>
				</view>
				<view class="cu-form-group margin-top" >
					<view class="title">半测回角值1：</view>
					<text>{{vv5.degree}}</text>
					<text>{{vv5.minute}}</text>
					<text>{{vv5.second}}</text>
				</view>
				<view class="cu-form-group margin-top" >
					<view class="title">半测回角值1：</view>
					<text>{{vv6.degree}}</text>
					<text>{{vv6.minute}}</text>
					<text>{{vv6.second}}</text>
				</view>
				<view class="cu-form-group margin-top" >
					<view class="title">半测回角值1：</view>
					<text>{{vv7.degree}}</text>
					<text>{{vv7.minute}}</text>
					<text>{{vv7.second}}</text>
				</view>
				<view class="cu-form-group margin-top" >
					<view class="title">半测回角值1：</view>
					<text>{{vv8.degree}}</text>
					<text>{{vv8.minute}}</text>
					<text>{{vv8.second}}</text>
				</view>
				
				</view>
				</view>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item"></view>
		</swiper-item>
	</swiper>
	
	
	
	
	
</template>

<script>
	export default {
		name: 'level',
		data() {
			return {
				id:0,
				title: 'Hello',
				ldr1:new this.angle(),
				ldr2:new this.angle(),
				ldr3:new this.angle(),
				vv1:new this.angle(),
				vv2:new this.angle(),
				vv3:new this.angle(),
				vv4:new this.angle(),
				vv5:new this.angle(),
				vv6:new this.angle(),
				vv7:new this.angle(),
				vv8:new this.angle(),
			}
		},
		onLoad(option) {
			this.id=option.id;
			console.log("thisid:"+this.id);
			
		},
		methods: {
			ldrreset:function(i){
					this.GV.rlist[this.id].reset();
				if(i<2){
					this.ldr1=this.GV.rlist[this.id].ldr[4];
				}
				else if(i>1 && i<4){
					this.ldr2=this.GV.rlist[this.id].ldr[5];
				}
				this.ldr3=this.GV.rlist[this.id].ldr[6];
			},
			inputdegree:function(event){
				this.GV.rlist[this.id].ldr[event.target.dataset.cur].setdegree(Number(event.target.value));
				console.log(this.GV.rlist[this.id]);
				this.ldrreset(event.target.dataset.cur);
			},
			inputminute:function(event){
				this.GV.rlist[this.id].ldr[event.target.dataset.cur].setminute(Number(event.target.value));
				console.log(this.GV.rlist[this.id]);
				this.ldrreset(event.target.dataset.cur);
			},
			inputsecond:function(event){
				this.GV.rlist[this.id].ldr[event.target.dataset.cur].setsecond(Number(event.target.value));
				console.log(this.GV.rlist[this.id]);
				this.ldrreset(event.target.dataset.cur);
				console.log(this.GV.rlist[this.id].ldr[4].degree);
			},
			
			vvreset:function(i){
					this.GV.vrlist[this.id].reset();
					
				if(i<2){
					this.vv1=this.GV.vrlist[this.id].vv[4];
				}
				else if(i>1 && i<4){
					this.vv2=this.GV.vrlist[this.id].vv[5];
				}
				this.vv3=this.GV.vrlist[this.id].vv[6];
				this.vv4=this.GV.vrlist[this.id].vv[7];
				this.vv5=this.GV.vrlist[this.id].vv[8];
				this.vv6=this.GV.vrlist[this.id].vv[9];
				this.vv7=this.GV.vrlist[this.id].vv[10];
				this.vv8=this.GV.vrlist[this.id].vv[11];
			},
			inputvvdegree:function(event){
				this.GV.vrlist[this.id].vv[event.target.dataset.cur].setdegree(Number(event.target.value));
				console.log(this.GV.rlist[this.id]);
				this.vvreset(event.target.dataset.cur);
			},
			inputvvminute:function(event){
				this.GV.vrlist[this.id].vv[event.target.dataset.cur].setminute(Number(event.target.value));
				console.log(this.GV.vrlist[this.id]);
				this.vvreset(event.target.dataset.cur);
			},
			inputvvsecond:function(event){
				this.GV.vrlist[this.id].vv[event.target.dataset.cur].setsecond(Number(event.target.value));
				console.log(this.GV.vrlist[this.id]);
				this.vvreset(event.target.dataset.cur);
				console.log(this.GV.vrlist[this.id].vv[4].degree);
			}
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
.cu-form-group {
	background-color: #ffffff;
	padding: 1upx 30upx;
	display: flex;
	align-items: center;
	min-height: 70upx;
	justify-content: space-between;
}
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
