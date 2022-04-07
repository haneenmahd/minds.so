function downloadData(data, filename) {
    const link = document.createElement("a");
    link.download = filename;
    link.href = data;
    link.click();
}

export default downloadData;