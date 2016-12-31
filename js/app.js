jQuery(document).ready(function() {
  
//variable array for operators and decimal
  var operators = ["+", "-", "*", "/", "."];
  
  //variable to prevent putting double decimal numbers
  var decimal = false;
  
  //variable to prevent putting a decimal or number onto the totaled number after hitting equal
  var equalize = false;
  
  //prevents putting double decimals or operators
  function doubleOperators() {
    //last character of the input
    var lastChar = $(".input-chain").text().slice(-1);
    //cycles through the operators
    for (var i = 0; i < operators.length; i++) {
      //if any operators are the last character it returns true which works for for later
      if (operators[i] == lastChar) {
        return true;
      }
    }
  }
  
  //removes the starting 0 from the beginning when inputting a number
  function removeZero() {
    var firstChar = $(".input-chain").text().slice(0);
    if(firstChar === "0") {
      $(".input-chain").text("");
    }
  }
  
  //function that starts the chain over if inputting a number or decimal after hitting equal
  function equalizeCheck() {
    
    if(equalize === true) {
      $(".input-field").text("0");
      $(".input-chain").text("0");
      equalize = false;
    }
    else {
      
    }
  }
  
  
  //click each number to add that number to what is already in the chain, removes 0 from beginning, starts chain over if hitting number after hitting equal
  $(".zero").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "0");
  });
  
  $(".one").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "1");
  });
  
  $(".two").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "2");
  });
  
  $(".three").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "3");
  });
  
  $(".four").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "4");
  });
  
  $(".five").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "5");
  });
  
  $(".six").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "6");
  });
  
  $(".seven").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "7");
  });
  
  $(".eight").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "8");
  });
  
  $(".nine").click(function() {
    equalizeCheck();
    removeZero();
    $(".input-chain").text($(".input-chain").text() + "9");
  });
  
  
  //same as numbers but makes an error if you put 2 operators/decimals in a row
  $(".decimal").click(function() {
    doubleOperators();
    if(doubleOperators() === true || decimal === true) {
 
    } else {
        $(".input-chain").text($(".input-chain").text() + ".");
        decimal = true;
    }
  });
  
  //adds addition operator. operators make sure there isn't 2 in a row.
  $(".add").click(function() {
    doubleOperators();
    if(doubleOperators() === true) {
 
    } else {
        $(".input-chain").text($(".input-chain").text() + "+");
        decimal = false;
    }
    equalize = false;
  });
  
  //adds subtraction operator. operators make sure there isn't 2 in a row.
  $(".subtract").click(function() {
    doubleOperators();
    if(doubleOperators() === true) {
 
    } else {
        $(".input-chain").text($(".input-chain").text() + "-");
        decimal = false;
    }
    equalize = false;
  });
  
  //adds multiplication operator. operators make sure there isn't 2 in a row.
  $(".multiply").click(function() {
    doubleOperators();
    if(doubleOperators() === true) {
 
    } else {
        $(".input-chain").text($(".input-chain").text() + "*");
        decimal = false;
    }
    equalize = false;
  });
  
  //adds division operator. operators make sure there isn't 2 in a row.
  $(".divide").click(function() {
    doubleOperators();
    if(doubleOperators() === true) {
 
    }
    else {
        $(".input-chain").text($(".input-chain").text() + "/");
        decimal = false;
    }
    equalize = false;
  });
  
  //clears both fields to 0, resets equalize, allows decimal placement
  $(".clear").click(function() {
    $(".input-field").text("0");
    $(".input-chain").text("0");
    decimal = false;
    equalize = false;
  });
  
  //finds the total, activates equalize to prevent adding numbers onto the total without an operator
  $(".equal").click(function() {
    $(".input-field").text(eval($(".input-chain").text()));
    $(".input-chain").text(eval($(".input-chain").text()));
    equalize = true;
  });
  
  
  
  
});