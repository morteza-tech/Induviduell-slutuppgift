document.addEventListener('DOMContentLoaded', function() {
    
    loadPostIts();

   
    document.getElementById('postItForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var message = document.getElementById('message').value; 
        addPostIt(message);
        loadPostIts();
        document.getElementById('message').value = '';
    });
});
 // benjamin post it storage start
function loadPostIts() {
    var postItContainer = document.getElementById('postItContainer');
    postItContainer.innerHTML = '';
    var postIts = JSON.parse(localStorage.getItem('postIts')) || [];
     // benjamin post it storage slut
    postIts.forEach(function(message, index) {
        var postIt = document.createElement('div');
        postIt.className = 'postIt';
        postIt.innerHTML = message + '<span class="closeButton" onclick="removePostIt(' + index + ')">&times;</span>';
        postItContainer.appendChild(postIt);
    });
}

function addPostIt(message) {
    
    var postIts = JSON.parse(localStorage.getItem('postIts')) || [];
    postIts.push(message);    
    localStorage.setItem('postIts', JSON.stringify(postIts));
}
function removePostIt(index) {
   
    var postIts = JSON.parse(localStorage.getItem('postIts')) || []; 
    postIts.splice(index, 1); 
    localStorage.setItem('postIts', JSON.stringify(postIts));
    loadPostIts();
}
