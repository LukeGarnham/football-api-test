var data = null;

let searchLeague = "league_one";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v2/leagues/current/england/");
xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "03db490835mshd5eaf0436ca3429p1687b6jsnf4663d1db28c");

xhr.send(data);

