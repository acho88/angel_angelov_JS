var targer, tableEl, tdEl, tr3El, imgEl,aEl, x, y, row;
target = document.getElementById('wrapper');
x=0;
var count=0;
row = 6;

	arr = new Array(3);
	tableEl = document.createElement('table');
	target.appendChild(tableEl);
	for(var i = 0; i < row; i++){
		x++
		arr[i]=new Array(5);
		trEl = document.createElement('tr');
		trEl.setAttribute('id', 'tr'+i);
		tableEl.appendChild(trEl);
		for(var j = 0; j < row; j++){
			tdEl = document.createElement('td');
			trEl.appendChild(tdEl);
			var len = row-1;
			if(i==0 && j > 0 && j < len){
				var mid = 'Top';
				tdEl.setAttribute('class', 'top'+j);
			}else if(i == 0 && j==0){
				tdEl.setAttribute('class', 'topLeft');
			}else if(j==0 && i > 0 && i < len){
				tdEl.setAttribute('class', 'left');
			}else if(j==len && i > 0 && i < len){
				tdEl.setAttribute('class', 'right');
			}else if(i==len && j > 0 && j < len){
				tdEl.setAttribute('class', 'bottom'+j);
			}else if(i==0 && j == len){
				tdEl.setAttribute('class', 'topRight');
			}else if(i==len && j == 0){
				tdEl.setAttribute('class', 'bottomLeft');
			}else if(i==len && j == len){
				tdEl.setAttribute('class', 'bottomRight');
			}else{
				tdEl.setAttribute('class', 'midle');
			}
			
			arr[i][j] = y;
			y = Math.floor(Math.random() * 3) + 1 ;
			if((arr[0][j+1]+arr[0][j])%2==0){
				tdEl.style.background = "orange";
			}
			if(y==3){
					tdEl.style.background = "red";
			}
			if(y==2){
					tdEl.style.background = "green";
			}
			if(y==1){
					tdEl.style.background = "blue";
			}	
		}
	}
