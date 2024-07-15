const formatIndonesiaDate = (data: string) => new Date(data).toLocaleDateString('id', { day:'numeric', month: 'short', year: 'numeric', weekday: 'long' });

const formatShortIndonesiaDate = (data: string) => new Date(data).toLocaleDateString('id', { day:'numeric', month: 'long', year: 'numeric' });

const getDayOfWeekNumber = (): number => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    // Adjusting so that Monday is 1 and Sunday is 7
    return dayOfWeek === 0 ? 7 : dayOfWeek;
  };
  

export {formatIndonesiaDate, formatShortIndonesiaDate, getDayOfWeekNumber};