window.onload = function(){
	let hello = document.getElementById("change_heading");
	hello.innerText = "Hello World!";

	let sect = document.querySelector("section");
	sect.addEventListener("mouseover",function(event){
		let selectColor = document.querySelector("selected");
		selectColor.innerText = event.target.className;

	})
	let createDiv = document.createElement("div");
		createDiv.className = "purple";
		sect.appendChild(createDiv);
}