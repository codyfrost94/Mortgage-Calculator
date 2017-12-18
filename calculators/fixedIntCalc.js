mortgageCalc = function(total, down, interest, years) {
	var principal = total-down;	
	var monthlyInt = (interest/12)/100;	
	var payments = years*12;

	console.log("PRINCIPAL: " + principal);
	console.log("MONTHLY INTEREST: " + monthlyInt);
	console.log("NUMBER OF PAYMENTS: " + payments);

	var monthlyPayment = (monthlyInt*Math.pow((1+monthlyInt), payments))/(Math.pow((1+monthlyInt), payments) -1)*principal;

	console.log(monthlyPayment);
};

mortgageCalc(200000, 0, 6.5, 30);