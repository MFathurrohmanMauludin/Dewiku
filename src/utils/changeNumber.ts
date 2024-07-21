const ThousandSeparators = (num: number): String => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const abbreviateNumber = (num: number): string => {
  if (num >= 1_000_000_000_000) {
    return (
      (num / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + " Triliun"
    );
  } else if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + " Miliar";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + " Juta";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + " Ribu";
  } else {
    return num.toString();
  }
};

const formatNumberShort = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + "m";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "jt";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "rb";
  }
  return num.toString();
};

const countDay = (finish: string) =>
  Math.ceil(
    (new Date(finish).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

const totalNominal = (donors: any) => {
  return donors.reduce((total: any, donor: any) => total + donor.nominal, 0);
};

function getAverageRating(data: any): number {
  const testimonies = data[0].testimony;
  if (testimonies.length === 0) return 0;

  const totalRating = testimonies.reduce(
    (sum: any, testimony: { rating: any }) => sum + testimony.rating,
    0
  );
  return totalRating / testimonies.length;
};

function formatPhoneNumber(phoneNumber: string): string {
  // Ensure the phone number starts with '+'
  if (!phoneNumber.startsWith('+')) {
      phoneNumber = '+' + phoneNumber;
  }

  // Add a space after the country code
  let formattedNumber = phoneNumber.slice(0, 3) + ' ' + phoneNumber.slice(3);

  // Split the remaining number into chunks of 4 digits
  let parts = [];
  for (let i = 4; i < formattedNumber.length; i += 4) {
      parts.push(formattedNumber.slice(i, i + 4));
  }

  // Join the parts with a space
  return formattedNumber.slice(0, 4) + ' ' + parts.join(' ');
};

function kelvinToCelsius(kelvin: number): string {
  return (kelvin - 273.15).toFixed(2);
}

export {
  ThousandSeparators,
  abbreviateNumber,
  countDay,
  totalNominal,
  formatNumberShort,
  getAverageRating,
  formatPhoneNumber,
  kelvinToCelsius
};
