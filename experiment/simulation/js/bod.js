var count=0;
var count2=0;
var titration=1;
var repeat=0;

var a,b,c,d,e=0;
var ido,fdo,bdo=0;
var ido1,fdo1,bdo1=0;

var reading=[[0,6.4,4.5,16.667,0.05999],
			 [0,6,2.1,50,0.02],
			 [0,6.4,3.8,50,0.02],
			 [0,6.4,4.8,150,0.00667],
			 [0,6.6,4.8,150,0.00667],
			 [0,6.4,4.8,50,0.02],
			 [0,6.5,2.7,50,0.02],
			 [0,6.8,4.3,50,0.02],
			 [0,8.6,4.3,16.67,0.05998]];

var p=Math.floor(Math.random()*(9));

$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});
		
function navNext()
{
	for(temp=0;temp<=21;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

var ca;
var questions=["What is the normality of Sodium </br>Thiosulphate solution taken?",
				"Why sample B is kept in BOD incubator?",
				"Which of the following indicator </br>is used during the titration?",
				"Sample B is kept in incubator at _______ &deg;C temperature",
				"Why sample bottles are completely filled up to the neck?"];
var options2=[["0.01N","0.02N","0.025N","0.05N"],//0.025N
			  ["To prevent DO production via photosynthesis","To allow DO production via photosynthesis","To heat the sample","None of the above"],//blue
			  ["Ferroin","Erichrome Black T","Starch","Phenolphthalein"],//starch
			  ["10","20","30","40"],//20
			  ["To protect it from sunlight","To maintain the temperature of sample","To avoid mixing of air bubbles with the sample","All of the above"]];//To avoid mixing of air bubbles with the sample

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

function showIncubatorKnob()
{
     if (document.getElementById('11-2').style.visibility=="hidden")
         document.getElementById('11-2').style.visibility="visible";
     else
         document.getElementById('11-2').style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

var i=0;
var text='Care should be taken to avoid the bubbles in the BOD bottle';
var speed=30;
function typeWriter()
{
	if(i<text.length)
	{
		document.getElementById("p2-1").innerHTML += text.charAt(i);
		i++;
		setTimeout(typeWriter,speed);
	}
}

var j=0;
var text2="Label the samples as Sample A and Sample B";
speed2=30;
function typeWriter2()
{
	if(j<text2.length)
	{
		document.getElementById("p1-1").innerHTML+=text2.charAt(j);
		j++;
		setTimeout(typeWriter2,speed2);
	}
}

	//rotating pointer clockwise upto HRN value
	var looper;
    var degrees = 0;
    var cnt=0;
	var degrees;
	var i=0,k=0;
    function rotateAnimation(el,speed)
	{
	    var elem = document.getElementById(el);
	    if(navigator.userAgent.match("Chrome"))
		{
		     elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("Firefox"))
		{
		     elem.style.MozTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("MSIE"))
		{
		     elem.style.msTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("Opera"))
		{
		     elem.style.OTransform = "rotate("+degrees+"deg)";
	    } 
		else 
		{
		     elem.style.transform = "rotate("+degrees+"deg)";
	    }
	     looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	   
		if(cnt<5)
		{
			degrees++;
		}
		else 
		{
			takeOutBODfromIncubator();
		}
		i=degrees/360;
		var t=5;
		if(degrees%360==0)
		{
			cnt++;
			t = t - i;
			document.getElementById("p11-3").style="font-weight:bold;position:absolute; left:475px; top:335px; font-size:16px; color:red;";  
			document.getElementById("p11-3").innerHTML="After "+t+" days";
			if(t<=0)
				document.getElementById("p11-3").innerHTML="";
		}
}

function magic()
{
	if(simsubscreennum==1)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:460px; top:292.5px; height: 35px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById("1-4cap").onclick=function()
		{
			myStopFunction();
			document.getElementById("1-4cap").onclick="";
			document.getElementById("1-4cap").style.animation="openBottleCap 1.25s forwards";
			setTimeout(function()
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:375px; height: 40px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				document.getElementById("1-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("1-4").onclick="";	
					document.getElementById("1-4").style.animation="shiftSample 1.25s forwards";
					setTimeout(function()
					{
						document.getElementById("1-4").style="position:absolute; left:325px; top:40px;";
						document.getElementById("1-4").style.transformOrigin="100% 80%";
						document.getElementById("1-4").style.animation="rotateSample 1.25s forwards";
						setTimeout(function()
						{
							document.getElementById("1-4").style.visibility="hidden";
							document.getElementById("1-42").style.visibility="visible";
							setTimeout(function()
							{
							document.getElementById("1-5").style.visibility="visible";
							document.getElementById("1-5").style.animation="waterUp 2s forwards";
							setTimeout(function()
							{
								document.getElementById("1-42").style.transformOrigin="100% 80%";
								document.getElementById("1-42").style.animation="rotateSample2 0.5s forwards";
								setTimeout(function()
								{
									document.getElementById("1-42").style.visibility="hidden";
									document.getElementById("1-43").style.visibility="visible";
									document.getElementById("1-43").style.animation="shiftSampleDown 0.5s forwards";
									setTimeout(function()
									{
										document.getElementById("1-4cap").style.animation="closeBottleCap 1.5s forwards";
										setTimeout(function()
										{
											document.getElementById("1-1cap").style.visibility="visible";
											fillBodBottle1();
										},1750);
									},500);
								},500);
							},2000);
							},150);
						},1250);
					},1250);
				}					
			},1300);
		}
	}  
	if(simsubscreennum==2)
	{
		document.getElementById("1-1cap").style.visibility="hidden";
		document.getElementById("1-1bot").style.visibility="hidden";		
		document.getElementById("1-2bot").style.visibility="hidden";		
		document.getElementById("1-2cap").style.visibility="hidden";		
		document.getElementById("1-3").style.visibility="hidden";		
		document.getElementById("1-43").style.visibility="hidden";		
		document.getElementById("1-1samp2").style.visibility="hidden";		
		document.getElementById("sampA").style.visibility="hidden";		
		document.getElementById("sampB").style.visibility="hidden";	
		
		
		
		$("#2-4Up").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("2-4button").style.visibility="visible";
		// $("#p2-1").fadeIn(6500);
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 280px; top: 232.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(225deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(225deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(225deg)";
			document.getElementById("2-4button").onclick=function()
			{
				myStopFunction();
				document.getElementById("2-4button").onclick="";	
				// document.getElementById("p2-1").style.visibility="hidden";
				document.getElementById("2-4Up").style.visibility="hidden";
				document.getElementById("2-4button").style.visibility="hidden";
				document.getElementById("2-4Down").style.visibility="visible";
			
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 240px; top: 320px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("2-4Down").onclick=function()
					{
						myStopFunction();
						document.getElementById("2-4Down").onclick="";
						document.getElementById("2-4Down").style.animation="movePipette1 2s forwards";
						setTimeout(function()
						{
							document.getElementById("2-3").style.animation="mnso4Down 1s forwards";
							document.getElementById("2-3_1").style.animation="mnso4Down 1s forwards";
							document.getElementById("2-4Up2").style.visibility="visible";
							document.getElementById("2-4Down").style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById("2-4Up2").style.animation="movePipette2 2s forwards";
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById("2-1cap").onclick=function()
									{
										myStopFunction();
										document.getElementById("2-1cap").onclick="";	
										document.getElementById("2-1cap").style.visibility="hidden";
										document.getElementById("2-1cap2").style.visibility="visible";
										
	
		setTimeout(function()
		{
			document.getElementById("2-1cap2").style.animation="openbodCap 1.2s forwards";

			setTimeout(function()
			{
				document.getElementById("2-1cap2").style.visibility="hidden";
				document.getElementById("2-1cap3").style.visibility="visible";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:340px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("2-4Up2").onclick=function()
					{
						myStopFunction();
						document.getElementById("2-4Up2").onclick="";	
						document.getElementById("2-4Up2").style="position:absolute; left: 256px; top: 200px;";
						document.getElementById("2-4Up2").style.animation="movePipette3 2s forwards";
						setTimeout(function()
						{
							document.getElementById("p2-1").style.visibility="visible";
							typeWriter();
						},1900);
						setTimeout(function()
						{
							document.getElementById("2-4Up2").style.visibility="hidden";
							document.getElementById("2-4Down").style="position:absolute; left: 70px; top: 130px;";
							document.getElementById("2-4Down").style.visibility="visible";
							//typeWriter animation
							
							setTimeout(function()
							{
								document.getElementById("p2-1").style.visibility="hidden";
								document.getElementById("2-4Down").style.animation="movePipetteBack 2s forwards";
								setTimeout(function()
								{
									$("#2-4Down").hide(1000);
									
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(270deg)";
										document.getElementById("2-1cap3").onclick=function()
										{
											myStopFunction();
											document.getElementById("2-1cap3").onclick="";	
											document.getElementById("2-1cap3").style.visibility="hidden";
											document.getElementById("2-1cap22").style.visibility="visible";										
											document.getElementById("2-1cap22").style.animation="closebodCap 1.5s forwards";
											setTimeout(function()
											{
												document.getElementById("2-1cap22").style.visibility="hidden";
												document.getElementById("2-1cap").style.visibility="visible";
												document.getElementById("nextButton").style.visibility="visible";
											},1200);
										}
									
								},2100);
							},2200);
							
						},2400);
					}
				},100);
			},1250);
		},100);									
										
									}
								},2200);
							},500);
						},2500);
					}
				},700);
			}
		},300);
	
	},1330);
	}
	
	if(simsubscreennum==3)
	{
		document.getElementById("2-1cap").style.visibility="hidden";
		refresh();
		$("#3-4Up").fadeIn(1500);
		setTimeout(function()
		{
			document.getElementById("3-4button").style.visibility="visible";
		// $("#p2-1").fadeIn(6500);
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 280px; top: 232.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(225deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(225deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(225deg)";
			document.getElementById("3-4button").onclick=function()
			{
				myStopFunction();
				document.getElementById("3-4button").onclick="";	
				document.getElementById("3-4Up").style.visibility="hidden";
				document.getElementById("3-4button").style.visibility="hidden";
				document.getElementById("3-4Down").style.visibility="visible";
			    setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:505px; top:260px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(270deg)";
					document.getElementById("3-2Cap").onclick=function()
					{
						myStopFunction();
						document.getElementById("3-2Cap").onclick="";	
						document.getElementById("3-2Cap").style.visibility="hidden";
						document.getElementById("3-2Cap2").style.visibility="visible";
						document.getElementById("3-2Cap2").style.animation="openBottleCap3 1.25s forwards";
				setTimeout(function()
				{
					document.getElementById("3-2Cap").style="position:absolute; visibility:visible; left:540px; top:335px; width:25px;";
					document.getElementById("3-2Cap2").style.visibility="hidden";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 240px; top: 320px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("3-4Down").onclick=function()
					{
						myStopFunction();
						document.getElementById("3-4Down").onclick="";
						document.getElementById("3-4Down").style.animation="movePipette3-1 2s forwards";
						setTimeout(function()
						{
							// document.getElementById("3-3").style.animation="aiasDown 1s forwards";
							document.getElementById("3-4Up2").style.visibility="visible";
							document.getElementById("3-4Down").style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById("3-4Up2").style.animation="movePipette2 2s forwards";
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:580px; top:330px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById("3-2Cap").onclick=function()
									{
										myStopFunction();
										document.getElementById("3-2Cap").onclick="";	
										document.getElementById("3-2Cap").style.visibility="hidden";
										document.getElementById("3-2Cap2").style="left:520px; top:290px;; position:absolute; visibility:visible";
										document.getElementById("3-2Cap2").style.animation="closeBottleCap3 1.25s forwards";
									
								setTimeout(function()
								{
									document.getElementById("3-2Cap2").style.visibility="hidden";
									document.getElementById("3-2Cap").style="visibility:visible; position:absolute; left:460px; top:253px; width:25px;";
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById("3-1cap").onclick=function()
									{
										myStopFunction();
										document.getElementById("3-1cap").onclick="";	
										
										setTimeout(function()
										{
											document.getElementById("3-1cap").style.visibility="hidden";
											document.getElementById("3-1cap2").style.visibility="visible";
											document.getElementById("3-1cap2").style.animation="openbodCap 1.2s forwards";

											setTimeout(function()
											{
												document.getElementById("3-1cap2").style.visibility="hidden";
												document.getElementById("3-1cap3").style.visibility="visible";
												setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:340px; height: 40px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById("3-4Up2").onclick=function()
													{
														myStopFunction();
														document.getElementById("3-4Up2").onclick="";	
														document.getElementById("3-4Up2").style="position:absolute; left: 256px; top: 200px;";
														document.getElementById("3-4Up2").style.animation="movePipette3 2s forwards";
														setTimeout(function()
														{
															$("#p3-1").fadeIn(1800);
														},1800);
														setTimeout(function()
														{
															document.getElementById("3-4Up2").style.visibility="hidden";
															document.getElementById("3-4Down").style="position:absolute; left: 70px; top: 130px;";
															document.getElementById("3-4Down").style.visibility="visible";
															setTimeout(function()
															{    
															// colour change
															   document.getElementById("3-1samp").style.animation="colourChange1 4s forwards";
															   setTimeout(function()
															   {
															    document.getElementById("3-1samp").style.backgroundImage="linear-gradient(#FFFF99,#CFB53B)";
																
																document.getElementById("p3-1").style.visibility="hidden";
																document.getElementById("3-4Down").style.animation="movePipetteBack 2s forwards";
																setTimeout(function()
																{
																	$("#3-4Down").hide(1000);
									
																	myInt = setInterval(function(){ animatearrow(); }, 500);
																	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
																	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																	// Code for IE9
																	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																	// Standard syntax
																	document.getElementById("arrow1").style.transform = "rotate(270deg)";
																	document.getElementById("3-1cap3").onclick=function()
																	{
																		myStopFunction();
																		document.getElementById("3-1cap3").onclick="";	
																		document.getElementById("3-1cap3").style.visibility="hidden";
																		document.getElementById("3-1cap22").style.visibility="visible";
																		document.getElementById("3-1cap22").style.animation="closebodCap 1.5s forwards";
																		setTimeout(function()
																		{
																			document.getElementById("3-1cap22").style.visibility="hidden";
																			document.getElementById("3-1cap").style.visibility="visible";
																			
																			// document.getElementById("3-1samp").style.animation="settleDownaias 7s forwards";
																			// setTimeout(function()
																			// {
																				document.getElementById("nextButton").style.visibility="visible";
																			// },7100);
																		},1200);
																	}
																},2100);
															 },3200);
															},1200);
														},2500);
													}
												},100);
											
										    },1250);
										  },100);	
										}
									},1200);
								  }
								  
								},2000);
							},500);
						},2500);
					  }
			
				  },1300);	
				}
			  },700);
			}
		},300);
	
	  },1300);
	}
	
	if(simsubscreennum==4)
	{
		document.getElementById("3-1cap").style.visibility="hidden";
		document.getElementById("3-2Cap").style.visibility="hidden";
		setTimeout(function()
		{
			myInt=setInterval(function(){ animatearrow(); }, 500);
			document.getElementById("arrow1").style="position:absolute; left:430px; top:390px; height:40px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
			document.getElementById("arrow1").style.msTransform="rotate(0deg)";
			document.getElementById("arrow1").style.transform="rotate(0deg)";
			document.getElementById("4-1").onclick=function()
			{
				step4();
			}
			document.getElementById("4sampA").onclick=function()
			{
				step4();
			}
			document.getElementById("4-1cap").onclick=function()
			{
				step4();
			}
		},500);
	}
	
	if(simsubscreennum==5)
	{
		document.getElementById("4-1").style.visibility="hidden";
		document.getElementById("4-2").style.visibility="hidden";
		document.getElementById("4-1cap").style.visibility="hidden";
		document.getElementById("4-1samp").style.visibility="hidden";
		document.getElementById("4-1samp4").style.visibility="hidden";
		document.getElementById("4-1samp3").style.visibility="hidden";
		document.getElementById("4sampA").style.visibility="hidden";
		document.getElementById("4blank").style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:507.5px; top:245px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById("5-2cap").onclick=function()
		{
			myStopFunction();
			document.getElementById("5-2cap").onclick="";
			document.getElementById("5-2cap").style.animation="openH2SO4Cap 1.25s forwards";
			setTimeout(function()
			{
				document.getElementById("p5-1").style.visibility="visible";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:295px; top:190px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(220deg)"; 
		     // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(220deg)"; 
		     // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(220deg)";
				document.getElementById("5-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("5-4").onclick="";
					document.getElementById("5-4").style.visibility="hidden";
					document.getElementById("p5-1").style.visibility="hidden";
					document.getElementById("5-41").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("5-41").style.animation="moveGP1 1.5s forwards";
						setTimeout(function()
						{
							$("#5-5bulb").fadeIn(1000);
							$("#5-5up").fadeIn(1000);
							$("#5-5down").fadeIn(1000);
							setTimeout(function()
							{
								document.getElementById("p5-2").style.visibility="visible";
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="position:absolute; visibility:visible; left:321px; top:300px; height:20px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								document.getElementById("5-5up").onclick=function()
								{
									myStopFunction();
									document.getElementById("5-5up").onclick="";
									document.getElementById("p5-2").style.visibility="hidden";
									$("#5-5bulb").fadeOut(1500);
									$("#5-5up").fadeOut(1500);
									$("#5-5down").fadeOut(1500);
									document.getElementById("5-41sw").style.visibility="visible";
									document.getElementById("5-41sw").style.animation="h2so4Up 1.5s forwards";
									document.getElementById("5-3").style.animation="h2so4Down 1.5s forwards";
									document.getElementById("5-3").style.animation="h2so4Down 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById("5-41sw").style.visibility="hidden";
										document.getElementById("5-41").style.visibility="hidden";
										document.getElementById("5-42").style.visibility="visible";
									     
										 myInt = setInterval(function(){ animatearrow(); }, 500);
										 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
										 document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			                            // Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(270deg)";
										document.getElementById("5-1cap").onclick=function()
										{  
										    myStopFunction();
											document.getElementById("5-1cap").onclick="";	
											document.getElementById("5-1cap").style.visibility="hidden";
											document.getElementById("5-1cap2").style.visibility="visible";
											setTimeout(function()
											{ 
											    document.getElementById("5-1cap2").style.animation="openbodCap 1.2s forwards";
												
												setTimeout(function()
												{
													document.getElementById("5-1cap2").style.visibility="hidden";
													document.getElementById("5-1cap3").style.visibility="visible";
													
													 myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:450px; top:230px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById("5-42").onclick=function()
													{  
														myStopFunction();
														document.getElementById("5-42").onclick="";
														document.getElementById("5-42").style.animation="moveGP3 3s forwards";
														setTimeout(function()
														{   
														    document.getElementById("5-2cap").style.animation="closeH2SO4Cap 1.25s forwards";
															setTimeout(function()
															{
															$("#5-5bulb").fadeIn(1500);
															$("#5-5up").fadeIn(1500);
															$("#5-5down").fadeIn(1500);
															document.getElementById("p5-2").style="visibility:visible; position:absolute; left:350px; top:100px; color:red; font-size:14px;";
															document.getElementById("p5-2").innerHTML="Press the down arrow on the bulb </br></br>to release the liquid into the BOD bottle";
															setTimeout(function()
															{
																document.getElementById("p5-2").style.visibility="visible";
																myInt=setInterval(function(){animatearrow();},500);
																document.getElementById("arrow1").style="position:absolute; visibility:visible; left:358px; top:330px; height:20px; z-index:10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(90deg)";
																document.getElementById("5-5down").onclick=function()
																{
																	myStopFunction();
																	document.getElementById("5-5down").onclick="";
																	document.getElementById("p5-2").style.visibility="hidden";
																	$("#5-5bulb").fadeOut(1000);
																	$("#5-5up").fadeOut(1000);
																	$("#5-5down").fadeOut(1000);
																	document.getElementById("5-41").style="visibility:visible; position:absolute; left:75px; top:100px;";
																	
																	document.getElementById("5-1samp1").style.animation="colourChange1 1.5s forwards";
																	document.getElementById("5-1samp2").style.animation="precipitateUp1 1.5s forwards";

																	document.getElementById("5-42").style.visibility="hidden";
																	setTimeout(function()
																	{
																		document.getElementById("5-41").style.animation="movebackGP 1.5s forwards";
																		setTimeout(function()
																		{
																			$("#5-1samp3").fadeIn(2500);
																			
																			$("#5-41").fadeOut(1200);
																			myInt = setInterval(function(){ animatearrow(); }, 500);
																			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
																			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																			// Code for IE9
																			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																			// Standard syntax
																			document.getElementById("arrow1").style.transform = "rotate(270deg)";
																			document.getElementById("5-1cap3").onclick=function()
																			{
																				myStopFunction();
																				document.getElementById("5-1cap3").onclick="";	
																				document.getElementById("5-1cap3").style.visibility="hidden";
																				document.getElementById("5-1cap22").style.visibility="visible";			
																				document.getElementById("5-1cap22").style.animation="closebodCap 1.5s forwards";
																				setTimeout(function()
																				{
																					document.getElementById("5-1cap22").style.visibility="hidden";
																					document.getElementById("5-1cap").style.visibility="visible";
																					setTimeout(function()
																					{
																						document.getElementById("nextButton").style.visibility="visible";
																					},250);
																				},1400);
																			}
																		},1750);
																	},200);
																}
															},1000);
														  },1000);
														},3100);
													}
												},1250);
											},100);	 
										}			
										
									},1600);
								}
							},1100);
						},1600);
						
					},150);
				}
			},1250);
		}
	}
	
	if(simsubscreennum==6)
	{
		$("#6-1samp4").fadeIn(0);
		document.getElementById("5-1cap").style.visibility="hidden";
		setTimeout(function()
		{
			myInt=setInterval(function(){ animatearrow(); }, 500);
			document.getElementById("arrow1").style="position:absolute; left:430px; top:390px; height:40px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
			document.getElementById("arrow1").style.msTransform="rotate(0deg)";
			document.getElementById("arrow1").style.transform="rotate(0deg)";
			document.getElementById("6-1").onclick=function()
			{
				step6();
			}
			document.getElementById("6sampA").onclick=function()
			{
				step6();
			}
			document.getElementById("6-1cap").onclick=function()
			{
				step6();
			}
		},500);
	}
	if(simsubscreennum==7)
	{
		document.getElementById("6-1").style.visibility="hidden";
		document.getElementById("6-2").style.visibility="hidden";
		document.getElementById("6-1cap").style.visibility="hidden";
		document.getElementById("6-1samp").style.visibility="hidden";
		document.getElementById("6-1samp2").style.visibility="hidden";
		document.getElementById("6-1samp3").style.visibility="hidden";
		document.getElementById("6sampA").style.visibility="hidden";
		document.getElementById("6blank").style.visibility="hidden";
		can=7;
		fun7and17();
		
	}
	
	if(simsubscreennum==8)
	{
		refresh();
		document.getElementById("7-1").style.visibility="hidden";
		document.getElementById("7-1samp").style.visibility="hidden";
		document.getElementById("7-1cap3").style.visibility="hidden";
		document.getElementById("7sampA").style.visibility="hidden";
		// document.getElementById("table").style.visibility="hidden";
		
		// document.getElementById('titration').style="visibility:visible;left: 650px; top: 100px; position: absolute;font-weight: bold;text-transform: uppercase;";
		// document.getElementById('titration').innerHTML="Titration : " + titration;
		
		$("#8-2").fadeIn(1500);
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:300px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById("8-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("8-2").onclick="";
				document.getElementById("8-2").style.animation="moveFunnel 2s forwards";
				setTimeout(function()
				{
					document.getElementById("8-3").style.visibility="visible";
					document.getElementById("8-3Cap").style.visibility="visible";
					setTimeout(function()
					{
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:559px; top:240px; height:30px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
						document.getElementById("arrow1").style.msTransform="rotate(270deg)";
						document.getElementById("arrow1").style.transform="rotate(270deg)";
						document.getElementById("8-3Cap").onclick=function()
						{
							myStopFunction();
							document.getElementById("8-3Cap").onclick="";
							document.getElementById("8-3Cap").style.animation="openNa2SO3Cap 2s forwards";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:350px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
								document.getElementById("arrow1").style.msTransform="rotate(180deg)";
								document.getElementById("arrow1").style.transform="rotate(180deg)";
								document.getElementById("8-3").onclick=function()
								{
									myStopFunction();
									document.getElementById("8-3").onclick="";
									document.getElementById("8-32").style.visibility="visible";
									document.getElementById("8-3").style.visibility="hidden";
									document.getElementById("8-32").style.animation="moveNa2SO3Bottle 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById("8-32").style="position:absolute; left:375px; top:32px; animation: rotateNa2SO3Bottle 1s forwards;";
										setTimeout(function()
										{
											document.getElementById("8-2samp").style.visibility="visible";
											document.getElementById("8-2samp").style.animation="sampFromFunnelUpDown 2s 7 ";
											setTimeout(function()
											{
												document.getElementById("8-2samp2").style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById("8-2samp3").style.animation="whiteUp 5s forwards";
													setTimeout(function()
													{
														document.getElementById("8-2samp3").style.visibility="hidden";
														document.getElementById("8-2samp4").style.animation="sampFromFunnelUp 5s forwards";
														setTimeout(function()
														{
															document.getElementById("8-2samp2").style.visibility="hidden";
															document.getElementById("8-2samp").style.animation="sampFromFunnelDown2 1.5s forwards ";
															setTimeout(function()
															{
																document.getElementById("8-2samp").style.visibility="hidden";
																document.getElementById("8-2samp4").style="position:absolute; left:240px; top:185px;";
																document.getElementById("8-2samp4").style.animation="sampFromFunnelUp2 1.5s forwards";
																document.getElementById("8-32").style.animation="rotateNa2SO3Bottle2 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById("8-32").style.animation="moveNa2SO3BottleBack 1.5s forwards";
																	setTimeout(function()
																	{
																		document.getElementById("8-32").style.visibility="hidden";
																		document.getElementById("8-3").style.visibility="visible";
																		
																		myInt=setInterval(function(){animatearrow();},500);
																		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:644px; top:320px; height:30px; z-index:10;";
																		document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.transform="rotate(270deg)";
																		document.getElementById("8-3Cap").onclick=function()
																		{
																			myStopFunction();
																			document.getElementById("8-3Cap").onclick="";
																			document.getElementById("8-3Cap").style.animation="closeNa2SO3Cap 2s forwards";
																			setTimeout(function()
																			{
																				document.getElementById("8-3Cap").style.visibility="hidden";
																				document.getElementById("8-3").style.visibility="hidden";
																				
																				myInt=setInterval(function(){animatearrow();},500);
																				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:420px; top:155px; height:30px; z-index:10;";
																				document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.msTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.transform="rotate(0deg)";
																				document.getElementById("8-2").onclick=function()
																				{
																					myStopFunction();
																					document.getElementById("8-2").onclick="";
																					document.getElementById("8-2").style.animation="moveFunnelBack 2s forwards";
																					setTimeout(function()
																					{
																						$("#8-2").fadeOut(800);
																						document.getElementById("nextButton").style.visibility="visible";
																					},2100);
																				}
																			},2100);
																		}
																	},1600);
																},1000);
															},800);
														},5000);
													},4500);
												},800);
											},1000);
										},1100);
									},1550);
								}
							},2100);
						}
					},250);
				},2100);
			}
		},1500);
	}
	if(simsubscreennum==9)
	{
		document.getElementById("8-2samp4").style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById("p9-0a").style.visibility="visible";
			document.getElementById("p9-1").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(300deg)";
			document.getElementById("9-1knob").onclick=function()
			{
				myStopFunction();
				document.getElementById("9-1knob").onclick="";	
				document.getElementById("9-1knob").style.visibility="hidden";
				document.getElementById("9-1hand").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("p9-0a").style.visibility="hidden";
					document.getElementById("9-1hand").style.visibility="hidden";
					document.getElementById("9-1hand2").style.visibility="visible";
					document.getElementById("9-1stopper").style="position:absolute; left:153px; top:300px;";
					setTimeout(function()
					{
						document.getElementById("drop9-1").style.visibility="visible";
						document.getElementById("drop9-1").style.animation="drop2 0.75s 10";
						document.getElementById("9-1a").style.animation="Na2S2O3fromBurette1 10s forwards";
						setTimeout(function()
						{
							document.getElementById("drop9-2").style.visibility="visible";
							document.getElementById("drop9-2").style.animation="drop2 0.75s 10";
							setTimeout(function()
							{
								//document.getElementById("drop9-1").style.visibility="hidden";
								//document.getElementById("drop9-2").style.visibility="hidden";
								document.getElementById("9-3").style.animation="colourChange2 8s forwards";

								setTimeout(function()
								{
									document.getElementById("p9-0b").style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById("drop9-1").style.visibility="hidden";
										document.getElementById("drop9-2").style.visibility="hidden";
										document.getElementById("9-3").style.backgroundColor="#FFFF99";
										document.getElementById("9-1hand").style.visibility="visible";
										document.getElementById("9-1hand2").style.visibility="hidden";
										document.getElementById("p9-0b").style.visibility="hidden";
										document.getElementById("9-1stopper").style="position:absolute; left:150px; top:298px; ";
										setTimeout(function()
										{
											document.getElementById("9-1knob").style.visibility="visible";
											document.getElementById("9-6a").style.visibility="visible";
											document.getElementById("9-6b").style.visibility="visible";
											document.getElementById("9-1hand").style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById("p9-2").style.visibility="visible";
												document.getElementById("9-6a").style.visibility="visible";
												document.getElementById("9-6b").style.visibility="visible";
												document.getElementById("9-6b2").style.visibility="visible";
												
												setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:472px; top:290px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
														// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
														// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(270deg)";
													document.getElementById("9-6a").onclick=function()
													{
														myStopFunction();
														document.getElementById("9-6a").onclick="";
														document.getElementById("9-6a").style.animation="openStarchBottle 1.5s forwards";
														document.getElementById("p9-2").style.visibility="hidden";
														setTimeout(function()
														{
															document.getElementById("9-6dropper1").style.visibility="visible";
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:562px; top:190px; height: 35px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(270deg)";
															document.getElementById("9-6dropper1").onclick=function()
															{
																myStopFunction();
																document.getElementById("9-6dropper1").onclick="";
																document.getElementById("9-6dropper1").style.animation="dipdropper 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById("9-6dropper1").style.visibility="hidden";
																	document.getElementById("9-6dropper2").style.visibility="visible";
																	setTimeout(function()
																	{
																		document.getElementById("9-6dropper2").style.animation="dipdropper2 1.5s forwards";
																		setTimeout(function()
																		{
																			document.getElementById("9-6dropper2").style="position:absolute; left:220px; top:240px;";
																			document.getElementById("9-6dropper2").style.animation="rotateDropper 1.5s forwards";
																			setTimeout(function()
																			{
																				document.getElementById("9-6dropper2").style.transform="rotate(45deg)";
																				document.getElementById("9-6dropper2").style.animation="moveDropper 1s forwards";
																				setTimeout(function()
																				{
																					document.getElementById("drop9-3").style.visibility="visible";
																					document.getElementById("drop9-3").style.animation="drop3 1s 4";
																					setTimeout(function()
																					{
																						document.getElementById("9-3").style.backgroundImage="linear-gradient( #0000A0,#FFFF99,#FFFF99)";
																						setTimeout(function()
																						{
																							document.getElementById("9-3").style.backgroundImage="linear-gradient( #0000A0,#0000A0,#FFFF99)";
																							setTimeout(function()
																							{
																								document.getElementById("drop9-3").style.visibility="hidden";
																								document.getElementById("9-3").style.backgroundImage="linear-gradient( #0000A0,#0000A0)";
																								setTimeout(function()
																								{
																									document.getElementById("9-6dropper2").style.visibility="hidden";
																									setTimeout(function()
																									{
																										document.getElementById("9-6a").style.animation="closeStarchBottle 1.5s forwards";
																										setTimeout(function()
																										{
																											document.getElementById("9-6a").style.visibility="hidden";
																											document.getElementById("9-6b").style.visibility="hidden";
																											document.getElementById("9-6b2").style.visibility="hidden";
																											blueToColourlessTitrarion();
																										},1550);
																									},250);
																								},250);
																							},2000);
																						},1000);
																					},1000);
																				},1050);
																			},1500);
																		},1500);
																	},250);
																},1600);
															}
														},1500);
													}				
												},1000);
											},500);
										},750);//from here
									},4000);
								},2500);
							},1000);
						},250);
					},100);
				},250);
			}
		},500);
	}
	if(simsubscreennum==10)
	{
		// document.getElementById("nextButton").style.visibility="visible";
		document.getElementById("9-3").style.visibility="hidden";
		document.getElementById("9-3b").style.visibility="hidden";
		document.getElementById('titration').style="visibility:hidden";
		document.getElementById('p9-1').style="visibility:hidden";
		document.getElementById('p9-3').style="visibility:hidden";
		document.getElementById("in").innerHTML=reading[p][0];
		document.getElementById("fin").innerHTML=reading[p][1];
		document.getElementById("dif").innerHTML=reading[p][1] - reading[p][0];
		validateAnswer(2,2,"300px","350px");
	}
	
	if(simsubscreennum==11)
	{
		document.getElementById('table').style="visibility:hidden";
		document.getElementById('ob').style="visibility:hidden";
		setTimeout(function()
		{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top:235px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById("11-2").onclick=function()
		{
			myStopFunction();
			$('.door').toggleClass('doorOpen');
			document.getElementById("11-2").onclick="";	
			setTimeout(function(){
			document.getElementById("11-2").style.visibility="hidden";
			},350);
			// $('#11-2').click(function(){
			// $('.door').toggleClass('doorOpen');
			// showIncubatorKnob();
		// });
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top:365px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(0deg)";
			document.getElementById("11-3").onclick=function()
			{
				myStopFunction();
				document.getElementById("11-3").onclick="";	
				document.getElementById("11-3").style.visibility="hidden";
				document.getElementById("11-3cap").style.visibility="hidden";
				document.getElementById("11-3samp").style.visibility="hidden";
				document.getElementById("11-3sampB").style.visibility="hidden";
				document.getElementById("11-3b").style.visibility="visible";
				document.getElementById("11-3b").style.animation="placeSampB 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById("11-3b").style.visibility="hidden";
					document.getElementById("11-4").style.visibility="visible";
					setTimeout(function()
					{
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(0deg)";
						//$('.door').click(function()
						document.getElementById("incDoor").onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor").onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("11-2").style.visibility="visible";
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:190px; top:145px; height: 25px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(270deg)";
								var temp=15;
								 document.getElementById("p11-2").style.visibility="visible";
									document.getElementById("11-1inc").onclick=function()
									{
										if(temp<20)
										{
										temp++;
										document.getElementById("p11-1").innerHTML=temp;
										}
										if(temp>=20)
										{
											myStopFunction();
											document.getElementById("11-1inc").onclick="";
											document.getElementById("p11-2").style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById("p11-3").style.visibility="visible";
												document.getElementById("11-5c").style.visibility="visible";
												document.getElementById("11-5n").style.visibility="visible";
												document.getElementById('11-5n').style.transformOrigin="80%  100%";
												rotateAnimation("11-5n",7.5);
												
											},250);
										}	
									}
								
							},1150);
						}
					},250);
				},1500);
				
			}
		},1550);
	  }
		},500);
	}
	
	if(simsubscreennum==12)
	{
		document.getElementById("incDoor").style.visibility="hidden";		
		document.getElementById("11-2").style.visibility="hidden";		
		document.getElementById("p11-2").style.visibility="hidden";
		document.getElementById("11-3").style.visibility="hidden";
		document.getElementById("11-3cap").style.visibility="hidden";
		document.getElementById("11-3samp").style.visibility="hidden";
		document.getElementById("11-3sampB").style.visibility="hidden";
		
		
		$("#12-4Up").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("12-4button").style.visibility="visible";
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 280px; top: 232.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(225deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(225deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(225deg)";
			document.getElementById("12-4button").onclick=function()
			{
				myStopFunction();
				document.getElementById("12-4button").onclick="";	
				document.getElementById("12-4Up").style.visibility="hidden";
				document.getElementById("12-4button").style.visibility="hidden";
				document.getElementById("12-4Down").style.visibility="visible";
			
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 240px; top: 320px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("12-4Down").onclick=function()
					{
						myStopFunction();
						document.getElementById("12-4Down").onclick="";
						document.getElementById("12-4Down").style.animation="movePipette1 2s forwards";
						setTimeout(function()
						{
							document.getElementById("12-3").style.animation="mnso4Down 1s forwards";
							document.getElementById("12-3_1").style.animation="mnso4Down 1s forwards";
							document.getElementById("12-4Up2").style.visibility="visible";
							document.getElementById("12-4Down").style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById("12-4Up2").style.animation="movePipette2 2s forwards";
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById("12-1cap").onclick=function()
									{
										myStopFunction();
										document.getElementById("12-1cap").onclick="";	
										document.getElementById("12-1cap").style.visibility="hidden";
										document.getElementById("12-1cap2").style.visibility="visible";
										
	
		setTimeout(function()
		{
			document.getElementById("12-1cap2").style.animation="openbodCap 1.2s forwards";

			setTimeout(function()
			{
				document.getElementById("12-1cap2").style.visibility="hidden";
				document.getElementById("12-1cap3").style.visibility="visible";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:340px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("12-4Up2").onclick=function()
					{
						myStopFunction();
						document.getElementById("12-4Up2").onclick="";	
						document.getElementById("12-4Up2").style="position:absolute; left: 256px; top: 200px;";
						document.getElementById("12-4Up2").style.animation="movePipette3 2s forwards";
						setTimeout(function()
						{
							document.getElementById("p12-1").style.visibility="visible";
							typeWriter();
						},1900);
						setTimeout(function()
						{
							document.getElementById("12-4Up2").style.visibility="hidden";
							document.getElementById("12-4Down").style="position:absolute; left: 70px; top: 130px;";
							document.getElementById("12-4Down").style.visibility="visible";
							//typeWriter animation
							
							setTimeout(function()
							{
								document.getElementById("p12-1").style.visibility="hidden";
								document.getElementById("12-4Down").style.animation="movePipetteBack 2s forwards";
								setTimeout(function()
								{
									$("#12-4Down").hide(1000);
									
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(270deg)";
										document.getElementById("12-1cap3").onclick=function()
										{
											myStopFunction();
											document.getElementById("12-1cap3").onclick="";	
											document.getElementById("12-1cap3").style.visibility="hidden";
											document.getElementById("12-1cap22").style.visibility="visible";										
											document.getElementById("12-1cap22").style.animation="closebodCap 1.5s forwards";
											setTimeout(function()
											{
												document.getElementById("12-1cap22").style.visibility="hidden";
												document.getElementById("12-1cap").style.visibility="visible";
												//document.getElementById("nextButton").style.visibility="visible";
												validateAnswer(3,1,"350px","150px");
											},1200);
										}
									
								},2100);
							},2200);
							
						},2400);
					}
				},100);
			},1250);
		},100);									
										
									}
								},2200);
							},500);
						},2500);
					}
				},700);
			}
		},300);
	
	},1330);
	}
	
	if(simsubscreennum==13)
	{
		document.getElementById("12-1cap").style.visibility="hidden";
		refresh();
		$("#13-4Up").fadeIn(1500);
		setTimeout(function()
		{
			document.getElementById("13-4button").style.visibility="visible";
		// $("#p2-1").fadeIn(6500);
		
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 280px; top: 232.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(225deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(225deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(225deg)";
			document.getElementById("13-4button").onclick=function()
			{
				myStopFunction();
				document.getElementById("13-4button").onclick="";	
				document.getElementById("13-4Up").style.visibility="hidden";
				document.getElementById("13-4button").style.visibility="hidden";
				document.getElementById("13-4Down").style.visibility="visible";
			    setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:505px; top:260px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(270deg)";
					document.getElementById("13-2Cap").onclick=function()
					{
						myStopFunction();
						document.getElementById("13-2Cap").onclick="";	
						document.getElementById("13-2Cap").style.visibility="hidden";
						document.getElementById("13-2Cap2").style.visibility="visible";
						document.getElementById("13-2Cap2").style.animation="openBottleCap3 1.25s forwards";
				setTimeout(function()
				{
					document.getElementById("13-2Cap").style="position:absolute; visibility:visible; left:540px; top:335px; width:25px;";
					document.getElementById("13-2Cap2").style.visibility="hidden";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute;  left: 240px; top: 320px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById("13-4Down").onclick=function()
					{
						myStopFunction();
						document.getElementById("13-4Down").onclick="";
						document.getElementById("13-4Down").style.animation="movePipette3-1 2s forwards";
						setTimeout(function()
						{
							// document.getElementById("3-3").style.animation="aiasDown 1s forwards";
							document.getElementById("13-4Up2").style.visibility="visible";
							document.getElementById("13-4Down").style.visibility="hidden";
							setTimeout(function()
							{
								document.getElementById("13-4Up2").style.animation="movePipette2 2s forwards";
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:580px; top:330px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById("13-2Cap").onclick=function()
									{
										myStopFunction();
										document.getElementById("13-2Cap").onclick="";	
										document.getElementById("13-2Cap").style.visibility="hidden";
										document.getElementById("13-2Cap2").style="left:520px; top:290px;; position:absolute; visibility:visible";
										document.getElementById("13-2Cap2").style.animation="closeBottleCap3 1.25s forwards";
									
								setTimeout(function()
								{
									document.getElementById("13-2Cap2").style.visibility="hidden";
									document.getElementById("13-2Cap").style="visibility:visible; position:absolute; left:460px; top:253px; width:25px;";
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById("13-1cap").onclick=function()
									{
										myStopFunction();
										document.getElementById("13-1cap").onclick="";	
										
										setTimeout(function()
										{
											document.getElementById("13-1cap").style.visibility="hidden";
											document.getElementById("13-1cap2").style.visibility="visible";
											document.getElementById("13-1cap2").style.animation="openbodCap 1.2s forwards";

											setTimeout(function()
											{
												document.getElementById("13-1cap2").style.visibility="hidden";
												document.getElementById("13-1cap3").style.visibility="visible";
												setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:260px; top:340px; height: 40px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById("13-4Up2").onclick=function()
													{
														myStopFunction();
														document.getElementById("13-4Up2").onclick="";	
														document.getElementById("13-4Up2").style="position:absolute; left: 256px; top: 200px;";
														document.getElementById("13-4Up2").style.animation="movePipette3 2s forwards";
														setTimeout(function()
														{
															$("#p13-1").fadeIn(1800);
														},1800);
														setTimeout(function()
														{
															document.getElementById("13-4Up2").style.visibility="hidden";
															document.getElementById("13-4Down").style="position:absolute; left: 70px; top: 130px;";
															document.getElementById("13-4Down").style.visibility="visible";
															setTimeout(function()
															{    
															// colour change
															   document.getElementById("13-1samp").style.animation="colourChange1 4s forwards";
															   setTimeout(function()
															   {
															    document.getElementById("13-1samp").style.backgroundImage="linear-gradient(#FFFF99,#CFB53B)";
																
																document.getElementById("p13-1").style.visibility="hidden";
																document.getElementById("13-4Down").style.animation="movePipetteBack 2s forwards";
																setTimeout(function()
																{
																	$("#13-4Down").hide(1000);
									
																	myInt = setInterval(function(){ animatearrow(); }, 500);
																	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
																	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																	// Code for IE9
																	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																	// Standard syntax
																	document.getElementById("arrow1").style.transform = "rotate(270deg)";
																	document.getElementById("13-1cap3").onclick=function()
																	{
																		myStopFunction();
																		document.getElementById("13-1cap3").onclick="";	
																		document.getElementById("13-1cap3").style.visibility="hidden";
																		document.getElementById("13-1cap22").style.visibility="visible";
																		document.getElementById("13-1cap22").style.animation="closebodCap 1.5s forwards";
																		setTimeout(function()
																		{
																			document.getElementById("13-1cap22").style.visibility="hidden";
																			document.getElementById("13-1cap").style.visibility="visible";
																			
																			// document.getElementById("13-1samp").style.animation="settleDownaias 7s forwards";
																			// setTimeout(function()
																			// {
																				document.getElementById("nextButton").style.visibility="visible";
																			// },7100);
																		},1200);
																	}
																},2100);
															 },3200);
															},1200);
														},2500);
													}
												},100);
											
										    },1250);
										  },100);	
										}
									},1200);
								  }
								  
								},2000);
							},500);
						},2500);
					  }
			
				  },1300);	
				}
			  },700);
			}
		},300);
	
	  },1300);
	}
	
	if(simsubscreennum==14)
	{
		document.getElementById("13-1cap").style.visibility="hidden";
		document.getElementById("13-2Cap").style.visibility="hidden";
		setTimeout(function()
		{
			myInt=setInterval(function(){ animatearrow(); }, 500);
			document.getElementById("arrow1").style="position:absolute; left:430px; top:390px; height:40px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
			document.getElementById("arrow1").style.msTransform="rotate(0deg)";
			document.getElementById("arrow1").style.transform="rotate(0deg)";
			document.getElementById("14-1").onclick=function()
			{
				step14();
			}
			document.getElementById("14sampA").onclick=function()
			{
				step14();
			}
			document.getElementById("14-1cap").onclick=function()
			{
				step14();
			}
		},500);
	}
	
	if(simsubscreennum==15)
	{
		document.getElementById("14-1").style.visibility="hidden";
		document.getElementById("14-2").style.visibility="hidden";
		document.getElementById("14-1cap").style.visibility="hidden";
		document.getElementById("14-1samp").style.visibility="hidden";
		document.getElementById("14-1samp4").style.visibility="hidden";
		document.getElementById("14-1samp3").style.visibility="hidden";
		document.getElementById("14sampA").style.visibility="hidden";
		document.getElementById("14blank").style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:507.5px; top:245px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		     // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		     // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById("15-2cap").onclick=function()
		{
			myStopFunction();
			document.getElementById("15-2cap").onclick="";
			document.getElementById("15-2cap").style.animation="openH2SO4Cap 1.25s forwards";
			setTimeout(function()
			{
				document.getElementById("p15-1").style.visibility="visible";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:295px; top:190px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(220deg)"; 
		     // Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(220deg)"; 
		     // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(220deg)";
				document.getElementById("15-4").onclick=function()
				{
					myStopFunction();
					document.getElementById("15-4").onclick="";
					document.getElementById("15-4").style.visibility="hidden";
					document.getElementById("p15-1").style.visibility="hidden";
					document.getElementById("15-41").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("15-41").style.animation="moveGP1 1.5s forwards";
						setTimeout(function()
						{
							$("#15-5bulb").fadeIn(1000);
							$("#15-5up").fadeIn(1000);
							$("#15-5down").fadeIn(1000);
							setTimeout(function()
							{
								document.getElementById("p15-2").style.visibility="visible";
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="position:absolute; visibility:visible; left:321px; top:300px; height:20px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								document.getElementById("15-5up").onclick=function()
								{
									myStopFunction();
									document.getElementById("15-5up").onclick="";
									document.getElementById("p15-2").style.visibility="hidden";
									$("#15-5bulb").fadeOut(1500);
									$("#15-5up").fadeOut(1500);
									$("#15-5down").fadeOut(1500);
									document.getElementById("15-41sw").style.visibility="visible";
									document.getElementById("15-41sw").style.animation="h2so4Up 1.5s forwards";
									document.getElementById("15-3").style.animation="h2so4Down 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById("15-41sw").style.visibility="hidden";
										document.getElementById("15-41").style.visibility="hidden";
										document.getElementById("15-42").style.visibility="visible";
									     
										 myInt = setInterval(function(){ animatearrow(); }, 500);
										 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
										 document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			                            // Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(270deg)";
										document.getElementById("15-1cap").onclick=function()
										{  
										    myStopFunction();
											document.getElementById("15-1cap").onclick="";	
											document.getElementById("15-1cap").style.visibility="hidden";
											document.getElementById("15-1cap2").style.visibility="visible";
											setTimeout(function()
											{ 
											    document.getElementById("15-1cap2").style.animation="openbodCap 1.2s forwards";
												
												setTimeout(function()
												{
													document.getElementById("15-1cap2").style.visibility="hidden";
													document.getElementById("15-1cap3").style.visibility="visible";
													
													 myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:450px; top:230px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById("15-42").onclick=function()
													{  
														myStopFunction();
														document.getElementById("15-42").onclick="";
														document.getElementById("15-42").style.animation="moveGP3 3s forwards";
														setTimeout(function()
														{   
														    document.getElementById("15-2cap").style.animation="closeH2SO4Cap 1.25s forwards";
															setTimeout(function()
															{
															$("#15-5bulb").fadeIn(1500);
															$("#15-5up").fadeIn(1500);
															$("#15-5down").fadeIn(1500);
															document.getElementById("p15-2").style="visibility:visible; position:absolute; left:350px; top:100px; color:red; font-size:14px;";
															document.getElementById("p15-2").innerHTML="Press the down arrow on the bulb </br></br>to release the liquid into the BOD bottle";
															setTimeout(function()
															{
																document.getElementById("p15-2").style.visibility="visible";
																myInt=setInterval(function(){animatearrow();},500);
																document.getElementById("arrow1").style="position:absolute; visibility:visible; left:358px; top:330px; height:20px; z-index:10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(90deg)";
																document.getElementById("15-5down").onclick=function()
																{
																	myStopFunction();
																	document.getElementById("15-5down").onclick="";
																	document.getElementById("p15-2").style.visibility="hidden";
																	$("#15-5bulb").fadeOut(1000);
																	$("#15-5up").fadeOut(1000);
																	$("#15-5down").fadeOut(1000);
																	document.getElementById("15-41").style="visibility:visible; position:absolute; left:75px; top:100px;";
																	
																	document.getElementById("15-1samp1").style.animation="colourChange1 1.5s forwards";
																	// document.getElementById("15-1samp2").style.animation="precipitateUp1 1.5s forwards";

																	document.getElementById("15-42").style.visibility="hidden";
																	setTimeout(function()
																	{
																		document.getElementById("15-41").style.animation="movebackGP 1.5s forwards";
																		setTimeout(function()
																		{
																			$("#15-1samp3").fadeIn(2000);
																			
																			$("#15-41").fadeOut(1200);
																			myInt = setInterval(function(){ animatearrow(); }, 500);
																			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
																			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																			// Code for IE9
																			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																			// Standard syntax
																			document.getElementById("arrow1").style.transform = "rotate(270deg)";
																			document.getElementById("15-1cap3").onclick=function()
																			{
																				myStopFunction();
																				document.getElementById("15-1cap3").onclick="";	
																				document.getElementById("15-1cap3").style.visibility="hidden";
																				document.getElementById("15-1cap22").style.visibility="visible";			document.getElementById("15-1cap22").style.animation="closebodCap 1.5s forwards";
																				setTimeout(function()
																				{
																					document.getElementById("15-1cap22").style.visibility="hidden";
																					document.getElementById("15-1cap").style.visibility="visible";
																					setTimeout(function()
																					{
																						document.getElementById("nextButton").style.visibility="visible";
																					},250);
																				},1400);
																			}
																		},1750);
																	},200);
																}
															},1000);
														  },1000);
														},3100);
													}
												},1250);
											},100);	 
										}			
										
									},1600);
								}
							},1100);
						},1600);
						
					},150);
				}
			},1250);
		}
	}
	
	if(simsubscreennum==16)
	{
		$("#16-1samp4").fadeIn(0);
		document.getElementById("15-1cap").style.visibility="hidden";
		setTimeout(function()
		{
			myInt=setInterval(function(){ animatearrow(); }, 500);
			document.getElementById("arrow1").style="position:absolute; left:430px; top:390px; height:40px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
			document.getElementById("arrow1").style.msTransform="rotate(0deg)";
			document.getElementById("arrow1").style.transform="rotate(0deg)";
			document.getElementById("16-1").onclick=function()
			{
				step16();
			}
			document.getElementById("16sampA").onclick=function()
			{
				step16();
			}
			document.getElementById("16-1cap").onclick=function()
			{
				step16();
			}
		},500);
	}
	if(simsubscreennum==17)
	{
		document.getElementById("16-1").style.visibility="hidden";
		document.getElementById("16-2").style.visibility="hidden";
		document.getElementById("16-1cap").style.visibility="hidden";
		document.getElementById("16-1samp").style.visibility="hidden";
		document.getElementById("16-1samp2").style.visibility="hidden";
		document.getElementById("16-1samp3").style.visibility="hidden";
		document.getElementById("16sampA").style.visibility="hidden";
		document.getElementById("16blank").style.visibility="hidden";
		count=0;
		can=17;
		fun7and17();	
	}
	
	if(simsubscreennum==18)
	{
		refresh();
		document.getElementById("17-1").style.visibility="hidden";
		document.getElementById("17-1samp").style.visibility="hidden";
		document.getElementById("17-1cap3").style.visibility="hidden";
		document.getElementById("17sampA").style.visibility="hidden";
		
		$("#18-2").fadeIn(1500);
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:300px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById("18-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("18-2").onclick="";
				document.getElementById("18-2").style.animation="moveFunnel 2s forwards";
				setTimeout(function()
				{
					document.getElementById("18-3").style.visibility="visible";
					document.getElementById("18-3Cap").style.visibility="visible";
					setTimeout(function()
					{
						myInt=setInterval(function(){animatearrow();},500);
						document.getElementById("arrow1").style="visibility:visible; position:absolute; left:559px; top:240px; height:30px; z-index:10;";
						document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
						document.getElementById("arrow1").style.msTransform="rotate(270deg)";
						document.getElementById("arrow1").style.transform="rotate(270deg)";
						document.getElementById("18-3Cap").onclick=function()
						{
							myStopFunction();
							document.getElementById("18-3Cap").onclick="";
							document.getElementById("18-3Cap").style.animation="openNa2SO3Cap 2s forwards";
							setTimeout(function()
							{
								myInt=setInterval(function(){animatearrow();},500);
								document.getElementById("arrow1").style="visibility:visible; position:absolute; left:500px; top:350px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
								document.getElementById("arrow1").style.msTransform="rotate(180deg)";
								document.getElementById("arrow1").style.transform="rotate(180deg)";
								document.getElementById("18-3").onclick=function()
								{
									myStopFunction();
									document.getElementById("18-3").onclick="";
									document.getElementById("18-32").style.visibility="visible";
									document.getElementById("18-3").style.visibility="hidden";
									document.getElementById("18-32").style.animation="moveNa2SO3Bottle 1.5s forwards";
									setTimeout(function()
									{
										document.getElementById("18-32").style="position:absolute; left:375px; top:32px; animation: rotateNa2SO3Bottle 1s forwards;";
										setTimeout(function()
										{
											document.getElementById("18-2samp").style.visibility="visible";
											document.getElementById("18-2samp").style.animation="sampFromFunnelUpDown 2s 7 ";
											setTimeout(function()
											{
												document.getElementById("18-2samp2").style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById("18-2samp3").style.animation="whiteUp 5s forwards";
													setTimeout(function()
													{
														document.getElementById("18-2samp3").style.visibility="hidden";
														document.getElementById("18-2samp4").style.animation="sampFromFunnelUp 5s forwards";
														setTimeout(function()
														{
															document.getElementById("18-2samp2").style.visibility="hidden";
															document.getElementById("18-2samp").style.animation="sampFromFunnelDown2 1.5s forwards ";
															setTimeout(function()
															{
																document.getElementById("18-2samp").style.visibility="hidden";
																document.getElementById("18-2samp4").style="position:absolute; left:240px; top:185px;";
																document.getElementById("18-2samp4").style.animation="sampFromFunnelUp2 1.5s forwards";
																document.getElementById("18-32").style.animation="rotateNa2SO3Bottle2 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById("18-32").style.animation="moveNa2SO3BottleBack 1.5s forwards";
																	setTimeout(function()
																	{
																		document.getElementById("18-32").style.visibility="hidden";
																		document.getElementById("18-3").style.visibility="visible";
																		
																		myInt=setInterval(function(){animatearrow();},500);
																		document.getElementById("arrow1").style="visibility:visible; position:absolute; left:644px; top:320px; height:30px; z-index:10;";
																		document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.msTransform="rotate(270deg)";
																		document.getElementById("arrow1").style.transform="rotate(270deg)";
																		document.getElementById("18-3Cap").onclick=function()
																		{
																			myStopFunction();
																			document.getElementById("18-3Cap").onclick="";
																			document.getElementById("18-3Cap").style.animation="closeNa2SO3Cap 2s forwards";
																			setTimeout(function()
																			{
																				document.getElementById("18-3Cap").style.visibility="hidden";
																				document.getElementById("18-3").style.visibility="hidden";
																				
																				myInt=setInterval(function(){animatearrow();},500);
																				document.getElementById("arrow1").style="visibility:visible; position:absolute; left:420px; top:155px; height:30px; z-index:10;";
																				document.getElementById("arrow1").style.WebkitTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.msTransform="rotate(0deg)";
																				document.getElementById("arrow1").style.transform="rotate(0deg)";
																				document.getElementById("18-2").onclick=function()
																				{
																					myStopFunction();
																					document.getElementById("18-2").onclick="";
																					document.getElementById("18-2").style.animation="moveFunnelBack 2s forwards";
																					setTimeout(function()
																					{
																						$("#18-2").fadeOut(800);
																						document.getElementById("nextButton").style.visibility="visible";
																					},2100);
																				}
																			},2100);
																		}
																	},1600);
																},1000);
															},800);
														},5000);
													},4500);
												},800);
											},1000);
										},1100);
									},1550);
								}
							},2100);
						}
					},250);
				},2100);
			}
		},1500);
	}
	if(simsubscreennum==19)
	{
		document.getElementById("18-2samp4").style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById("p19-0a").style.visibility="visible";
			document.getElementById("p19-1").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(300deg)";
			document.getElementById("19-1knob").onclick=function()
			{
				myStopFunction();
				document.getElementById("19-1knob").onclick="";	
				document.getElementById("19-1knob").style.visibility="hidden";
				document.getElementById("19-1hand").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("p19-0a").style.visibility="hidden";
					document.getElementById("19-1hand").style.visibility="hidden";
					document.getElementById("19-1hand2").style.visibility="visible";
					document.getElementById("19-1stopper").style="position:absolute; left:153px; top:300px;";
					setTimeout(function()
					{
						document.getElementById("drop19-1").style.visibility="visible";
						document.getElementById("drop19-1").style.animation="drop2 0.75s 10";
						document.getElementById("19-1a").style.animation="Na2S2O3fromBurette1 10s forwards";
						setTimeout(function()
						{
							document.getElementById("drop19-2").style.visibility="visible";
							document.getElementById("drop19-2").style.animation="drop2 0.75s 10";
							setTimeout(function()
							{
								//document.getElementById("drop9-1").style.visibility="hidden";
								//document.getElementById("drop9-2").style.visibility="hidden";
								document.getElementById("19-3").style.animation="colourChange2 8s forwards";

								setTimeout(function()
								{
									document.getElementById("p19-0b").style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById("drop19-1").style.visibility="hidden";
										document.getElementById("drop19-2").style.visibility="hidden";
										document.getElementById("19-3").style.backgroundColor="#FFFF99";
										document.getElementById("19-1hand").style.visibility="visible";
										document.getElementById("19-1hand2").style.visibility="hidden";
										document.getElementById("p19-0b").style.visibility="hidden";
										document.getElementById("19-1stopper").style="position:absolute; left:150px; top:298px; ";
										setTimeout(function()
										{
											document.getElementById("19-1knob").style.visibility="visible";
											document.getElementById("19-6a").style.visibility="visible";
											document.getElementById("19-6b").style.visibility="visible";
											document.getElementById("19-1hand").style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById("p19-2").style.visibility="visible";
												document.getElementById("19-6a").style.visibility="visible";
												document.getElementById("19-6b").style.visibility="visible";
												document.getElementById("19-6b2").style.visibility="visible";
												
												setTimeout(function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:472px; top:290px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
														// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
														// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(270deg)";
													document.getElementById("19-6a").onclick=function()
													{
														myStopFunction();
														document.getElementById("19-6a").onclick="";
														document.getElementById("19-6a").style.animation="openStarchBottle 1.5s forwards";
														document.getElementById("p19-2").style.visibility="hidden";
														setTimeout(function()
														{
															document.getElementById("19-6dropper1").style.visibility="visible";
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:562px; top:190px; height: 35px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(270deg)";
															document.getElementById("19-6dropper1").onclick=function()
															{
																myStopFunction();
																document.getElementById("19-6dropper1").onclick="";
																document.getElementById("19-6dropper1").style.animation="dipdropper 1.5s forwards";
																setTimeout(function()
																{
																	document.getElementById("19-6dropper1").style.visibility="hidden";
																	document.getElementById("19-6dropper2").style.visibility="visible";
																	setTimeout(function()
																	{
																		document.getElementById("19-6dropper2").style.animation="dipdropper2 1.5s forwards";
																		setTimeout(function()
																		{
																			document.getElementById("19-6dropper2").style="position:absolute; left:220px; top:240px;";
																			document.getElementById("19-6dropper2").style.animation="rotateDropper 1.5s forwards";
																			setTimeout(function()
																			{
																				document.getElementById("19-6dropper2").style.transform="rotate(45deg)";
																				document.getElementById("19-6dropper2").style.animation="moveDropper 1s forwards";
																				setTimeout(function()
																				{
																					document.getElementById("drop19-3").style.visibility="visible";
																					document.getElementById("drop19-3").style.animation="drop3 1s 4";
																					setTimeout(function()
																					{
																						document.getElementById("19-3").style.backgroundImage="linear-gradient( #0000A0,#FFFF99,#FFFF99)";
																						setTimeout(function()
																						{
																							document.getElementById("19-3").style.backgroundImage="linear-gradient( #0000A0,#0000A0,#FFFF99)";
																							setTimeout(function()
																							{
																								document.getElementById("drop19-3").style.visibility="hidden";
																								document.getElementById("19-3").style.backgroundImage="linear-gradient( #0000A0,#0000A0)";
																								setTimeout(function()
																								{
																									document.getElementById("19-6dropper2").style.visibility="hidden";
																									setTimeout(function()
																									{
																										document.getElementById("19-6a").style.animation="closeStarchBottle 1.5s forwards";
																										setTimeout(function()
																										{
																											document.getElementById("19-6a").style.visibility="hidden";
																											document.getElementById("19-6b").style.visibility="hidden";
																											document.getElementById("19-6b2").style.visibility="hidden";
																											blueToColourlessTitrarion19();
																										},1550);
																									},250);
																								},250);
																							},2000);
																						},1000);
																					},1000);
																				},1050);
																			},1500);
																		},1500);
																	},250);
																},1600);
															}
														},1500);
													}				
												},1000);
											},500);
										},750);//from here
									},4000);
								},2500);
							},1000);
						},250);
					},100);
				},250);
			}
		},500);
	}
	if(simsubscreennum==20)
	{
		document.getElementById('p19-1').style="visibility:hidden";
		document.getElementById('p19-3').style="visibility:hidden";
		document.getElementById("19-3").style.visibility="hidden";
		document.getElementById("19-3b").style.visibility="hidden";
		document.getElementById("in1").innerHTML=document.getElementById("in").innerHTML;
		document.getElementById("fin1").innerHTML=document.getElementById("fin").innerHTML;
		document.getElementById("dif1").innerHTML=document.getElementById("dif").innerHTML;
		document.getElementById("in2").innerHTML=reading[p][0];
		document.getElementById("fin2").innerHTML=reading[p][2];
		document.getElementById("dif2").innerHTML=reading[p][2] - reading[p][0];
		
		document.getElementById("indof").onclick=function()
		{
			document.getElementById("indoff").style.visibility="visible";
			document.getElementById("findoff").style.visibility="hidden";
			document.getElementById("bodff").style.visibility="hidden";
			document.getElementById("dil").style.visibility="hidden";
			document.getElementById("dilFac").style.visibility="hidden";
		}
		document.getElementById("findof").onclick=function()
		{
			document.getElementById("findoff").style.visibility="visible";
			document.getElementById("indoff").style.visibility="hidden";
			document.getElementById("bodff").style.visibility="hidden";
			document.getElementById("dil").style.visibility="hidden";
			document.getElementById("dilFac").style.visibility="hidden";
		}
		document.getElementById("bodf").onclick=function()
		{
			document.getElementById("findoff").style.visibility="hidden";
			document.getElementById("indoff").style.visibility="hidden";
			document.getElementById("bodff").style.visibility="visible";
			document.getElementById("dil").style.visibility="visible";
			document.getElementById("dil").innerHTML="= "+reading[p][4];
			document.getElementById("dilFac").style.visibility="visible";
			document.getElementById("dilFac").innerHTML="= "+reading[p][3];
		}
		document.getElementById("check").onclick=function()
		{
			document.getElementById("findoff").style.visibility="hidden";
			document.getElementById("indoff").style.visibility="hidden";
			document.getElementById("bodff").style.visibility="hidden";
			document.getElementById("dil").style.visibility="hidden";
			document.getElementById("dilFac").style.visibility="hidden";
			
			if(!document.getElementById("indo").value || !document.getElementById("indo").value || !document.getElementById("findo").value || !document.getElementById("findo").value!=" " || !document.getElementById("bod").value || !document.getElementById("indo").value)
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				var a=reading[p][0];
				var b=reading[p][1];
				var c=reading[p][2];
				var d=reading[p][3];
				
				ido1=(0.025*b*8000)/200;
				fdo1=(0.025*c*8000)/200;
				bdo1=(ido1 - fdo1) * d;
				ido1=ido1.toFixed(2);
				fdo1=fdo1.toFixed(2);
				bdo1=bdo1.toFixed(2);
				
				ido= document.getElementById("indo").value;
				fdo= document.getElementById("findo").value;
				bdo= document.getElementById("bod").value;
				
				if(Math.round(ido) == Math.round(ido1))
				{
					document.getElementById("r1").style.visibility="visible";
					document.getElementById("w1").style.visibility="hidden";
				}         
				else
				{
					document.getElementById("w1").style.visibility="visible";
					document.getElementById("r1").style.visibility="hidden";
				}
				if(Math.round(fdo) == Math.round(fdo1))
				{
					document.getElementById("r2").style.visibility="visible";
					document.getElementById("w2").style.visibility="hidden";
				}
				else
				{
					document.getElementById("w2").style.visibility="visible";
					document.getElementById("r2").style.visibility="hidden";
				}
				if(document.getElementById("r1").style.visibility=="visible" && document.getElementById("r2").style.visibility=="visible" && Math.round(bdo) == Math.round(bdo1))
				{
					document.getElementById("nextButton").style.visibility="visible";
					document.getElementById("r3").style.visibility="visible";
					document.getElementById("w3").style.visibility="hidden";
					document.getElementById("check").style.visibility="hidden";
				}
				else
				{
					document.getElementById("w3").style.visibility="visible";
					document.getElementById("r3").style.visibility="hidden";
					document.getElementById("result").style.visibility="visible";
				}
				
				document.getElementById("result").onclick=function()
				{
					document.getElementById("findoff").style.visibility="hidden";
					document.getElementById("indoff").style.visibility="hidden";
					document.getElementById("bodff").style.visibility="hidden";
					document.getElementById("dil").style.visibility="hidden";
					document.getElementById("dilFac").style.visibility="hidden";
				    document.getElementById("indo").value=ido1;
				    document.getElementById("findo").value=fdo1;
				    document.getElementById("bod").value=bdo1;
					document.getElementById("indo").style="color:black; background-color:white; width:65px;"
					document.getElementById("indo").disabled="true";
					document.getElementById("findo").style="color:black; background-color:white; width:65px;"
					document.getElementById("findo").disabled="true";
					document.getElementById("bod").style="color:black; background-color:white; width:65px;"
					document.getElementById("bod").disabled="true";
					document.getElementById("indof").style.visibility="hidden";
					document.getElementById("findof").style.visibility="hidden";
					document.getElementById("bodf").style.visibility="hidden";
					document.getElementById("check").style.visibility="hidden";
					document.getElementById("w1").style.visibility="hidden";
					document.getElementById("r1").style.visibility="hidden";
					document.getElementById("r2").style.visibility="hidden";
					document.getElementById("w2").style.visibility="hidden";
					document.getElementById("w3").style.visibility="hidden";
					document.getElementById("r3").style.visibility="hidden";
					document.getElementById("result").style.visibility="hidden";
					document.getElementById("nextButton").style.visibility="visible";
				}
			}
		}
		
	}
	if(simsubscreennum==21)
	{
		document.getElementById("indo").style.visibility="hidden";
		document.getElementById("findo").style.visibility="hidden";
		document.getElementById("bod").style.visibility="hidden";
		document.getElementById("indof").style.visibility="hidden";
		document.getElementById("findof").style.visibility="hidden";
		document.getElementById("bodf").style.visibility="hidden";
		document.getElementById("check").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
		document.getElementById("w3").style.visibility="hidden";
		document.getElementById("r3").style.visibility="hidden";
		document.getElementById("result").style.visibility="hidden";
	}
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is less than 6mg/l";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(bdo<=6)
		{
			// str="suitable";
			// str=str.fontcolor("green");
			document.getElementById("infAns").innerHTML="Acceptable limit of Biological Oxygen Demand in water is less than 6mg/l. Sewage dispose BOD level is less than 30mg/l. If the value is greater than the above range, then it needs additional treatement before disposal. The water sample given has BOD level = "+bdo1+"mg/l, so it is in the BIS standards range for drinking water.";
		}
		else 
		{
			document.getElementById("infAns").innerHTML="Acceptable limit of Biological Oxygen Demand in water is less than 6mg/l. Sewage dispose BOD level is less than 30mg/l. If the value is greater than the above range, then it needs additional treatement before disposal. The water sample given has BOD level = "+bdo1+"mg/l, so it is not in the BIS standards range for drinking water.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}

function fillBodBottle1()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById("1-1cap").onclick=function()
	{
		myStopFunction();
		document.getElementById("1-1cap").onclick="";	
		document.getElementById("1-1cap").style.visibility="hidden";
		document.getElementById("1-1cap2").style.visibility="visible";
		
		setTimeout(function()
		{
			document.getElementById("1-1cap2").style.animation="openbodCap 1.2s forwards";

			setTimeout(function()
			{
				document.getElementById("1-1cap2").style.visibility="hidden";
				document.getElementById("1-1cap3").style.visibility="visible";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:340px; top:340px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
				// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
				// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(0deg)";
					document.getElementById("1-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("1-3").onclick="";	
						document.getElementById("1-3").style.visibility="hidden";
						document.getElementById("1-5").style.visibility="hidden";
						document.getElementById("1-3fill").style.visibility="visible";
						// document.getElementById("1-1samp2").style.visibility="visible";
					    document.getElementById("1-3fill").style.animation="moveCyl 1.25s forwards";
						setTimeout(function()
						{
							document.getElementById("1-3fill").style="position:absolute; left:270px; top:60px;";
							document.getElementById("1-3fill").style.transformOrigin="80% 100%";
							document.getElementById("1-3fill").style.animation="rotateCyl 1.25s forwards";
							setTimeout(function()
							{
								document.getElementById("1-1samp2").style.visibility="visible";
								document.getElementById("1-1samp2").style.animation="sampleUp2 1.25s forwards";
								setTimeout(function()
								{
									document.getElementById("1-3fill").style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById("1-6").style.visibility="visible";
										setTimeout(function()
										{
											waterDilution1();
										},250);
									},250);
									// setTimeout(function()
									// {
										// myInt = setInterval(function(){ animatearrow(); }, 500);
										// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
										// document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
										// // Code for IE9
										// document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
										// // Standard syntax
										// document.getElementById("arrow1").style.transform = "rotate(270deg)";
										// document.getElementById("1-1cap3").onclick=function()
										// {
											// myStopFunction();
											// document.getElementById("1-1cap3").onclick="";	
											// document.getElementById("1-1cap3").style.visibility="hidden";
											// document.getElementById("1-1cap22").style.visibility="visible";										
											// document.getElementById("1-1cap22").style.animation="closebodCap 1.5s forwards";
											// setTimeout(function()
											// {
												// document.getElementById("1-1bot").style.visibility="hidden";
												// document.getElementById("1-1").style.visibility="visible";
												// setTimeout(function()
												// {
													// document.getElementById("1-1cap22").style.visibility="hidden";
													// document.getElementById("1-1cap").style.visibility="visible";
													// setTimeout(function()
													// {
														// document.getElementById("1-6").style.visibility="visible";
														// setTimeout(function()
														// {
															// waterDilution1();
														// },250);
													// },250);
												// },550);
											// },1000);
										// }
									// },150);
								},1250);
							},1300);
						},1250);
					}
				},100);
			},1250);
		},100);
	}
	
}

