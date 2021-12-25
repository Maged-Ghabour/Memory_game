//Select The Game Button
document.querySelector(".control-buttons span").onclick =function(){

//prompt Window to ask For Name
let yourName = prompt("What is Your Name")

//if Name is Empty
if (yourName == null || yourName ==""){
//Set Name To Unknown
    document.querySelector(".user-name span").innerHTML = "Unknown";
//If Name is Not Empty
}else{
//Set Name To Ypur Name
    document.querySelector(".user-name span").innerHTML = yourName.toUpperCase();
}
//hidden to splash Screen 
document.querySelector(".control-buttons").style.display="none";
}

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

// let orderRange = [...Array(blocks.length).keys()];
let orderRange = Array.from(Array(blocks.length).keys());

//console.log(orderRange)
shuffle(orderRange)
//console.log(orderRange)

blocks.forEach((block,index) => {
    block.style.order = orderRange[index];

    //Add Click Event
    block.addEventListener("click",function(){

        // trigger the flip Function
        flipBlock(block);

        //collect All Flliped Cards
        let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"));

        //If There is two selected blocks

        if(allFlippedBlocks.length === 2){
            // console.log("Two Flipped Blocks Selected")

            //Stop Clicking function

            stopClicking()


            //check Matched block function
            checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1])
            



        }
    })
});

//Flip block Function
function flipBlock(selectedBlock){
    selectedBlock.classList.add("is-flipped")


}


//Stop Clicking Function

function stopClicking(){

    //Add class no clicking on main container
    blocksContainer.classList.add("no-clicking")

    setTimeout(()=>{
        //Remove Class No Clicking After The Duration

    blocksContainer.classList.remove("no-clicking")

    },duration)

   

}


//check Mathed Block function
function checkMatchedBlocks(firstBlock,secondBlock){
    let triesElement = document.querySelector(".wrong-tries span")

    if(firstBlock.dataset.technology === secondBlock.dataset.technology){

        firstBlock.classList.remove("is-flipped")
        secondBlock.classList.remove("is-flipped")
        firstBlock.classList.add("has-match")
        secondBlock.classList.add("has-match")


        // Me Added This Feature  


      
        

    
            // By Me 
///////////////////////////////////////////////////////

blocks.forEach(block => {
    if(block.classList.contains("has-match"))  {

        setTimeout(function(){
            block.style.display ="none";
        },1000)
          
      } 
  });

   let check =  blocks.every(function(block){
     return block.classList.contains("has-match")
    })

    if (check == true){
        document.getElementById("winner").play();
    }

        


///////////////////////////////////////////////////////    
        
 
        document.getElementById("success").play();

     

    
    }else{
        triesElement.innerHTML=parseInt(triesElement.innerHTML) + 1 ;
       setTimeout(()=>{
        firstBlock.classList.remove("is-flipped")
        secondBlock.classList.remove("is-flipped")
       },duration)

       document.getElementById("fail").play();
//////////////////////////////////////////////////////////

       if(triesElement.innerHTML == 13){
        
        document.getElementById("looser").play();

        document.querySelectorAll(".game-block").forEach(ele => {
            setTimeout(function(){
                ele.style.display="none"
       
            },1000)
           
        });

        

          setTimeout(function(){
            window.location.assign("index2.html")
          },6000)

    }
//////////////////////////////////////////////////////
    }
}





//Shuffle Function
function shuffle(array){
    //Setting Vars 
let current = array.length,
    temp,
    random;

    while(current > 0){
        //Get Random Number
        random = Math.floor(Math.random() * current);

        //Decrease length by one
        current--;
      

        //[1] save current Element in slash
         temp = array[current]; //20 //19 //18 //17 .... etc
        //[2] current element = random element
        array[current] = array[random]
        //[3] random element = get element from salsh
        array[random] = temp;
    }
    return array;

}


