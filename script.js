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
            context.fillStyle='rgba(48, 254, 104, 0.8)';
        } else if(i%3==0){
            context.fillStyle='rgba(126,120,255,0.8)';
        } else if (i%5==0){
            context.fillStyle='rgba(250,252,99,0.8)';
        } else {
            context.fillStyle='rgba(124,124,124,0.8)';
        }  
        context.fillRect(x,y,z,w);
    }   
});