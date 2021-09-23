function generateYears() {
    let first_year=2005
    let current_year = new Date().getFullYear()
    return Array(current_year - first_year+1).fill().map((element, index) => index + first_year)
  }

function populateYears(){
    let options = generateYears()
    let year = document.getElementById("selectYear")
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        year.appendChild(el);
    }
  }
