const currentLocation = location.href;
const menuItems = document.querySelectorAll('.navigation li a');
const menuLength = menuItems.length;
const adminPage = document.querySelector('.')

loginBtn.addEventListener('click', ()=>{
    formRegister.style.display = 'none';
    alert(1);
})

for(let i = 0; i<menuLength; i++){
    if(menuItems[i].href === currentLocation){
        menuItems[i].className = 'active'
    }
}

