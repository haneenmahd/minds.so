import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import renderToImage from '../../utils/renderToImage';
import Style, { QuoteImage } from './styles'

export default function PreviewExport({
    active,
    targetRenderInputElement
}) {
  const [imageData, setImageData] = useState("");

  useEffect(async () => {
    try {
      await renderToImage(targetRenderInputElement, setImageData);
    } catch (error) {
      console.error(error);
    }
  })

  return (
    ReactDOM.createPortal(
        <Style active={active}>
          <QuoteImage src={imageData} />
        </Style>,
        document.getElementById("modal-root")
    )
  )
}
