function calculate() {
  var bill = document.getElementById("bill").value;
  var people = document.getElementById("people").value;
  var service = document.getElementById("service").value;
  var total = (bill * (service/100))/people;

  document.getElementById("text1").innerHTML = "Tip amount";
  document.getElementById("result").innerHTML = `$${total}`;
  document.getElementById("text2").innerHTML = "each";
}
