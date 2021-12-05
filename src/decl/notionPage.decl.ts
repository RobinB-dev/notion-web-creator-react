export type NotionBlock = {
  obj: any; 
  id: string; 
  url?: string; 
  content?: string;
  emoji?: string;
  childrens?: string;
}

export type BlockText = {
  fontFamily: string
  fontWeight: number
  fontSize: number
  fontAlign: string
}