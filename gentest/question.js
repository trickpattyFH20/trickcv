/*
	GENERATOR CHALLENGE
  
	write a function "findGenIndices()" that takes one argument "generator"
  
  "generator" is an ES6 generator function, yielding a random number of integers
  
  findGenIndices() should return an array, with the first item being the 
  second value yielded by the generator, and the next item being the second to last
  value yielded by the generator
  
  -------
  ES6 generator 101:
  
  calling generator.next() will output an object with the following structure:
  {value: any, done: boolean}
  
  each consecutive call of generator.next() will return a new item yielded by the generator
  
*/

///////////////////////////////////////////
// answer below this line

function findGenIndices(generator) {
	
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