function waterDilution1()
{
	refresh();
	// myInt = setInterval(function(){ animatearrow(); }, 500);
	// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:120px; top:230px; height: 35px; z-index: 10;";
	// document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// // Code for IE9
	// document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// // Standard syntax
	// document.getElementById("arrow1").style.transform = "rotate(270deg)";
	// document.getElementById("1-1cap").onclick=function()
	// {
		// myStopFunction();
		// document.getElementById("1-1cap").onclick="";	
		// document.getElementById("1-1cap").style.visibility="hidden";
		// document.getElementById("1-1cap2").style.visibility="visible";
		
		// setTimeout(function()
		// {
			// document.getElementById("1-1cap2").style.animation="openbodCap 1.2s forwards";
			
	
			setTimeout(function()
			{
				document.getElementById("1-1cap2").style.visibility="hidden";
				document.getElementById("1-1cap3").style.visibility="visible";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:370px; top:320px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(0deg)";
					document.getElementById("1-6").onclick=function()
					{ 
						myStopFunction();
						document.getElementById("1-6").onclick="";	
						document.getElementById("1-6").style.visibility="hidden";
						document.getElementById("1-61").style.visibility="visible";
						document.getElementById("1-61").style.animation="moveBottle 1s forwards";
						setTimeout(function()
						{
							document.getElementById("1-61").style.visibility="hidden";
							document.getElementById("1-62").style.visibility="visible";
							document.getElementById("1-6w1").style.visibility="visible";
							setTimeout(function()
							{
							document.getElementById("1-1samp2").style="position:absolute; left:52px; top:359px;";
							document.getElementById("1-1samp2").style.animation="sampleUpNeck1 2s forwards";
							document.getElementById("1-6w1").style.animation="waterDown1 2s forwards";
							setTimeout(function()
							{
								document.getElementById("1-62").style.visibility="hidden";
								document.getElementById("1-6w1").style.visibility="hidden";
								document.getElementById("1-63").style.visibility="visible";
								document.getElementById("1-63").style.animation="moveBottleBack  1s forwards";
								setTimeout(function()
								{
									document.getElementById("1-63").style.visibility="hidden";
									
									setTimeout(function()
									{
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:33.5px; top:355px; height: 35px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(270deg)";
										document.getElementById("1-1cap3").onclick=function()
										{
											myStopFunction();
											document.getElementById("1-1cap3").onclick="";	
											document.getElementById("1-1cap3").style.visibility="hidden";
											document.getElementById("1-1cap22").style.visibility="visible";										
											document.getElementById("1-1cap22").style.animation="closebodCap 1.5s forwards";
											
											setTimeout(function()
											{
												document.getElementById("1-1cap22").style.visibility="hidden";
												document.getElementById("1-1cap").style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById("1-32").style.visibility="visible";
													fillCylinder2()
												},250);
											},1550);
										}
									},150);
								},1100);
							},2200);
							},200);
						},1100);
					}
				},00);
			},200);
		// },100);
	// }
}

