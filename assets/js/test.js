function printToDoc() {
    let searchString = document.getElementById('teamSearch').value;
    console.log(searchString);
    searchString = searchString.replace(/ /g, "_").toLowerCase();
    
    console.log(searchString);
};