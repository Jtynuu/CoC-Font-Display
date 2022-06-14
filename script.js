// Functiin Utama
function main() {
  // Prompt untuk input
  const input = window.prompt("Tolong isi kata kata yang ingin ditampilkan.");
  
  // Perubahan jika user selesai input
  document.getElementById("keterangan").innerHTML = `Anda telah memasukkan kata "${input}", dan ditampilkan sebagai berikut...`
  document.getElementById("hasil").innerHTML = input;
}