export interface IHotDtos {
  id: number;
  title: string;
  media?: string;
  subTitle?: string;
  img?: string;
}

export interface IHotNewsDtos extends IHotDtos {
  content: string;
  assetCode: string;
  assetName: string;
  time: Date;
}
