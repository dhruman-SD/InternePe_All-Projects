function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfully!'); // Ensure this is in your desired language
        }, 2000); // 2-second delay
    });
}

// Function to handle button click and update the DOM
async function handleFetch() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Fetching data...'; // Ensure this is in your desired language

    try {
        const data = await fetchData(); // Wait for fetchData to resolve
        resultElement.textContent = data; // Update the DOM with the fetched data
    } catch (error) {
        resultElement.textContent = 'Error fetching data'; // Ensure this is in your desired language
        console.error('Error:', error);
    }
}

// Attach event listener to the button
document.getElementById('fetchButton').addEventListener('click', handleFetch);