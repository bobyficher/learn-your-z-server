// 1. Select elements from the DOM
const demoButton = document.getElementById('demo-btn');
const outputArea = document.getElementById('output');
const dataContainer = document.getElementById('data-list');

// 2. Simple Click Event & DOM Update
demoButton.addEventListener('click', () => {
    outputArea.innerText = "🚀 Button clicked! JavaScript is working.";
    outputArea.style.color = "#4CAF50";
    console.log("Button interaction successful.");
});

// 3. Fetching Data from an API (Async/Await)
async function fetchDemoData() {
    try {
        outputArea.innerText = "Loading data...";
        
        // Using a free placeholder API for the demo
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
        const users = await response.json();
        
        // Clear previous content
        dataContainer.innerHTML = '';
        
        // 4. Looping through data to update the UI
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
            dataContainer.appendChild(listItem);
        });
        
        outputArea.innerText = "Data loaded successfully!";
    } catch (error) {
        outputArea.innerText = "Oops! Something went wrong.";
        console.error("Fetch error:", error);
    }
}

// Automatically trigger data fetch for the demo
fetchDemoData();
