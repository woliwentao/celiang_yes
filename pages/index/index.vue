<template>
	<view>
		<view class="cu-card case"  v-for="item in num" :key='item' v-on:click="navato(item)">
			<view class="cu-item shadow" >
				<view class="cu-list menu-avatar" >
					<view class="cu-item" >
						<view class="round lg"></view>
						<view class="content flex-sub">
							<view class="text-grey">2</view>
							<view class="text-gray">
								{{item}}item
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<button class="cu-btn bg-yellow round lg shadow-lg" style="position:absolute;top:1000rpx;left:275rpx;height:200rpx;width: 200rpx;" @click="navato_add">增加记录</button>
		<button type="primary" @click="navagatto">fdfdfdf</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			num:new Array(),
		};
	},
	onLoad() {
	},
	methods: {
		navato: function(index) {
			console.log("index"+index);
			var i=index;
			uni.navigateTo({
				url:'../record/record?id='+i
			});
			console.log("num"+this.num);
		},
		navato_add: function() {
			var i=Number(this.GV.rlist[0]+1);
			this.GV.rlist[i]=new this.ldrs();
			this.GV.vrlist[i]=new this.vvs();
			uni.navigateTo({
				url: '../level/level?id='+i
			});
			this.num.push(i);
			this.GV.rlist[0]+=1;
			this.GV.vrlist[0]+=1;
			console.log(this.GV.vrlist);
		}
	}
};
</script>

<style></style>
