const formatIndonesiaDate = (data: string) => new Date(data).toLocaleDateString('id', { day:'numeric', month: 'short', year: 'numeric', weekday: 'long' });

const formatShortIndonesiaDate = (data: string) => new Date(data).toLocaleDateString('id', { day:'numeric', month: 'long', year: 'numeric' });

export {formatIndonesiaDate, formatShortIndonesiaDate};