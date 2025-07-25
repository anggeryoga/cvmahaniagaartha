const adminDetails = [
  { number: '6285117276822', name: 'Admin Berliana' },
  { number: '6281212125422', name: 'Admin Reka' },
  { number: '6282124952606', name: 'Admin Livia' }
];

export const getRandomAdmin = () => {
  const randomIndex = Math.floor(Math.random() * adminDetails.length);
  return adminDetails[randomIndex];
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