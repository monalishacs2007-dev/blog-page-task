
function renderBlogHead(component, parent) {

    const section = document.createElement("section");

    section.className = "bg-white rounded-xl shadow mb-8 overflow-hidden";

    section.innerHTML = `
        <img src="${component.data.image}" class="w-full">

        <div class="p-6">

            <span class="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-3">
                ${component.data.category[0].category_name}
            </span>

            <h2 class="text-3xl font-bold mb-4">
                ${component.data.title}
            </h2>

            <p class="text-gray-600 mb-4">
                ${component.data.description}
            </p>

            <div class="text-sm text-gray-500">
                <strong>Author:</strong> ${component.data.author}
                &nbsp; | &nbsp;
                <strong>Read Time:</strong> ${component.data.read_time}
            </div>

        </div>
    `;
    
    parent.appendChild(section);
}
