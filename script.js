function number1(x) {
	return x * 5;
};

function number2(x) {
	x = x + 50;
	x = x * 3;
	return x;
};

function number3(x) {
	return x * 10;
};

console.log(number1(number2(number3(5))));