
var p=document.getElementById('text');
array = [{img:'https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_960_720.jpg',text:"Outsanding job and exceeded all expectations. It was a pleasure to work with them on a sizabile first project and am looking forward to start the next one asap"},
{img:'https://cdn.pixabay.com/photo/2017/10/10/21/46/laptop-2838917_960_720.jpg',text:" Jamshid Outsanding job and exceeded all expectations. It was a pleasure to work with them on a sizabile first project and am looking forward to start the next one asap"},
{img:'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_960_720.jpg',text:"Outsanding job and exceeded all expectations. It was a pleasure to work with them on a sizabile first project and am looking forward to start the next one asap"}
]
image= document.getElementById('image')
image.src=array[0].img;
p.innerHTML=array[0].text;

var i=0;
function prevButton(){
    i--;
    if(i<0){
    i=2;
    }
    image.src = array[i].img;
    p.innerHTML=array[i].text; 
}
function nextButton(){
    i++;
    if(i>=array.length){
        i=0;
    }
    
    image.src = array[i].img; 
    p.innerHTML=array[i].text;
}


