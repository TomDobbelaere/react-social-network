import React, { useState } from "react";
import "./news-feed.scss";
import StatusUpdate from "../status-update/status-update";
import MPerson from "../../../models/person.model";
import MStatusUpdate from "../../../models/status-update.model";

/* Big moment, test data below */
const annie: MPerson = {
  id: 1,
  firstName: "Annie",
  lastName: "McBeth",
  avatarUrl: "placeholder.jpg"
};

const jake: MPerson = {
  id: 2,
  firstName: "Jake",
  lastName: "The Man",
  avatarUrl: "placeholder2.jpg"
};

/*const newsFeed: MStatusUpdate[] = [
  {
    id: 1,
    author: annie,
    content: "Hello world!",
    likes: 0,
    comments: [
      {
        id: 3,
        author: jake,
        content: "Stfu annie, jesus christ"
      }
    ]
  },
  {
    id: 2,
    author: jake,
    content: "Time to hit the gym!",
    likes: 50,
    comments: [
      {
        id: 4,
        author: annie,
        content: "Oh jake..."
      },
      {
        id: 5,
        author: jake,
        content: "Keep dreaming baby girl! Lol.."
      }
    ]
  }
];*/

export interface NewsFeedProps {}

function NewsFeed(props: NewsFeedProps) {
  const [statusUpdates, setStatusUpdates] = useState([] as MStatusUpdate[]);

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

      setStatusUpdates(fetchedStatusUpdates);
    });

  function test() {
    const clone = JSON.parse(JSON.stringify(statusUpdates));

    const comments = [];
    for (var i = 0; i < Math.floor(Math.random() * 5); i++) {
      comments.push({
        id: clone.length + 10 + i,
        author: Math.random() > 0.5 ? annie : jake,
        content: "Stfu " + Math.floor(Math.random() * 10000)
      });
    }

    const newPost = {
      id: clone.length + 5,
      author: Math.random() > 0.5 ? annie : jake,
      content: "Hello world " + Math.floor(Math.random() * 10000),
      likes: Math.floor(Math.random() * 100),
      comments: comments
    };

    setStatusUpdates([newPost, ...clone]);
  }

  return (
    <div className="news-feed">
      <button onClick={test}>Add comment to top as test</button>
      {statusUpdates.map(statusUpdate => {
        return (
          <StatusUpdate
            key={statusUpdate.id.toString()}
            statusUpdate={statusUpdate}
          />
        );
      })}
    </div>
  );
}

export default NewsFeed;
