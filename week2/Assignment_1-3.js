//Assignment 1: Function and Array


/* Sol.: 寫法一 */
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

//Assignment 2: Object

let obj1 = {
	op: "+",
	n1: 100,
	n2: 1
};
let obj2 = {
	op: "-",
	n1: 100,
	n2: 10
};

function calculate(args){
	let result;
	if(args.op==="+"){result=args.n1+args.n2;}
	else if(args.op==="-"){result=args.n1-args.n2;}
	else{result="Not supported";}
	return result;
}

calculate(obj1);
calculate(obj2);
