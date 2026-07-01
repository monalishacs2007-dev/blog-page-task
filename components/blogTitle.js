
function renderBlogTitle(component, parent) {
    const section = document.createElement("section");

    section.className = "mb-8";

    const title = document.createElement("h1");

    title.className = "text-5xl font-bold text-gray-900";

    title.textContent = component.data.title[0].value;

    section.appendChild(title);

    parent.appendChild(section);
}
