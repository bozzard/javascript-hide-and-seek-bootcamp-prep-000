function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(nested, target) {
//  var b = document.getElementById(`${nested}`).querySelectorAll(`div.${target}`);  //wtf
return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  var inner =  parseInt(lis[i].innerHTML) + n;

  lis[i].innerHTML = inner.toString()
}
return lis;
}

function deepestChild() {
var lis = document.getElementById('grand-node').querySelectorAll('div');
var l = (lis.length-1);
return lis[l];

}
