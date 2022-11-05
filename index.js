const btn = document.querySelector("#calculate");
btn.addEventListener('click',calculate)



function calculate() {
    const numOfAllShares =parseInt(document.querySelector('.total-shares input').value) ;
    const numOfSingleShare =parseInt(document.querySelector('.single-shares input').value) ;
    const don = parseInt(document.querySelector('#donem-in').value) ;
    const olk = parseInt(document.querySelector('#olk-in').value) ;
    const mtr = parseInt(document.querySelector('#meter-in').value) ;
    check1();
    check2();
    check3();
    if(!check1()||!check2()||!check3()){
    document.getElementById('donem-out').value ='';
    document.getElementById('olk-out').value ='';
    document.getElementById('meter-out').value ='';
        return ;
    }
    const area = 2500*don+100*olk+mtr;
    const ratio = numOfSingleShare/numOfAllShares;
    const a2 = area*ratio;
    const don2 = Math.floor(a2/2500);
    const olk2 = Math.floor((a2%2500)/100);
    const mtr2 = (a2%2500)%100;
    console.log(don2,olk2,mtr2)
    document.getElementById('donem-out').value =don2;
    document.getElementById('olk-out').value =olk2;
    document.getElementById('meter-out').value =mtr2;

}

//////
const aler1 = document.querySelector('.alert');
aler1.addEventListener('click',()=>{
    aler1.style.display='none';
})
const aler2 = document.querySelector('.alert2');
aler2.addEventListener('click',()=>{
    aler2.style.display='none';
});
const aler3 = document.querySelector('.alert3');
aler3.addEventListener('click',()=>{
    aler3.style.display='none';
})
const check3=()=>{
   
    const mtr = parseInt(document.querySelector('#meter-in').value) ;
    if(mtr>=100){
      
        aler3.style.display='flex';
        return false;
    }
    else return true
}
const check2=()=>{
   
    const olk = parseInt(document.querySelector('#olk-in').value) ;

    if(olk>=25){
      
        aler2.style.display='flex';
        return false;
    }
    else return true
}
const check1=()=>{
    const numOfAllShares =document.querySelector('.total-shares input').value ;
    const numOfSingleShare =document.querySelector('.single-shares input').value ;
    const don = document.querySelector('#donem-in').value ;
    const olk = document.querySelector('#olk-in').value ;
    const mtr = document.querySelector('#meter-in').value ;
    if(!(numOfAllShares&&numOfSingleShare&&don&&olk&&mtr)){
        aler1.style.display='flex'
        return false;
    }
    else return true
}
//////