function fillCylinder2()
{
	refresh();
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:460px; top:292.5px; height: 35px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		     // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById("1-4cap").onclick=function()
		{
			myStopFunction();
			document.getElementById("1-4cap").onclick="";
			document.getElementById("1-4cap").style.animation="openBottleCap 1.25s forwards";
			setTimeout(function()
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:375px; height: 40px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				document.getElementById("1-43").onclick=function()
				{
					myStopFunction();
					document.getElementById("1-43").onclick="";	
					document.getElementById("1-43").style.animation="shiftSample 1.25s forwards";
					setTimeout(function()
					{
						document.getElementById("1-43").style="position:absolute; left:325px; top:40px;";
						document.getElementById("1-43").style.transformOrigin="100% 80%";
						document.getElementById("1-43").style.animation="rotateSample 1.25s forwards";
					setTimeout(function()
						{
							document.getElementById("1-43").style.visibility="hidden";
							document.getElementById("1-42").style.visibility="visible";
							setTimeout(function()
							{
							document.getElementById("1-5").style.visibility="visible";
							document.getElementById("1-5").style.animation="waterUp 2s forwards";
							setTimeout(function()
							{
								document.getElementById("1-42").style.transformOrigin="100% 80%";
								document.getElementById("1-42").style.animation="rotateSample2 0.5s forwards";
								setTimeout(function()
								{
									document.getElementById("1-42").style.visibility="hidden";
									document.getElementById("1-44").style.visibility="visible";
									document.getElementById("1-44").style.animation="shiftSampleDown 0.5s forwards";
									setTimeout(function()
									{
										document.getElementById("1-4cap").style.animation="closeBottleCap 1.5s forwards";
										setTimeout(function()
										{
											document.getElementById("1-1cap").style.visibility="visible";
											document.getElementById("1-6").style.visibility="hidden";
											setTimeout(function()
											{
												fillBodBottle12();
											},300);
										},1750);
									},500);
								},500);
							},2000);
							},150);
						},1250);
					},1250);
				}					
			},1300);
		}
}

