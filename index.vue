<template>
	<view class="page">
		<basics v-if="PageCur == 'basics'"></basics>
		<save v-if="PageCur == 'save'"></save>
		<user v-if="PageCur == 'user'"></user>
		<!-- <view class="cu-bar tabbar bg-white " style="position:fixed; bottom:20rpx;width: 750rpx;">
			<view class="action text-yellow">
				<view class="cuIcon-homefill"></view>
				首页
			</view>
			<view :class="isActive=='save' ? 'action text-yellow add-action':'action text-blue add-action'">
				<button :class="isActive=='save' ?'cu-btn cuIcon-add shadow bg-yellow':'cu-btn cuIcon-add shadow bg-blue'"  @tap="Tosave"  data-cur='save' style={}></button>
				存
			</view>
			<view class="action text-gray">
				<view class="cuIcon-my"><view class="cu-tag badge"></view></view>
				我的
			</view>
		</view> -->

		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class="cuIcon-cu-image"><image :src="'/static/tabbar/basics' + [PageCur == 'basics' ? '_cur' : ''] + '.png'"></image></view>
				<view :class="PageCur == 'basics' ? 'text-green' : 'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="save">
				<view class="cuIcon-cu-image"><image :src="'/static/tabbar/save' + [PageCur == 'save' ? '_cur' : ''] + '.png'"></image></view>
				<view :class="PageCur == 'save' ? 'text-green' : 'text-gray'">存</view>
			</view>
			<view class="action" @click="NavChange" data-cur="user">
				<view class="cuIcon-cu-image"><image :src="'/static/tabbar/user' + [PageCur == 'user' ? '_cur' : ''] + '.png'"></image></view>
				<view :class="PageCur == 'user' ? 'text-green' : 'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			PageCur: 'basics',
			date: new Date(),
			// month:new Date().getMonth()+1,
			// day:new Date().getUTCDate(),
			time1: '01:30',
			time2: '01:35',
			cardCur: 0,
			dotStyle: false,
			towerStart: 0,
			direction: ''
		};
	},
	onLoad() {
		console.log('now:' + helper.now());  
		this.text=helper.text;
		this.TowerSwiper('swiperList');
		// 初始化towerSwiper 传已有的数组名即可
	},
	onShow() {

	},
	computed: {
		// 计算属性的 getter
		month: function() {
			// `this` 指向 vm 实例
			return this.date.getMonth() + 1 < 10 ? '0' + (this.date.getMonth() + 1) : this.date.getMonth() + 1;
		},
		day: function() {
			// `this` 指向 vm 实例
			return this.date.getUTCDate();
		}
	},
	methods: {
		DotStyle(e) {
			this.dotStyle = e.detail.value;
		},
		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		},
		// towerSwiper
		// 初始化towerSwiper
		TowerSwiper(name) {
			let list = this[name];
			for (let i = 0; i < list.length; i++) {
				list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
				list[i].mLeft = i - parseInt(list.length / 2);
			}
			this.swiperList = list;
		},

		// towerSwiper触摸开始
		TowerStart(e) {
			this.towerStart = e.touches[0].pageX;
		},

		// towerSwiper计算方向
		TowerMove(e) {
			this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left';
		},

		// towerSwiper计算滚动
		TowerEnd(e) {
			let direction = this.direction;
			let list = this.swiperList;
			if (direction == 'right') {
				let mLeft = list[0].mLeft;
				let zIndex = list[0].zIndex;
				for (let i = 1; i < this.swiperList.length; i++) {
					this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft;
					this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex;
				}
				this.swiperList[list.length - 1].mLeft = mLeft;
				this.swiperList[list.length - 1].zIndex = zIndex;
			} else {
				let mLeft = list[list.length - 1].mLeft;
				let zIndex = list[list.length - 1].zIndex;
				for (let i = this.swiperList.length - 1; i > 0; i--) {
					this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft;
					this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex;
				}
				this.swiperList[0].mLeft = mLeft;
				this.swiperList[0].zIndex = zIndex;
			}
			this.direction = '';
			this.swiperList = this.swiperList;
		},

		Tosave(e) {
			console.log(e.target.dataset.cur);
			uni.navigateTo({
				url: '../save/save',
				success: res => {
					this.isActive = e.target.dataset.cur;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		NavChange: function(e) {
			this.PageCur = e.currentTarget.dataset.cur;
		}
	}
};
</script>

<style>
.tower-swiper .tower-item {
	transform: scale(calc(0.5 + var(--index) / 10));
	margin-left: calc(var(--left) * 100upx - 150upx);
	z-index: var(--index);
}
</style>
