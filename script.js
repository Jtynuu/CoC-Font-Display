// Functiin Utama
function main() {
  // Prompt untuk input
  const input = window.prompt("Tolong isi kata kata yang ingin ditampilkan.");
  
  // Perubahan jika user selesai input
  document.getElementById("keterangan").innerHTML = `Anda telah memasukkan kata "${input}", dan ditampilkan sebagai berikut...`;
  document.getElementById("hasil").innerHTML = input;
  
  if(input == null) {
    alert("Wadoo! kenapa di cancel pak?");
    document.getElementById("keterangan").innerHTML = `Anda telah membatalkan sesi form, ada apa?`;
  } else if(input == "") {
    alert("Tolong diisi fieldnya pak!");
    document.getElementById("keterangan").innerHTML = `Anda tidak memasukkan apa-apa.`;
  }
}