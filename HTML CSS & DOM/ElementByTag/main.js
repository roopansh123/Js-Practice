// Use getElementsByTagName to get all the title elements, article titles, and list elements.
const titleElements = document.getElementsByTagName("h1");

const articleTitles = document.getElementsByTagName("h2");

const listElements = document.getElementsByTagName("li");
// Use a for loop to change the color of the title elements to red, the article titles to blue, and the list elements to green.


for (const element  of titleElements){
    element.style.color = "red";
}


for (const element of articleTitles){
    element.style.color = "blue";
}


for(const element of listElements){
    element.style.color="green";
}