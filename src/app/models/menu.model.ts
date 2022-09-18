export interface Menu {
  id: string;
  title: string;
  image: string;
  imageType: string;
  pricePerServing: number;
  healthScore: number;
  readyInMinutes: number;
  vegan: boolean;
  vegetarian: boolean;
  summary: string;
}
