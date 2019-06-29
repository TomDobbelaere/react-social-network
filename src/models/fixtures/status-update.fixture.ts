import MPersonFixture from "./person.fixture";
import MStatusUpdate from "../status-update.model";
import MCommentFixture from "./comment.fixture";

class MStatusUpdateFixture implements MStatusUpdate {
  id = 1;
  author = new MPersonFixture();
  content = "Hello world!";
  likes = 1;
  comments = [new MCommentFixture({ id: 1 }), new MCommentFixture({ id: 2 })];

  constructor(props: Partial<MStatusUpdate> = {}) {
    Object.assign(this, props);
  }
}

export default MStatusUpdateFixture;
