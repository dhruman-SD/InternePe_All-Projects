function check(){
    var myNum = document.getElementById('number').value;
    var intNum = parseInt(myNum);
    console.log(intNum);
    var randomNum = Math.floor((Math.random()*10)+1);
    console.log(randomNum);
    if(intNum === randomNum){
        document.getElementById("winContainer").style.display = 'block';
        document.getElementById("container").style.display = 'none';
    }
    else{
        document.getElementById("loseContainer").style.display = 'block';
        document.getElementById("container").style.display = 'none';
    }
}
