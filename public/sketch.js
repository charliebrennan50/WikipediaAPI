
const getData = async () => {

    const searchTerm = document.getElementById("searchTerm").value;
    const searchLimit = "5";
    let newURL = `https://en.wikipedia.org/w/rest.php/v1/search/page?q=${searchTerm}&limit=${searchLimit}`;

    let response = await fetch(newURL);
    let data = await response.json();
    console.log(data.pages);

}