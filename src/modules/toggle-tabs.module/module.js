const integrationRows = Array.prototype.slice.call( document.querySelectorAll(".vmc-row") );

const rowImgs = Array.prototype.slice.call( document.querySelectorAll(".row-img") );

// console.log({integrationRows});

integrationRows.forEach((row, i, all) => {
  row.addEventListener("click", function() {
    // console.log("click");
    // console.log({i});
    all.forEach( (item) => {
      item.classList.remove("active");
    // slideUp(item.querySelector(".vmc-row-description"), 250);

    });
    // const activeText = row.querySelector(".vmc-row-description");

    // console.log({activeText});
    // slideDown(activeText, 250);


    rowImgs.forEach( (img) => {
      img.classList.add("hidden");
    });

    integrationRows[i].classList.add("active");
    rowImgs[i].classList.remove("hidden");
  });
  
});