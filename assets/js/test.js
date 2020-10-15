var xhr = new XMLHttpRequest();

// xhr.withCredentials = true;

xhr.open("GET", "https://www.api-football.com/demo/v2/");
// xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "03db490835mshd5eaf0436ca3429p1687b6jsnf4663d1db28c");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
    };
};