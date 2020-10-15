function declare(cb) {
    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

    xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v2/teams/league/524");
    xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "03db490835mshd5eaf0436ca3429p1687b6jsnf4663d1db28c");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        };
    };
};

// function execute(data) {
//     console.log(data);
// };

// declare(execute);

function printToDoc() {
    declare(function(data) {
        let content = document.getElementById("teams");
        content.innerHTML = "";
        // console.dir(data);
        teams = data.api.teams;
        teams.forEach(function(item) {
            content.innerHTML += item.name;
        });
        
    });
};
