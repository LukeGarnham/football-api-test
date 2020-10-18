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
            results.innerHTML = "Sorry, no teams found.  Please check the spelling or try searching a different team name.";
        } else {
            let teams = data.api.teams;

            for (let i=0; i<teams.length; i++) {
                results.innerHTML += `<p class="teamList">${teams[i].name}</p>`
            };
            // Problem encountered:  How to return the corresponding array for each result when clicked.
            // Solved: By referencing the explanation provided here:  http://www.howtocreate.co.uk/referencedvariables.html
            // Create the results in the above for loop.  Create a second for loop which creates an onclick evenr for each result.
            // The corresponding [i] is passed into the teams array and returns the 
            let teamList = document.getElementsByClassName("teamList");
            for (i=0; i<teamList.length; i++) {
                teamList[i].onclick = (function(teamData) {
                    return function() {
                        console.dir(teamData);
                        results.innerHTML = `
                            <img class="clubLogo" src="${teamData.logo}">
                            <h3>Team: ${nullDataCheck(teamData.name)}</h3>
                            <h3>Location: ${clubLocation(teamData.venue_city, teamData.country)}</h3>
                            <h3>Founded In: ${nullDataCheck(teamData.founded)}</h3>
                            <h3>Stadium Name: ${nullDataCheck(teamData.venue_name)}</h3>
                            <h3>Stadium Capacity: ${nullDataCheck(teamData.venue_capacity)}</h3>
                        `;
                    };
                })(teams[i]);
            };
        };
    });
};

function clubLocation(city, country) {
    if (city==null) {
        return country;
    } else {
        return city + ", " + country;
    };
};

function nullDataCheck(dataCheck) {
    if (dataCheck==null) {
        return "Sorry, no data found.";
    } else {
        return dataCheck;
    };
};