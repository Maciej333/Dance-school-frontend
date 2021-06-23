export class DanceStyle {
  nazwa: string;

  constructor(nazwa: string){
    this.nazwa = nazwa;
  }
}


export const danceStyles: DanceStyle[] = [
  new DanceStyle("bachata"),
  new DanceStyle("zouk"),
  new DanceStyle("salsa"),
];

