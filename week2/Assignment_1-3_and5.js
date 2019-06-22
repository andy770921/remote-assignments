//Assignment 1: Function and Array

/* Sol.: 寫法一 
/*function max(...numbers){
	let array = [...numbers];
	let a = array[0];
	for (let i = 1; i < array.length ; i++){
		if (a < array[i]){ a = array[i]; }
	}
	return a;
}
*/
/* Sol.: 寫法二 */
function max(...numbers){
	let array = [...numbers];
	a = array[0];
	array.forEach(function(element){
		if (element > a){ a = element; }
	});
	return a;
}

console.log(max(1,2,7,5,4));

//-----------------------------------------
//Assignment 2: Object

let obj1 = {
	op: "+",
	n1: 100,
	n2: 1
};

let obj2 = {};
obj2.op= "-";
obj2.n1= 100;
obj2.n2= 10;

function calculate(args){
	let result;
	if(args.op==="+"){result=args.n1+args.n2;}
	else if(args.op==="-"){result=args.n1-args.n2;}
	else{result="Not supported";}
	return result;
}

calculate(obj1);
calculate(obj2);

//-----------------------------------------
//Assignment 3: Function, Array, and Object
// Complete the function below to calculate the average price of all the products.

function avg(data){
	// your code here
	let a = 0;
	data.products.forEach(function(element){
		a += element.price;
	});
	return a / data.size;
}
avg({
	size:3,
	products:[
		{name:"Product 1", price:100},
		{name:"Product 2", price:700},
		{name:"Product 3", price:250}
	]
}); // show the average price of all products


//-----------------------------------------
//Assignment 5: Algorithm Practice (Advanced Optional)

function twoSum(nums, target){
	// your code here
	let index1 = "";
	let index2 = "";
	for (i = 0 ; i < nums.length ; i++){
		for (j = i ; j < nums.length ; j++){
			if (nums[i] + nums[j] == target){
				index1 = i;
				index2 = j;
			};
		};
	};
	if ( Number.isInteger(index1) & Number.isInteger(index2)) {
		return [index1, index2];
	}
	else {
		return "no matched number";
	}
}
console.log(twoSum([2, 7, 11, 15], 9));  
console.log(twoSum([2, 8, 11, 15], 9)); 
// twoSum([2, 7, 11, 15], 9)
// returns: [0, 1]   Because: nums[0]+nums[1] is 9




