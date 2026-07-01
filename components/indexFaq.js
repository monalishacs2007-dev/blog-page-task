
function renderFAQ(component, parent) {

    const section = document.createElement("section");

    section.className = "bg-white rounded-xl shadow p-8 mb-10";

    let html = `
        <h2 class="text-3xl font-bold mb-3">${component.data.title}</h2>
        <p class="text-gray-600 mb-8">${component.data.description}</p>
    `;

    component.data.questions.forEach((faq) => {

        html += `
            <details class="border rounded-lg mb-4 p-4">

                <summary class="font-semibold cursor-pointer">
                    ${faq.question}
                </summary>

                <p class="mt-3 text-gray-700">
                    ${faq.answer}
                </p>

            </details>
        `;

    });

    section.innerHTML = html;

    parent.appendChild(section);
}
