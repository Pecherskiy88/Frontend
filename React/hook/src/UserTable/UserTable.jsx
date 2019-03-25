import React from 'react'

const UserTable = ({users, deleteUser}) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.length
        ? (users.map(el => (
          <tr key={el.id}>
            <td>{el.nickname}</td>
            <td>{el.username}</td>
            <td>
              <button className="button muted-button" id={el.id} onClick={deleteUser}>Delete</button>
            </td>
          </tr>
        ))): (
            <tr>
                 <td colSpan={3}>No users</td>
            </tr>
        )}
    </tbody>
  </table>
)

export default UserTable




