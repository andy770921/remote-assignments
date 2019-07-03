// -----------  Assignment 1: Callback Function  ---------------------------

function delayedResult(n1, n2, delayTime, callback){
  // your code here
  if ( Number.isInteger(n1) &&  Number.isInteger(n2)){
    const sum = n1+n2;
    window.setTimeout(() => {
    callback(sum);
    }, delayTime);

  } else {
    return "Wrong Parameter";
  }
}

delayedResult(4, 5, 3000, function(result){
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function(result){
  window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds


// -----------  Assignment 2: Callback Function and Advanced HTML DOM  ---------------------------

function ajax(src, callback){
  // your code here
  var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status == 200) {
        callback(xhr.responseText);
      }
    };
    xhr.open('GET', src);
    xhr.send();
}
function render(data){
  // your code here.
  // document.createElement() and appendChild() methods are preferred.
  let body = document.getElementsByTagName('body')[0];
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  body.appendChild(h3);
  body.appendChild(p);
  h3.innerHTML = 'The response data are as follows:';
  p.innerHTML = data;
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
  render(response);
}); // you should get product information in JSON format and render data in the page
