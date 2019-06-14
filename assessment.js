const urlBase = "http://www.omdbapi.com/?apikey=e1fe0de4&s=";

function makeRequest(requestType, url, toSend) {
    return new Promise((resolve, reject) => {

        let request = new XMLHttpRequest();
        request.onload = () => {
            if (request.status == 200) {
                resolve(request);
            }
            else {
                const reason = new Error("Page not found/working");
                reject(reason);
            };
        };
        request.open(requestType, url);
        request.send(toSend);
    });
};

function search() {
    let titleSearch;
    makeRequest("GET", `http://www.omdbapi.com/?apikey=e1fe0de4&s=${titleSearch}`).then((req) => {
        result.innerText = (req.responseText);
    }).catch(function (error) {
        console.log(error.message);
    });
};



// function appendData(data) {
//     var mainContainer = document.getElementById("myData");
//     for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = data[i].Title + ' ' + data[i].Year+ ' ' + data[i].imdbID;
//         mainContainer.appendChild(div);
//     }
// }




// function tableResult() {
//     table = JSON.parse(this.responseText);
//     txt += "<table border='1'>"
//     for (x in table) {
//         txt += "<tr><td>" + table[x].name + "</td></tr>";
//     }
//     txt += "</table>"
//     document.getElementById("titleSearch").innerHTML = txt;
// };




//http://www.omdbapi.com/?s=superman&apikey=e1fe0de4
// e1fe0de4