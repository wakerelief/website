import media1 from "./volunteer1.jpg";
import media2 from "./volunteer2.jpg";
import media3 from "./volunteer3.jpg";
import media4 from "./volunteer4.jpg";


export const media = [media1, media2, media3, media4];
export const mediaByIndex = (index: number) => media[index % media.length];