function fillBodBottle12()
{
	document.getElementById("1-44").style.visibility="hidden";
	document.getElementById("1-4cap").style.visibility="hidden";
	document.getElementById("1-2bot").style.visibility="visible";
	document.getElementById("1-2cap").style.visibility="visible";
	setTimeout(function()
	{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:510px; top:230px; height: 35px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById("1-2cap").onclick=function()
	{
		myStopFunction();
		document.getElementById("1-2cap").onclick="";	
		document.getElementById("1-2cap").style.visibility="hidden";
		document.getElementById("1-2cap2").style.visibility="visible";
		
		setTimeout(function()
		{
			document.getElementById("1-2cap2").style.animation="openbodCap2 1.2s forwards";
			setTimeout(function()
			{
				document.getElementById("1-2cap2").style.visibility="hidden";
				document.getElementById("1-2cap3").style.visibility="visible";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:340px; top:340px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
				// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
				// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(0deg)";
					document.getElementById("1-32").onclick=function()
					{
						myStopFunction();
						document.getElementById("1-32").onclick="";	
						document.getElementById("1-32").style.visibility="hidden";
						document.getElementById("1-5").style.visibility="hidden";
						document.getElementById("1-3fill2").style.visibility="visible";
						// document.getElementById("1-1samp2").style.visibility="visible";
					    document.getElementById("1-3fill2").style.animation="moveCyl2 1.25s forwards";
						setTimeout(function()
						{
							document.getElementById("1-3fill2").style="position:absolute; left:150px; top:60px;";
							document.getElementById("1-3fill2").style.transformOrigin="80% 100%";
							document.getElementById("1-3fill2").style.animation="rotateCyl2 1.25s forwards";
							setTimeout(function()
							{
								document.getElementById("1-2samp2").style.visibility="visible";
								document.getElementById("1-2samp2").style.animation="sampleUp3 1.25s forwards";
								setTimeout(function()
								{
									document.getElementById("1-3fill2").style.visibility="hidden";
									document.getElementById("1-32").style.visibility="hidden";
									setTimeout(function()
									{
										document.getElementById("1-64").style.visibility="visible";
										setTimeout(function()
										{
											waterDilution2();
										},250);
									},250);									
									// setTimeout(function()
									// {
										// myInt = setInterval(function(){ animatearrow(); }, 500);
										// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595.5px; top:355px; height: 35px; z-index: 10;";
										// document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
										// // Code for IE9
										// document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
										// // Standard syntax
										// document.getElementById("arrow1").style.transform = "rotate(270deg)";
										// document.getElementById("1-2cap3").onclick=function()
										// {
											// myStopFunction();
											// document.getElementById("1-2cap3").onclick="";	
											// document.getElementById("1-2cap3").style.visibility="hidden";
											// document.getElementById("1-2cap22").style.visibility="visible";										
											// document.getElementById("1-2cap22").style.animation="closebodCap2 1.5s forwards";
											// setTimeout(function()
											// {
												// document.getElementById("1-2bot").style.visibility="hidden";
												// document.getElementById("1-2").style.visibility="visible";
											// },1000);
											// setTimeout(function()
											// {
												// document.getElementById("1-2cap22").style.visibility="hidden";
												// document.getElementById("1-2cap").style.visibility="visible";
												// setTimeout(function()
												// {
													// document.getElementById("1-64").style.visibility="visible";
													// setTimeout(function()
													// {
														// waterDilution2();
													// },250);
												// },250);
											// },1550);
										// }
									// },150);
								},1250);
							},1300);
						},1250);
					}
				},100);
			},1250);
		},100);
	}
	},150);
}

