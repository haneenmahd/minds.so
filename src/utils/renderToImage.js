import domToImage from "dom-to-image";
import { Skin } from "../theme";

const renderToImage = async (targetRenderInputElement, cb) => {
  const renderedImage = await domToImage.toPng(targetRenderInputElement, {
    quality: 1,
    bgcolor: Skin,
  });

  cb && cb(renderedImage); // only if it exists
};

export default renderToImage;