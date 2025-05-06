function hello() {
    const pop = document.getElementById("name");
    const iname = document.getElementById("iname");
    iname.innerHTML = pop.value;
    const up = document.getElementById("address");
    const iaddress = document.getElementById("iaddress");
    iaddress.innerHTML = up.value;
    const parent = document.getElementById("parent");
    parent.style = "display: block;";
    
}

