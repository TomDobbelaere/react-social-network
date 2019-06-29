import MPerson from "./person.model";

export default interface MComment {
  id: number;
  author: MPerson;
  content: string;
}
