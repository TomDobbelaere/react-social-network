import MStatusUpdate from "../models/status-update.model";
import { EventEmitter } from "events";
import TypedEmitter from "typed-emitter";
import MPerson from "../models/person.model";
import MComment from "../models/comment.model";

interface StateUpdateEvent<T> {
  value: (updates: T) => void;
}

class StatusUpdateService {
  private statusUpdates: MStatusUpdate[] = [];
  public valueEvent: TypedEmitter<StateUpdateEvent<MStatusUpdate[]>>;

  constructor() {
    this.valueEvent = new EventEmitter() as TypedEmitter<
      StateUpdateEvent<MStatusUpdate[]>
    >;
  }

  public getAll() {
    fetch("http://localhost:3001/api/statusUpdate")
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        const fetchedStatusUpdates = resJson.map((su: any) => {
          return {
            id: su.statusUpdateId,
            likes: su.likes,
            content: su.content,
            comments: [],
            author: {
              id: su.authorId,
              avatarUrl: su.avatarUrl,
              firstName: su.firstName,
              lastName: su.lastName
            } as MPerson
          } as MStatusUpdate;
        });

        this.statusUpdates = fetchedStatusUpdates;
        this.valueEvent.emit("value", this.statusUpdates);
      });
  }

  public getCommentsForUpdate(statusUpdateId: number) {
    fetch(
      "http://localhost:3001/api/statusUpdate/" + statusUpdateId + "/comments"
    )
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        const fetchedComments = resJson.map((res: any) => {
          return {
            id: res.commentId,
            content: res.content,
            author: {
              id: res.authorId,
              avatarUrl: res.avatarUrl,
              firstName: res.firstName,
              lastName: res.lastName
            }
          } as MComment;
        });

        const updatedStatus = this.statusUpdates.find(
          su => su.id === statusUpdateId
        );
        if (updatedStatus) {
          updatedStatus.comments = fetchedComments;
        }

        this.valueEvent.emit("value", [...this.statusUpdates]);
      });
  }
}

let instance = new StatusUpdateService();

export default instance;
