const distributors = [
    { name: "Distributor A", lastMonth: 500, forecastNextMonth: 600, avgYearly: 550 },
    { name: "Distributor B", lastMonth: 700, forecastNextMonth: 750, avgYearly: 720 },
    { name: "Distributor C", lastMonth: 400, forecastNextMonth: 450, avgYearly: 420 }
];

function displayDistributors() {
    const dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = "";

    distributors.forEach(distributor => {
        const card = document.createElement("div");
        card.className = "distributor-card";
        card.innerHTML = `
            <h2>${distributor.name}</h2>
            <p>📦 Last Month: ${distributor.lastMonth}</p>
            <p>📊 Forecast: ${distributor.forecastNextMonth}</p>
            <p>📈 Avg Per Month: ${distributor.avgYearly}</p>
        `;
        dashboard.appendChild(card);
    });
}

window.onload = displayDistributors;
