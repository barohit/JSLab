function carryOutFunction() {

	var num1 = document.getElementById("number1").value;
	var num2 = document.getElementById("number2").value;


	if (document.getElementById("add").checked == true) {
		var result = (+num1) + (+num2);
		document.write("<!DOCTYPE html><html><head><title> result </title><link type='text/css' rel='stylesheet' href='JSLab.css'></head><body><p id='resultpara'>")
		document.write(result);
		document.write("</p></body></html>"); 
	} else if (document.getElementById("subtract").checked == true) {
		var result = num1 - num2; 
		document.write("<!DOCTYPE html><html><head><title> result </title><link type='text/css' rel='stylesheet' href='JSLab.css'></head><body><p id='resultpara'>" + result + "</p></body></html>"); 
	} else if (document.getElementById("multiply").checked == true) {
		var result = num1 * num2; 
		document.write("<!DOCTYPE html><html><head><title> result </title><link type='text/css' rel='stylesheet' href='JSLab.css'></head><body><p id='resultpara'>" + result + "</p></body></html>");  
	} else if (document.getElementById("divide").checked == true) {
		var result = num1 / num2; 
		document.write("<!DOCTYPE html><html><head><title> result </title><link type='text/css' rel='stylesheet' href='JSLab.css'></head><body><p id='resultpara'>" + result + "</p></body></html>"); 
	}


};


