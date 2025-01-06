// Wrap the entire script in an IIFE to avoid polluting the global scope
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    // Step 2: Fix the provided "speakHello" function library
    var speakHello = (function () {
      var speakWord = "Hello";
      return function (name) {
        console.log(speakWord + " " + name);
      };
    })();
  
    // Step 3: Fix the provided "speakGoodbye" function library
    var speakGoodbye = (function () {
      var speakWord = "Goodbye";
      return function (name) {
        console.log(speakWord + " " + name);
      };
    })();
  
    // Step 4: Loop over the names array and invoke appropriate function
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      // Step 5: Use speakGoodbye or speakHello based on the first letter
      if (firstLetter === 'j') {
        speakGoodbye(names[i]);
      } else {
        speakHello(names[i]);
      }
    }
  })();
  