
function calc() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var intNum1=parseInt(num1);
		var intNum2=parseInt(num2);
		var p=document.getElementById("result");
	if(intNum1>intNum2)
	{
		p.innerHTML=intNum1;
	}
		p.innerHTML=intNum2;

	}

