//Q1) Write the code to access element which is having id as "text".
var first=document.getElementById("text")
console.log(first.innerHTML)


//Q2) Write the code to access element which is having tag as "h1".
var second=document.getElementsByTagName('h1')
console.log(second[0].innerHTML)

//Q3) Write the code to access element which is having class as "box"
var third=document.getElementsByClassName('box')
console.log(third[0].innerHTML)


//Q4) Change the heading from "Hello" to "Hello World" using DOM functions.
var changeText=document.getElementsByClassName('changeText')
//by clicking on the tag
changeText[0].addEventListener('click',()=>{
    changeText[0].innerHTML="Hello World"
})

//Q5)Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
var changetext1=document.getElementsByClassName("changetext1")
let count=0
function change(){
    if(count%2==0){
    changetext1[0].innerHTML="O/P -> Welcome to Elevation Academy"
    count++
    }
    else{
        changetext1[0].innerHTML="O/P -> Hello World"
        count--
    }
}

//Q6) Add one style attribute and give text color as red and id attribute and give the id value as "heading" in the above given h1 tag using DOM functions

let count1=0
var changecolor=document.getElementById("heading")
        changecolor.addEventListener('click',()=>{
        if(count1%2===0){
                changecolor.style.color="red"
                count1++
        }
        else{
                changecolor.style.color="black"
                count1--
            
        }


})


//Q7)Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
let parent=document.querySelector('.parent')
let flag="true"
function changeDirection(){

    if(flag==="true"){
    parent.style.display="block"
    flag="false"
    }
    else{
        parent.style.display="flex"
        flag="true"
    }
} 


//Q9)Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
let display=document.querySelectorAll('.clock')
display[0].addEventListener('click',()=>{
    function startClock(){
        let time = new Date();
        let hrs=time.getHours();
        let min=time.getMinutes();
        let sec=time.getSeconds();
        let ampm='am'
        if(hrs>12){
            hrs=hrs%12;
            ampm='pm'
            console.log(`Time: ${hrs}:${min}:${sec} ${ampm}`)
        }
        else{
            
           console.log(`Time: ${hrs}:${min}:${sec} ${ampm}`)

        }    //console.log(hrs+":"+min+":"+sec)
    display[1].innerHTML=`Time: ${hrs}:${min}:${sec} ${ampm}`
    }

    setInterval(()=>{
        startClock();
    },1000)
    
})