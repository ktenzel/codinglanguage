$(document).ready(function(){
//backend logic

  function java(input1, input2, input3, input4, input5){
    if ((input1 + input2 + input3 + input4 + input5) > 18) {
      return true;
    } else {
      return false;
    }
  }

  function ruby(input1, input2, input3, input4, input5){
    if ((input1 + input2 + input3 + input4 + input5) <= 18) && (input1 + input2 + input3 + input4 + input5) >= 10) {
      return true;
    } else {
      return false;
    }
  }

  function react(input1, input2, input3, input4, input5){
    if ((input1 + input2 + input3 + input4 + input5) < 9) {
      return true;
    } else {
      return false;
    }
  }
  $("form#whatLanguage").submit(function(){
    event.preventDefault();


    else if java()
   else {
      console.log("else");
    }
  })
})
