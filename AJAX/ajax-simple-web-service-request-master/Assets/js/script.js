
// XMLHttpRequest 

let request = new XMLHttpRequest();

request.open('GET', 'https://thatsthespir.it/api', true)
request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

    let quote = document.querySelector("p");
    quote.innerHTML = data.quote;
    
  } else {
    console.log('error');
  }
}

request.send();

// insert into HTML 






