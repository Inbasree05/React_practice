import { useEffect,useState } from "react";
// import loadingGif from "./data/assets/loading.gif";
function UserSearchApp(){
    const [users,setUsers]=useState([]);
    const[search,setSearch]=useState("");
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setLoading(true); 
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(!res.ok){
                throw new Error("Failed to Fetch Usets");
            }
            return res.json(); 
        })
        .then((data)=>{
            setUsers(data);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        });
    },[]);
    const filteredUser=users.filter((user)=> user.name.toLowerCase().includes(search.toLowerCase()));
    return(
        <div style={{ padding:"20px",fontFamily:"Arial"}}>
            <h1>User Search App</h1>
            <input 
                type="text"
                placeholder="Search Users..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                style={{
                    padding:"20px",
                    width:"250px",
                    marginBottom:"20px"
                }}
                />
                {loading  && <p>Loading ....</p>}
    {error && <p style={{color:"red"}}>{error}</p>}
    {!loading && !error &&(
        <>
        {filteredUser.length>0 ? (
            filteredUser.map((user)=>(
                <div 
                key={user.id}
                style={{
                    border:"1px solid #ccc",
                  margin: "10px 0",
                  padding: "10px",
                  borderRadius: "5px",
                }}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ))
        ):(
            <p>No results Found</p>
        )}
        </>
    )}
    </div>
    );
}
export default UserSearchApp;