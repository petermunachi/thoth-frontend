
export const primaryColor = 'rgb(248, 112, 85)';
export const secondaryColor = '#0e0e3c';
export const tertiaryColor = 'rgba(0,0,0,.9)';
export const blueColor = '#4ac4f3c2';
export const bgLightgray = '#fbfbfb';

export const primaryFont = "'Roboto Slab', serif";


export function getTimeRemaining(endtime: string) {
  const currentDate = new Date().toString();  
  const total = Date.parse(endtime) - Date.parse(currentDate);
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

