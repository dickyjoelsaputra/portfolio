

function sendEmail() {
    let nama = document.getElementById("nama").value
    let subjek = document.getElementById("subjek").value
    let pesan = document.getElementById("pesan").value
    let recipient = 'dickyjoelsaputra@gmail.com'

    let body = `Hello, my name is ${nama} , \n\n ${pesan}`
    var mailtoLink = 'mailto:' + recipient + '?subject=' + subjek + '&body=' + body;

    // mailto:dickyjoelsaputra@gmail.com?subject=asdf&body=asdasfasf
    // window.location.href = mailtoLink;
    let a = document.createElement('a')
    // a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReciever}&su=${subject} - ${name}&body=${body}`
    a.href = mailtoLink;
    a.target 
    a.click()
}

function downloadFile() {
    // Ganti dengan path dan nama file yang ingin didownload
    var filePath = 'src/CV Dicky Joel Saputra.pdf';
    var fileName = 'CV Dicky Joel Saputra.pdf';

    // Membuat elemen <a> dengan atribut href dan download
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;

    // Menambahkan elemen <a> ke dalam dokumen
    document.body.appendChild(link);

    // Simulasi klik pada elemen <a>
    link.click();

    // Menghapus elemen <a> dari dokumen
    document.body.removeChild(link);
}



