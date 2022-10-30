const btn = document.querySelector("#calculate");
btn.addEventListener('click',calculate)
yourInput = document.querySelector('.total-shares input');
window.onload = function() {
    document.ontouchmove = function(e){
         e.preventDefault();
         }
};
yourInput.onfocus = function () {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
}


function calculate() {
    const numOfAllShares =parseInt(document.querySelector('.total-shares input').value) ;
    const numOfSingleShare =parseInt(document.querySelector('.single-shares input').value) ;
    const don = parseInt(document.querySelector('#donem-in').value) ;
    const olk = parseInt(document.querySelector('#olk-in').value) ;
    const mtr = parseInt(document.querySelector('#meter-in').value) ;
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