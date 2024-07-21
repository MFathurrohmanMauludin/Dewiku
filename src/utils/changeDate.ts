const formatIndonesiaDate = (data: string) => new Date(data).toLocaleDateString('id', { day:'numeric', month: 'short', year: 'numeric', weekday: 'long' });

const getDayOfWeekNumber = (): number => {
    const today = new Date();
    const dayOfWeek = today.getDay() - 1;
    
    // Adjusting so that Monday is 1 and Sunday is 7
    return dayOfWeek === 0 ? 7 : dayOfWeek;
};


  function getDayName(dayIndex: number): string {
    const days = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
    return days[dayIndex];
  }
  
  function formatAMPM(date: Date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
    return hours + ':' + minutesStr;
  }
  
 const getToday = (): string => {
    const now = new Date();
    const dayIndex = now.getDay();
    const dayName = getDayName(dayIndex);
  
    return dayName;
  }
  
  const getHours = (): string =>{
    const now = new Date();
    const time = formatAMPM(now);
  
    return time;
  }

  const timeStringToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
  
export {formatIndonesiaDate, getDayOfWeekNumber, getToday, getHours, timeStringToMinutes};