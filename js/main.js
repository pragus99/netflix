const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// memilih isi content tab
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    // ambil isi content dari DOM dengan ID
    console.log(this.id)
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //menambah class show
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
