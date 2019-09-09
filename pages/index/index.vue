<template>
	<view>
		<!-- <view class="cu-card case"  v-for="item in num" :key='item' v-on:click="navato(item)">
			<view class="cu-item shadow" >
				<view class="cu-list menu-avatar" >
					<view class="cu-item" >
						<view class="round lg"></view>
						<view class="content flex-sub">
							<view class="text-grey">{{item}}item</view>
							<view class="text-gray">
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<view v-for="(item,index) in rlist" :key='index' v-on:click="navato(index)" class="example-box">
			<uni-card :title="(index+1)+'测站'" :is-shadow="true"  @click="navato(index)">
				水平方向一测回角值:{{item.ldr[6].degree}}/{{item.ldr[6].minute}}/{{item.ldr[6].second}}
			<br/>一目标竖角:{{vrlist[index].vv[8].degree}}/{{vrlist[index].vv[8].minute}}/{{vrlist[index].vv[8].second}}
			<br/>二目标竖角:{{vrlist[index].vv[9].degree}}/{{vrlist[index].vv[9].minute}}/{{vrlist[index].vv[9].second}}
			</uni-card>
		</view>
		
		<button type="primary" @click="navato_add" style="position:fixed;bottom:0upx;width:80%;height:100upx">增加记录</button>
		<button type="primary" @click="clear" style="position:fixed;bottom:0upx;width:20%;right:0upx;height:100upx;line-height: 30px;">清除<br/>所有点</button>
		
	</view>
</template>

<script>
const than = this ; 
export default {
	data() {
		return {
			i:0,
			num:new Array(),
			rlist:new Array(),
			vrlist:new Array(),
		};
	},
	onLoad() {
		this.$set(this.rlist,this.GV.rlist);
		this.$set(this.vrlist,this.GV.vrlist);
	},
	onHide(){
		try {
		    uni.setStorageSync('rlist', this.GV.rlist);
		} catch (e) {
		    // error
		}
		try {
		    uni.setStorageSync('vrlist', this.GV.vrlist);
		} catch (e) {
		    // error
		}
	},
	onReady() {
		this.$set(this.rlist,this.GV.rlist);
		this.$set(this.vrlist,this.GV.vrlist);
	},
	onShow(){
		try {
		    uni.setStorageSync('rlist', this.GV.rlist);
		} catch (e) {
		    // error
		}
		try {
		    uni.setStorageSync('vrlist', this.GV.vrlist);
		} catch (e) {
		    // error
		}
		this.rlist=this.GV.rlist;
		this.vrlist=this.GV.vrlist;
		this.$set(this.rlist,this.GV.rlist);
		this.$set(this.vrlist,this.GV.vrlist);
		//数组渲染要用this.@set
		console.log("rlistshow",this.GV.rlist[this.i]);
	},
	methods: {
		navato: function(index) {
			console.log("index"+index);
			var i=index;
			uni.navigateTo({
				url:'../record/record?id='+i
			});
			console.log("num"+this.num);
			this.vrlist=this.GV.vrlist;
			this.rlist=this.GV.rlist;
		},
		navato_add: function() {
			this.i=this.GV.rlist.length;
			var i=this.i;
			this.GV.rlist[i]=new this.ldrs();
			this.GV.vrlist[i]=new this.vvs();
			this.vrlist=this.GV.vrlist;
			this.rlist=this.GV.rlist;
			console.log("i",i,this.rlist[i]);
			uni.navigateTo({
				url: '../level/level?id='+i
			});
			this.num.push(i);
			console.log("rlist",this.rlist[i],this.GV.rlist.length[i]);
			
		},
		clear:function(){
			uni.removeStorage({
			    key: 'rlist',
			    success: function (res) {
			        console.log('removesuccess');
			    }
			});
			uni.removeStorage({
			    key: 'vrlist',
			    success: function (res) {
			        console.log('success');
			    }
			});
			this.GV.rlist=new Array();
			this.GV.vrlist=new Array();
			this.rlist=this.GV.rlist;
			this.vrlist=this.GV.vrlist;
			this.$set(this.rlist,this.GV.rlist);
			this.$set(this.vrlist,this.GV.vrlist);
		}
	}
};
</script>

<style>
.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 10upx;
		height: 40upx;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
		background-color: #031e3c
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		border-top: 1px #f5f5f5 solid;
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.example-body {
		padding: 30upx 0;
	}

	.example-box {
		margin-bottom: 30upx;
	}

	.example-box:last-child {
		margin-bottom: 0;
	}

	.image-box {
		width: 100%;
		height: 350upx;
		overflow: hidden;
	}

	.image-box .image {
		width: 100%;
		height: 100%;
	}

	.content-box {
		padding-top: 20upx;
	}

	.footer-box {
		display: flex;
		justify-content: space-between;
		width: 100%;

	}

	.footer-box__item {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.footer-box__item:nth-child(2) {
		justify-content: center;
	}

	.footer-box__item:last-child {
		justify-content: flex-end;
	}
</style>
