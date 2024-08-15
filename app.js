// app.js
const ws = new WebSocket('ws://localhost:8080');  // Replace with your WebSocket server URL

const chatHistory = document.getElementById('chat-history');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Handle incoming messages
ws.onmessage = function(event) {
    const message = document.createElement('div');
    message.textContent = event.data;
    chatHistory.appendChild(message);
    chatHistory.scrollTop = chatHistory.scrollHeight;  // Auto-scroll to the bottom
};

// Send message on button click
sendButton.addEventListener('click', function() {
    const message = messageInput.value.trim();
    if (message) {
        ws.send(message);
        messageInput.value = '';  // Clear the input field
    }
});

// Send message on Enter key press
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