function waterDilution2()
{
	refresh();
	// myInt = setInterval(function(){ animatearrow(); }, 500);
	// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:510px; top:230px; height: 35px; z-index: 10;";
	// document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// // Code for IE9
	// document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// // Standard syntax
	// document.getElementById("arrow1").style.transform = "rotate(270deg)";
	// document.getElementById("1-2cap").onclick=function()
	// {
		// myStopFunction();
		// document.getElementById("1-2cap").onclick="";	
		// document.getElementById("1-2cap").style.visibility="hidden";
		// document.getElementById("1-2cap2").style.visibility="visible";
		
		// setTimeout(function()
		// {
			// document.getElementById("1-2cap2").style.animation="openbodCap2 1.2s forwards";
			setTimeout(function()
			{
				document.getElementById("1-2cap2").style.visibility="hidden";
				document.getElementById("1-2cap3").style.visibility="visible";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:375px; top:330px; height: 40px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
				// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
				// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(0deg)";
					document.getElementById("1-64").onclick=function()
					{
						myStopFunction();
						document.getElementById("1-64").onclick="";	
						document.getElementById("1-64").style.visibility="hidden";
						document.getElementById("1-63").style.visibility="visible";
						document.getElementById("1-63").style.animation="moveBottle2 1s forwards ";
						setTimeout(function()
						{
							document.getElementById("1-63").style.visibility="hidden";
							document.getElementById("1-65").style.visibility="visible";
							document.getElementById("1-6w2").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("1-2samp2").style="position:absolute; left:442px; top:359px;";
								document.getElementById("1-2samp2").style.animation="sampleUpNeck2 2s forwards";
								document.getElementById("1-6w2").style.animation="waterDown2 2s forwards";
								setTimeout(function()
								{
									document.getElementById("1-65").style.visibility="hidden";
									document.getElementById("1-6w2").style.visibility="hidden";
									setTimeout(function()
									{
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595.5px; top:355px; height: 35px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
										// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(270deg)";
										document.getElementById("1-2cap3").onclick=function()
										{
											myStopFunction();
											document.getElementById("1-2cap3").onclick="";	
											document.getElementById("1-2cap3").style.visibility="hidden";
											document.getElementById("1-2cap22").style.visibility="visible";										
											document.getElementById("1-2cap22").style.animation="closebodCap2 1.5s forwards";
										
											setTimeout(function()
											{
												document.getElementById("1-2cap22").style.visibility="hidden";
												document.getElementById("1-2cap").style.visibility="visible";
											  setTimeout(function()
											  {
												document.getElementById("p1-1").style.visibility="visible";
												typeWriter2();
												setTimeout(function()
												{ 
													document.getElementById("name1").style.visibility="visible";
													document.getElementById("name1").style.animation="naming1 3s forwards";
													setTimeout(function()
													{
														document.getElementById("name1").style.visibility="hidden";
														document.getElementById("sampA").style.visibility="visible";
														
														setTimeout(function()
														{ 
															document.getElementById("name2").style.visibility="visible";
															document.getElementById("name2").style.animation="naming2 2.5s forwards";
															setTimeout(function()
															{
																document.getElementById("p1-1").style.visibility="hidden";
																document.getElementById("name2").style.visibility="hidden";
																document.getElementById("sampB").style.visibility="visible";
																setTimeout(function()
																{
																	//document.getElementById("nextButton").style.visibility="visible";
																	validateAnswer(4,2,"300px","100px");
																},100);
															},2500);
														},550);
													},3000);
												},1650);
											  },900);
											},1400);
										}
									},150);	
								},2200);
							},200);
						},1100);
					  }
					},100);
			},250);
		// },100);
	// }	
}

