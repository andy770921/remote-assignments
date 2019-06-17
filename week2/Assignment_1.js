function max(...numbers){
	let array = [...numbers];
	let a = array[0];
	for (let i = 1; i < array.length ; i++){
		if (a < array[i]){ a = array[i]; }
	}
	return a;
}
console.log(max(1,2,7,5,4));
