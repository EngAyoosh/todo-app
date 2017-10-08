
function request (url, method, callback, postData) {// eslint-disable-line
  var xhttp = new XMLHttpRequest();// eslint-disable-line
  xhttp.onreadystatechange = function () {
    var myJSON;
    if (this.readyState === 4 && this.status === 200) {
      myJSON = JSON.parse(this.responseText);
      callback(null, myJSON);
    }
  };
  xhttp.open(method, url, true);
  if (postData) {
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(postData);
  } else {
    xhttp.send();
  }
}

function toggleDone (id) {
  document.getElementById('item-' + id).classList.toggle('done');
  request('/', 'put', (err, res) => {
    if (err) throw err;
  }, JSON.stringify({id: id}));
}

function deleteItem (id) {
  document.getElementById('item-' + id).parentElement.remove();
  request('/', 'delete', (err, res) => {
    if (err) throw err;
  }, JSON.stringify({id: id}));
}
