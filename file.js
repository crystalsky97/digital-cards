// Your contact data
const cards = {
    business: {
        name: "Your Name",
        phone: "+1234567890",
        email: "you@company.com",
        url: "https://linkedin.com/in/yourprofile",
        label: "Business Card"
    },
    personal: {
        name: "Your Name",
        phone: "+1234567890",
        email: "personal@email.com",
        url: "https://wa.me/1234567890",
        instagram: "yourhandle",
        label: "Personal Card"
    }
};

let qrCodeInstance = null;

function generateVCard(cardData) {
    let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${cardData.name}
TEL:${cardData.phone}
EMAIL:${cardData.email}`;

    if (cardData.url) {
        vcard += `\nURL:${cardData.url}`;
    }
    if (cardData.instagram) {
        vcard += `\nURL:https://instagram.com/${cardData.instagram}`;
    }
    
    vcard += '\nEND:VCARD';
    return vcard;
}

function showCard(cardType) {
    const cardData = cards[cardType];
    const vcard = generateVCard(cardData);
    
    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = '';
    
    // Generate new QR code
    qrCodeInstance = new QRCode(document.getElementById('qrcode'), {
        text: vcard,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
    });
    
    // Update label
    document.getElementById('card-label').textContent = cardData.label;
}

// Show business card by default on load
window.onload = function() {
    showCard('business');
};
