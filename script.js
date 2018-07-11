$(function(){
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');

    var x=30;
    var y=30;
    var z=40;
    var w=40;

    for (i=1;i<16;i++){
        x+=15;
        y+=15;
        if (i%3==0 && i%5==0){
            context.fillStyle='red';
        } else if(i%3==0){
            console.log (i);
            context.fillStyle='blue';
        } else if (i%5==0){
            context.fillStyle='green';
        } else {
            context.fillStyle='rgba(192,192,192,0.8)';
        }  
        context.fillRect(x,y,z,w);
    }   
});