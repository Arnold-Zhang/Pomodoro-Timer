<template>
	<div class="timer">
		<p>工作时长为
		<button v-on:click="function(){workTime>5?workTime-=5:workTime=5}">-</button>
		{{ getMinutes(workTime*60) }} 
		<button v-on:click="function(){workTime<55?workTime+=5:workTime=55}">+</button>
		</p>
		<span>距离{{ action?(status=='work'?'工作':'休息'):'工作' }}结束还有 {{ action?minutes:getMinutes(workTime*60) }} 分 {{action?seconds:getSeconds(workTime*60)}} 秒</span>
		<button v-if="action" v-on:click="resetTimer()">停止</button>
		<button v-else v-on:click="beginWork()">开始</button>
		<div class="container">
			<div class="clock">
				<div class="clock_timer">
					<div class="dial"><span></span><br /><b>0</b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b>5</b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b>10</b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b>15</b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b>20</b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b></b></div>
					<div class="dial"><span></span><br /><b>25</b></div>
				</div>
				<div class="clock_dial">
					<div class="dial"><span></span><br /><b>12</b></div>
					<div class="dial"><span></span><br /><b>3</b></div>
					<div class="dial"><span></span><br /><b>6</b></div>
					<div class="dial"><span></span><br /><b>9</b></div>
				</div>
				<div class="H"><span></span></div>
				<div class="M"><span></span></div>
				<div class="S"><span></span></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Timer',
	props: {
	},
	mounted:function(){
		// 制作表盘
		let	clock_dial=document.querySelectorAll('.clock_dial .dial');
		for(let i=0;i<clock_dial.length;i++){
			let angle=360/4*i;
			clock_dial[i].style.transform='rotate('+angle+'deg)';
			clock_dial[i].lastChild.style.transform='rotate('+-angle+'deg)';
			
		}
		// 制作计时器
		let	timer_dial=document.querySelectorAll('.clock_timer .dial');
		for(let i=0;i<timer_dial.length;i++){
			let angle=360/60*i;
			timer_dial[i].style.transform='rotate('+angle+'deg)';
			timer_dial[i].lastChild.style.transform='rotate('+-angle+'deg)';
			
		}
		let that = this;
		setInterval(function(){that.clockMove();},1000);
	},
	data() {
		return {
			action: false,			// 番茄时钟是否进行状态
			status: 'pending',		// 工作状态：work、rest、unhold
			groupCount: 4,			// 一个工作组包含的番茄时钟数
			workCount: 0,			// 正在进行的番茄时钟完成数
			haveFinished: 0,		// 已经完成的番茄时钟个数
			workTime: 25,			// 番茄时钟工作时间（分）
			shortRest: 5,			// 短休息时长（分）
			longRest: 15,			// 长休息时长（分）
			maxtime: 0,				// 倒计时总时长（秒）
			minutes: '00',
			seconds: '00',
			timer: 0,
		}
	},
	methods:{		
		// 获取倒计时时剩余分钟数
		getMinutes: function(seconds) {
			return Math.floor(seconds / 60)<10?'0'+Math.floor(seconds / 60):Math.floor(seconds / 60);
		},
		
		// 获取倒计时时剩余秒数
		getSeconds: function(seconds) {
			return Math.floor(seconds % 60) < 10? '0'+Math.floor(seconds % 60):Math.floor(seconds % 60);
		},
		
		// 重置计时器
		resetTimer: function() {
			// 将 timer 清空，不再执行倒计时
			clearInterval(this.timer);
			this.action = false;
			this.status = 'unhold';
			this.workCount = 0;
			// 获取初始状态下需要显示的分钟数和秒数
			this.minutes = this.getMinutes(this.workTime * 60);
			this.seconds = this.getSeconds(this.workTime * 60);
		},
		
		// 倒计时逻辑
		countDown: function() {
			if (this.maxtime > 0) {
				this.minutes = this.getMinutes(this.maxtime);
				this.seconds = this.getSeconds(this.maxtime);
				--this.maxtime;
			} else{
				if(this.action && this.status == 'work'){
					this.haveFinished++;
					this.workCount++;
					alert("时间到，结束！可以开始休息了！");
					this.beginRest();
				}else{
					alert("休息结束，准备开始新一轮番茄时钟吧！");
					this.beginWork();
				}
			
			}
		},
		
		// 开始番茄时钟
		beginWork: function() {
			this.action = true;
			this.status = 'work';
			// 执行倒计时的时候已经延迟 一秒执行，所以总时间要先减去一秒
			this.maxtime = this.workTime * 60-1;
			// 执行倒计时
			let that = this;
			clearInterval(this.timer);
			this.timer = setInterval(function(){that.countDown();}, 1000); 			
		},
		
		// 休息
		beginRest: function() {
			this.status = 'rest';
			let restTime = this.workCount%this.groupCount == 0? this.longRest:this.shortRest;
			this.maxtime = restTime * 60-1;
			// 执行倒计时
			let that = this;
			clearInterval(this.timer);
			this.timer = setInterval(function(){that.countDown();}, 1000); 
		},
		//时钟时分秒针转动
		clockMove: function(){					
			let H_clock=document.querySelector('.H');
			let	M_clock=document.querySelector('.M');
			let	S_clock=document.querySelector('.S');
				
			let nowTime=new Date();
			let H=nowTime.getHours();
			let M=nowTime.getMinutes();
			let S=nowTime.getSeconds();
			//1s是6度，1m是6度，1h是30度；
			S_clock.style.transform='rotate('+S*6+'deg)';
			H_clock.style.transform='rotate('+(H*30+30/60*M)+'deg)';
			M_clock.style.transform='rotate('+M*6+'deg)';
		}
	}
}
</script>

<style scoped lang="scss">
	.clock{
		width:300px;
		height:300px;
		border:0;
		border-radius: 50%;
		position: relative;
		
		.dial{
			position: absolute;
			width:20px;
			height: 100%;
			top:0;
			left:140px;
			
			span{
				width:5px;
				height:10px;
				background:black;
				display: inline-block;
				vertical-align: top;
			}
		}
		.clock_timer{
			font-size: 18px;
			width:100%;
			height: 100%;
			background-color: rgb(254, 67, 101);
			border-radius: 50%;
			top:0;
			left:0;
			position: absolute;
			.dial{
				span{
					width:1px;
				}
			}
		}
		.clock_dial{
			font-size: 18px;
			width:70%;
			height: 70%;
			background-color: rgb(249, 205, 173);
			top:15%;
			left:15%;
			border-radius: 50%;
			position: relative;
			.dial{
				left:95px;
				span{
					height: 15px;
					display: inline-block;
				}
				b{
					display:inline-block;
				}
			}
		}
		
		.H,.M,.S{
			position:absolute;
			height: 100%;
			top:0;
			left: 50%;
			-webkit-transform:translate3d(-50%,0,0);
			-ms-transform:translate3d(-50%,0,0);
			-o-transform:translate3d(-50%,0,0);
			text-align: center;
		}
		
		.H{
			span{
				margin-top: 80px;
				width:6px;
				height: 80px;
				background:black;
				display:inline-block;
				}
		}
		
		.M{
			span{
				margin-top: 60px;
				height: 100px;
				width:6px;
				background:black;
				display:inline-block;
			}
		}
		
		.S{
			span{
				margin-top: 45px;
				height: 120px;
				width:3px;
				background:red;
				display: inline-block;
				position:relative;
			}
			
			span:after{
				content:'';
				width:10px;
				height: 10px;
				border-radius: 50%;
				background:red;
				position: absolute;
				bottom:10px;
				left:-3.5px;
			}
		}
	}
</style>