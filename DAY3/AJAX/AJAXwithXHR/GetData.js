function GetData(callback) {
  //1. To instanciate XMLHttpRequest object
  var xmlHttpReq = new XMLHttpRequest();

  // 2. Is to use open method (configuration)
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
      callback(null, xmlHttpReq.responseText);
    } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status !== 200) {
      callback(`Something went wrong - ${xmlHttpReq.status}`);
    }
  };
  xmlHttpReq.send(); // places the async call !
}
