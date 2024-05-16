document.addEventListener('DOMContentLoaded', () => {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const newsletterForm = document.getElementById('newsletter-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const userEmailOutput = document.getElementById('user-email');

    // Chatbot toggle
    chatbotButton.addEventListener('click', () => {
        chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'block' : 'none';
    });

    // Chatbot send message
    chatbotSend.addEventListener('click', () => {
        const userMessage = chatbotInput.value;
        if (userMessage.trim()) {
            const userMessageElement = document.createElement('div');
            userMessageElement.textContent = `You: ${userMessage}`;
            chatbotMessages.appendChild(userMessageElement);
            chatbotInput.value = '';

            const botMessageElement = document.createElement('div');
            botMessageElement.textContent = `Bot: Thanks for your message! How can I assist you today?`;
            chatbotMessages.appendChild(botMessageElement);

            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    });

    // Newsletter form submission
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        if (email) {
            userEmailOutput.textContent = email;
            confirmationMessage.style.display = 'block';
        }
    });
});
