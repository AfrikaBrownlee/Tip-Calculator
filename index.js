window.addEventListener('load', function(){
 console.log("Hello World!");

//this is to manipulate de Dom
function calculate(){
 let totalBill = document.getElementById("total-bill").value;
   console.log(document.getElementById("total-bill").value);
 let serviceQuality = document.getElementById("how-was").value;
 let peopleCount = document.getElementById("party-total").value;
 let totalTip = totalBill + serviceQuality;
 let myTipAmount = totalTip / peopleCount;
 let p = document.createElement("p");
 p.innerHTML = myTipAmount;
 document.getElementById("tip-content-container").appendChild(p);

}

let submitButton = document.getElementById('calculate-button');

submitButton.onclick = function() { calculate(); event.preventDefault(); };

});
