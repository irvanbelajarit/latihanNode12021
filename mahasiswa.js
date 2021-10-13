//variable
// const mahasiswa = {
//   nama: "irvan",
//   Semester: 2,
// };

//class
class Mahasiswa {
  constructor(nama, semester) {
    this.nama = nama;
    this.semester = semester;
  }

  greeting() {
    console.log(
      `Nama Saya adalah ${this.nama} dan Saya semester ${this.semester}`
    );
  }
}

module.exports = Mahasiswa;
