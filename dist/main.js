

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
    a.click()
}