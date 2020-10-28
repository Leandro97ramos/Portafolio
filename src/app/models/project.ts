
export class Project{
    constructor(
      public _id: string,
      public name: string,
      public description: string,
      public category:string,
      public year: number,
      public langs: string,
      public image: string
    ){

    }
}
export class Framework{
  constructor(
    public _id: string,
    public framework: string
  ){

  }

}
export class Lenguaje {
  constructor(
    public _id: string,
    public lenguaje: string
  ){

  }
}

export class Metodologia{
  constructor(
    public _id: string,
    public metodologia: string
  ){

  }
}
