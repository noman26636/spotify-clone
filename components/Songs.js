import { useRecoilValue } from "recoil"
import { playlistState } from "../atom/playlistAtom"
import Song from "./Song"


function Songs() {

    const playlist= useRecoilValue(playlistState)

    return (
        <div className="text-white p-8 flex flex-col space-y-2 pb-28">
         {playlist?.tracks.items.map((track, order)=>(
             <Song key={track.track.id} track={track} order={order}/>
         ))}
        </div>
    )
}

export default Songs