function step4()
{
	refresh();
	myStopFunction();
	document.getElementById("4-1").onclick="";
	document.getElementById("4-1cap").onclick="";
	document.getElementById("4sampA").onclick="";
	document.getElementById("4-1").style.visibility="hidden";
	document.getElementById("4-1cap").style.visibility="hidden";
	document.getElementById("4-1samp").style.visibility="hidden";
	document.getElementById("4sampA").style.visibility="hidden";
	document.getElementById("4-2").style.visibility="visible";
	document.getElementById("4-2").style.animation="moveBODup 0.5s forwards";
	setTimeout(function()
	{
		document.getElementById("4-2").style="position:absolute; left:400px; top:70px;";
		document.getElementById("4-2").style.animation="rotBOD 0.5s forwards";
		setTimeout(function()
		{
			document.getElementById("4-2").style.visibility="hidden";
			document.getElementById("4-21").style.visibility="visible";
			document.getElementById("4-21").style.animation="shakeBOD 0.75s 6";
			setTimeout(function()
			{
				document.getElementById("4-21").style.visibility="hidden";
				document.getElementById("4-22").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("4-22").style.animation="moveBODdown 0.60s forwards";
					setTimeout(function()
					{
							document.getElementById("4-1").style.visibility="visible";
							document.getElementById("4-1samp").style.visibility="visible";
							document.getElementById("4-1samp").style.backgroundImage="linear-gradient(#CFB53B,#CFB53B)";
							document.getElementById("4-1cap").style.visibility="visible";
							document.getElementById("4-1samp4").style.visibility="visible";
							// document.getElementById("4-1samp2").style.visibility="visible";
							document.getElementById("4sampA").style.visibility="visible";
							document.getElementById("4-22").style.visibility="hidden";
							document.getElementById("p4-1").style.visibility="visible";
							document.getElementById("4blank").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("4-1samp").style.animation="precipitateDown1 25s forwards";
								setTimeout(function()
								{
									document.getElementById("p4-1").style.visibility="hidden";
						
									document.getElementById("4blank").style.visibility="hidden";
									document.getElementById("p4-2").style.visibility="visible";
									document.getElementById("b4-2").onclick=function()
									{
										document.getElementById("p4-2").style.visibility="hidden";
										document.getElementById("nextButton").style.visibility="visible";
									}
								},22000);
							},500);
					},750);
				},150);
			},4450);
		},500);
	},500);
}

function step14()
{
	refresh();
	myStopFunction();
	document.getElementById("14-1").onclick="";
	document.getElementById("14-1cap").onclick="";
	document.getElementById("14sampA").onclick="";
	document.getElementById("14-1").style.visibility="hidden";
	document.getElementById("14-1cap").style.visibility="hidden";
	document.getElementById("14-1samp").style.visibility="hidden";
	document.getElementById("14sampA").style.visibility="hidden";
	document.getElementById("14-2").style.visibility="visible";
	document.getElementById("14-2").style.animation="moveBODup 0.5s forwards";
	setTimeout(function()
	{
		document.getElementById("14-2").style="position:absolute; left:400px; top:70px;";
		document.getElementById("14-2").style.animation="rotBOD 0.5s forwards";
		setTimeout(function()
		{
			document.getElementById("14-2").style.visibility="hidden";
			document.getElementById("14-21").style.visibility="visible";
			document.getElementById("14-21").style.animation="shakeBOD 0.75s 6";
			setTimeout(function()
			{
				document.getElementById("14-21").style.visibility="hidden";
				document.getElementById("14-22").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("14-22").style.animation="moveBODdown 0.60s forwards";
					setTimeout(function()
					{
							document.getElementById("14-1").style.visibility="visible";
							document.getElementById("14-1samp").style.visibility="visible";
							document.getElementById("14-1samp").style.backgroundImage="linear-gradient(#CFB53B,#CFB53B)";
							document.getElementById("14-1cap").style.visibility="visible";
							document.getElementById("14-1samp4").style.visibility="visible";
							document.getElementById("14sampA").style.visibility="visible";
							document.getElementById("14-22").style.visibility="hidden";
							document.getElementById("p14-1").style.visibility="visible";
							document.getElementById("14blank").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("14-1samp").style.animation="precipitateDown1 25s forwards";
								setTimeout(function()
								{
									document.getElementById("p14-1").style.visibility="hidden";
				
									document.getElementById("14blank").style.visibility="hidden";
									document.getElementById("nextButton").style.visibility="visible";
								},22000);
							},500);
					},750);
				},150);
			},4450);
		},500);
	},500);
}

