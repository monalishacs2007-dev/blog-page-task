
function renderBlogKeyNote(component, parent) {

    const section = document.createElement("section");

    section.className = "bg-white shadow rounded-xl p-6 mb-8";

    let html = `
        <h2 class="text-2xl font-bold mb-4">${component.data.title}</h2>
        <ul class="list-disc pl-6 space-y-2">
    `;

    component.data.notes.forEach((note) => {
        html += `<li>${note.note}</li>`;
    });

    html += `</ul>`;

    section.innerHTML = html;

    parent.appendChild(section);
}
