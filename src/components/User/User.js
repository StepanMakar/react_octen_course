export const User = ({user, setUser}) => {
    return (
        <div>
            {user.name}
            <input type="button" value="Show info" onClick={() => setUser(user)}/>
        </div>
    );
}