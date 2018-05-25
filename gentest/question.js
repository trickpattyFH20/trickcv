/*
	gen CHALLENGE

  <h4> ES6 gen tips: </h4>

  function* gen(i) {
    yield 'foo';
    yield 'bar';
    yield 'baz';
  }

  calling gen.next() will return an object with the following structure:

  {
    value: any,
    done: boolean
  }

  each time gen.next() is called it will return the next item yielded by gen

  --------------------------------------------------------------

  <h4> Challenge: </h4>

  - write a function called "findGenIndices(gen, n)" that takes two arguments "gen" and "n"

  - "gen" is an ES6 gen function that will yield an unknown number of times

  - findGenIndices() should return an array of two values.
    The first item in the returned array should be the "nth" value yielded by the gen.
    The second item in the returned array should be the item yielded "n" iterations before the gen completes

  - assume that that "n" is always less than or equal to the number of times the gen will yield


  --------------------------------------------------------------

*/

///////////////////////////////////////////
// answer below this line

function findGenIndices(gen) {

}


// answer above this line
///////////////////////////////////////////

let xmlGet = new XMLHttpRequest();
xmlGet.onreadystatechange = () => {
  if (xmlGet.readyState == 4 && xmlGet.status == 200){
    let cases = JSON.parse(xmlGet.responseText),
    		answers = [];
		for(var i=0,len=cases.length;i < len; i++){
    	let gen = function *testGen() {
      	for(var j=0,leng=cases[i].length;j < leng; j++){
        	yield cases[i][j];
        }
      }
      answers.push(findGenIndices(gen()));
    }
    testAnswers(answers);
  }
}
xmlGet.open("GET", 'https://trickpatty.io/gentest', true);
xmlGet.send();

function testAnswers(answers) {
  let xmlPost=new XMLHttpRequest();
  xmlPost.open("POST", 'https://trickpatty.io/gentest');
  xmlPost.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xmlPost.onreadystatechange = () => {
      if (xmlPost.readyState == XMLHttpRequest.DONE) {
          if(xmlPost.status == 200){
              console.log('Response: ' + xmlPost.responseText );
          }else{
              console.log('Error: ' + xmlPost.statusText )
          }
      }
  }
  xmlPost.send(JSON.stringify(answers));
}
