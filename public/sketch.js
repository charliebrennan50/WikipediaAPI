async function getData() {

    //event.preventDefault();
    const searchTerm = document.getElementById("searchTerm").value;
    const searchLimit = "50";
    searchTerm.replace(/\s+/g, '_');
    let newURL = `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${searchTerm}&limit=${searchLimit}`;

    // let searchURL =
    //     `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${searchTerm}`;
    // let contentURL =
    //     'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

    let response = await fetch(newURL);
    let data = await response.json();
    console.log(data.pages);

    randArticle = Math.floor(Math.random() * data.pages.length);
    console.log(data.pages[randArticle].key);
    console.log(data.pages[randArticle].title);
    console.log(data.pages[randArticle].description);
    console.log(data.pages[randArticle].excerpt);

    document.getElementById("article-title").innerHTML = data.pages[randArticle].title;
    document.getElementById("article-excerpt").innerHTML = data.pages[randArticle].excerpt;

}