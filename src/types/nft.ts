export interface NFT {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  owner: string;
  creator: string;
  isListed: boolean;
}