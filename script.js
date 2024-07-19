function validform(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var city=document.validateform.city.value;
    var num=document.validateform.num.value;
    var address=document.validateform.address.value;
    if(fname==null || fname=="")
    {
        alert("First name cannot be blank");
        return false;
    }
    else if(lname==null || lname=="")
    {
        alert("Last name cannot be blank");
        return false;
    }
    else if(city==null || city=="")
    { 
        alert("City cannot be blank");
        return false;
    }
    else if(num.length>10 || num.length<10) 
    {
        alert("Phone Number should be 10 digits");
        return false;
    }
    else if(address==null || address=="")
    {
        alert("Address cannot be blank");
        return false;
    }
}