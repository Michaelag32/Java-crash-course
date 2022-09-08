//console.log (fetch ("https://jsonplaceholder.typicode.com/users/1"))

const emailRef = document.querySelector(".email");


//fetch ("https://jsonplaceholder.typicode.com/users/1").then 
//(response => { 
 //   console.log (response.json())
 //   return response.json()
//})

//async function main() {
//    const response = await fetch ("https://jsonplaceholder.typicode.com/users/1")
//    const data = await response.json()
 //    console.log (data)
 //   emailRef.innerHTML = data.email
//}

//main();
const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.video')

function subscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('undefined');
        }, 2000);
     });
}


function getvideo (subscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if (subscriptionStatus === 'FREE')
        resolve ('show trailer')
        else if (subscriptionStatus === 'VIP')
        resolve ('show video')
        else {
            reject ('no video')
        }
    })
}

async function main() {
    const status = await subscriptionStatus();
    statusRef.innerHTML = status;
    try {
        console.log(await getvideo(status))
    }
    catch (e) {
        console.log (e)
        videoRef.innerHTML = e;
    }
}

main ();