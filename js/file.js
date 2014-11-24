// JavaScript Document
var listOfOpponent = [];
counter = 0 ;
var yOpponent = 0;
var yPitch = -4500;
var yPlayer = 10;
var opponentCroosed = 0;
var playerProperties = document.getElementsByClassName("player")[0];
var move = true;
var image = document.createElement("img");
image.setAttribute('src','images/crash.png');
function GameLoop(){
	this.x=0;
	this.element;	
	var that = this;
	this.createOpponent = function(){
		that.element= document.createElement("div");
		that.element.className ="opponent";		
		document.getElementsByClassName("pitch")[0].appendChild(that.element);	
		that.x = getRandom()+130;
		yOpponent = yOpponent+500;
		that.element.style.left = that.x+"px";
		that.element.style.bottom = yOpponent+"px";
		listOfOpponent.push(that.element);
		}
	this.movePitch = function(){
		if(yPlayer<=4500){
			var pitch = document.getElementsByClassName("pitch")[0];
			yPitch = yPitch + 10;
			pitch.style.top = yPitch+"px";
			}
		yPlayer = yPlayer + 10; 
		playerProperties.style.bottom = yPlayer+"px";	
		}
	this.collision = function(){	
		var recentOpponentLeft= document.defaultView.getComputedStyle(listOfOpponent[opponentCroosed],null).getPropertyValue("left");	 
		var playerLeft = document.defaultView.getComputedStyle(playerProperties,null).getPropertyValue("left");
		var recentOpponentBottom = document.defaultView.getComputedStyle(listOfOpponent[opponentCroosed],null).getPropertyValue("bottom");	 
		var playerButtom = document.defaultView.getComputedStyle(playerProperties,null).getPropertyValue("bottom");
		var buttomDifference = parseInt(playerButtom)-parseInt(recentOpponentBottom);
		if((parseInt(recentOpponentLeft) == parseInt(playerLeft)) && opponentCroosed!=0 && buttomDifference<120){
			clearInterval(x);
			move = false;
			playerProperties.appendChild(image);
			}
			else if((parseInt(playerButtom)>370 && parseInt(playerButtom)<650 && (parseInt(recentOpponentLeft) == parseInt(playerLeft)))){
				clearInterval(x);	
				move = false;
				playerProperties.appendChild(image);			
				}
			else if(yPlayer==4750){
				clearInterval(x);
				move = false;
				image.setAttribute('src','images/winner.png');
				playerProperties.appendChild(image);
				}		
		if(buttomDifference>360)
			opponentCroosed++;
		}
	this.score = function(){
		document.getElementsByClassName("score")[0].innerHTML = -(4750 - yPlayer);
		}
	}
var x = setInterval(game,50);
function game(){
	var g= new GameLoop();
	if(counter == 20 && listOfOpponent.length<9){
		g.createOpponent();
		counter = 0;
		}
	g.movePitch();
	if(listOfOpponent.length>=1)
		g.collision();
	g.score();
	counter++;
	}	
	
function getRandom(){
	var rand = Math.floor(Math.random()*3);
	return rand*120;
	}
	
document.getElementById("left").addEventListener("click", moveLeft, false);
	function moveLeft(e){
		var playerLeftPx = document.defaultView.getComputedStyle(playerProperties,null).getPropertyValue("left");	
			if(playerLeftPx == "250px" && move == true)
				playerProperties.style.left = "130px";
				else if(playerLeftPx == "370px" && move == true)
					playerProperties.style.left = "250px";
		}
document.getElementById("right").addEventListener("click", moveRight, false);
	function moveRight(e){		
		var playerLeftPx = document.defaultView.getComputedStyle(playerProperties,null).getPropertyValue("left");
			if(playerLeftPx == "250px" && move == true)
				playerProperties.style.left = "370px";
				else if(playerLeftPx == "130px" && move == true)
					playerProperties.style.left = "250px";
		}
window.addEventListener("keydown", movePlayer, false);
	function movePlayer(e){	
		var playerLeftPx = document.defaultView.getComputedStyle(playerProperties,null).getPropertyValue("left");
		var unicode=e.keyCode? e.keyCode : e.charCode;
		if(unicode==37 && move == true){		
			if(playerLeftPx == "250px")
				playerProperties.style.left = "130px";
				else if(playerLeftPx == "370px")
					playerProperties.style.left = "250px";
			}
			else if(unicode==39 && move == true){
				if(playerLeftPx == "250px")
				playerProperties.style.left = "370px";
				else if(playerLeftPx == "130px")
					playerProperties.style.left = "250px";
				}		
		}