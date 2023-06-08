const vrItems = Array.prototype.slice.call( document.querySelectorAll(".vr-item") );

const verticalMarker = document.getElementById("vertical-marker");

const scrollSpine = document.getElementById("scroll-spine");


document.addEventListener("DOMContentLoaded", function() {
  vrItems.forEach((row, i, all) => {
  let waypont = new Waypoint({
      element: row,
      handler: function(direction) {

        all.forEach((item, i, all) => {
          item.classList.remove("active");
        });
    
        if(i === 0 ) {
          // First Item
          verticalMarker.style.top = 0 + "px";
        } else if(i === all.length - 1) {
          // Last item
          verticalMarker.style.top = scrollSpine.offsetHeight - verticalMarker.offsetHeight + "px";
        } else {
          verticalMarker.style.top = row.offsetTop + row.querySelector(".vr-img").offsetHeight - 40 +  "px";
        }

        row.classList.add("active");
      },
      offset: function() {
        return Waypoint.viewportHeight() / 2 - verticalMarker.offsetHeight;
      }
    });
  });
});