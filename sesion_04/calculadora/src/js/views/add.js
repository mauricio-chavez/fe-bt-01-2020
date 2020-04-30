export function setResult(result) {
  const resultDiv = document.querySelector('#result')
  const html = `
    <p>El resultado es <strong>${result}</strong></p>
  `
  resultDiv.innerHTML = html
}
