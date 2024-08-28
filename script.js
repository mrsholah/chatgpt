document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Mockup WebSocket URL
    const socket = new WebSocket('wss://example.com/chat'); // Replace with your WebSocket URL

    // Handle incoming messages
    socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data);
        displayMessage(message.username, message.text);
    });

    // Handle sending messages
    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const message = {
                username: 'User', // Replace with actual username or get from login session
                text: messageText
            };
            socket.send(JSON.stringify(message));
            messageInput.value = '';
            displayMessage(message.username, message.text);
        }
    });

    // Display message in chat box
    function displayMessage(username, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${username}:</strong> ${text}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
});