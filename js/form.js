function ano() {
	
	var data_nasc = document.getElementById("data_nasc");
	var i;
	for(i = 2018; i >= 1920; i--) {
		var otp0 = document.createElement("option");
		otp0.value = i;
		otp0.text = i;
		data_nasc.add(otp0, data_nasc.options[0]);
	
} 

}