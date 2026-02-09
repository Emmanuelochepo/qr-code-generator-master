function generateQR() {
  document.getElementById("qr-preview").innerHTML = "";
  let linkText = document.getElementById("qr-input").value;
  const qrCode = new QRCode(document.getElementById("qr-preview"), {
    text: linkText,
    width: 158,
    height: 158,
    margin: 1,
  });
}
