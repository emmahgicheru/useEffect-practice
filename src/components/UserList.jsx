import UserCard from './UserCard'
import Search from './Search'

export default function UserList({users, onGetRandomUsers, onGetAllUsers}) {

    return (
        <>
            <Search onGetRandomUsers = {onGetRandomUsers} onGetAllUsers = {onGetAllUsers}/>
            <div className="user-list">
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
           ))}
            </div>
        </>
    )
}
