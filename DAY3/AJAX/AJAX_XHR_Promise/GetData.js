function GetData() {
  return new Promise((resolve, reject) => {
    //1. To instanciate XMLHttpRequest object
    var xmlHttpReq = new XMLHttpRequest();

    // 2. Is to use open method (configuration)
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
        resolve(xmlHttpReq.responseText);
      } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status !== 200) {
        reject("Something went wrong !");
      }
    };
    xmlHttpReq.send(); // places the async call !
  });
}
