function sendEmail() {
 Email.send({
    Host : "smtp.gmail.com",
    Username : "yauth11@gmail.com",
    Password : "password",
    To : 'yauth11@gmail.com',
    From : document.getElementById("mail").value,
    Subject : "Un souci ?",
    Body : "Bonjour merci d'avoir envoyé un mail, gros bisous !"
}).then(
  message => alert("Arrêtez de perdre vos affaires !")
);
}