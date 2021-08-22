//question 1
function number(){
    for(let num = 1; num <= 100; num++)
    {
        if((num%3 == 0)&&(num%5 == 0))
        {
            console.log(`${num} : jackpot`);
        }
        else if(num%3 == 0){
            console.log(`${num} :  is divisible by 3`);
        }
        else if(num%5 == 0)
        {
            console.log(`${num} :  is divisible by 5`);

        }
        else{
            console.log(num);
        }
    
    }
}
number()

//Question 2
function buttonClick(){

    document.querySelector("#btn").addEventListener("click",function(){
        const body = document.querySelector("body");
        const img = document.createElement("img");
        img.setAttribute("src","https://random.imagecdn.app/500/150");
        body.appendChild(img);
    });
}
buttonClick();

//question 3

function displayName(){

    fetch("https://reqres.in/api/users")
    .then((response)=> response.json())
    .then((data)=>{
        for(let i=0; i<3; i++){
            console.log(data.data[i].first_name)
        }
    });
}
displayName()