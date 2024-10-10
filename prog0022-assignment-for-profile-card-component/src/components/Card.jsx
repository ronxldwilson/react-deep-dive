
//  name="" age="" location="" followerCount="" likeCount="" photoCount=""
export function Card({name,age,location,followerCount,likeCount,photoCount,imagePath}){
    return <>
    <div style={{background: "white", color:"black", width:600, height: 600, margin:20}}>
        <div style={{background: "teal", width:600, height: 450}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', paddingTop:100}}>
                <div>
                    <img src={imagePath} alt="profile-image" width={200} height={200} style={{background:"yellow", borderRadius: "50%" }} />
            <div><b>{name}</b> {age}</div>
            <div> {location} </div>
                </div>
            </div>
        </div>
        <div>
            <div style={{display: "flex", alignItems:"center" ,justifyContent:"space-around"}}>
                <div style={{padding: 40}}> <b> {followerCount} </b> <br />Followers </div>
                <div style={{padding: 40}}> <b> {likeCount} </b> <br /> Likes </div>
                <div style={{padding: 40}}> <b> {photoCount} </b> <br /> Photos </div>
            </div>
        </div>
    </div>
    </>
}