import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Style, { QuoteCanvas } from './styles'
import html2canvas from "html2canvas"

export default function PreviewExport({
    active,
    renderInputElement
}) {
  const renderToCanvas = async (element) => {
    const renderedCanvas = await html2canvas(element, {
      backgroundColor: '#111'
    });

    let previewQuoteCanvas = document.getElementById("preview-quote-canvas");

    previewQuoteCanvas.appendChild(renderedCanvas);
  }

  return (
    ReactDOM.createPortal(
        <Style active={active}>
          <QuoteCanvas id="preview-quote-canvas" onLoad={async() => await renderToCanvas(renderInputElement)}>
          </QuoteCanvas>
        </Style>,
        document.getElementById("modal-root")
    )
  )
}
