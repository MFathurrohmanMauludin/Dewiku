const ThousandSeparators = (num: number): String => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const abbreviateNumber = (num: number): string => {
    if (num >= 1_000_000_000_000) {
        return (num / 1_000_000_000_000).toFixed(1).replace(/\.0$/, '') + ' Triliun';
    } else if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + ' Miliar';
    } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + ' Juta';
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + ' Ribu';
    } else {
        return num.toString();
    }
}

const formatNumberViewer = (num: number): string => {
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1) + 'm';
    } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1) + 'jt';
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1) + 'rb';
    }
    return num.toString();
};

const countDay = (finish: string) => Math.ceil((new Date(finish).getTime() - new Date().getTime()) / ((1000 * 3600) * 24));

const totalNominal = (donors: any) => {
    return donors.reduce((total: any, donor: any) => total + donor.nominal, 0);
  }

export {ThousandSeparators, abbreviateNumber, countDay, totalNominal, formatNumberViewer};
