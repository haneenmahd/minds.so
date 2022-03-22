/**
 * Returns the data uri for the canvas
 * 
 * @param {Element} el canvas element
 * @param {string} type file format
 * @param {number} quality quality of the canvas
 * @returns {string} the data uri
 */
export default function getCanvasData(el, type = "image/png", quality = 1.0) {
    return el.toDataURL(type, quality);
}