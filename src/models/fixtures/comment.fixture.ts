import MComment from "../comment.model";
import MPersonFixture from "./person.fixture";

class MCommentFixture implements MComment {
  id = 1;
  author = new MPersonFixture();
  content = "Hello world!";

  constructor(props: Partial<MComment> = {}) {
    Object.assign(this, props);
  }
}

export default MCommentFixture;
