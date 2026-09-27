
const availableGenres = ["Fiction", "Science", "History", "Biography"];


function applyDiscount(userDataArray) {
    if (userDataArray[1] === "student") {
        userDataArray.push("20% Discount");
    } else {
        userDataArray.push("No Discount");
    }
    return userDataArray;
}


function addNewGenre(newGenre) {
    availableGenres.push(newGenre);
}


function displayGenres() {
    for (let i = 0; i < availableGenres.length; i++) {
        console.log("We offer : " + availableGenres[i]);
    }
}


const bookForm = document.getElementById("bookForm");
const btn = document.getElementById("button");

btn.addEventListener("click" , (event) =>{
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById("username");
    const membership_type = document.getElementById("regular");
    const membership_type2 = document.getElementById("student");
    const genre = document.getElementById("genre");
    const title = document.getElementById("title");

    const stdArr = [name, membership_type, membership_type2, genre, title];
})


function render(){

    const myDiv = document.getElementById("result-card");
    
    for (let i = 0 ; i<stdArr.length ; i++){
      const pTag = document.createElement("p");
      pTag.textContent = stdArr[i];
      myDiv.appendChild(pTag);
    }

    // ex2-basic
const inputs = [usernameInput , passwordInput , confirm_pass_input , genreInput , titleInput]
for (let i = 0 ; i<inputs.length ; i++){
    if(inputs[i].value == ""){
        const errorMsgRequired = document.createElement("span");
        errorMsgRequired.textContent = "Required !";
        errorMsgRequired.style.color = "red";
        errorMsgRequired.before(inputs[i]);
        isValid = false;
    }
}

// ex3-basic

if(passwordInput.value !== confirm_pass_input.value){
    const errorMsgPassword = document.createElement("span");
    errorMsgPassword.textContent = "password not the same !";
    errorMsgPassword.style.color = "red";
    errorMsgPassword.before(confirm_pass_input); 
    isValid = false;
}

// ex4-basic
if (isValid) {
        const name = document.getElementById("username").value;
        const selectedMembership = document.querySelector('input[name="membershipType"]:checked');
        const membershipType = selectedMembership ? selectedMembership.value : "";
        const genre = document.getElementById("genre").value;
        const title = document.getElementById("title").value;

        stdArr = [name, membershipType, genre, title];
        render(); 

        // ex5
        const success_registration = document.createElement("span");
        success_registration.textContent = "successful registration !"
        success_registration.style.color = "green";
        button.after(success_registration);

    }


}


//ex1-basic 

const userLabel = document.createElement("label");
userLabel.textContent = "Username: ";
const usernameInput = document.getElementById("username");
usernameInput.before(userLabel);

const genreLabel = document.createElement("label");
genreLabel.textContent = "Book Genre: ";
const genreInput = document.getElementById("genre");
genreInput.before(genreLabel);

const titleLabel = document.createElement("label");
titleLabel.textContent = "Book Title: ";
const titleInput = document.getElementById("title");
titleInput.before(titleLabel);

const passwordLabel= document.createElement("label");
passwordLabel.textContent = "Password :";
const passwordInput = document.getElementById("password");
passwordInput.before(passwordLabel);

const confirm_pass_label = document.createElement("label");
confirm_pass_label.textContent = "confirm password :";
const confirm_pass_input = document.getElementById("confirm_password");
confirm_pass_input.before(confirm_pass_label)


// ex1-mid

const p_highlighted = document.createElement("p");
p_highlighted.textContent = "Hey, you're not permitted in there. It's restricted. You'll be deactivated for sure.. Don't call me a mindless philosopher, you overweight glob of grease! Now come out before somebody sees you. Secret mission? What plans? What are you talking about? I'm not getting in there! I'm going to regret this. There goes another one. Hold your fire. There are no life forms. It must have been short-circuited. That's funny, the damage doesn't look as bad from out here. Are you sure this things safe? Close up formation. You'd better let her loose. Almost there! I can't hold them! It's away! It's a hit! Negative. Negative! It didn't go in. It just impacted on the surface. Red Leader, we're right above you. Turn to point... oh-five, we'll cover for you. Stay there... I just lost my starboard engine. Get set to make your attack run. The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. Were on a diplomatic mission. If this is a consular ship...were is the Ambassador? Commander, tear this ship apart until you've found those plans and bring me the Ambassador. I want her alive! There she is! Set for stun! She'll be all right. Inform Lord Vader we have a prisoner. What a piece of junk. She'll make point five beyond the speed of light. She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard we'll get out of here. Hello, sir."
const words = p_highlighted.textContent.split(" ")
for(let i = 0 ; i<words.length ; i++){
    if(words[i].length > 8){
        words[i] = `<span style = "background-color : yellow;">${words[i]}</span>`
    }

}

// ex2-mid

const link_google = document.createElement("a");
link_google.href = "https://www.google.com/";
link_google.textContent = "Read More";
p_highlighted.after(link_google);

// ex3-mid 

const paragraphs = p_highlighted.textContent.split(".");
p_highlighted.innerHTML = paragraphs.join(".<br>");

// ex4-mid 

const wordsArray = p_highlighted.textContent.split(" ");
const wordCount = wordsArray.length;

const countDisplay = document.createElement("p");
countDisplay.textContent = `Word Count: ${wordCount}`;

p_highlighted.after(countDisplay);








