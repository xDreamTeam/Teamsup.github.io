const fileInput = document.getElementById("file-input");
const uploadButton = document.getElementById("upload-button");
const fileList = document.getElementById("file-list");

uploadButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
        const fileName = file.name;
        const listItem = document.createElement("li");
        listItem.textContent = fileName;
        listItem.addEventListener("click", () => {
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement("a");
            link.href = fileURL;
            link.download = fileName;
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
        fileList.appendChild(listItem);
    }
});
