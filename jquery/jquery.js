//jquery
//change font size
function changeSize(e) {
    $("#text").css("font-size", e.target.value + "px");
  }
  
  // change font family
  function changeFont(e) {
    $("#text").css("font-family", e.target.value);
  }
  
  // change font weight
  function changeBold() {
    var fontweight = $("textarea").css("font-weight");
    if (fontweight > 400) {
      $("textarea").css("font-weight", "");
    } else {
      $("textarea").css("font-weight", "bold");
    }
  }




  function changeItalic() {
    var fontStyle = $("textarea").css("font-style");
    if (fontStyle == "italic") {
      $("textarea").css("font-style", "");
    } else {
      $("textarea").css("font-style", "italic");
    }
  }
  
  function changeUnderlined() {
    var textDecoration = $("textarea").css("text-decoration-line");
    textDecoration == "underline"
      ? $("textarea").css("text-decoration", "none")
      : $("textarea").css("text-decoration", "underline");
  }
  function leftMe() {
    $("#text").css("text-align", "left");
  }
  function centerMe() {
    $("#text").css("text-align", "center");
  }
  function rightMe() {
    $("#text").css("text-align", "right");
  }
  