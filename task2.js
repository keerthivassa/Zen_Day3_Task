1.JSON.parse is not working for me.
2.forEa
 is also not working for me
2.I am still unclear what i did was right






var resume = {
    name: "keerthivassan N",
    gender:"male",
    Occupation:"Software Engineer",
    Experience:"5 years"
};

// for (var key in resume){
//     console.log(key)
// }

// for (var key in resume){
//     console.log(key,resume[key])
// }

// for(var key of Object.keys(resume)){

//     console.log(key,resume[key])
// }

console.log(JSON.stringify(resume));

console.log(JSON.parse(resume));

Object.keys(resume).forEach(function(resume) {
    console.log(key, resume[key]);
});
