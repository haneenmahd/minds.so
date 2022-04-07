import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import renderToImage from '../../utils/renderToImage';
import Style, { QuoteImage } from './styles'
import Button from "../Button";
import { Download as DownloadIcon } from 'react-feather';
import downloadData from '../../utils/downloadData';

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
  });

  return ReactDOM.createPortal(
    <Style active={active}>
      <QuoteImage src={imageData} />

      <Button
        style={{
          width: "100%",
        }}
        action={() => {
          downloadData(imageData, "quote.png", "image/png");
        }}>
        <DownloadIcon /> Download Image
      </Button>
    </Style>,
    document.getElementById("modal-root")
  );
}
