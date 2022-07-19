const toggleSearch = document.querySelector("button");
//console.log(toggleSearch);
const searchBar = document.querySelector("input");
//console.log(searchBar);

//It is possible to use display none but you will not get the transition effect.
toggleSearch.addEventListener("click", () => {
    if(getComputedStyle(searchBar).opacity != "1"){
        searchBar.style.opacity = "1";
    } else {
        searchBar.style.opacity = "0";
    }
  })

  