function step6()
{
	refresh();
	myStopFunction();
	document.getElementById("6-1").onclick="";
	document.getElementById("6-1cap").onclick="";
	document.getElementById("6sampA").onclick="";
	document.getElementById("6-1").style.visibility="hidden";
	document.getElementById("6-1cap").style.visibility="hidden";
	document.getElementById("6-1samp4").style.visibility="hidden";
	document.getElementById("6-1samp").style.visibility="hidden";
	document.getElementById("6sampA").style.visibility="hidden";
	document.getElementById("6-2").style.visibility="visible";
	document.getElementById("6-2").style.animation="moveBODup 0.5s forwards";
	setTimeout(function()
	{
		document.getElementById("6-2").style="position:absolute; left:400px; top:70px;";
		document.getElementById("6-2").style.animation="rotBOD 0.5s forwards";
		setTimeout(function()
		{
			document.getElementById("6-2").style.visibility="hidden";
			document.getElementById("6-21").style.visibility="visible";
			document.getElementById("6-21").style.animation="shakeBOD 0.75s 6";
			setTimeout(function()
			{
				document.getElementById("6-21").style.visibility="hidden";
				document.getElementById("6-22").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("6-22").style.animation="moveBODdown 0.60s forwards";
					setTimeout(function()
					{
							document.getElementById("6-1").style.visibility="visible";
							document.getElementById("6-1cap").style.visibility="visible";
							document.getElementById("6-1samp").style.visibility="visible";
							document.getElementById("6-1samp2").style.visibility="visible";
							document.getElementById("6sampA").style.visibility="visible";
							document.getElementById("6-22").style.visibility="hidden";
							document.getElementById("6blank").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("nextButton").style.visibility="visible";
							},500);
					},750);
				},150);
			},4450);
		},500);
	},500);
}

function step16()
{
	refresh();
	myStopFunction();
	document.getElementById("16-1").onclick="";
	document.getElementById("16-1cap").onclick="";
	document.getElementById("16sampA").onclick="";
	document.getElementById("16-1").style.visibility="hidden";
	document.getElementById("16-1cap").style.visibility="hidden";
	document.getElementById("16-1samp4").style.visibility="hidden";
	document.getElementById("16-1samp").style.visibility="hidden";
	document.getElementById("16sampA").style.visibility="hidden";
	document.getElementById("16-2").style.visibility="visible";
	document.getElementById("16-2").style.animation="moveBODup 0.5s forwards";
	setTimeout(function()
	{
		document.getElementById("16-2").style="position:absolute; left:400px; top:70px;";
		document.getElementById("16-2").style.animation="rotBOD 0.5s forwards";
		setTimeout(function()
		{
			document.getElementById("16-2").style.visibility="hidden";
			document.getElementById("16-21").style.visibility="visible";
			document.getElementById("16-21").style.animation="shakeBOD 0.75s 6";
			setTimeout(function()
			{
				document.getElementById("16-21").style.visibility="hidden";
				document.getElementById("16-22").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("16-22").style.animation="moveBODdown 0.60s forwards";
					setTimeout(function()
					{
							document.getElementById("16-1").style.visibility="visible";
							document.getElementById("16-1cap").style.visibility="visible";
							document.getElementById("16-1samp").style.visibility="visible";
							document.getElementById("16-1samp2").style.visibility="visible";
							document.getElementById("16sampA").style.visibility="visible";
							document.getElementById("16-22").style.visibility="hidden";
							document.getElementById("16blank").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("nextButton").style.visibility="visible";
							},500);
					},750);
				},150);
			},4450);
		},500);
	},500);
}
	
function fillConicalFlask()
{
	count++;
	$("#"+can+"-3").fadeIn(100);
	setTimeout(function()
	{
		myInt=setInterval(function(){animatearrow();},500);
		document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:380px; top:95px; height:30px; z-index:10;";
		document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
		document.getElementById("arrow1").style.msTransform="rotate(180deg)";
		document.getElementById("arrow1").style.transform="rotate(180deg)";
		document.getElementById(can+"-3").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-3").onclick="";
			$("#"+can+"-3").fadeOut(0);
			document.getElementById(can+"-3a").style.visibility="visible";
			$("#"+can+"-3a").animate({"position":"absolute","top":"125px"},300,
			function()
			{
				document.getElementById(can+"-5bulb").style.visibility="visible";
				document.getElementById(can+"-5up").style.visibility="visible";
				document.getElementById(can+"-5down").style.visibility="visible";
				//click arrow on the pipette bulb
				myInt=setInterval(function(){animatearrow();},500);
				document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:565px; top:295px; height:30px; z-index:10;";
				document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
				document.getElementById("arrow1").style.msTransform="rotate(180deg)";
				document.getElementById("arrow1").style.transform="rotate(180deg)";
				document.getElementById(can+"-5up").onclick=function()
				{
					myStopFunction();
					document.getElementById(can+"-5up").onclick="";
					document.getElementById(can+"-5bulb").style.visibility="hidden";
					document.getElementById(can+"-5up").style.visibility="hidden";
					document.getElementById(can+"-5down").style.visibility="hidden";
					if(count==1)
					{
						// $("#"+can+"-1samp2").animate({"position":"absolute","top":"320px"},1000);
						$("#"+can+"-1samp").animate({"position":"absolute","top":"320px"},1000);
					}
					if(count==2)
					{
						// $("#"+can+"-1samp2").animate({"position":"absolute","top":"335px"},1000);
						$("#"+can+"-1samp").animate({"position":"absolute","top":"335px"},1000);
					}
					$("#"+can+"-1samp3").animate({"position":"absolute","top":"211.5px"},1000,
					function()
					{
						$("#"+can+"-1samp3").animate({"position":"absolute","top":"121.5px"},500);
						$("#"+can+"-3a").animate({"position":"absolute","top":"35px"},500,
						function()
						{
							$("#"+can+"-1samp3").animate({"position":"absolute","left":"90.5px"},600);
							$("#"+can+"-3a").animate({"position":"absolute","left":"76px"},600,
							function()
							{
								$("#"+can+"-1samp3").animate({"position":"absolute","top":"144.5px"},300);
								$("#"+can+"-3a").animate({"position":"absolute","top":"59px"},300,
								function()
								{
									document.getElementById(can+"-5bulb").style.visibility="visible";
									document.getElementById(can+"-5up").style.visibility="visible";
									document.getElementById(can+"-5down").style.visibility="visible";
									myInt=setInterval(function(){animatearrow();},500);
									document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:577.5px; top:307.5px; height:30px; z-index:10;";
									document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
									document.getElementById("arrow1").style.msTransform="rotate(180deg)";
									document.getElementById("arrow1").style.transform="rotate(180deg)";
									document.getElementById(can+"-5down").onclick=function()
									{
										myStopFunction();
										document.getElementById(can+"-5down").onclick="";
										document.getElementById(can+"-5bulb").style.visibility="hidden";
										document.getElementById(can+"-5up").style.visibility="hidden";
										document.getElementById(can+"-5down").style.visibility="hidden";
										if(count==1)
										{
											$("#"+can+"-2samp").animate({"position":"absolute","top":"390px"},1000);
										}
										if(count==2)
										{
											$("#"+can+"-2samp").animate({"position":"absolute","top":"380px"},1000);
										}
										$("#"+can+"-1samp3").animate({"position":"absolute","top":"390px"},1000,
										function()
										{
											document.getElementById(can+"-3a").style.visibility="hidden";
											setTimeout(function()
											{
												if(count<2)
												{
													$("#"+can+"-1samp3").css({"position":"absolute", "left":"384.5px", "top":"350px"});
													$("#"+can+"-3a").animate({"position":"absolute", "left":"370px", "top":"35px" });
													fillConicalFlask();
												}
												else
												{
													document.getElementById("p"+can+"-1").style.visibility="visible";
													setTimeout(function()
													{
														document.getElementById("p"+can+"-1").style.visibility="hidden";
														document.getElementById("nextButton").style.visibility="visible";
													},2000);
												}
											},1500);
										});
									}
								});
							});
						});
					});
				}
			});
		}
	},250);
}	

function fill1ThroughAutomaticPipette()
{
	$("#"+can+"-4d").fadeIn(1500);
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:585px; top:235px; height: 35px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById(can+"-4d").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-4d").onclick="";	
			document.getElementById(can+"-4d").style.animation="moveAP7d 1.5s forwards";	
			setTimeout(function()
			{
				$("#"+can+"-4d").fadeOut(1);
				$("#"+can+"-4u").fadeIn(1);
				document.getElementById(can+"-1samp").style="visibility:visible; position:absolute; left:352px; top:345px;";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:525px; top:235px; height: 35px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(0deg)";
				document.getElementById(can+"-4u").onclick=function()
				{
					myStopFunction();
					document.getElementById(can+"-4u").onclick="";	
					document.getElementById(can+"-4u").style.animation="moveAP7u 2.5s forwards";
					setTimeout(function()
					{
						document.getElementById(can+"-4b").style.visibility="visible";
						fill1mlsampletoconicalFlask();
					},2600);
				}
			},1800);
		}
	},1550);
}
	
function fill1mlsampletoconicalFlask()
{
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:97px; top:165px; height:30px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(237deg)";
	document.getElementById("arrow1").style.msTransform="rotate(237deg)";
	document.getElementById("arrow1").style.transform="rotate(237deg)";
	document.getElementById(can+"-4b").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-4b").onclick="";
		document.getElementById(can+"-4b").style.visibility="hidden";
		document.getElementById(can+"-4u").style.visibility="hidden";
		document.getElementById(can+"-4d").style="position:absolute; left:71px; top:140px;";
		$("#"+can+"4d").fadeIn(1);
		document.getElementById(can+"-4samp2").style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById(can+"-2samp").style="position:absolute; left:60px; top:379px;";
			document.getElementById("drop"+can+"-1").style.visibility="visible";
			
			document.getElementById(can+"-4samp2").style.animation="sampAPdown7 3s forwards";
			
			document.getElementById("drop"+can+"-1").style.animation="drop1 1s forwards";
			setTimeout(function(){
				document.getElementById("drop"+can+"-2").style.visibility="visible";
				document.getElementById("drop"+can+"-2").style.animation="drop1 1s forwards";
				setTimeout(function(){
					document.getElementById("drop"+can+"-3").style.visibility="visible";
					document.getElementById("drop"+can+"-3").style.animation="drop1 1s forwards";
					setTimeout(function(){
						document.getElementById("drop"+can+"-4").style.visibility="visible";
						document.getElementById("drop"+can+"-4").style.animation="drop1 1s forwards";
						document.getElementById(can+"-4samp2").style.visibility="hidden";
					},250);	
				},250);		
			},250);			
			document.getElementById(can+"-2samp").style.animation=" sampleUp7c 2.5s forwards";	
			setTimeout(function()
			{
				document.getElementById(can+"-4d").style.animation="moveAPd2 1s forwards";
				setTimeout(function()
				{
					document.getElementById("drop"+can+"-1").style.visibility="hidden";
					document.getElementById("drop"+can+"-2").style.visibility="hidden";
					document.getElementById("drop"+can+"-3").style.visibility="hidden";
					document.getElementById("drop"+can+"-4").style.visibility="hidden";

					$("#"+can+"-4d").fadeOut(500);
					
					setTimeout(function()
					{
						document.getElementById("nextButton").style.visibility="visible";
					
					},500);
				},200);
			},2700);
		},200);
	}
}

function fillConicalFlask17()
{
	count2++;
	setTimeout(function()
	{
		$("#17-3").fadeIn(1500);
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:635px; top:235px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(0deg)";
			document.getElementById("17-3").onclick=function()
			{
				myStopFunction();
				document.getElementById("17-3").onclick="";	
				$("#17-3").fadeOut(1);
				document.getElementById("17-3a").style.visibility="visible";
				document.getElementById("17-3a").style.animation="movePipette4 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById("17-1").style.visibility="hidden";
					if(count2==1)
						document.getElementById("17-1a").style.visibility="visible";
						document.getElementById("17-1sol").style.visibility="visible";
						document.getElementById("17-1samp").style.visibility="hidden";
					if(count2==2)
						document.getElementById("17-1ab").style.visibility="visible";
						document.getElementById("17sampA").style.visibility="hidden";
						document.getElementById("17-1samp").style.visibility="hidden";
						setTimeout(function()
						{
							document.getElementById("17-3a").style="position:absolute;  left:410px; top:50px;"
							document.getElementById("17-3a").style.animation="movePipette5 1s forwards";
							document.getElementById("p17-1").style.visibility="visible";
							document.getElementById("p17-1").innerHTML="Suck the solution from the BOD bottle with the<br><br> mouth and make it upto the mark";
							
							setTimeout(function()
							{
								document.getElementById("17-1sol2").style="visibility:visible; position:absolute; left:305px; top:300px; ";
								document.getElementById("17-3a").style.visibility="hidden";
								document.getElementById("17-3b").style.visibility="visible";//sucking pipette
								document.getElementById("17-1sol2").style.transform=" rotate(0deg)";
								setTimeout(function()
								{
									document.getElementById("17-1sol2").style.animation="suckSample 2.5s forwards";
									if(count2==1)
										document.getElementById("17-1sol").style.animation="sample7down 2.5s forwards";
									if(count2==2)
										document.getElementById("17-1sol").style.animation="sample7down2 2.5s forwards";
								setTimeout(function()
								{
									document.getElementById("p17-1").innerHTML="Close the top of pipette with the thumb";
									setTimeout(function()
									{
										document.getElementById("17-1sol2").style.visibility="hidden";
										document.getElementById("17-3b").style.visibility="hidden";
										document.getElementById("17-3c").style.visibility="visible";
										document.getElementById("17-3c").style="position:absolute; left:445px; top:80px; transform:rotate(35deg); ";
										setTimeout(function()
										{
											document.getElementById("17-3c").style.animation="moveclosePipette1 1s forwards";
											setTimeout(function()
											{
												document.getElementById("17-3c").style="position:absolute; left:485px; top:60px; transform:rotate(35deg); ";
												document.getElementById("17-3c").style.animation="rotclosePipette 1s forwards";
													setTimeout(function()
													{
														document.getElementById("17-1a").style.visibility="hidden";
														document.getElementById("17-1ab").style.visibility="hidden";
														document.getElementById("17-1sol").style.visibility="hidden";
														document.getElementById("17-1").style.visibility="visible";
														document.getElementById("17sampA").style.visibility="visible";
														//
														if(count2==1)
															document.getElementById("17-1samp").style="visibility:visible; position:absolute; left:352px; top:325px;";
														if(count2==2)
															document.getElementById("17-1samp").style="visibility:visible; position:absolute; left:352px; top:340px;";
														document.getElementById("17-3d").style.visibility="visible";
														document.getElementById("17-3c").style.visibility="hidden";
														document.getElementById("p17-1").style.visibility="hidden";
														document.getElementById("17-3d").style="position:absolute;  left:485px; top:60px;";
				
														myInt = setInterval(function(){ animatearrow(); }, 500);
														document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:615px; top:255px; height: 35px; z-index: 10;";
														document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
																		// Code for IE9
														document.getElementById("arrow1").style.msTransformws = "rotate(0deg)"; 
														// Standard syntax
														document.getElementById("arrow1").style.transform = "rotate(0deg)";
														document.getElementById("17-3d").onclick=function()
														{
															myStopFunction();
															document.getElementById("17-3d").onclick="";	
															document.getElementById("17-3d").style.animation="movePipette6 3s forwards";
															setTimeout(function()
															{
																document.getElementById("17-3d").style.visibility="hidden";
																document.getElementById("17-3samp").style.visibility="visible";
																document.getElementById("17-3e").style="position:absolute; left:81px; top:60px; visibility:visible";
																setTimeout(function()
																{
																	document.getElementById("17-3samp").style.animation="sampmoveDown73 3s forwards";
																setTimeout(function()
																{																
																if(count2==1)
																	document.getElementById("17-2samp").style.animation="sampleUp7 2s forwards";
																if(count2==2)
																	document.getElementById("17-2samp").style="position:absolute; left:60px; top:392px; animation:sampleUp7b 2s forwards";
																setTimeout(function()
																{
																	document.getElementById("17-3samp").style="visibility:hidden; position:absolute; left:81px; top:150px;";
																	document.getElementById("17-3e").style.animation="moveBackPipette7 2.5s forwards";
																	setTimeout(function()
																	{
																		document.getElementById("17-3e").style.visibility="hidden";
																		if(count2<2)
																			fillConicalFlask17();
																		else
																		{
																			$("#17-4d").fadeIn(1500);
																			setTimeout(function()
																			{
																				myInt = setInterval(function(){ animatearrow(); }, 500);
																				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:585px; top:235px; height: 35px; z-index: 10;";
																				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																				// Code for IE9
																				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																				// Standard syntax
																				document.getElementById("arrow1").style.transform = "rotate(180deg)";
																				document.getElementById("17-4d").onclick=function()
																				{
																					myStopFunction();
																					document.getElementById("17-4d").onclick="";	
																					document.getElementById("17-4d").style.animation="moveAP7d 1.5s forwards";	
																					setTimeout(function()
																					{
																						$("#17-4d").fadeOut(1);
																						$("#17-4u").fadeIn(1);
																						document.getElementById("17-1samp").style="visibility:visible; position:absolute; left:352px; top:345px;";
																						myInt = setInterval(function(){ animatearrow(); }, 500);
																						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:525px; top:235px; height: 35px; z-index: 10;";
																						document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
																						// Code for IE9
																						document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
																						// Standard syntax
																						document.getElementById("arrow1").style.transform = "rotate(0deg)";
																						document.getElementById("17-4u").onclick=function()
																						{
																							myStopFunction();
																							document.getElementById("17-4u").onclick="";	
																							document.getElementById("17-4u").style.animation="moveAP7u 2.5s forwards";
																							setTimeout(function()
																							{
																								document.getElementById("17-4b").style.visibility="visible";
																								fill1mlsampletoconicalFlask17();
																							},2600);
																						}
																					},1800);
																				}
																			},1550);													
																		}
																	},2700);
																},2000);
																},1200);
																},200);
															},3100);
														}
													},1200);
											//},1000);
										},1100);
									},500);
								},500);
							 },2500);
							},1200);
					},250);
				},500);
				},1500);
			}
		},1500);
	},100);
}	
	
