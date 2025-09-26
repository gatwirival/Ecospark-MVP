// Product scanner
const productDatabase = {
    'coca cola': {
        name: 'Coca Cola Classic',
        score: 2,
        scoreText: 'Poor',
        issues: ['High sugar content', 'Plastic packaging', 'High carbon footprint'],
        alternatives: [
            { name: 'Spindrift Sparkling Water', score: 8, price: '$4.99' },
            { name: 'Local Spring Water', score: 9, price: '$2.49' },
            { name: 'Homemade Fruit Water', score: 10, price: '$0.50' }
        ]
    },
    'iphone 14': {
        name: 'iPhone 14',
        score: 6,
        scoreText: 'Fair',
        issues: ['E-waste concerns', 'Rare earth mining', 'Short upgrade cycle'],
        alternatives: [
            { name: 'Fairphone 4', score: 9, price: '$649' },
            { name: 'Refurbished iPhone 12', score: 8, price: '$499' },
            { name: 'Google Pixel 6a', score: 7, price: '$449' }
        ]
    },
    'nike shoes': {
        name: 'Nike Air Max',
        score: 4,
        scoreText: 'Poor',
        issues: ['Synthetic materials', 'Fast fashion', 'Manufacturing emissions'],
        alternatives: [
            { name: 'Allbirds Tree Runners', score: 9, price: '$98' },
            { name: 'Veja V-10 Sneakers', score: 8, price: '$150' },
            { name: 'Second-hand Nike', score: 8, price: '$45' }
        ]
    }
};

function scanProduct() {
    const input = document.getElementById('productInput').value.toLowerCase();
    const result = document.getElementById('scanResult');

    if (!input) return;

    const product = productDatabase[input] || {
        name: input,
        score: Math.floor(Math.random() * 10) + 1,
        scoreText: 'Unknown',
        issues: ['Limited sustainability data available'],
        alternatives: [
            { name: 'Local Alternative', score: 8, price: 'Varies' },
            { name: 'Second-hand Option', score: 9, price: '50% less' }
        ]
    };

    const scoreClass = getScoreClass(product.score);

    result.innerHTML = `
        <div class="product-result">
            <h4>📦 ${product.name}</h4>
            <div class="eco-score ${scoreClass}">Eco Score: ${product.score}/10 (${product.scoreText})</div>
            <p><strong>Environmental Concerns:</strong></p>
            <ul>
                ${product.issues.map(issue => `<li>${issue}</li>`).join('')}
            </ul>
            <div class="alternatives-list">
                <h5>🌱 Better Alternatives:</h5>
                ${product.alternatives.map(alt => `
                    <div class="alternative-item">
                        <span><strong>${alt.name}</strong> (Score: ${alt.score}/10)</span>
                        <span>${alt.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    result.style.display = 'block';
    updatePoints(10);
}

function getScoreClass(score) {
    if (score >= 9) return 'score-excellent';
    if (score >= 7) return 'score-good';
    if (score >= 5) return 'score-fair';
    if (score >= 3) return 'score-poor';
    return 'score-bad';
}