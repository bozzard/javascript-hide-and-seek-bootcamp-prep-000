/*function getFirstSelector(selector) {
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
*/
function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  console.log('node =' , node);
  let nextNode = node.children[0]
  console.log('nextNode =' , nextNode);
  while (nextNode) {
    node = nextNode
    console.log('node = nextNode ', node);
    nextNode = node.children[0]
    console.log('nextNode = node.children[0] ', nextNode);

  }

  return node
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
console.log('rankedLists = ', rankedLists);
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children
console.log('children of rankedLists[i]', children)
console.log( 'i= ', i);

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
      console.log(`inner ${children[j].innerHTML}; children of children[j] ${children[j]}, j ${j}`);
    }
  }
}


function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  var inner =  parseInt(lis[i].innerHTML) + n;

  lis[i].innerHTML = inner.toString()
}
return lis;
}
