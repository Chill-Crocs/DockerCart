import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.messagesEnd = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    setInterval(this.forceUpdate.bind(this), 60000);
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { messageBox, name } = this.props;
    const times = [];
    let counter = 0;
    function showTime(time, messageCount) {
      for (let i = 0; i < messageCount; i += 1) {
        if (times[i] === time) {
          counter += 1;
        }
      }
      if (counter === 1) {
        counter = 0;
        return time;
      }
      counter = 0;
      return null;
    }
    let indexKey = 0;
    const messageBoxView = messageBox.map((value, index) => {
      indexKey += 1;
      const timeValue = value.time.fromNow().toString();
      times.push(timeValue);
      if (value.message.length > 0) {
        if (index === messageBox.length - 1) {
          return (
            <div key={indexKey}>
              <div className="time">
                {showTime(timeValue, indexKey)}
              </div>
              <div className="messageBox">
                <div className="messageBlurb">
                  <div className="messageContent">
                    {value.message}
                  </div>
                </div>
              </div>
              <div className="sent">
                Sent.
              </div>
            </div>
          );
        }
        return (
          <div key={indexKey} className="messageBox">
            <div className="time">
              {showTime(timeValue, indexKey)}
            </div>
            <div className="messageBlurb">
              <div className="messageContent">
                {value.message}
              </div>
            </div>
          </div>
        );
      }
      return null;
    });
    if (messageBox.length > 0) {
      return (
        <div className="messagesContainer">
          <div>
            {messageBoxView}
          </div>
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={(el) => { this.messagesEnd = el; }}
          />
        </div>
      );
    }
    return (
      <div>
        <div className="subtitle-content">
          Got questions?
          <span> </span>
          {name}
          <span> </span>
          can help!
        </div>
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={(el) => { this.messagesEnd = el; }}
        />
      </div>
    );
  }
}

Messages.propTypes = {
  messageBox: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    time: PropTypes.instanceOf(moment),
  })),
  name: PropTypes.string,
};

Messages.defaultProps = {
  messageBox: [],
  name: '',
};

export default Messages;
