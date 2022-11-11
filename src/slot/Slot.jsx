import React from 'react'
import Feed from './Feed';
import Link from './Link';
import NavigationBar from './NavigationBar';
import Avatar from './Avatar';
import PageLayOut from './PageLayOut';

function Slot(props) {
  const user = props.user
  const content = <Feed user={user}></Feed>

  const topBar =(
    <NavigationBar>
      <Link>
        <Avatar user={user} size={props.avaterSize}></Avatar>
      </Link>
    </NavigationBar>
  );
  return (
    <PageLayOut
      topBar={topBar}
      content={content}
    ></PageLayOut>
  )
}

export default Slot