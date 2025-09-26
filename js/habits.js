// Habits tracking
function updateHabit(checkbox, habitType) {
    if (checkbox.checked) {
        updatePoints(5);
        showNotification('🎉 Great job! +5 EcoPoints earned!');
    }
}

function addNewHabit() {
    const habits = [
        '🌱 Ate a plant-based meal',
        '🚗 Carpooled or used public transport',
        '💡 Switched to LED bulbs',
        '📱 Bought second-hand',
        '🏠 Used renewable energy',
        '🌿 Started composting'
    ];

    const randomHabit = habits[Math.floor(Math.random() * habits.length)];
    alert(`New habit added: ${randomHabit}`);
    updatePoints(2);
}