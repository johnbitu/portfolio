function SendMail() {
    var params = {
        fullname : document.getElementById("fullname").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_hssd7dc","template_vs4vmlg",params).then(function(res) {
        alert("Sucess!" + res.status);
    })
}