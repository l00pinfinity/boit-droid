function getCurrentYear() {
    var date = new Date();
    var year = date.getFullYear();

    document.getElementById('current_year').innerHTML = year;
}