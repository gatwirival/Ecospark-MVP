// Global variables
let currentPoints = 847;
let impactChart;

// Navigation
function showPanel(panelId) {
    // Hide all panels
    const panels = document.querySelectorAll('.content-panel');
    panels.forEach(panel => panel.classList.remove('active'));

    // Show selected panel
    document.getElementById(panelId).classList.add('active');

    // Update nav tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

// Points system
function updatePoints(points) {
    currentPoints += points;
    // Update all point displays
    const pointElements = document.querySelectorAll('.metric-value');
    if (pointElements[1]) {
        pointElements[1].textContent = currentPoints;
    }
}

// Notifications
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize app
window.addEventListener('load', function() {
    initChart();
    showNotification('🌱 Welcome to EcoSpark! Start your sustainability journey!');
});

// Demo data updates
setInterval(() => {
    if (impactChart && Math.random() > 0.7) {
        const newData = [...impactChart.data.datasets[0].data];
        newData.push(Math.random() * 4 + 1);
        newData.shift();
        impactChart.data.datasets[0].data = newData;
        impactChart.update();
    }
}, 5000);