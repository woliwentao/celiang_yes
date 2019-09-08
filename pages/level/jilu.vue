<template>
	<view class="page">
		<level v-if="PageCur == 'level'"></level>
		
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="level">
				<view class="cuIcon-cu-image"><image :src="'/static/tabbar/level' + [PageCur == 'level' ? '_cur' : ''] + '.png'"></image></view>
				<view :class="PageCur == 'level' ? 'text-green' : 'text-gray'">首页</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			PageCur: 'level',
			data(){
				return{
					id:0,
				}
			}
		};
	},
	onLoad(option) {
		this.id=option.id;
	},
	onShow() {},
	computed: {},
	methods: {
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
