import html2canvas from "html2canvas";

const exportAsImage = async (element:any, imageFileName:any) => {
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, imageFileName);
};
const downloadImage = (blob:any, fileName:any) => {
  const fakeLink = window.document.createElement("a");
fakeLink.setAttribute("style", "display:none;");
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

export default exportAsImage;