//move right
$(".topLeft" ).click(function(){
	if($("#tr2 .left").css("background-color")==$("#tr3 .left").css("background-color")&&$("#tr2 .left").css("background-color")==$("#tr0 .topLeft" ).css("background-color")){
		var color = $("#tr0 .topLeft" ).css("background-color")
		console.log(color);
		var color1 = $("#tr1 .left" ).css("background-color");
		console.log(color1);
		$("#tr1 .left").click(function(){
		
			$(this).css("background-color",color);
			$("#tr0 .topLeft" ).css("background-color",color1);
		});
		console.log(8);
	}
	if($(".top"+2).css("background-color")==$(".top"+3).css("background-color")&&$(".top"+2).css("background-color")==$(".topLeft" ).css("background-color")){
		var color2 = $(".topLeft" ).css("background-color")
		console.log(color2);
		var color3 = $(".top"+1 ).css("background-color");
		console.log(color3);
		$(".top"+1).click(function(){
		
			$(this).css("background-color",color2);
			$(".topLeft" ).css("background-color",color3);
		});
		console.log(8);
	}
});
$(".bottomLeft" ).click(function(){
	if($("#tr"+(len-2)+" .left").css("background-color")==$("#tr"+(len-3)+" .left").css("background-color")&&$("#tr"+(len-3)+" .left").css("background-color")==$(".bottomLeft" ).css("background-color")){
		color = $(".bottomLeft" ).css("background-color")
		color1 = $("#tr"+(len-1)+" .left" ).css("background-color");
		console.log(color1);
		$("#tr"+(len-1)+" .left").click(function(){
		
			$(this).css("background-color",color);
			$(".bottomLeft" ).css("background-color",color1);
		});
	}
	if($(".bottom"+2).css("background-color")==$(".bottom"+3).css("background-color")&&$(".bottom"+2).css("background-color")==$(".bottomLeft" ).css("background-color")){
		color2 = $(".bottomLeft" ).css("background-color")
		color3 = $(".bottom"+1).css("background-color")
		console.log(color3);
		$(".bottom"+1).click(function(){
			console.log(true);
			$(this).css("background-color",color2);
			$(".bottomLeft" ).css("background-color",color3);
		});
	}
});
//move left
$(".topRight" ).click(function(){
	if($("#tr2 .right").css("background-color")==$("#tr3 .right").css("background-color")&&$("#tr2 .right").css("background-color")==$("#tr0 .topRight" ).css("background-color")){
		var color = $("#tr0 .topRight" ).css("background-color")
		console.log(color);
		var color1 = $("#tr1 .right" ).css("background-color");
		console.log(color1);
		$("#tr1 .right").click(function(){
		
			$(this).css("background-color",color);
			$("#tr0 .topRight" ).css("background-color",color1);
		});
		console.log(8);
	}
	if($(".top"+(len-2)).css("background-color")==$(".top"+(len-3)).css("background-color")&&$(".top"+(len-2)).css("background-color")==$(".topRight" ).css("background-color")){
		color2 = $(".topRight" ).css("background-color")
		color3 = $(".top"+(len-1)).css("background-color");
		console.log(color2);
		$(".top"+(len-1)).click(function(){
		console.log(8);
			$(this).css("background-color",color2);
			$(".topRight" ).css("background-color",color3);
		});
		
	}
});
$(".bottomRight" ).click(function(){
	if($("#tr"+(len-2)+" .right").css("background-color")==$("#tr"+(len-3)+" .right").css("background-color")&&$("#tr"+(len-3)+" .right").css("background-color")==$(".bottomRight" ).css("background-color")){
		color = $(".bottomRight" ).css("background-color")
		color1 = $("#tr"+(len-1)+" .right" ).css("background-color");
		console.log(color1);
		$("#tr"+(len-1)+" .right").click(function(){
			console.log(true);
			$(this).css("background-color",color);
			$(".bottomRight" ).css("background-color",color1);
		});
	}
	if($(".bottom"+(len-2)).css("background-color")==$(".bottom"+(len-3)).css("background-color")&&$(".bottom"+(len-2)).css("background-color")==$(".bottomRight" ).css("background-color")){
		color2 = $(".bottomRight" ).css("background-color");
		color3 = $(".bottom"+(len-1)).css("background-color");
		console.log(color3);
		$(".bottom"+(len-1)).click(function(){
			console.log(true);
			$(this).css("background-color",color2);
			$(".bottomRight" ).css("background-color",color3);
		});
	}
});
$(".left").click(function(){
	
	$(".bottom"+(len-1)).css("background-color")

});
    $('.midle').mouseover(function(){
		
		$('li').css('display', 'inline-block');
    });
    $('.midle').mouseout(function(){
		$('li').css('display', 'none');	
    });

    $('.left').mouseover(function(){
		
		$('.R').css('display', 'inline-block');
		$('.D').css('display', 'inline-block');
		$('.U').css('display', 'inline-block');
    });
    $('.left').mouseout(function(){
		$('.R').css('display', 'none');	
		$('.D').css('display', 'none');
		$('.U').css('display', 'none');
    });
	 $('.right').mouseover(function(){
		
		$('.L').css('display', 'inline-block');
		$('.D').css('display', 'inline-block');
		$('.U').css('display', 'inline-block');
    });
    $('.right').mouseout(function(){
		$('.L').css('display', 'none');	
		$('.D').css('display', 'none');
		$('.U').css('display', 'none');
    });
for(var k=0; k<len; k++){
	$('.top'+k).mouseover(function(){
		
		$('.L').css('display', 'inline-block');
		$('.R').css('display', 'inline-block');
		$('.D').css('display', 'inline-block');
    });
    $('.top'+k).mouseout(function(){
		$('.L').css('display', 'none');	
		$('.R').css('display', 'none');
		$('.D').css('display', 'none');
    });
	$('.bottom'+k).mouseover(function(){
		
		$('.L').css('display', 'inline-block');
		$('.R').css('display', 'inline-block');
		$('.U').css('display', 'inline-block');
    });
    $('.bottom'+k).mouseout(function(){
		$('.L').css('display', 'none');	
		$('.R').css('display', 'none');
		$('.U').css('display', 'none');
    });
}
$('.topRight').mouseover(function(){
		$('.L').css('display', 'inline-block');
		$('.D').css('display', 'inline-block');
    });
$('.topRight').mouseout(function(){
	$('.L').css('display', 'none');	
	$('.D').css('display', 'none');
});
$('.bottomRight').mouseover(function(){
	$('.L').css('display', 'inline-block');
	$('.U').css('display', 'inline-block');
    });
$('.bottomRight').mouseout(function(){
	$('.L').css('display', 'none');	
	$('.U').css('display', 'none');
});
$('.topLeft').mouseover(function(){
		$('.R').css('display', 'inline-block');
		$('.D').css('display', 'inline-block');
    });
$('.topLeft').mouseout(function(){
	$('.R').css('display', 'none');	
	$('.D').css('display', 'none');
});
$('.bottomLeft').mouseover(function(){
	$('.R').css('display', 'inline-block');
	$('.U').css('display', 'inline-block');
    });
$('.bottomLeft').mouseout(function(){
	$('.R').css('display', 'none');	
	$('.U').css('display', 'none');
});

	