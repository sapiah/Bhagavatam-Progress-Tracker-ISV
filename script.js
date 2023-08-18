
addUnsteppedImages();
loopSteppedImages();

/*
Collects 3 values from the Googel Spreadsheet by making a HTTP request and then parshing the JSON.

DATA
values[1][0]: Total Sets sponsonsored
values[1][1]: Last Name
values[1][2]: Last No. Sponsored Sets
*/

async function collectNumberOfSetsGSheet(){
    const baseUrl = "https://script.google.com/macros/s/AKfycbyibJ2op23RnKqRlTa1elAVBncd1HZgRXfIBd-GSADKxj9iTXHxQPCHXCLBMorMOR9U/exec";  // Google Web App URL
    const para = {
    spreadsheetId: "1-QuGqQ-7uuObTOeWYQC4sJUfaazX_8rtdODYSOpeepw", // Google Spreadsheet ID.
    sheetName: "Tracker"  // Sheet Name
    };
    const q = new URLSearchParams(para);
    const url = baseUrl + "?" + q;
    let result = [-1, "", -1]
    let response = await fetch(url)
    let data = await response.json()
    const values = data.values;
    
    result[0] = values[1][0];
    result[1] = values[1][1];
    result[2] = values[1][2];

    return result
}   


async function loopSteppedImages () {
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    
    let numberOfSets = 0;
    let lastName = ""
    let lastSet = 0;
    
    while(true) {
        const sheetValues =  await collectNumberOfSetsGSheet()
        
        numberOfSets = sheetValues[0]
        lastName = sheetValues[1]
        lastSet = sheetValues[2]

        // Updating the feet images sequentially as numberOfSets is updated. Each feet equates to 150 sets
        const img = document.querySelectorAll("img");
        const goalSets = 3000;
        const setsPerFeet = 150;

        const numSteppedFeets = Math.floor(numberOfSets/setsPerFeet)

        if(numSteppedFeets > 0){
            for (let i = 1; i <= numSteppedFeets; i++) {
                    img[i].src = "images/Stepped-feet.png"
            }
        }

        sleep(500)
    } 

    // // TEMP: Used for iterating through the the unstepped feets.
    // const img = document.querySelectorAll("img");
    // const loopMax = 20; 
    // for (let i = 1; i <= loopMax; i++) {
    //     img[i].src = "images/Stepped-feet.png"
    //     await sleep(500);
    //     img[i].src = "images/Unstepped-feet.png"
    // }
}


        
// Loading the unstepped images
function addUnsteppedImages() {
    const img = document.querySelectorAll("img"); 

    // Govardgan Image 
    img[0].src = "images/govardhanTracker.jpg";
    img[0].className="center-fit"

    // Feet 1 - 20 Images

    img[1].src = "images/Unstepped-feet.png"
    img[1].className="feet-1"

    img[2].src = "images/Unstepped-feet.png"
    img[2].className="feet-2"

    img[3].src = "images/Unstepped-feet.png"
    img[3].className="feet-3"

    img[4].src = "images/Unstepped-feet.png"
    img[4].className="feet-4"

    img[5].src = "images/Unstepped-feet.png"
    img[5].className="feet-5"

    img[6].src = "images/Unstepped-feet.png"
    img[6].className="feet-6"

    img[7].src = "images/Unstepped-feet.png"
    img[7].className="feet-7"

    img[8].src = "images/Unstepped-feet.png"
    img[8].className="feet-8"

    img[9].src = "images/Unstepped-feet.png"
    img[9].className="feet-9"

    img[10].src = "images/Unstepped-feet.png"
    img[10].className="feet-10"

    img[11].src = "images/Unstepped-feet.png"
    img[11].className="feet-11"

    img[12].src = "images/Unstepped-feet.png"
    img[12].className="feet-12"

    img[13].src = "images/Unstepped-feet.png"
    img[13].className="feet-13"

    img[14].src = "images/Unstepped-feet.png"
    img[14].className="feet-14"

    img[15].src = "images/Unstepped-feet.png"
    img[15].className="feet-15"

    img[16].src = "images/Unstepped-feet.png"
    img[16].className="feet-16"

    img[17].src = "images/Unstepped-feet.png"
    img[17].className="feet-17"

    img[18].src = "images/Unstepped-feet.png"
    img[18].className="feet-18"

    img[19].src = "images/Unstepped-feet.png"
    img[19].className="feet-19"

    img[20].src = "images/Unstepped-feet.png"
    img[20].className="feet-20"
}