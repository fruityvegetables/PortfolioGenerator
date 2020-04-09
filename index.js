// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();


const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
        inquirer
        .prompt([{
            message: "Enter your name: ",
            name: "userName" 
        },
        {
          message: "Seeeennnnd me, your location: ",
          name: "userLoc"
        },
        { 
            message: "Tell me a little about yourself!: ",
            name: "userBio"
        },
        {
            message: "Enter your GitHub URL:",
            name: "userGit" 
        },
        {
            message: "Enter your LinkedIn URL:",
            name: "userLinked" 
        }
    ])
        .then(function({ userName, userLoc, userBio, userGit, userLinked }){
            //console.log( userName, userLoc, userBio, userGit, userLinked);
            let array = [ `<!DOCTYPE html>
            <html lang="en">
            <h1>Hi! This portfolio represents: ` + userName + `</h1>`, 
            `<header>` + `<h2>Located in: ` + userLoc + `</h2>` + `</header>`, 
            `<body>` + `<h3>A short Biography: ` + userBio + `</h3>`, 
            `<a href="`+userGit+`">Link to my GitHub!</a>`, 
            `<a href="`+userLinked+`">Link to my LinkedIn!</a>`,
            `</body></html>`];
            const content = array.join("\n");
            fs.writeFile("index.html", content, function(err){
                if (err){ 
                    throw err;
                }
                console.log("done");
            })
        });
        
    //   inquirer
    //   .prompt({
    //     type: "list",
    //     message: "Select your repo: ",
    //     name: "repo",
    //     choices: repoNames
    //   })
    //   const repoNamesStr = repoNames.join("\n");

    //   fs.writeFile("README.md", repoNamesStr, function(err) {
    //     if (err) {
    //       throw err;
    //     }

    //     //console.log(`Saved ${repoNames.length} repos`);
    //   });
    // });
