var button = document.getElementById("buttonmain")
button.addEventListener("click",load_number)

function load_number(){
    let dice_number= Math.floor(Math.random()*6);
    var dice_one = "dice"+ dice_number+".png";


    var image_source = "./sample_images/"+dice_one;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",image_source)

    let dice_number_2 = Math.floor(Math.random()*6);
    var dice_two = "dice"+dice_number_2+".png";
    image_source= "./sample_images/"+dice_two;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",image_source)
    display_winner(dice_number,dice_number_2)



}

function display_winner(dice1,dice2){

var h1loader= document.getElementById("winner");
if(dice1>dice2){
    
    h1loader.innerText="player 1 has a larger number";
}else if (dice2>dice1){
    h1loader.innerText="player 2 has a larger number";
}else{
    h1loader.innerText ="players have drawn";
}

}
