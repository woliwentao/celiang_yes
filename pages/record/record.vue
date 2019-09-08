<template>
	<view class="content" style="position:absolute;top:0upx;height:100%;width:100%;">
		<view class="" style="position:absolute;top:0upx;width: 700upx;">
			<view class="cu-form-group margin-top">
				<view class="title">左盘一目标读数：</view>
					<text>{{ ldr[0].degree }}</text>
					<text>{{ ldr[0].minute }}</text>
					<text>{{ ldr[0].second }}</text>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">左盘二目标读数：</view>
					<text>{{ ldr[1].degree }}</text>
					<text>{{ ldr[1].minute }}</text>
					<text>{{ ldr[1].second }}</text>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">右盘一目标读数：</view>
					<text>{{ ldr[2].degree }}</text>
					<text>{{ ldr[2].minute }}</text>
					<text>{{ ldr[2].second }}</text>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">半测回角值1：</view>
					<text>{{ ldr[3].degree }}</text>
					<text>{{ ldr[3].minute }}</text>
					<text>{{ ldr[3].second }}</text>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">半测回角值2：</view>
					<text>{{ ldr[4].degree }}</text>
					<text>{{ ldr[4].minute }}</text>
					<text>{{ ldr[4].second }}</text>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">一测回角值1：</view>
					<text>{{ ldr[5].degree }}</text>
					<text>{{ ldr[5].minute }}</text>
					<text>{{ ldr[5].second }}</text>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">半测回角值1：</view>
					<text>{{ ldr[6].degree }}</text>
					<text>{{ ldr[6].minute }}</text>
					<text>{{ ldr[6].second }}</text>
			</view>
		</view>	
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: 0,
			title: 'Hello',
			ldr:new Array(),
		};
	},
	onLoad(option) {
		this.id = option.id;
		this.ldr[0] = this.GV.rlist[this.id].ldr[0];
		this.ldr[1] = this.GV.rlist[this.id].ldr[1];
		this.ldr[2] = this.GV.rlist[this.id].ldr[2];
		this.ldr[3] = this.GV.rlist[this.id].ldr[3];
		this.ldr[4] = this.GV.rlist[this.id].ldr[4];
		this.ldr[5] = this.GV.rlist[this.id].ldr[5];
		this.ldr[6] = this.GV.rlist[this.id].ldr[6];
		console.log("dfsd");
	},
	methods: {}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 222upx;
	width: 222upx;
	margin-top: 222upx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 52upx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
