function SendMail() {
    var params = {
        fullname : document.getElementById("fullname").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_rpos1pm","template_ix65rmw",params).then(function(res) {
        alert("Sucess!" + res.status);
    })
}