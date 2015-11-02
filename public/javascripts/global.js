var userListData = [];

$(document).ready(function (){
    populateTable();
});


function populateTable(){
    var tableContent = "";

    $.getJSON('/users/userlist')
}
