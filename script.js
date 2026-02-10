let optionsBtn = document.getElementById("options-btns");
let previewQr = document.getElementById("preview");

function generateQR() {
  document.getElementById("qr-preview").innerHTML = "";
  let linkText = document.getElementById("qr-input").value;
  if (!linkText) {
    alert("Please enter a link!");
    return;
  }
  new QRCode(document.getElementById("qr-preview"), {
    text: linkText,
    width: 158,
    height: 158,
    margin: 1,
  });
  optionsBtn.style.display = "block";
  previewQr.style.display = "block";
}
async function copyQrCode() {
  const qrCanvas = document.querySelector("#qr-preview canvas");
  if (qrCanvas) {
    qrCanvas.toBlob(async (blob) => {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        alert("QR code copied to clipboard!");
      } catch (err) {
        alert("Failed to copy: " + err);
      }
    });
  }
}

function downloadQrCode() {
  const qrCanvas = document.querySelector("#qr-preview canvas");
  if (qrCanvas) {
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = qrCanvas.toDataURL("image/png");
    link.click();
  }
}
