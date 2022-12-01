export interface IHotDtos {
  id: number;
  title: string;
  media?: string;
  subTitle?: string;
  img?: string;
}

export interface IHotNewsDtos extends IHotDtos {
  content?: string;
  assetCode?: string;
  assetName?: string;
  time?: Date;
}

export interface IBoardArticleDtos {
  id: number;
  userAccountId: number;
  boardId: number;
  hashtag: string;
  title: string;
  content: string;
  status: string;
  modifiedBy: string;
}
