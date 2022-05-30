

var button=document.querySelector('.but')




var SttLong=['NUN','A','B','C','D','E','F','G','H','I']
var SttRat=[];
var ABCD=[
    ['A','B'],
    ['C','D']
]
var abcd=[
    ['a','b'],
    ['c','d']
]

var a1234=[[1,2],[3,4]]
var ketQuatoaDo1chia1trieu;
var ketQuatoDo1Chia1TramNghin
var ketQuatoDo1Chia50Nghin
var ketQuatoDo1Chia25Nghin
var ketQuatoDo1Chia10Nghin
var ketQuatoaDo1chia5000
let  chu
let oso1,oso2
let phy
button.addEventListener('click',function(){

    let l1=document.querySelector('.l1')
    let l2=document.querySelector('.l2')
    let l3=document.querySelector('.l3')
    let l4=document.querySelector('.l4')
    let l5=document.querySelector('.l5')
    let l6=document.querySelector('.l6')
    
        l1=Number(l1.value)
        l2=Number(l2.value)
        l3=Number(l3.value)
        l4=Number(l4.value)
        l5=Number(l5.value)
        l6=Number(l6.value)
       
        phy=l4+l5/60+l6/3600
        console.log(phy)
        toaDo1chia1trieu(l1*60+l2+l3/60,l4*60+l5+l6/60)
        // UTM1chia1tramnghin(l1+l2/60+l3/3600,l4+l5/60+l6/3600)
        Utm2()
    
    })
for(var i=0;i<=60;i++){
    SttRat[i]=i;
}

//60''
function toaDo1chia1trieu(long,rat){
    let x=Math.floor(long/(6*60))+31
    let y=Math.floor(rat/(4*60))+1
    chu=y
    oso1=x
    ketQuatoaDo1chia1trieu=SttLong[y] +'-'+x
    let dentaLong=long- Math.floor(long/(6*60))*6*60
    let dentaRat=rat-(y-1)*4*60
    console.log(ketQuatoaDo1chia1trieu)
    document.querySelector('.trieu').innerHTML= ketQuatoaDo1chia1trieu
    toDo1Chia1TramNghin(dentaLong,dentaRat)

}
// toaDo1chia1trieu(105*60+50+9/60,18*60+2+6/60)
// console.log(ketQuatoaDo1chia1trieu)


//30''
function toDo1Chia1TramNghin(long,rat){
    let x=Math.floor(long/30)+1;
    let y=Math.floor(rat/30);
    // console.log(x,y)
    oso2=(y-1)*12+x
    let odem=(8-y-1)*12+x;
  
   
    ketQuatoDo1Chia1TramNghin=ketQuatoaDo1chia1trieu+'-'+odem
    console.log(ketQuatoDo1Chia1TramNghin)
    document.querySelector('.d100000').innerHTML= ketQuatoDo1Chia1TramNghin
    let dentaLong=long-(x-1)*30;
    let dentaRat=rat-(y)*30

    // console.log(dentaLong,dentaRat)
    toDo1Chia50Nghin(dentaLong,dentaRat)

    toDo1Chia5000(dentaLong,dentaRat)
}

//1.875'
function toDo1Chia5000(long,rat){
    let x=Math.floor(long/1.875)+1;
    let y=Math.floor(rat/1.875)+1;
    let vitriHang=16-y;
    let odem=vitriHang*16+x
   
    ketQuatoaDo1chia5000=ketQuatoDo1Chia1TramNghin+'('+odem+')';
     console.log(ketQuatoaDo1chia5000)
     document.querySelector('.d5nghin').innerHTML= ketQuatoaDo1chia5000
}
//


//15''
function toDo1Chia50Nghin(long,rat){
    let x=Math.floor(long/15)+1
    let y=(Math.floor(rat/15)+1)
    // console.log(x,y)
    let dentaLong=long-(x-1)*15;
    let dentaRat=rat-(y-1)*15;

    
    if(y==1){
        y=2
    }else{
        y=1
    }

    ketQuatoDo1Chia50Nghin=ketQuatoDo1Chia1TramNghin +'-'+ABCD[y-1][x-1]
    console.log(ketQuatoDo1Chia50Nghin)
    document.querySelector('.d50nghin').innerHTML= ketQuatoDo1Chia50Nghin
    // console.log(dentaLong,dentaRat)
    toDo1chia25000(dentaLong,dentaRat)
}

//7.5'
function toDo1chia25000(long,rat){
    let x=Math.floor(long/7.5)+1;
    let y=Math.floor(rat/7.5)+1;
    let dentaLong=long-(x-1)*7.5;
    let dentaRat=rat-(y-1)*7.5;
    

    if(y==1){
        y=2
    }else{
        y=1
    }

    ketQuatoDo1Chia25Nghin=ketQuatoDo1Chia50Nghin+'-'+abcd[y-1][x-1]
    console.log(ketQuatoDo1Chia25Nghin)
    document.querySelector('.d25nghin').innerHTML= ketQuatoDo1Chia25Nghin
    //  console.log(dentaLong,dentaRat)
     toDo1chia10000(dentaLong,dentaRat)
}


//3.75''
function toDo1chia10000(long,rat){
    let x=Math.floor(long/3.75)+1;
    let y=Math.floor(rat/3.75)+1;
    // console.log(x,y)
    if(y==1){
        y=2
    }else{
        y=1
    }
    ketQuatoDo1Chia10Nghin=ketQuatoDo1Chia25Nghin+'-'+a1234[y-1][x-1]
    console.log(ketQuatoDo1Chia10Nghin)
    
    document.querySelector('.d10ngin').innerHTML= ketQuatoDo1Chia10Nghin
}


//UTM quốc tế
function UTM1chia1tramnghin(long,rat){

    let cd=Math.floor((2*(long-75)-1))
    // cd=cd.toFixed(0
    if( Number.isInteger(2*long)){
        cd=cd+1
    }
    let hn=Math.floor(2*(rat+4))
    if( Number.isInteger(2*(rat+4))){
        hn=hn+1
    }
    // hn=hn.toFixed(0)
    // console.log(long,rat)
    console.log(cd,hn)
}




function Utm2(){
console.log(chu,oso1,oso2)
let lamda=(oso1-30)*6+(oso2%12)/2
// let phy=(chu-1)*4+(8-Math.floor(oso2/12))/2
if( !Number.isInteger((phy*2)))
{
 phy=phy.toFixed(0)
 phy=Number(phy)
}

console.log(phy)
let cd=2*(lamda-75)-1
let hn=2*(phy+4)
document.querySelector('.utm').innerHTML=cd+''+hn
console.log(hn)
}
