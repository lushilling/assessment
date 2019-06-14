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

function tableResult(){

};


//http://www.omdbapi.com/?s=superman&apikey=e1fe0de4
// e1fe0de4