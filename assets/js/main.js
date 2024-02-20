// Get the IP address from this url https://ipv4.icanhazip.com/
const myIPAddress = document.querySelector("#my-ip-address");

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(xhr.responseText);
    myIPAddress.textContent = xhr.responseText;
  }
};

xhr.open("GET", "https://ipv4.icanhazip.com/", true);
xhr.send();
