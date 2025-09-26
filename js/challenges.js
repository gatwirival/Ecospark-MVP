// Challenge interactions
function joinChallenge(challengeType) {
    const messages = {
        bike: '🚲 Awesome! You joined the Bike Week Challenge!',
        plastic: '🚫 Great choice! Plastic-Free Month challenge accepted!',
        energy: '⚡ Excellent! Energy Saver challenge is now active!',
        food: '🌱 Perfect! Plant-Based Week challenge added!'
    };

    showNotification(messages[challengeType] || '🎉 Challenge joined!');
    updatePoints(15);
}