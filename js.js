function invertfun(element){
    console.log(element.textContent);
    if(element.textContent == "Login") element.textContent = "Logout";
    else if(element.textContent == "Logout") element.textContent = "Login";
}

function deleteButton(element){
    element.remove();
}