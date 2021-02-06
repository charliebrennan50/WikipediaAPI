import randomTopics from './random-topics.js';

document.getElementById('myBtn').addEventListener("click", function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById("searchTerm").value;
    handleSearch(searchTerm);
})

document.getElementById('randBtn').addEventListener("click", function (event) {
    event.preventDefault();
    const searchTerm = randomTopics[Math.floor(Math.random() * randomTopics.length)];
    document.getElementById("searchTerm").value = searchTerm;
    handleSearch(searchTerm);
})

async function handleSearch(searchTerm) {
    const searchLimit = "50";
    searchTerm.replace(/\s+/g, '_');
    let newURL = `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${searchTerm}&limit=${searchLimit}`;

    let response = await fetch(newURL);
    let data = await response.json();

    let randArticle = Math.floor(Math.random() * data.pages.length);

    let pageURL = `http://en.wikipedia.org/?curid=${data.pages[randArticle].id}`
    document.getElementById("page-URL").href = pageURL;
    document.getElementById("page-URL").classList.add("active");

    document.getElementById("article-title").innerHTML = data.pages[randArticle].title;
    document.getElementById("article-excerpt").innerHTML = data.pages[randArticle].excerpt;
}