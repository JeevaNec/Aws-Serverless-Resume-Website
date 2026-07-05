const apiURL = "https://jby5g15tie.execute-api.eu-north-1.amazonaws.com/prod/visitor";

async function visitorCounter() {

    try {

        const response = await fetch(apiURL);

        const data = await response.json();

        document.getElementById("visitor-count").innerText = data.count;

    }

    catch(error){

        document.getElementById("visitor-count").innerText = "Unavailable";

        console.log(error);

    }

}

visitorCounter();