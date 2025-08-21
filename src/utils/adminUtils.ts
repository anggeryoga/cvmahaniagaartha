const adminDetails = [
  { number: '6285117276822', name: 'Admin Berliana' },
  { number: '6281212125422', name: 'Admin Reka' },
  { number: '6282124952606', name: 'Admin Livia' }
];

const productUrls = {
  "Chick Ichik": "https://paketusaha.web.id/p/chick-ichik",
  "Chikuruyuk": "https://paketusaha.web.id/p/chikuruyuk",
  "Esteh Ibukota": "https://paketusaha.web.id/p/esteh-ibukota",
  "K-Mie": "https://paketusaha.web.id/p/k-mie",
  "Kentang Gantenk": "https://paketusaha.web.id/p/kentang-gantenk",
  "Kopi Ibukota": "https://paketusaha.web.id/p/kopi-ibukota",
  "Mentoast": "https://paketusaha.web.id/p/mentoast",
  "Merlumer": "https://paketusaha.web.id/p/merlumer",
  "Mybestea": "https://paketusaha.web.id/p/mybestea",
  "Nice Coffee": "https://paketusaha.web.id/p/nice-coffee",
  "Raja Steak": "https://paketusaha.web.id/p/raja-steak",
  "Seblak Express": "https://paketusaha.web.id/p/seblak-express",
  "Tahu Nyonyor": "https://paketusaha.web.id/p/tahu-nyonyor",
  "You Need Mie": "https://paketusaha.web.id/p/you-need-mie"
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