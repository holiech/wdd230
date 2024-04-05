document.addEventListener("DOMContentLoaded", function() {
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
    const memberContainer = document.getElementById("member-container");
    
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            displayMembers(data.members);
        })
        .catch(error => console.error("Error fetching members:", error));

    function displayMembers(members) {
        memberContainer.innerHTML = "";
        members.forEach(member => {
            const section = document.createElement("section");
            section.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.website}</p>
                <p>${member.image}</p>
                <p>${member.membership_level}</p>
                <p>${member.type}</p>
            `;
            memberContainer.appendChild(section);
        });
    }
    gridViewButton.addEventListener("click", function() {
        memberContainer.classList.remove("list");
        memberContainer.classList.add("grid");
    });

    listViewButton.addEventListener("click", function() {
        memberContainer.classList.remove("grid");
        memberContainer.classList.add("list");
    });
});
