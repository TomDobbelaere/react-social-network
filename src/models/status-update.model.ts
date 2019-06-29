import MPerson from "./person.model";
import MComment from "./comment.model";

export default interface MStatusUpdate {
  id: number;
  author: MPerson;
  content: string;
  likes: number;
  comments: MComment[];
}
