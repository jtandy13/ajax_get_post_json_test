function GetData() {
    // 1. Instantiate XHR - Start 
    var xhr; 
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        console.log('xhr object created!');
    }
    else if (window.ActiveXObject) 
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    else 
        throw new Error("Ajax is not supported by your browser");
    // 1. Instantiate XHR - End
    
    // 2. Handle Response from Server - Start
    xhr.onreadystatechange = function () {
        console.log('response handler fired!')
        console.log('XMLHttpRequest.readyState is: ' + xhr.readyState);
        if (xhr.readyState === 4) {
            document.getElementById('div1').innerHTML = xhr.responseText;
            var pText = '<p>Here are the standard properties of the XMLHttpRequest JavaScript object: <br>';
            pText += 'XMLHttpRequest.readyState = ' + xhr.readyState + '<br>';
            pText += 'XMLHttpRequest.status = ' + xhr.status + '<br>';
            pText += 'XMLHttpRequest.statusText = ' + xhr.statusText + '<br>';
            document.getElementById('div2').innerHTML = pText;
        }
    }
    
    // 2. Handle Response from Server - End

    // 3. Specify your action, location and Send to the server - Start
    xhr.open('GET', '/Ajax');
    xhr.send(null);
    // 3. Specify your action, location and Send to the server - End
}

function PostData() {
    console.log('PostData fired!');
    // 1. Instantiate XHR - Start 
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        console.log('xhrPost object created!');
    }
    else if (window.ActiveXObject)
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    else
        throw new Error("Ajax is not supported by your browser");
    // 1. Instantiate XHR - End

    // 2. Handle Response from Server - Start
    xhr.onreadystatechange = function () {
        console.log('response handler fired!')
        console.log('XMLHttpRequest.readyState is: ' + xhr.readyState);
        if (xhr.readyState === 4) {
            document.getElementById('div4').innerHTML = xhr.responseText;
        }
    }
    // 2. Handle Response from Server - End

    var text = document.getElementById("postbox").value;
    console.log('text = ' + text);

    // 3. Specify your action, location and Send to the server - Start
    xhr.open('POST', '/Ajax');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("text=" + text);
    // 3. Specify your action, location and Send to the server - End
}

function GetJsonData() {
    console.log('GetJsonData fired!');
    // 1. Instantiate XHR - Start 
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        console.log('xhrPost object created!');
    }
    else if (window.ActiveXObject)
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    else
        throw new Error("Ajax is not supported by your browser");
    // 1. Instantiate XHR - End

    // 2. Handle Response from Server - Start
    xhr.onreadystatechange = function () {
        console.log('response handler fired!')
        console.log('XMLHttpRequest.readyState is: ' + xhr.readyState);
        if (xhr.readyState === 4) {
            var json = JSON.parse(xhr.responseText);
            var movieString = '<h2>Here are all the movies:</h2><ul>';
            json.movies.forEach(function(element) {
                var obj = element;
                console.log(obj);
                for (let key in obj) {
                    if (obj.hasOwnProperty(key) && key === "title") {
                        movieString += '<li>' + obj[key] + '</li>';
                    }
                }
            });
            movieString += '</ul>';
            document.getElementById('div6').innerHTML = movieString;
        }
    }
    // 2. Handle Response from Server - End

    // 3. Specify your action, location and Send to the server - Start
    xhr.open('GET', '/movies.json');
    xhr.send(null);
    // 3. Specify your action, location and Send to the server - End
}