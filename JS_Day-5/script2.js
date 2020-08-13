function myfun(){
    var username,password;
    username=document.getElementById("Iduser").value;
    password=document.getElementById("idpassword").value;
    if (username=="admin" && password=="admin"){
        window.alert('Successful Login');
    }    
    else{
        window.alert("Unsuccessful Login");
    }
    
    
}