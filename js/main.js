let reactionCount = 1;

function react_add() {
    reactionCount++;

    document.getElementById("reaction-count").textContent = reactionCount;

    if (reactionCount == 10) {
        alert("Вітаємо! ви знайшли секрет");
    }
    if (reactionCount == 30) {
        alert("Чого ти очікував клікаючи далі?")
    }
}
