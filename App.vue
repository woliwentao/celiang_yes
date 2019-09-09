<script>
	export default {
		// globalData:{
		// 	ldr:[
		// 		1,
		// 		0,
		// 		0,
		// 		0
		// 	],
		// },
		onLaunch: function() {
			var rlist;
			var vrlist;
			console.log('App Launch')
			uni.getStorage({
				key:'rlist',
				success:function(res){
					console.log("resdata",res.data);
					if(res.data!=null&&res.data!=undefined&&res.data!='')
					{rlist=res.data;}
				}
			})
			if(rlist!=null&&rlist!=undefined&&rlist!='')
			{this.GV.rlist=rlist;}
			uni.getStorage({
				key:'vrlist',
				success:function(res){
					console.log("resdata",res.data);
					if(res.data!=null&&res.data!=undefined&&res.data!='')
					{vrlist=res.data;}
				}
			})
			if(vrlist!=null&&vrlist!=undefined&&vrlist!='')
			{this.GV.vrlist=vrlist;}
			console.log("gh",this.GV.vrlist)
		},
		onShow: function() {
			console.log('App Show')
			
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			}
		
	}
</script>

<style>
@import "colorui/main.css";
@import "colorui/icon.css";
</style>