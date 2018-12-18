const myRequest = new XMLHttpRequest();
// 2. open the request and pass the HTTP method name and the resource as parameters
myRequest.open('GET', 'projects/index.html');
// 3. write a function that runs anytime the state of the AJAX request changes
myRequest.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (myRequest.readyState === 4) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
        document.getElementById('pro-content').innerHTML = myRequest.responseText;
    }
};

function sendPro() {
    myRequest.send();
//     document.getElementsById("pro").style.display = 'none';
}