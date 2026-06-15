const usersContainer = document.getElementById("users");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");

loader.style.display = "block";
async function getUsers() {
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    loader.style.display = "none";
    errorDiv.textContent = "";
    data.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            `;
        usersContainer.appendChild(card);
        }
    );

    } catch (error) {

    loader.style.display = "none";
    errorDiv.textContent = "Failed to load users. Please try again later.";
    console.log("Error:", error);

    }
}

getUsers();