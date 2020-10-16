function declare(teamName, cb) {
    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

    xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v2/teams/search/" + teamName);
    xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "03db490835mshd5eaf0436ca3429p1687b6jsnf4663d1db28c");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        };
    };
};

function printToDoc() {
    let searchString = document.getElementById('teamSearch').value;
    searchString = searchString.replace(/ /g, "_").toLowerCase();
    declare(searchString, function(data) {
        let results = document.getElementById("teams");
        results.innerHTML = "";
        console.dir(data);

        if (data.api.results == 0) {
            results.innerHTML = "No teams found.  Please check the spelling or try a different team name.";
        } else {
            teams = data.api.teams;
            teams.forEach(function(item) {
                console.log(item);
                results.innerHTML += `<p>${item.name}</p>`;
                results.onclick = function showClubDetails(teams){
                    console.log(teams);
                };
            });
        }
        
        
    });
};