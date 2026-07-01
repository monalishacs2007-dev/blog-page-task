
function renderBlogDescription(component, parent) {

    const section = document.createElement("section");

    section.className = "bg-white rounded-xl shadow p-8 prose max-w-none mb-10";

    component.data.description.forEach((item) => {

        if (item.image) {
            section.innerHTML += `
                <img
                    src="${item.image}"
                    alt=""
                    class="w-full rounded-lg mb-5">
            `;
        }

        let html = item.content;

        html = html.replace(/\*\*(.*?)\*\*/g, "<h2>$1</h2>");

        html = html.replace(/\n/g, "<br>");

        section.innerHTML += `
            <div class="mb-8">
                ${html}
            </div>
        `;
    });

    parent.appendChild(section);
}
