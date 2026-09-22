let name = prompt("Please enter your name ?");
let member_type = prompt("Please enter your membership type ? (student or regular)");
let title;
if(member_type == "student"){
    title = "Scholar";
    alert("welcome," + " " + name +" " + title );
}
else if(member_type == "regular"){
    title = "Member";
    alert("welcome," + " " + name +" " + title);
}
else{
    alert("welcome," + " " + name);
}
prompt("What you prefers the most : fiction or non-fiction book genre?")
let book_title = prompt("write a spicific title of the book you want to borrow?")
alert("Your book requested" + " " + book_title + " " + "is being reserved !")
console.log("name : " + name + "book title : " + book_title)

function getValidMembership(){
    while(member_type != "student" && member_type != "regular"){
    prompt("Please enter your membership type ? (student or regular)");
}}

function collectUserData(){
    const collectUserData = [name , member_type , title , book_title];
    for( let i = 0 ; i<collectUserData.length ; i++){
        console.log(collectUserData[i]);
}}

const availableGenres = ["Fiction", "Science", "History", "Biography"];

function applyDiscount(collectUserData){
    if(collectUserData[1] === "student"){
        collectUserData.push("20% Discount")
    }
    else{
        collectUserData.push("No Discount")
    }
    return collectUserData;
}

function addNewGenre() {
    let new_genre = prompt("Enter a new genre?");
    availableGenres.push(new_genre);
}

 function displayGenres(){
    for(let i = 0 ; i<availableGenres.length ; i++){
        console.log("We offer : " + availableGenres[i])
    }
 }


