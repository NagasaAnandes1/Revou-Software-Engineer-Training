function replaceName() {
    let name = prompt("Helo, What your name?", "insert name");
    document.getElementById("name").innerHTML = name;
}
// replpaceName();
// Membuat function untuk mengubah elemen pada html menggunakan method getElemenById

let changeName = document.getElementById("changeName").addEventListener("click", replaceName());