function fill1mlsampletoconicalFlask17()
{
	
	myInt=setInterval(function(){animatearrow();},500);
	document.getElementById("arrow1").style="visibility:hidden; position:absolute; left:97px; top:165px; height:30px; z-index:10;";
	document.getElementById("arrow1").style.WebkitTransform="rotate(237deg)";
	document.getElementById("arrow1").style.msTransform="rotate(237deg)";
	document.getElementById("arrow1").style.transform="rotate(237deg)";
	document.getElementById("17-4b").onclick=function()
	{
		myStopFunction();
		document.getElementById("17-4b").onclick="";
		document.getElementById("17-4b").style.visibility="hidden";
		document.getElementById("17-4u").style.visibility="hidden";
		document.getElementById("17-4d").style="position:absolute; left:71px; top:140px;";
		$("#17-4d").fadeIn(1);
		document.getElementById("17-4samp2").style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById("17-2samp").style="position:absolute; left:60px; top:369px;";
			document.getElementById("drop17-1").style.visibility="visible";
			
			document.getElementById("17-4samp2").style.animation="sampAPdown7 3s forwards";
			
			document.getElementById("drop17-1").style.animation="drop1 1s forwards";
			setTimeout(function(){
				document.getElementById("drop17-2").style.visibility="visible";
				document.getElementById("drop17-2").style.animation="drop1 1s forwards";
				setTimeout(function(){
					document.getElementById("drop17-3").style.visibility="visible";
					document.getElementById("drop7-3").style.animation="drop1 1s forwards";
					setTimeout(function(){
						document.getElementById("drop17-4").style.visibility="visible";
						document.getElementById("drop17-4").style.animation="drop1 1s forwards";
						document.getElementById("17-4samp2").style.visibility="hidden";
					},250);	
				},250);		
			},250);			
			document.getElementById("17-2samp").style.animation=" sampleUp7c 2.5s forwards";	
			setTimeout(function()
			{
				document.getElementById("17-4d").style.animation="moveAPd2 1s forwards";
				setTimeout(function()
				{
					document.getElementById("drop17-1").style.visibility="hidden";
					document.getElementById("drop17-2").style.visibility="hidden";
					document.getElementById("drop17-3").style.visibility="hidden";
					document.getElementById("drop17-4").style.visibility="hidden";

					$("#17-4d").fadeOut(1500);
					
					setTimeout(function()
					{
						document.getElementById("nextButton").style.visibility="visible";
					
					},1500);
				},50);
			},2700);
		},200);
	}
}
	
function blueToColourlessTitrarion()
{
	refresh();
	setTimeout(function()
	{
			//document.getElementById("p9-0a").style.visibility="visible";
			document.getElementById("p9-1").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(300deg)";
			document.getElementById("9-1knob").onclick=function()
			{
				myStopFunction();
				document.getElementById("9-1knob").onclick="";	
				document.getElementById("9-1knob").style.visibility="hidden";
				document.getElementById("9-1hand").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("p9-0a").style.visibility="hidden";
					document.getElementById("9-1hand").style.visibility="hidden";
					document.getElementById("9-1hand2").style.visibility="visible";
					document.getElementById("9-1stopper").style="position:absolute; left:153px; top:300px;";
					setTimeout(function()
					{
						document.getElementById("drop9-1").style.visibility="visible";
						document.getElementById("drop9-1").style.animation="drop2 0.75s 10";
						document.getElementById("9-1a").style="position:absolute; left:142px; top:100px; ";
						document.getElementById("9-1a").style.animation="Na2S2O3fromBurette3 10s forwards";
						setTimeout(function()
						{
							document.getElementById("drop9-2").style.visibility="visible";
							document.getElementById("drop9-2").style.animation="drop2 0.75s 10";
							setTimeout(function()
							{
								document.getElementById("9-3b").style.visibility="visible";
								document.getElementById("9-3b").style.animation="colourChange3 8s forwards";

								setTimeout(function()
								{
									document.getElementById("p9-0b").style.visibility="visible";
									document.getElementById("p9-0b").innerHTML="Close the knob when the colour of solution changes to colourless";
									setTimeout(function()
									{
										document.getElementById("drop9-1").style.visibility="hidden";
										document.getElementById("drop9-2").style.visibility="hidden";
										document.getElementById("9-3b").style.backgroundColor="#F8F8F8;";
										document.getElementById("9-1hand").style.visibility="visible";
										document.getElementById("9-1hand2").style.visibility="hidden";
										document.getElementById("p9-0b").style.visibility="hidden";
										document.getElementById("9-1stopper").style="position:absolute; left:150px; top:298px; ";
										setTimeout(function()
										{
										document.getElementById("9-1hand").style.visibility="hidden";
										document.getElementById("p9-3").style.visibility="visible";
										document.getElementById("p9-3").innerHTML="Final burette reading = "+reading[p][1]+ " ml";
										//document.getElementById("nextButton").style.visibility="visible";
										validateAnswer(0,2,"350px","300px");
										},750);
								},4000);
							},2500);
						},1000);
					},250);
				},100);
			},250);
		}
	},500);
}

function blueToColourlessTitrarion19()
{
	refresh();
	setTimeout(function()
	{
			//document.getElementById("p9-0a").style.visibility="visible";
			document.getElementById("p19-1").style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:320px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(300deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(300deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(300deg)";
			document.getElementById("19-1knob").onclick=function()
			{
				myStopFunction();
				document.getElementById("19-1knob").onclick="";	
				document.getElementById("19-1knob").style.visibility="hidden";
				document.getElementById("19-1hand").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("p19-0a").style.visibility="hidden";
					document.getElementById("19-1hand").style.visibility="hidden";
					document.getElementById("19-1hand2").style.visibility="visible";
					document.getElementById("19-1stopper").style="position:absolute; left:153px; top:300px;";
					setTimeout(function()
					{
						document.getElementById("drop19-1").style.visibility="visible";
						document.getElementById("drop19-1").style.animation="drop2 0.75s 10";
						document.getElementById("19-1a").style="position:absolute; left:142px; top:100px; ";
						document.getElementById("19-1a").style.animation="Na2S2O3fromBurette3 10s forwards";
						setTimeout(function()
						{
							document.getElementById("drop19-2").style.visibility="visible";
							document.getElementById("drop19-2").style.animation="drop2 0.75s 10";
							setTimeout(function()
							{
								document.getElementById("19-3b").style.visibility="visible";
								document.getElementById("19-3b").style.animation="colourChange3 8s forwards";

								setTimeout(function()
								{
									document.getElementById("p19-0b").style.visibility="visible";
									document.getElementById("p19-0b").innerHTML="Close the knob when the colour of solution changes to colourless";
									setTimeout(function()
									{
										document.getElementById("drop19-1").style.visibility="hidden";
										document.getElementById("drop19-2").style.visibility="hidden";
										document.getElementById("19-3b").style.backgroundColor="#F8F8F8;";
										document.getElementById("19-1hand").style.visibility="visible";
										document.getElementById("19-1hand2").style.visibility="hidden";
										document.getElementById("p19-0b").style.visibility="hidden";
										document.getElementById("19-1stopper").style="position:absolute; left:150px; top:298px; ";
										setTimeout(function()
										{
										document.getElementById("19-1hand").style.visibility="hidden";
										document.getElementById("p19-3").style.visibility="visible";
										document.getElementById("p19-3").innerHTML="Final burette reading = "+reading[p][2]+ " ml";
										document.getElementById("nextButton").style.visibility="visible";
										},750);
								},4000);
							},2500);
						},1000);
					},250);
				},100);
			},250);
		}
	},500);
}

function takeOutBODfromIncubator()
{
	if(k==0)
	{
	k=1;
	document.getElementById("p11-3").style.visibility="hidden";
	document.getElementById("11-5c").style.visibility="hidden";
	document.getElementById("11-5n").style.visibility="hidden";
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top:235px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById("11-2").onclick=function()
		{
			myStopFunction();
			 $('.door').toggleClass('doorOpen');
			document.getElementById("11-2").onclick="";	
			setTimeout(function(){
			document.getElementById("11-2").style.visibility="hidden";
			},350);
			
			setTimeout(function()
			{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:107px; top:255px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById("11-4").onclick=function()
			{
				myStopFunction();
				document.getElementById("11-4").onclick="";	
				document.getElementById("11-4").style.visibility="hidden";
				document.getElementById("11-3b").style="visibility:visible; position:absolute; left:100px; top:120px; ";
				document.getElementById("11-3b").style.animation="placeSampBback 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById("11-3cap").style.visibility="visible";
					document.getElementById("11-3samp").style.visibility="visible";
					document.getElementById("11-3sampB").style.visibility="visible";
					document.getElementById("11-3b").style.visibility="hidden";
					document.getElementById("11-3").style.visibility="visible";
					setTimeout(function()
					{
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(0deg)";
						//$('.door').click(function()
						document.getElementById("incDoor").onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor").onclick="";	
							$('.door').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById("11-2").style.visibility="visible";
								setTimeout(function()
								{
									//document.getElementById("nextButton").style.visibility="visible";
									validateAnswer(1,0,"335px","150px");
								},1500);
							},1300);
						}
					},250);
				},1500);
				
			}
		},1550);
	  }
	},500);
  }
}

function fun7and17()
{
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:420px; top:240px; height: 35px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(can+"-1cap").onclick=function()
		{
			myStopFunction();
			document.getElementById(can+"-1cap").onclick="";	
			document.getElementById(can+"-1cap").style.visibility="hidden";
			document.getElementById(can+"-1cap2").style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById(can+"-1cap2").style.animation="openbodCap3 1.2s forwards";
				setTimeout(function()
				{
					document.getElementById(can+"-1cap2").style.visibility="hidden";
					document.getElementById(can+"-1cap3").style.visibility="visible";
					
					fillConicalFlask();
						
				},1250);
			},100);
		}
	},150);	
}
	
function refresh()
{
	
	document.getElementById("1-5").style.animation="";
	document.getElementById("1-1cap2").style.animation="";
	document.getElementById("1-1cap22").style.animation="";
	document.getElementById("1-2cap2").style.animation="";
	document.getElementById("1-63").style.animation="";
	document.getElementById("1-2cap22").style.animation="";
	document.getElementById("2-4Up2").style.animation="";
	document.getElementById("3-2Cap").style.animation="";
	document.getElementById("4-2").style.animation="";
	document.getElementById("7-3c").style.animation="";
	document.getElementById("7-1a").style.animation="";
	document.getElementById("7-2samp").style.animation="";
	document.getElementById("7-3d").style.animation="";
	document.getElementById("7-3e").style.animation="";
	document.getElementById("7-3c").style.animation="";
	document.getElementById("7-3a").style.animation="";
	document.getElementById("7-3samp").style.animation="";
	document.getElementById("7-1sol2").style.animation="";
	document.getElementById("drop9-1").style.animation="";
	document.getElementById("drop9-2").style.animation="";
	document.getElementById("9-3").style.animation="";
	document.getElementById("9-1a").style.animation="";
	document.getElementById("8-2").style.animation="";
	document.getElementById("8-3Cap").style.animation="";
	document.getElementById("8-32").style.animation="";
	document.getElementById("8-2samp").style.animation="";
	document.getElementById("8-2samp3").style.animation="";
	document.getElementById("8-2samp4").style.animation="";
	document.getElementById("12-4Up2").style.animation="";
	document.getElementById("13-2Cap").style.animation="";
	document.getElementById("14-2").style.animation="";
	document.getElementById("17-3c").style.animation="";
	document.getElementById("17-1a").style.animation="";
	document.getElementById("17-2samp").style.animation="";
	document.getElementById("17-3d").style.animation="";
	document.getElementById("17-3e").style.animation="";
	document.getElementById("17-3c").style.animation="";
	document.getElementById("17-3a").style.animation="";
	document.getElementById("17-3samp").style.animation="";
	document.getElementById("17-1sol2").style.animation="";
	document.getElementById("drop19-1").style.animation="";
	document.getElementById("drop19-2").style.animation="";
	document.getElementById("19-3").style.animation="";
	document.getElementById("19-1a").style.animation="";
	document.getElementById("18-2").style.animation="";
	document.getElementById("18-3Cap").style.animation="";
	document.getElementById("18-32").style.animation="";
	document.getElementById("18-2samp").style.animation="";
	document.getElementById("18-2samp3").style.animation="";
	document.getElementById("18-2samp4").style.animation="";
}
