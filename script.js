	var space = document.getElementById("spc");
	var img	= document.getElementById("image");
	var blur = document.getElementById("blr");
	var js = document.getElementsByClassName("h1")[0];
	var color = document.getElementById("clr");
	var tswr = document.getElementById("tswira");

	function spacing (i){
		img.style.padding = i + "px" ;
	}
	 function blurr (j){
		 tswr.style="filter : blur("+ j +"px)";
	 }
	function coloring (k){
		js.style.color = k;
		img.style.background = k;
	}




	/* function test(e) {
		document.getElementById('tswira').style.padding = e + "px";
	}
	 function blr(i) {
		document.getElementById('tswira').style = "filter : blur("+ i +"px)";
	}
	function clr(c) {
		console.log(c);
		document.getElementById('tswira').style.background =c ;
	}
	*/