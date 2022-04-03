const show = document.getElementById('nav');
const list = document.getElementById('mob');
const nav = document.getElementsByName('nav');

let value = 0;
function showMenu() {
    if(value==0){

        list.style.transition= 'right 0.3s';
        list.style.display= 'block';
        list.style.right= '0px';
        list.appendChild(show);        
        list.style.display = 'block';

    }
}

function CloseList(){
    list.style.right = '-450px';
    list.style.display = 'none';

}