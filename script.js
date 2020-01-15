colorPicker1 = document.querySelector("#color1");
colorPicker2 = document.querySelector("#color2");

function colorGenerator() {
    document.querySelector("body").style.background = "linear-gradient(to right,"+colorPicker1.value+","+colorPicker2.value+")";
    document.querySelector("h3").textContent = 'Generated Value: "linear-gradient(to right,'+colorPicker1.value+','+colorPicker2.value+')"';
}

colorPicker1.addEventListener("input",colorGenerator)
colorPicker2.addEventListener("input",colorGenerator)