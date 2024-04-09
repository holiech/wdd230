document.addEventListener('DOMContentLoaded', function() {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
        
            const qualifiedMembers = data.members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');

            const numMembersToShow = Math.min(Math.floor(Math.random() * 2) + 2, qualifiedMembers.length);
            const selectedMembers = getRandomMembers(qualifiedMembers, numMembersToShow);

            const spotlightSection = document.querySelector('.spotlight');
            selectedMembers.forEach(member => {
                const div = document.createElement('div');
                div.innerHTML = `
                <h3>${member.name}</h3>
                <img src="${member.image}" alt="${member.name} Image">
                <p>Membership Level: ${member.membership_level}</p>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p>Type: ${member.type}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                spotlightSection.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading members data:', error));
});

function getRandomMembers(members, count) {
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, count);
}
