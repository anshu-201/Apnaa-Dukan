const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';   // close
        } else {
            nav.style.display = 'flex';   // open
        }
    });
}
if(close){
    close.addEventListener('click', ()=>{
         if (nav.style.display === 'flex') {
            nav.style.display = 'none';   // close
        } else {
            nav.style.display = 'flex';   // open
        }
    });
}