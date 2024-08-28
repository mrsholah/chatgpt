document.getElementById('send-button').addEventListener('click', function() {
    var input = document.getElementById('message-input');
    var message = input.value;
    if (message.trim() !== '') {
        var chatBox = document.getElementById('chat-box');
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('message');
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = '';
    }
});