function email() {
    var mail = "ma" + "il" + "to" + ":" + "jhx" + "0x00" + "@" + "gm" + "ail" + ".com";
    
    var elements = document.querySelectorAll("#email")

    for(var i = 0; i < elements.length; i++) 
        elements[i].href = mail;
}