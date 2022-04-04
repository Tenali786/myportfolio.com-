const show = document.getElementById('nav');
const list = document.getElementById('mob');
const nav = document.getElementById('navlist');

let value = 0;
function showMenu() {
        list.style.display= 'block';
        list.style.right= '0px';
        list.style.display = 'block';
        list.appendChild(show);   
        // list.style.visibility = "visible";

}

function CloseList(){
    list.style.right = '960px';
    // list.style.visibility = "hidden";
}

function showAccount(){
    document.getElementById('closenow').style.left= '0px';
    document.getElementById('closenow').style.display= 'block';
}

function closeaccount(){
    document.getElementById('closenow').style.left= '-300px'
}