export const UserInfo = ({user, setUserIdForPost}) => {


    return (
        <div>
<div>id: {user.id}</div>
<div>Name: {user.name}</div>
<div>UserName: {user.username}</div>
<div>email: {user.email}</div>
<div>phone: {user.phone}</div>
<div>website: {user.website}</div>
            <input type="button" value="Show user posts" onClick={() => setUserIdForPost(user.id)}/>
        </div>
    );
}