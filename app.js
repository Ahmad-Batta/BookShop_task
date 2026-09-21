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


