document.getElementById("authForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const pinInput = document.getElementById("pinCode").value;
    const messageElement = document.getElementById("message");

    // Временная заглушка для тестирования
    const config = {
        pinRequired: true,
        pinCode: "1234"
    };

    if (!config.pinRequired || pinInput === config.pinCode) {
        messageElement.textContent = "Correct PIN. Redirecting...";
        messageElement.className = "message success";
        messageElement.style.display = "block";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        messageElement.textContent = "Incorrect PIN. Please try again.";
        messageElement.className = "message error";
        messageElement.style.display = "block";
    }
});