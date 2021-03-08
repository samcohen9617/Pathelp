var loaded = false;
window.addEventListener("load", function() {
  if (!loaded) {
    var coll = document.getElementsByClassName("collapsibleBtn");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].onclick = function(e) {
        drawerClick(e);
      };
    }
    loaded = true;
  }
});

function drawerClick() {
  var content = document.getElementById("collapsibleDiv");
  if (content.style.maxHeight != "0px") {
    content.style.maxHeight = "0px";
    content.style.display = "none";
  } else {
    content.style.display = "block";
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
