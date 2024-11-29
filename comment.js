const commentContainer = document.getElementById("comment_container");
const nameField = document.getElementById("nameField");
const commentField = document.getElementById("commentField");
const postBtn = document.getElementById("post");

postBtn.addEventListener("click", function () {
    const name = nameField.value;
    const comment = commentField.value;

    if (!name || !comment) {
        alert("Please Fill The Blanks Properly")
        return
    }

    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    div.classList.add("space-y-2");
    h2.classList.add("font-bold", "text-2xl");
    p.classList.add("text-lg", "text-slate-400");

    h2.innerText = name;
    p.innerText = comment;

    div.appendChild(h2);
    div.appendChild(p);

    commentContainer.appendChild(div);

    nameField.value = "";
    commentField.value = "";
});