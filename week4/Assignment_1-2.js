// -----------  Assignment 1: Callback Function  ---------------------------

function delayedResult(n1, n2, delayTime, callback){
  // your code here
  if ( Number.isInteger(n1) &&  Number.isInteger(n2)){
    const sum = n1+n2;
  } else {
    return "Wrong Parameter";
  }
  window.setTimeout(() => {
   callback(sum);
  }, delayTime);

}

delayedResult(4, 5, 3000, function(result){
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function(result){
  window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds
