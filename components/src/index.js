import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure that you want to leave?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Sam"
          timeAgo="Yesterday at 7:30AM"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 12:20PM"
          text="Ped do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 16:25PM"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Anne"
          timeAgo="Yesterday at 10:00PM"
          text="Mored do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Julie"
          timeAgo="Today at 18:45PM"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));
