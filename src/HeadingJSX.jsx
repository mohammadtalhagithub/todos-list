import React from 'react';

let myInfo = {
    firstName: "Mohammad",
    lastName: "Talha",
    age: 28
}
let ageGroup;

let customStyle = {
    color: "green",
    fontSize: "20px",
    border: "0px solid black"
}

if (myInfo.age >= 18) {
    ageGroup = "an Adult";
    customStyle.color = "green";
}
else {
    ageGroup = "a Minor";
    customStyle.color = "red";
}

function HeadingFunc() {
    return <h1 className="heading">Name : {myInfo.firstName} {myInfo.lastName}.</h1>;
}

export default HeadingFunc;