function menu_action(){
    var btn = document.getElementById("menu");
    if (btn.classList.contains("open")){
        btn.classList.remove("open");
    }else{
        btn.classList.add("open");
    }
}