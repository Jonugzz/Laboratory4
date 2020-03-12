function calculator() {
	
	let input = document.getElementsByClassName("inputNumber");
	let res = document.getElementById("resultValue");
	let clog = document.getElementById("logInformation");
	let calcres = 0;
	let auxLog = "";
	let lop = "";
	
	let rt = document.getElementsByClassName("resetButton");
	let eq = document.getElementsByClassName("equalButton");
	let plus = document.getElementById("addButton");
	let sub = document.getElementById("substractButton");
	let mul = document.getElementById("multiplicationButton");
	let div = document.getElementById("divisionButton");
	
	
	rt[0].addEventListener( "click" , ( event ) => {
		event.preventDefault();
		input[0].value = "";
		calcres = 0;
		res.value = "";
	});
	
	eq[0].addEventListener( "click" , ( event ) => {
		event.preventDefault();
		lop = auxLog.slice(-2);
		calcres = addCalc(lop,calcres,Number(input[0].value));
		auxLog = auxLog + input[0].value;
		res.value = calcres.toString();
		auxLog = auxLog + " = " + res.value;
		calcres = 0;
		if (clog.value == "")
		{
			clog.value = auxLog;
		}
		else
		{
			clog.value = clog.value + "\n" + auxLog;
		}
		auxLog = "";
		input[0].value = "";
		
	});
	
	plus.addEventListener( "click" , ( event ) => {
		event.preventDefault();
		if (calcres == 0)
		{
			calcres = calcres + Number(input[0].value);
		}
		else
		{	
			lop = auxLog.slice(-2);
			calcres = addCalc(lop,calcres,Number(input[0].value));
		}
		auxLog = auxLog + input[0].value + " + ";
		input[0].value = "";
		
	});
	
	sub.addEventListener( "click" , ( event ) => {
		event.preventDefault();
		if (calcres == 0)
		{
			calcres = calcres + Number(input[0].value);
		}
		else
		{	
			lop = auxLog.slice(-2);
			calcres = addCalc(lop,calcres,Number(input[0].value));
		}
		auxLog = auxLog + input[0].value + " - ";
		input[0].value = "";
	
	});
	
	mul.addEventListener( "click" , ( event ) => {
		event.preventDefault();
		if (calcres == 0)
		{
			calcres = calcres + Number(input[0].value);
		}
		else
		{	
			lop = auxLog.slice(-2);
			calcres = addCalc(lop,calcres,Number(input[0].value));
		}
		auxLog = auxLog + input[0].value + " * ";
		input[0].value = "";
		
	});
	
	div.addEventListener( "click" , ( event ) => {
		event.preventDefault();
		if (calcres == 0)
		{
			calcres = calcres + Number(input[0].value);
		}
		else
		{	
			lop = auxLog.slice(-2);
			calcres = addCalc(lop,calcres,Number(input[0].value));
		}
		auxLog = auxLog + input[0].value + " / ";
		input[0].value = "";
	});
	
}

function addCalc(oper,cres,nval) {
	if (oper == "+ ") {
		cres = cres + nval;
		return cres;
	}
	else if (oper == "- "){
		cres = cres - nval;
		return cres;
	}
	else if (oper == "* "){
		cres = cres * nval;
		return cres;
	}
	else {
		cres = cres / nval;
		return cres;
	}
}

calculator();