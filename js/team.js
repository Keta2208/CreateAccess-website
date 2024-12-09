// Array of team members
const teamMembers = [
    {
        name: "Liz Dailey",
        role: "Co-Founder & Executive Director",
        description: "Liz is a social worker and educator who is delighted to serve as CreateAccess’ Executive Director. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "Patrick Cozzi",
        role: "Co-Founder",
        description: "Patrick is a 3D graphics geek, entrepreneur, and educator.",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "Uzoma James Chikwem",
        role: "Technical education consultant",
        description: "James is a passionate educator of graphics and game technology, and hopes to help others learn about the transformative power of gaming to shape a better and sustainable future. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "Victor Scott Cushman",
        role: "Volunteer",
        description: "Victor (Scott) Cushman is a professional software engineer, amateur game developer, and loving cat dad. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "John Dailey",
        role: "Technical Consultant",
        description: "John is a retired hardware/embedded firmware engineer. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "Lou Osinski",
        role: "Education Consultant",
        description: "Lou Osinski is a versatile entrepreneur and innovator with three decades of experience in education. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "Kevin Quinn",
        role: "Education Consultant",
        description: "Kevin serves as the Lead of Curriculum at Malvern Preparatory School where he has taught for sixteen years. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "Josh DeStefano",
        role: "3D Program Developer",
        description: "Josh is a senior at Malvern Preparatory School. His initial interest in 3D stemmed from playing video games and creating stop-motion films as a kid because he wanted a way to combine the two mediums to tell his own stories. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "Nicky Jushchyshyn",
        role: "Technical 3D Content Creator",
        description: "Nicky is a student at Drexel University studying for a bachelor's degree in animation and visual effects as well as a master's in digital media. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "AJ Marinelli",
        role: "Technical 3D Content Creator",
        description: "AJ served on the department’s student web development team, and created and maintained websites used by the College of Science and Mathematics. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "Panote Nuchprayoon",
        role: "Technical 3D Content Creator",
        description: "Panote is a creative tech multidisciplinarian. Their work touches on education, visual design, game development, user experience, and accessibility. ",
        img: "https://via.placeholder.com/300x200"
    },
    {
        name: "Lara Rende",
        role: "3D Content Creator",
        description: "Lara is a 3D artist who focuses on the integration of 3D technology in live events and production.",
        img: "https://via.placeholder.com/300x200"
    }

];

// Function to display team members
function displayTeam() {
    const teamContainer = document.getElementById("team-container");

    teamMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "team-card";

        card.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>${member.role}</strong></p>
            <p>${member.description}</p>
                   `;

        teamContainer.appendChild(card);
    });
}

// Initialize the team display
document.addEventListener("DOMContentLoaded", displayTeam);
