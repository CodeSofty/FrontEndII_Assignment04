(function () {

    //Add new item
$('.add-item-bttn').on("click", function() {
    $('#item-list').append('<li contenteditable=true class="newItem"> New Item </li>');

});

var array = [];
var list = $('#item-list');
//Do something when list is blurred
$(document).on('blur', '#item-list', function() {
    for(let i=0; i < $(list).length; i++){
        var array = [];

        array.push((($(list[i])).text()));

    console.log(array);
    }

    

    function isEmail(array) {
        for(let i =0; i< array.length; i++) {
            console.log(array.length);
            var reg = new RegExp('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})$');
            if (reg.test(array[i])) {
                alert('Valid Email')
                array[i].style.backgroundColor = "yellow";
            } else {
                alert('Not a valid Email');
                var item = array[i];
            item.style.backgroundColor = "red";
            }
        }
      }
      isEmail(array) 
})


})();