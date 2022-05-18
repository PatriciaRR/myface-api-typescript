
import React, { useState, useEffect } from 'react'

function UserDetail() {

  const [users, setUsers] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3001/users").then(response => response.json()).then(data => setUsers(data.results));
  }, [])

  if(!users) {
    return <div> Waiting for user data </div>
  }
  return (
    <div> 
      {users.map(user => <div className = 'user-name'>
        {user.name}
        {user.email}
        <img className="user-image" alt="user" src={user.profileImageUrl}/>
    </div>)}
  </div>
  );
}
export default UserDetail;