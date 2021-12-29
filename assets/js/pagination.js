const curr_page = parseInt('{{paginator.page}}');
const total_page = parseInt('{{paginator.total_pages}}');
const pageurl = '{{page.url}}';

// step 1: find base url for the first page according to pageurl
var baseurl = '{{site.baseurl}}';
if (curr_page == 1){
    baseurl = baseurl + pageurl.replace("index.html", "");
}
else{
    baseurl = baseurl + pageurl.replace("page"+curr_page+"/index.html", "");
}

// step 2: discuss four cases to and generate the corresponding tabel.
if (total_page <= 3){
    var table_col = total_page;
    generateTable(table_col, curr_page, baseurl);

    for (var i = 1; i <= total_page; i++){
      var col = pg_col - pg_total + i;
      var flag = 1;
      var pgurl = baseurl;
      // find proper flag, pgurl, content
      if (i == curr_page){ 
        flag = 0; 
      }
      if (i != 1) { 
        pgurl = pgurl + "page" + i; 
      }
      content = i.toString();
      createPageIcon(flag, content, col, pgurl);
    }
  }
  else{
    if (pg <= 2){ // case 1: pg = 1 or 2, no first and pre icons
      for (var i = 1; i <= 3; i++){
        var col = pg_col - 5 + i;
        var flag = 1;
        var pgurl = baseurl;
        if (i == pg){
          flag = 0;
        }
        if (i != 1) { 
          pgurl = pgurl + "page" + i; 
        }
        content = i.toString();
        createPageIcon(flag, content, col, pgurl); // plot page 1,2,3
      }
      createPageIcon(flag, "&gt", 6, baseurl+"page"+4); // plot next icon
      createPageIcon(flag, "Last &#8811;", 7, baseurl +"page"+pg_total); // plot last icon
    }
    else if (pg >= pg_total-1){ // case 2: pg = last or last-1, no last and next icons
      for (var i = 1; i <= 3; i++){
        var col = pg_col - 3 + i;
        var flag = 1;
        if (i == pg){
          flag = 0;
        }
        var pgurl = baseurl + "page" + (pg_total-3+i); 
        content = i.toString();
        createPageIcon(flag, content, col, pgurl); // plot page 1,2,3
      }
      createPageIcon(1, "&lt", 4, baseurl+"page"+(pg_total-3)); // plot pre icon
      createPageIcon(1, "&#8810; First", 3, baseurl); // plot first icon
    }
    else{ // case 3: first/last, pre/next icons all exist, current page is in the center
      var pg_pre = parseInt('{{ paginator.previous_page }}');
      var pg_next = parseInt('{{ paginator.next_page }}');
      createPageIcon(1, pg_pre.toString(), 3, baseurl+"page"+pg_pre); // plot page 1,2,3
      createPageIcon(0, pg_.toString(), 4, baseurl+"page"+pg);
      createPageIcon(1, pg_next.toString(), 5, baseurl+"page"+pg_next);

      createPageIcon(1, "&lt", 2, baseurl+"page"+(pg_pre-1));
      createPageIcon(1, "&#8810; First", 1, baseurl);

      createPageIcon(1, "&gt", 6, baseurl+"page"+(pg_next+1));
      createPageIcon(1, "Last &#8811;", 7, baseurl+pg_total);
    }
  }



function generateTable(table_col, curr_page, baseurl){
    var x = document.createElement("table");
    x.setAttribute("id", "mytable");
    //x.style.float = "right";
    //x.style.border = "none";
    
    var y = document.createElement("tr");
    //y.style.border = "none";
    x.appendChild(y);
    
    var z = document.createElement("td");
    //z.style.border = "none";
    var t = document.createTextNode("testcell");
    z.appendChild(t);
    y.appendChild(z);
}

function createIcon(){

}





