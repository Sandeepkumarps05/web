function icon() {

   var icons=document.getElementById("icons")
   document.body.classList.toggle("dark-theam");
if(document.body.classList.contains("dark-theam"))
{
  icons.src="Assests/darkmode.png";
}
else{
   icons.src="Assests/light.png";
}

}

