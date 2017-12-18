var total = process.argv[2];
var down = process.argv[3];
var interest = process.argv[4];
var years = process.argv[5];



mortgageCalc = function(total, down, interest, years) {
	var principal = total-down;	
	var monthlyInt = (interest/12)/100;	
	var payments = years*12;

	console.log("PRINCIPAL: " + principal);
	console.log("MONTHLY INTEREST: " + monthlyInt);
	console.log("NUMBER OF PAYMENTS: " + payments);

	var monthlyPayment = (monthlyInt*Math.pow((1+monthlyInt), payments))/(Math.pow((1+monthlyInt), payments) -1)*principal;

	console.log("MONTHLY PAYMENT: " + monthlyPayment);
};

mortgageCalc(total, down, interest, years);