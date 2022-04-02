function toggle_proof(pf_id){
    var a = pf_id + "-link";
    var c = pf_id + "-content";

    var x = document.getElementById(pf_id+'-link');
    x.addEventListener('click', function(e) {
        var d = document.getElementById(pf_id+'-content');
		if (d.style.maxHeight == 0 || d.style.maxHeight == "0px"){
            x.innerHTML = "Proof &#9662;";
            d.style.maxHeight = "1000px";
        }
        else{
            x.innerHTML = "Proof &#9656;";
            d.style.maxHeight = 0;
        }
	});
}