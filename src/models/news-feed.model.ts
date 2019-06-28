export interface MStatusUpdate {
  id: number;
  author: MPerson;
  content: string;
  likes: number;
  comments: MComment[];
}

export interface MPerson {
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

export interface MComment {
  id: number;
  author: MPerson;
  content: string;
}
