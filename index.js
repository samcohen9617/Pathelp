var loaded = false;
window.addEventListener("load", function() {
  if (!loaded) {
    var coll = document.getElementsByClassName("collapsibleBtn");
    var startingLeft = document.getElementById("collapsibleDiv1");
    startingLeft.style.display = "block";
    startingLeft.style.maxHeight = startingLeft.scrollHeight + "px";

    for (var i = 0; i < coll.length; i++) {
      coll[i].onclick = function(e) {
        drawerClick(e);
      };
    }
    loaded = true;
  }
});

function drawerClick(e) {
  var id = event.srcElement.id;
  var content = document.getElementById("collapsibleDiv" + id);
  if (content.style.maxHeight == "0px" || content.style.maxHeight == "") {
    {
      for (
        var j = 1;
        j < document.getElementsByClassName("collapsibleBtn").length + 1;
        j++
      ) {
        if (j != id) {
          var otherDrawers = document.getElementById("collapsibleDiv" + j);
          otherDrawers.style.maxHeight = "0px";
          setTimeout(function() {
            otherDrawers.style.display = "none";
          }, 900);
        }
      }
      setTimeout(function() {
        content.style.display = "block";
        content.style.maxHeight = content.scrollHeight + "px";
      }, 500);
    }
  }
}

function expand(side) {
  var columnWrapperToExpand = document.getElementById("columnWrapper" + side);

  //Switching expand button to close button
  var expandButton = columnWrapperToExpand.getElementsByClassName(
    "expandDivOn" + side
  )[0];
  expandButton.style.opacity = 0;

  var evenOutDiv = columnWrapperToExpand.getElementsByClassName(
    "evenOutDiv"
  )[0];
  evenOutDiv.style.display = "block";
  setTimeout(function() {
    evenOutDiv.style.opacity = 1;
  }, 300);

  var otherSide = side == "Left" ? "Right" : "Left";
  var columnWrapperToShrink = document.getElementById(
    "columnWrapper" + otherSide
  );
  columnWrapperToExpand.style.animation = "expand 2s";
  columnWrapperToShrink.style.animation = "shrink 2s";
  setTimeout(function() {
    columnWrapperToExpand.style.flex = 1;
    columnWrapperToShrink.style.flex = 0;
  }, 2000);
}

function evenOut() {
  document.getElementById("columnWrapperRight").style.animation = "even 2s";
  document.getElementById("columnWrapperLeft").style.animation = "even 2s";

  var expandButtonDiv = document.getElementsByClassName("expandDivOnRight")[0];
  expandButtonDiv.style.opacity = 1;
  expandButtonDiv = document.getElementsByClassName("expandDivOnLeft")[0];
  expandButtonDiv.style.opacity = 1;

  var evenOutButtonDivs = document.getElementsByClassName("evenOutDiv");
  for (var i = 0; i < evenOutButtonDivs.length; i++) {
    evenOutButtonDivs[i].style.opacity = 0;
  }
  setTimeout(function() {
    evenOutButtonDivs[0].style.display = "none";
    evenOutButtonDivs[1].style.display = "none";
  }, 500);

  setTimeout(function() {
    document.getElementById("columnWrapperRight").style.flex = 0.5;
    document.getElementById("columnWrapperLeft").style.flex = 0.5;
  }, 2000);
}
