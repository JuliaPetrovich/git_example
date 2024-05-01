function addRow(id) {
    var tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var val1 = document.getElementById("str").textContent;
    td1.innerHTML = val1;
    row.appendChild(td1);
    tbody.insertBefore(row, tbody.firstChild);
  }
  
  function editTable(id) {
    let elem = document.getElementById(id);
    elem.style.background = document.getElementById("select_back_color").value;
    elem.style.color = document.getElementById("select_font_color").value;
    elem.style.fontSize = document.getElementById("select_font_size").value;
  }

var rows = document.getElementsByTagName("tr");

for (var i = 0; i < rows.length; i++) {
  rows[i].addEventListener("mouseover", function() {

    this.style.background =
          document.getElementById("select_back_color").value;
        this.style.color =
          document.getElementById("select_font_color").value;
        this.style.fontSize =
          document.getElementById("select_font_size").value;
        const text = document.getElementById('text')
        text.innerHTML = this.cells[0].innerHTML
  });

  rows[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "";
    this.style.fontSize = "";
    text.innerHTML = ""
  });
}

  