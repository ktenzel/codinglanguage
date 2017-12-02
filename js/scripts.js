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
    if ((input1 + input2 + input3 + input4 + input5) <= 18 && (input1 + input2 + input3 + input4 + input5) >= 10) {
      return true;
    } else {
      return false;
    }
  }

  function react(input1, input2, input3, input4, input5){
    if ((input1 + input2 + input3 + input4 + input5) <= 9) {
      return true;
    } else {
      return false;
    }
  }
  $("form#whatLanguage").submit(function(){

    var frontEnd = parseInt($("#frontEnd").val());
    var backEnd = parseInt($("#backEnd").val());
    var large = parseInt($("#large").val());
    var small = parseInt($("#small").val());
    var windowsYes = parseInt($("#windowsYes").val());
    var windowsNo = parseInt($("#windowsNo").val());
    var databaseYes = parseInt($("#databaseYes").val());
    var databaseNo = parseInt($("#databaseNo").val());
    var platDesktop = parseInt($("#platDesktop").val());
    var platWeb = parseInt($("#platWeb").val());
    var platMobile = parseInt($("#platMobile").val());

    var FrontendBackend = parseInt($("#FrontendBackend").val());
    var CompanySize = parseInt($("#CompanySize").val());
    var windows = parseInt($("#windows").val());
    var preference = parseInt($("#preference").val());
    var platform = parseInt($("#platform").val());

    var name = $("input#name").val();



    event.preventDefault();
    $(".formOutput").text(name + ", you should try the language ")
    if (java(FrontendBackend, CompanySize, windows, preference, platform)){
      $("#java").fadeIn();
      $("#react").hide();
      $("#ruby").hide();
    } else if (ruby(FrontendBackend, CompanySize, windows, preference, platform)){
      $("#java").hide();
      $("#react").hide();
      $("#ruby").fadeIn();
    } else if (react(FrontendBackend, CompanySize, windows, preference, platform)){
      $("#java").hide();
      $("#react").fadeIn();
      $("#ruby").hide();
    } else {
      console.log("else");
    }
  });
});

// frontEnd, backEnd, large, small, windowsYes, windowsNo, databaseYes, databaseNo, platDesktop, platWeb, platMobile
// FrontendBackend, CompanySize, windows, preference, platform
