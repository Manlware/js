var xhr = new XMLHttpRequest();
xhr.open("GET", "http://10.10.16.55:8000/file.png", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
