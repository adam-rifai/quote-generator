const btnEl = document.getElementById("btn");
const apiUrl = "http://quotable.io/random";
const quoteEl = document.getElementById("span-quote");
const authorEl = document.getElementById("author");


async function get_quote() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  quoteEl.innerText = data.content;
  authorEl.innerText = data.author;

}

btnEl.addEventListener("click", get_quote);
