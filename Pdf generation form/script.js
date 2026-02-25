document.getElementById("pdfForm").addEventListener("submit", function(e){

    e.preventDefault();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // বাংলা টেক্সট সংগ্রহ
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    doc.setFont("helvetica");
    doc.setFontSize(16);

    doc.text("ব্যবহারকারীর তথ্য", 20, 20);

    doc.setFontSize(12);

    doc.text("নাম: " + name, 20, 40);
    doc.text("ইমেইল: " + email, 20, 50);
    doc.text("ফোন: " + phone, 20, 60);
    doc.text("ঠিকানা: " + address, 20, 70);

    doc.save("তথ্য.pdf");

});
