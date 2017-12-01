$(document).ready(function(){
  $("form#quiz").submit(function(){
    event.preventDefault();
    var activityLevel = $("input:radio[name=activityLevel]:checked").val();

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
