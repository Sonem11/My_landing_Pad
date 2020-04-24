﻿// JavaScript Document

window.attachEvent ('onresize', alertSize);

function alertSize() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) 
  {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } 
  else if( document.documentElement &&
      	 ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) 
  {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } 
  else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) 
  {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  //alert(myWidth + " x " + myHeight);
  setLayerSize(myWidth);
}


function setLayerSize(wi)
{

	var leftCell 	= document.getElementById('leftCell');
	var rightCell 	= document.getElementById('rightCell');

	
	if(wi<1002) {
		
	}else{
	
		var rest = wi - 1000;
		leftCell.style.width  = rest/2 + 'px';
		rightCell.style.width  = rest/2 +'px';
		
	}
	
	//alert('leftCell.style.width ' + leftCell.style.width + '\nrightCell.style.width ' + rightCell.style.width);
	
}