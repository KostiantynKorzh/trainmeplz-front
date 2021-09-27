import { Label } from "./Label";

export type Article = {
  id: number;
  description: string;
  title: string;
  content: string;
  labels?: Label[];
};
