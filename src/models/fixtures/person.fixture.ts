import MPerson from "../person.model";

class MPersonFixture implements MPerson {
  id = 1;
  firstName = "Annie";
  lastName = "McBeth";
  avatarUrl = "placeholder.jpg";

  constructor(props: Partial<MPerson> = {}) {
    Object.assign(this, props);
  }
}

export default MPersonFixture;
