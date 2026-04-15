async function loadPet() {
    try {
        // Fetch Dog Image
        const imgRes = await fetch("https://dog.ceo/api/breeds/image/random");
        const imgData = await imgRes.json();

        // Fetch Cat Fact
        const factRes = await fetch("https://catfact.ninja/fact");
        const factData = await factRes.json();

        document.getElementById("petImage").src = imgData.message;
        document.getElementById("petFact").innerText = factData.fact;

    } catch (error) {
        console.error("Error loading pet data:", error);
    }
}

// Load on page start
window.onload = loadPet;