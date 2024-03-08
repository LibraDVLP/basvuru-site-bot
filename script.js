document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engeller

    const cooldownTime = 3600000; // 1 saat (3600 saniye * 1000 milisaniye)
    const lastSubmissionTime = localStorage.getItem('lastSubmissionTime') || 0;

    const currentTime = Date.now();
    const elapsedTimeSinceLastSubmission = currentTime - lastSubmissionTime;

    if (elapsedTimeSinceLastSubmission >= cooldownTime) {
        var name = document.getElementById('name').value;
        var yaş = document.getElementById('old').value;
        var yp = document.getElementById('yp').value;
        var tc = document.getElementById('tc').value;
        var id = document.getElementById('id').value;
        var nick = document.getElementById('nick').value;

        var webhookUrl = "Başvuru Formunun Cevaplarının Gönderileceği Kanalın Webhook Urlsi";
        var request = new XMLHttpRequest();
        request.open("POST", webhookUrl);
        request.setRequestHeader('Content-type', 'application/json');

        var params = {
            username: "Web Sitenizden Mesaj",
            avatar_url: "Webhookda kullanılacak pp (isteğe bağlı,)",
            content: "Yeni bir iletişim formu mesajı aldınız!",
            embeds: [{
                title: "İletişim Formu Detayları",
                fields: [
                    { name: "Ad", value: name },
                    { name: "Yaş", value: yaş },
                    { name: "Discord Kullanıcı İsmi", value: nick },
                    { name: "Discord İd'si", value: id },
                    { name: "Yazılım Hakkında Tecrübeleriniz", value: tc },
                    { name: "Neden Seni Tercih edelim? / Bize ne katabilirsin?", value: yp }
                ],
                color: 15258703
            }]
        };

        request.send(JSON.stringify(params));
        alert('Mesajınız gönderildi!'); // Basit bir geri bildirim

        localStorage.setItem('lastSubmissionTime', currentTime);
    } else {
        alert('Zaten bir saat içinde mesaj gönderdiniz. Bir süre bekleyin.');
    }
});
