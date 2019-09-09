<template>
	<view class="">
		<view class="" style="position:absolute;left:350upx">
				{{id}}测站
		</view>
		<swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="500" style="position:absolute;top:0upx;height:150%;width:100%;text-align: center;">
			<swiper-item>
				<view class="swiper-item">
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
								<view class="title">右盘二目标读数：</view>
									<text>{{ ldr[3].degree }}</text>
									<text>{{ ldr[3].minute }}</text>
									<text>{{ ldr[3].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">半测回角值1：</view>
									<text>{{ ldr[4].degree }}</text>
									<text>{{ ldr[4].minute }}</text>
									<text>{{ ldr[4].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">半测回角值2：</view>
									<text>{{ ldr[5].degree }}</text>
									<text>{{ ldr[5].minute }}</text>
									<text>{{ ldr[5].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">一测回角值1：</view>
									<text>{{ ldr[6].degree }}</text>
									<text>{{ ldr[6].minute }}</text>
									<text>{{ ldr[6].second }}</text>
							</view>
						</view>	
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="content" style="position:absolute;top:0upx;height:100%;width:100%;">
						<view class="" style="position:absolute;top:0upx;width: 700upx;">
							<view class="cu-form-group margin-top">
								<view class="title">左盘一目标读数：</view>
									<text>{{ vv[0].degree }}</text>
									<text>{{ vv[0].minute }}</text>
									<text>{{ vv[0].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">左盘二目标读数：</view>
									<text>{{ vv[1].degree }}</text>
									<text>{{ vv[1].minute }}</text>
									<text>{{ vv[1].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">右盘一目标读数：</view>
									<text>{{ vv[2].degree }}</text>
									<text>{{ vv[2].minute }}</text>
									<text>{{ vv[2].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">右盘二目标读数：</view>
									<text>{{ vv[3].degree }}</text>
									<text>{{ vv[3].minute }}</text>
									<text>{{ vv[3].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">一目标左半测回竖角：</view>
									<text>{{ vv[4].degree }}</text>
									<text>{{ vv[4].minute }}</text>
									<text>{{ vv[4].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">二目标左半测回竖角：</view>
									<text>{{ vv[5].degree }}</text>
									<text>{{ vv[5].minute }}</text>
									<text>{{ vv[5].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">一目标右半测回竖角：</view>
									<text>{{ vv[6].degree }}</text>
									<text>{{ vv[6].minute }}</text>
									<text>{{ vv[6].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">二目标右半测回竖角：</view>
									<text>{{ vv[7].degree }}</text>
									<text>{{ vv[7].minute }}</text>
									<text>{{ vv[7].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">一目标一测回竖角：</view>
									<text>{{ vv[8].degree }}</text>
									<text>{{ vv[8].minute }}</text>
									<text>{{ vv[8].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">二目标一测回竖角：</view>
									<text>{{ vv[9].degree }}</text>
									<text>{{ vv[9].minute }}</text>
									<text>{{ vv[9].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">一目标竖盘指标差：</view>
									<text>{{ vv[10].degree }}</text>
									<text>{{ vv[10].minute }}</text>
									<text>{{ vv[10].second }}</text>
							</view>
							<view class="cu-form-group margin-top">
								<view class="title">二目标竖盘指标差：</view>
									<text>{{ vv[11].degree }}</text>
									<text>{{ vv[11].minute }}</text>
									<text>{{ vv[11].second }}</text>
							</view>
						</view>	
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
		<button type="primary" @click="navato_mod" style="position:fixed;bottom:0upx;width:100%;height:100upx">修改记录</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: 0,
			title: 'Hello',
			ldr:new Array(),
			vv:new Array(),
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
		this.vv=this.GV.vrlist[this.id].vv;
	},
	methods: {
		navato_mod: function() {
			var i=Number(this.id);
			uni.navigateTo({
				url: '../level/level?id='+i
			});
		}
	}
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
