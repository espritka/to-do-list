
function addNewItem() {
	var list = document.getElementById("myList"); // holds <ul>
	var listItem = document.createElement("li");  // creates <li> in <ul>
	
	// creates checkbox
	var checkboksik = document.createElement("input");
	checkboksik.setAttribute("type", "checkbox");
	
	//	gets user's input
	var getUserInput = document.getElementById("userInput");
	var addInputToList = userInput.value;
	
	// puts user's input into <span>
	var spanex = document.createElement("span");
	spanex.innerText = addInputToList;
	spanex.setAttribute("class", "strikethrough")
		
	listItem.appendChild(checkboksik);				// this line puts "checkbox" first in <li>
	listItem.appendChild(spanex);					// this line puts user input after the checkbox in <li>
	list.appendChild(listItem);						// this line puts <li> inside <ul>  
	
	userInput.value = "";							// this makes user input box empty
}

function deleteItem() {
	var list = document.getElementById("myList");
	var listItems = list.children; 					// all <li> elements
	for (var i = 0; i < listItems.length; i++) {
		while(listItems[i] && listItems[i].children[0].checked) {
			list.removeChild(listItems[i]);
		}
		//li = listItems[i]; 						// current <li>
		//checkboksik = li.children[0];				// it works like a vector, [0] is the first element which is a checkbox. [1] is a span 
		//if (checkboksik.checked) {
		//	list.removeChild(li);
		//}
	}
}

var addButton = document.getElementById("button1");
addButton.onclick = addNewItem;

var delButton = document.getElementById("button2");
delButton.onclick = deleteItem;

//window.onload = addNewItem;
