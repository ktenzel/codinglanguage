$(document).ready(function(){
  $("form#whatLanguage").submit(function(){
    event.preventDefault();

    if (activityLevel === "notActive") {
      result = add()
    } else if (activityLevel === "mildlyActive") {
      result = add
    } else if (activityLevel === "overlyActive") {
      result = add()
    } else {
      console.log("else");
    }
  })
})
