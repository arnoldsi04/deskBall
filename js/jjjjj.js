function createBall(){
		var ball1 = new YelloBall(500,257);
		ball1.num = 1;
		ballArr.push(ball1);
		var ball2 = new YelloBall(525,244);
		ball2.num = 2;
		ballArr.push(ball2);
		var ball3 = new YelloBall(525,270);
		ball3.num = 3;
		ballArr.push(ball3);
		var ball4 = new YelloBall(550,230);
		ball4.num = 4;
		ballArr.push(ball4);
		var ball5 = new YelloBall(550,257);
		ball5.num = 5;
		ballArr.push(ball5);
		var ball6 = new YelloBall(550,283);
		ball6.num = 6;
		ballArr.push(ball6);


		var ball7 = new YelloBall(575,218);
		ball7.num = 7;
		ballArr.push(ball7);
		var ball8 = new YelloBall(575,244);
		ball8.num = 8;
		ballArr.push(ball8);
		var ball9 = new YelloBall(575,270);
		ball9.num = 9;
		ballArr.push(ball9);
		var ball10 = new YelloBall(575,296);
		ball10.num = 10;
		ballArr.push(ball10);

		var ball11 = new YelloBall(600,205);
		ball11.num = 11;
		ballArr.push(ball11);
		var ball12 = new YelloBall(600,231);
		ball12.num = 12;
		ballArr.push(ball12);
		var ball13 = new YelloBall(600,257);
		ball13.num = 13;
		ballArr.push(ball13);
		var ball14 = new YelloBall(600,283);
		ball14.num = 14;
		ballArr.push(ball14);
		var ball15 = new YelloBall(600,309);
		ball15.num = 15;
		ballArr.push(ball15);
	}

	function YelloBall(x,y){
		this.x = x;
		this.y = y;
		this.speedX = 0;
		this.speedY = 0;
		this.img = yellowBall;
		this.moveDire = 0;
		this.speed = 0;
		this.type = 2;
		this.clear = false;
	}
	YelloBall.prototype.move = function(){
		if(this.x<= 35){
						this.speedX = Math.abs(this.speedX);
					}else if(this.x >= 730){
						this.speedX = -1*Math.abs(this.speedX);
					}
					if(this.y <= 35){
						this.speedY = Math.abs(this.speedY);
					}else if(this.y >= 484){
						this.speedY = -1*Math.abs(this.speedY);
					}
		if(this.speedX >0 && this.speedY > 0){
						var bili = Math.abs(this.speedX)/Math.abs(Math.abs(this.speedX) + Math.abs(this.speedY));
						this.speedX -= .01 * bili;
						this.speedY -= .01 * (1-bili);
						this.speedX <=0?this.speedX =0:null;
						this.speedY <=0?this.speedY =0:null;
						this.x += this.speedX;
						this.y += this.speedY;
					}else if (this.speedX > 0 && this.speedY < 0){
						var bili = Math.abs(this.speedX)/Math.abs(Math.abs(this.speedX) + Math.abs(this.speedY));
						this.speedX -= .01 * bili;
						this.speedY += .01 * (1-bili);
						this.speedX <=0?this.speedX =0:null;
						this.speedY >=0?this.speedY =0:null;
						this.x += this.speedX;
						this.y += this.speedY;
					}else if (this.speedX <0 && this.speedY > 0){
						var bili = Math.abs(this.speedX)/Math.abs(Math.abs(this.speedX) + Math.abs(this.speedY));
						this.speedX += .01 * bili;
						this.speedY -= .01 * (1-bili);
						this.speedX >=0?this.speedX =0:null;
						this.speedY <=0?this.speedY =0:null;
						this.x += this.speedX;
						this.y += this.speedY;
					}else if(this.speedX <0 && this.speedY < 0){
						var bili = Math.abs(this.speedX)/Math.abs(Math.abs(this.speedX) + Math.abs(this.speedY));
						this.speedX += .01 * bili;
						this.speedY += .01 * (1-bili);
						this.speedX >=0?this.speedX =0:null;
						this.speedY >=0?this.speedY =0:null;
						this.x += this.speedX;
						this.y += this.speedY;
					}
					ctx.drawImage(this.img,this.x,this.y,30,30);
	}
	function drawBall(){
		for(var i = 0 ; i < ballArr.length; i++){
			if(ballArr[i].clear == false){
				ballArr[i].move();
			}
		}
	}



	function preLoading(func){
		for(var i = 0; i < imgArr.length;i++){
			var img = new Image();
			img.src = imgArr[i];
			imgArrLoadEnd.push(img);
			img.onload = function(){
				loadNum ++ ;
				if(loadNum == imgArr.length){
					//预加载完毕
					imgbg = imgArrLoadEnd[1];
					bluedot = imgArrLoadEnd[2];
					dashedBall = imgArrLoadEnd[3];
					force = imgArrLoadEnd[4];
					table = imgArrLoadEnd[0];
					whiteBall = imgArrLoadEnd[5];
					yellowBall = imgArrLoadEnd[6];
					console.log(imgArrLoadEnd);


					func();
					
				}
			}
		}
	}
	// 创建白球
	function createThite(){
			playerBall = {
				x : 200,
				y : 257,
				img : whiteBall,
				speedX : 0,
				speedY : 0,
				speed:0,
				moveDire:0,
				type:0,
				num:0,
				clear:false,
				move : function(){
					if(this.x<= 35){
						this.speedX = Math.abs(this.speedX);
					}else if(this.x >= 730){
						this.speedX = -1*Math.abs(this.speedX);
					}
					if(this.y <= 35){
						this.speedY = Math.abs(this.speedY);
					}else if(this.y >= 484){
						this.speedY = -1*Math.abs(this.speedY);
					}
					if(this.speedX >0 && this.speedY > 0){
						var bili = Math.abs(this.speedX)/Math.abs(Math.abs(this.speedX) + Math.abs(this.speedY));
						this.speedX -= moca * bili;
						this.speedY -= moca * (1-bili);
						this.speedX <=0?this.speedX =0:null;
						this.speedY <=0?this.speedY =0:null;
						this.x += this.speedX;
						this.y += this.speedY;
					}else if (this.speedX > 0 && this.speedY < 0){
						var bili = Math.abs(this.speedX)/Math.abs(Math.abs(this.speedX) + Math.abs(this.speedY));
						this.speedX -= moca * bili;
						this.speedY += moca * (1-bili);
						this.speedX <=0?this.speedX =0:null;
						this.speedY >=0?this.speedY =0:null;
						this.x += this.speedX;
						this.y += this.speedY;
					}else if (this.speedX <0 && this.speedY > 0){
						var bili = Math.abs(this.speedX)/Math.abs(Math.abs(this.speedX) + Math.abs(this.speedY));
						this.speedX += moca * bili;
						this.speedY -= moca * (1-bili);
						this.speedX >=0?this.speedX =0:null;
						this.speedY <=0?this.speedY =0:null;
						this.x += this.speedX;
						this.y += this.speedY;
					}else if(this.speedX <0 && this.speedY < 0){
						var bili = Math.abs(this.speedX)/Math.abs(Math.abs(this.speedX) + Math.abs(this.speedY));
						this.speedX += moca * bili;
						this.speedY += moca * (1-bili);
						this.speedX >=0?this.speedX =0:null;
						this.speedY >=0?this.speedY =0:null;
						this.x += this.speedX;
						this.y += this.speedY;
					}
					ctx.drawImage(this.img,this.x,this.y,30,30);
				}
		}
	}
	function drawPlayer(){
		if(playerBall.clear == false){
			playerBall.move();
		}
	}
	// 创建球杆
	// function createWarrior(){
	// }
	// 创建指示器
	function createTipline(){
		canvas.onmousemove = function(e){
			dotArr[0] = e.clientX - 15;
			dotArr[1] = e.clientY - 15;
		}
		tipsLine = {
			xOri : 0,
			yOri : 0,
			xEnd : 0,
			yEnd : 0,
			move : function(){
				this.xEnd = dotArr[0]
				this.yEnd = dotArr[1];
				this.xOri = playerBall.x + 15;
				this.yOri = playerBall.y + 15;
				ctx.drawImage(dashedBall,this.xEnd,this.yEnd,30,30);
				ctx.beginPath();
				ctx.moveTo(this.xOri, this.yOri);
				ctx.lineTo(this.xEnd+15, this.yEnd+15);
				ctx.strokeStyle = "white";
				ctx.stroke();
			}
		}
		canvas.onmousedown = function(){
			if(canDrowTips == true){
				str_timer = setInterval(function(){
				strengh.hit += strengh.speed;
				if(strengh.hit>=100 || strengh.hit<=0){
					strengh.speed *= -1;
					}
				},30)
			}
		}
		canvas.onmouseup = function(){
			if(canDrowTips == true){
				ballIn = [];
				hasbeenchange = false;
				clearInterval(str_timer);
				var x1 = tipsLine.xOri;
				var y1 = tipsLine.yOri;
				var x2 = tipsLine.xEnd + 15;
				var y2 = tipsLine.yEnd + 15;
				playerBall.moveDire = angle(x1,y1,x2,y2);

				//************************************
				playerBall.speed = strengh.hit*speed;
				//**************************************
				playerBall.speedX = playerBall.speed * Math.cos(playerBall.moveDire*Math.PI/180);
				playerBall.speedY = playerBall.speed * Math.sin(playerBall.moveDire*Math.PI/180);
				canDrowTips = false;
			}
		}
	}
	function drawTipline(){
		if(canDrowTips == true && playerBall.clear == false){
			tipsLine.move();
		}
	}
	//判断角度
	function angle(x1,y1,x2,y2){
	    var diff_x = x2 - x1,
	        diff_y = y2 - y1;
	    //返回角度,不是弧度
	    if(diff_x < 0){
	    	return 360*Math.atan(diff_y/diff_x)/(2*Math.PI) + 180;
	    }else {
	    	return 360*Math.atan(diff_y/diff_x)/(2*Math.PI);
	    }
	}
	// 碰撞检测
	function jugeCrash(obj1,obj2){
		var spaceBall = Math.sqrt((obj1.x - obj2.x)*(obj1.x - obj2.x) + (obj1.y - obj2.y)*(obj1.y - obj2.y));
		var canCrash = true;
		var index = -1;
		for(var l = 0; l <crashClear.length;l++){
				if(crashClear[l][0] == obj1.num && crashClear[l][1] == obj2.num){
					canCrash = false;
					index = l;
				}
			}

		if(spaceBall < 26 && canCrash == true){
			crashClear.push([obj1.num,obj2.num]);
			//撞了！！
			var v1x = obj1.speedX;
			var v1y = obj1.speedY;
			var v2x = obj2.speedX;
			var v2y = obj2.speedY;
			var x1 = obj1.x;
			var x2 = obj2.x;
			var y1 = obj1.y;
			var y2 = obj2.y;
			obj1.x -= obj1.speedX/2;
			obj1.y -= obj1.speedY/2;
			obj2.x -= obj2.speedX/2;
			obj2.y -= obj2.speedY/2;
			var addx = ((v1x-v2x)*(x1-x2)*(x1-x2)+(v1y-v2y)*(x1-x2)*(y1-y2))/((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
			var addy = ((v1y-v2y)*(y1-y2)*(y1-y2) + (v1x-v2x)*(x1-x2)*(y1-y2))/((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
			obj1.speedX = v1x - addx;
			obj1.speedY = v1y - addy;
			obj2.speedX = v2x + addx;
			obj2.speedY = v2y + addy;
			obj1.speed = Math.sqrt(obj1.speedX * obj1.speedX + obj1.speedY*obj1.speedY);
			obj2.speed = Math.sqrt(obj2.speedX * obj2.speedX + obj2.speedY*obj2.speedY);
			obj1.moveDire = angle(0,0,obj1.speedX,obj1.speedY);
			obj2.moveDire = angle(0,0,obj2.speedX,obj2.speedY);
		}else if(spaceBall > 26 && canCrash == false) {
			crashClear.splice(index,1);
		}
	}

	function jugeCraAll(){
		for(var i = 0; i < ballAllArr.length;i++){
			if(ballAllArr[i].clear == true){
				ballAllArr.splice(i,1);
				i--;
			}
		}
		for(var i = 0; i < ballAllArr.length;i++){
			for(var j = i+1;j<ballAllArr.length;j++){
				jugeCrash(ballAllArr[i],ballAllArr[j]);
			}
		}
	}
	function makeAllBall(){
		ballAllArr.push(playerBall);
		ballAllArr = ballAllArr.concat(ballArr);
	}
	function drawControl(){
		strengh.draw();
	}
	function createContr(){
		strengh = {
			hit:50,
			imgbg:imgbg,
			imgcon:force,
			speed:2,
			draw:function(){
				ctx.drawImage(this.imgcon,0,0,200,20,100,520,this.hit*2,20);
			}
		}
	}
	//创建六个角落的球
	function CoreBall(x,y){
		this.x = x;
		this.y = y;
		this.type = 10;
		//奖励球类型
	}
	function createCoreBall(){
		// 接下来创建六个分数球
		var ball_core_1 = new CoreBall(20,20);
		var ball_core_2 = new CoreBall(20,494);
		var ball_core_3 = new CoreBall(385,15);
		var ball_core_4 = new CoreBall(385,499);
		var ball_core_5 = new CoreBall(750,20);
		var ball_core_6 = new CoreBall(750,494);
		scoreBalls.push(ball_core_1);
		scoreBalls.push(ball_core_2);
		scoreBalls.push(ball_core_3);
		scoreBalls.push(ball_core_4);
		scoreBalls.push(ball_core_5);
		scoreBalls.push(ball_core_6);
	}
	function getScore(){
		for(var i = 0; i < ballAllArr.length;i++){
			for(var j = 0;j<scoreBalls.length;j++){
				var obj1 = ballAllArr[i];
				var obj2 = scoreBalls[j];
				var spaceBall = Math.sqrt((obj1.x - obj2.x)*(obj1.x - obj2.x) + (obj1.y - obj2.y)*(obj1.y - obj2.y));
				if(spaceBall <= 24){
					// alert(1);
					obj1.clear = true;
					ballIn.push(obj1.num);
				}
			}
		}

	}
	//判断指示器显示条件
	function judgeCanDrowTip(){
		var cannum = 0;
		for(var i = 0;i<ballAllArr.length;i++){
			if(ballAllArr[i].speedX == 0){
				cannum++;
			}
		}
		if(cannum == ballAllArr.length){
			canDrowTips =true;
			if(hasbeenchange == false){
				jugeState();
				hasbeenchange = true;
			}
			if(playerBall.clear == true){
				playerBall.x = 200;
				playerBall.y = 257;
				playerBall.speedX =0;
				playerBall.speedY = 0;
				playerBall.moveDire =0;
				playerBall.clear = false;
				ballAllArr = [playerBall].concat(ballAllArr);
			}
		}
	};
	function jugeState(){
		if(ballIn.length >0 && ballIn[0] != 0){
			if(nowstate){
				score1 += ballIn.length;
				p1.innerHTML = score1;
			}else {
				score2 += ballIn.length;
				p2.innerHTML = score2;
			}
		}else {
			console.log(nowstate);
			nowstate = !nowstate;
			console.log(nowstate);
			if(nowstate){
				state.innerHTML="现在是P1时间"
			}else {
				state.innerHTML="现在是P2时间"
			}
		}
	}