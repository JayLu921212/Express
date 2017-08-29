/**
 * Created by jlu122 on 2017/8/24.
 */

(function () {
	var shadows = document.getElementsByClassName("popup-container");
	var arr = [].slice.call(shadows);
	arr.forEach(function (item) {
		item.onclick = function () {
			event.target.style.display = "none";
		};
		item.firstElementChild.onclick = function () {
			event.stopPropagation();
		};
		var footerBtns = item.firstElementChild.lastElementChild.children;
		var btns = [].slice.call(footerBtns);
		btns.forEach(function (item) {
			if (item.className === "popup-btn-cancel") {
				item.onclick = function () {
					item.parentElement.parentElement.parentElement.style.display = "none";
				}
			// } else if (item.className === "popup-btn-add") {
			// 	//do sth to add fn here
			// 	console.log("do sth to add fn here");
			// } else if (item.className === "popup-btn-confirm") {
			//
			}
		});
	});
	
	document.getElementById("slider-add").onclick = function () {
		document.getElementById("add-popup-container").style.display = "block";
		document.getElementById("add-popup-container").firstElementChild.lastElementChild.firstElementChild.onclick = function () {
			//add slider here
			event.target.parentElement.parentElement.parentElement.style.display = "none";
		}
	};
	document.getElementById("slider-search").onclick = function () {
		document.getElementById("search-popup-container").style.display = "block";
		document.getElementById("search-popup-container").firstElementChild.lastElementChild.firstElementChild.onclick = function () {
			//search slider here
			event.target.parentElement.parentElement.parentElement.style.display = "none";
		}
	}
	
	var listArray  = [].slice.call(document.getElementsByClassName("section-list"));
	listArray.forEach(function (item) {
		bindListEvent(item);
	});
	
	document.getElementById("add-list").onclick =  function () {
		document.getElementById("add-popup-container").style.display = "block";
		document.getElementById("add-popup-container").firstElementChild.lastElementChild.firstElementChild.onclick = function () {
			//add list here
			// hardcode data
			var data = "123";
			var li = createListItem(data);
			document.getElementById("list").append(li);
			event.target.parentElement.parentElement.parentElement.style.display = "none";
		}
	}
	
	
	function createListItem (data) {
		var list = document.createElement("li");
		list.className = "section-list";
		var span = document.createElement("span");
		span.className = "list-name";
		span.innerText = data;
		list.appendChild(span);
		var div =  document.createElement("div");
		div.className = "list-icon";
		list.append(div);
		bindListEvent(list);
		return list
	}
	
	function bindListEvent (item) {
		item.lastElementChild.onclick =  function () {
			// item.remove();
			var target = event.target;
			document.getElementById("confirm-popup-container").style.display = "block";
			document.getElementById("confirm-popup-container").firstElementChild.lastElementChild.firstElementChild.onclick = function () {
				target.parentElement.remove();
				event.target.parentElement.parentElement.parentElement.style.display = "none";
			}
		};
		item.onclick = function () {
			//do sth to list click action here
			console.log("do sth to list click action here");
		};
	}
})();