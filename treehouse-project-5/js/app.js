//Code Snippet from
//https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

function search_gallery(){
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByTagName('li');

    for (i = 0 ; i < x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
    else {
        x[i].style.display = "list-item";
    }
}
};

baguetteBox.run(".gallery");


const search = new Filter('search', 'data-caption');