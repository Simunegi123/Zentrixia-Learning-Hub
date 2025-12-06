// Open modal
document.querySelectorAll(".learn-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "flex";
    });
});

// Close modal
document.querySelectorAll(".close").forEach(span => {
    span.addEventListener("click", () => {
        span.parentElement.parentElement.style.display = "none";
    });
});

// Close when clicking outside modal-content
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
});

window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".container");

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();

        // If element is inside viewport → show animation
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            el.classList.add("show");
        } 
        // If element goes out of view → reset animation
        else {
            el.classList.remove("show");
        }
    });
});
function searchCourses() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".course-card");

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
} else {
    body.classList.add("light-mode");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    // Save theme
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


