let phoneBook = [
    { name: 'Alice',phonenumber: '(816)-403-5456' },
    { name: 'Bob',phonenumber: '(572)-566-2397' },
    { name: 'Cris',phonenumber: '(814)-309-4841' },
    { name: 'Daniel',phonenumber: '(816)-403-5456' },
]
let element = document.querySelector('.main-phoneNumber')



//Load 
function loadphoneBook(phoneBook){
    sapxep(phoneBook)
    function loadphoneBook(datas) {
        return  `<div class="element">
        <p class="element-name">${datas.name}<p> <p class="element-number">${datas.phonenumber}</p>
      </div>`
    }
    element.innerHTML = phoneBook.map(loadphoneBook).join('')
} 

loadphoneBook(phoneBook)




// Danh bạ được sắp xếp bằng tên theo bảng chữ cái
function sapxep(data){
    data.sort(function(a,b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
    if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
    return 0;
})
}



// Thêm mới danh bạ với tên và số điện thoại
    let add = document.querySelector('.btn-add')
    add.addEventListener('click',function(){
    let name = document.querySelector('.text-name')
    let phoneNumber = document.querySelector('.text-phoneNumber')
        phoneBook.push({name: name.value,phonenumber: phoneNumber.value})
        loadphoneBook(phoneBook)
        name.value =""
        phoneNumber.value=""
    })



// Tìm kiếm danh bạ theo tên và số điện thoại
let search = document.querySelector('.btn-search');
search.addEventListener("click", function(e) {
    e.preventDefault();
    let textsearch = document.querySelector('.text-search');
    let value = textsearch.value.toUpperCase();
    let element  = document.querySelectorAll('.element');
    for(i=0; i<element.length; i++) {
        let name = element[i].querySelector('.element-name').textContent;
        let phone = element[i].querySelector('.element-number').textContent;
        if(name.toUpperCase().indexOf(value) > -1 ||phone.toUpperCase().indexOf(value) > -1){
            element[i].style.display = '';
        }else{
            element[i].style.display = 'none';
        }
    }
})


// Xoá các danh bạ bị trùng số điện thoại
let numberDelete = document.querySelector('.btn-delete');

numberDelete.addEventListener('click' ,function(e){
    e.preventDefault();
    for (let i = 0 ; i < phoneBook.length; i++){
        for (let j = i+ 1 ; j< phoneBook.length; j++){
            if (phoneBook[i].phonenumber == phoneBook[j].phonenumber){
                phoneBook.splice(j,1)
            }
        }
    }
    loadphoneBook(phoneBook)
})

