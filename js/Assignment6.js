function MenuChoice()
{
    if (document.getElementById("menu").value == "Create Customer")
    {
        document.getElementById("showarea1").style.visibility = "visible";
        document.getElementById("showarea2").style.visibility = "hidden";
        document.getElementById("showarea3").style.visibility = "hidden";
    }
    else if  (document.getElementById("menu").value == "Update Order Address")
    {
        document.getElementById("showarea1").style.visibility = "hidden";
        document.getElementById("showarea2").style.visibility = "visible";
        document.getElementById("showarea3").style.visibility = "hidden";
    }
     else if  (document.getElementById("menu").value == "Delete Customer")
    {
        document.getElementById("showarea1").style.visibility = "hidden";
        document.getElementById("showarea2").style.visibility = "hidden";
        document.getElementById("showarea3").style.visibility = "visible";
    }
    else 
    {
      document.getElementById("showarea1").style.visibility = "hidden";
      document.getElementById("showarea2").style.visibility = "hidden";
      document.getElementById("showarea3").style.visibility = "hidden";
    }
}
    
    

