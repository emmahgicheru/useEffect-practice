export default function Search({onGetRandomUsers, onGetAllUsers}) {
    return (
        <div className="search">
            <input className="search-number" type="button" value="Get Random User" onClick={onGetRandomUsers}/>
            <input className="search-number" type="button" value="Get All Users" onClick={onGetAllUsers}/>
        </div>
    );
}