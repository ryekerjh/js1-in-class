// const best = 'Cool Whip';
// 
// function(err) {
//   console.log(err);
// }('Ryeker');

// logLastName('McMann');
// 
// function logLastName(Lastname) {
//   console.log(Lastname);
// };
// 
// //function EXPRESSION 
// var logName = function(name) {
//   let me = 'Ryan';
//   var you = 'Ryeker';
//   console.log(name);
// };
// 
// var nameToLog = prompt('gimme a name');
// // logName(nameToLog);
// 
// //Global scope
// var task = 'teach to swim';
// var time = 2;
// function doWork(a, b) {
//   //doWork scope
//   var rate = 50;
//   function calcTime(time) {
//     //calcTime Scope
//       return time * 50;
//   };
//   var totalTime = calcTime(time);
//   doWork();
// };
// 
// billClient(a, n) {
//   
// }

// doWork(task, time);
 var sentence = prompt('Tell me a story.');
function capitalize(string) {
    var sentences = string.split('.');
    console.log(sentences);
    if(sentences.length > 2) {
      let newSentence;
      let i = 0;
      for(i; i <= sentences.length; i++) {
        var firstLetter = sentences[i].substr(0,1).toUpperCase();
        var rest = sentences[i].substr(1).toLowerCase();
         newSentence += `${firstLetter}${rest}.`;
      }
      return newSentence;
  }

};


// alert(capitalize(sentence));

myNewFunc(arg1, arg2) {
  return arg1 * arg2;
}











//
