const tags = document.getElementsByClassName("h_lvl_1");

for (const tag of tags) {
    const horizontal = document.createElement('hr');
    tag.appendChild(horizontal)
}
