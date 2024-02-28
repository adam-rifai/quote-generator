const btnEl = document.getElementById("btn");
const apiUrl = "http://quotable.io/random";
const quoteEl = document.getElementById("span-quote");
const authorEl = document.getElementById("author");

async function get_quote() {
  try {
    btnEl.innerText= 'loading...';
    btnEl.disabled = true;
    const response = await fetch(apiUrl);
    const data = await response.json();
    quoteEl.innerText = data.content;
    authorEl.innerText = data.author;
    btnEl.innerText= 'Get A Quote';
    btnEl.disabled = false;
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "Ops something went wrong,try again later.";
    authorEl.innerText = '';
  }
}

btnEl.addEventListener("click", get_quote);

get_quote();
