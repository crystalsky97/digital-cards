// Your contact data
const cards = {
    business: {
        name: "Georgiana (Jo) Hedesan",
        phone: "+441234567890",
        email: "georgiana.hedesan@history.ox.ac.uk",
        url: "https://linkedin.com/in/johedesan",
        label: "Business Card"
    },
    personal: {
        name: "Jo Hedesan",
        phone: "+447812345678",
        email: "johedesan@gmail.com",
        whatsapp: "+447812345678",  // WhatsApp uses phone number
        facebook: "johedesan",     // Just the username
        youtube: "@johedesan",     // Channel handle
        website: "https://johedesan.wordpress.com/",
        instagram: "johedesan",
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
  
    if (cardData.website) {
        vcard += `\nURL:${cardData.website}`;
    }
    if (cardData.whatsapp) {
        vcard += `\nURL:https://wa.me/${cardData.whatsapp.replace('+', '')}`;
    }
    if (cardData.facebook) {
        vcard += `\nURL:https://facebook.com/${cardData.facebook}`;
    }
    if (cardData.youtube) {
        vcard += `\nURL:https://youtube.com/${cardData.youtube}`;
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
