function assert(text, one, two){
  var div = document.createElement("div");

  var title = document.createElement("strong");
  title.innerHTML = text + ":";

  var content = document.createElement("span")
  content.innerHTML = "<br> Expected " + two + "<br> Got " + one
  one === two ? div.classList.add("pass") : div.classList.add("fail")

  div.appendChild(title);
  div.appendChild(content);
  document.body.appendChild(div);
}

assert("add(1,2)", add(1,2), 3);
assert("subtract(2,1)", subtract(2,1), 1);
