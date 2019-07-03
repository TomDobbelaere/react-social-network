import React from "react";
import "./news-feed.scss";
import StatusUpdate from "../status-update/status-update";
import MStatusUpdate from "../../../models/status-update.model";
import StatusUpdateService from "../../../services/status-update.service";

export interface NewsFeedProps {}

export interface NewsFeedState {
  statusUpdates: MStatusUpdate[];
}

class NewsFeed extends React.Component<NewsFeedProps, NewsFeedState> {
  private valueEventHandler: (statusUpdates: MStatusUpdate[]) => void;

  constructor(props: NewsFeedProps) {
    super(props);
    this.state = { statusUpdates: [] };
    this.valueEventHandler = statusUpdates => {
      this.setState({ statusUpdates });
    };

    StatusUpdateService.getAll();
    StatusUpdateService.valueEvent.on("value", this.valueEventHandler);
  }

  componentWillUnmount() {
    StatusUpdateService.valueEvent.removeListener(
      "value",
      this.valueEventHandler
    );
  }

  render() {
    return (
      <div className="news-feed">
        {this.state.statusUpdates.map(statusUpdate => {
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
}

export default NewsFeed;
