$(document).ready(function() {
	
	var acc = document.getElementsByClassName("accordion");	
	var i;

	for (i = 0; i < acc.length; i++) {
  		
  		acc[i].addEventListener("click", function() {
    		this.classList.toggle("active");
    		var panel = this.nextElementSibling;
    		if (panel.style.maxHeight){
      			panel.style.maxHeight = null;
      			$("#events-body").height($("#events-body").height()-200);
    		} else {
      			panel.style.maxHeight = panel.scrollHeight + "px";
      			$("#events-body").height($("#events-body").height()+200);
    		} 
  		});
	}
});