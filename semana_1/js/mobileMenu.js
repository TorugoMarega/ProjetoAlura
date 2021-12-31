const btnMobile = document.getElementById('btn-mobile'); 
function toggleMenu(event){
 
    if (event.type=='touchstart')
        event.preventDefault()
        const nav = document.getElementById('nav-mobile');
        nav.classList.toggle('active');     
    }


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu, );

function showSearch() {
    var checkBox = document.getElementById("lupa");
    var searchBar = document.getElementById("mobileSearch");
    var btnSearch = document.getElementById("btn-lupa");
  
    if (checkBox.checked == true){
        btnSearch.style.background = "#1E334E";
        searchBar.style.display = "block";

    } else {
        btnSearch.style.background = "none"
        searchBar.style.display = "none";
    }
  }