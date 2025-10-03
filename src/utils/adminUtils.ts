const adminDetails = [
  { number: '6285117276822', name: 'Admin Berliana' },
  { number: '6281212125422', name: 'Admin Reka' },
  { number: '6282124952606', name: 'Admin Livia' }
];

const productUrls = {
  "Chick Ichick": "https://paketkemitraan.biz.id/p/chick-ichik",
  "Chickuruyuk": "https://paketkemitraan.biz.id/p/chikuruyuk",
  "Esteh Ibukota": "https://paketkemitraan.biz.id/p/esteh-ibukota",
  "K-Mie": "https://paketkemitraan.biz.id/p/k-mie",
  "Kentang Gantenk": "https://paketkemitraan.biz.id/p/kentang-gantenk",
  "Kopi Ibukota": "https://paketkemitraan.biz.id/p/kopi-ibukota",
  "Mentoast": "https://paketkemitraan.biz.id/p/mentoast",
  "Merlumer": "https://paketkemitraan.biz.id/p/merlumer",
  "Mybestea": "https://paketkemitraan.biz.id/p/mybestea",
  "Nice Coffee": "https://paketkemitraan.biz.id/p/nice-coffee",
  "Raja Steak": "https://paketkemitraan.biz.id/p/raja-steak",
  "Seblak Express": "https://paketkemitraan.biz.id/p/seblak-express",
  "Tahu Nyonyor": "https://paketkemitraan.biz.id/p/tahu-nyonyor",
  "You Need Mie": "https://paketkemitraan.biz.id/p/you-need-mie"
};


export const getRandomAdmin = () => {
  const randomIndex = Math.floor(Math.random() * adminDetails.length);
  return adminDetails[randomIndex];
};

export const openProductPage = (productName: string) => {
  const productUrl = productUrls[productName];
  if (productUrl) {
    window.open(productUrl, '_blank');
  } else {
    // Fallback to WhatsApp if product URL not found
    const admin = getRandomAdmin();
    const message = `Halo ${admin.name}, saya tertarik dengan paket usaha ${productName}. Bisa minta info lengkapnya?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${admin.number}?text=${encodedMessage}`, '_blank');
  }
};

export const openWhatsAppWithRandomAdmin = (productName: string) => {
  const admin = getRandomAdmin();
  const message = `Halo ${admin.name}, saya tertarik dengan paket usaha ${productName}. Bisa minta info lengkapnya?`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${admin.number}?text=${encodedMessage}`, '_blank');
};

export const openWhatsAppWithMessage = (message: string) => {
  const admin = getRandomAdmin();
  const personalizedMessage = `Halo ${admin.name}, ${message}`;
  const encodedMessage = encodeURIComponent(personalizedMessage);
  window.open(`https://wa.me/${admin.number}?text=${encodedMessage}`, '_blank');
};