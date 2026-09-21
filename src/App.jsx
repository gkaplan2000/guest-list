import GuestDetail from "./GuestDetail";
import GuestList from "./GuestList";
import { useState } from "react";

export default function App() {
  const [selectedGuestID, setSelectedGuestID] = useState();

  return <>
    {selectedGuestID ? 
      <GuestDetail selectedGuestID={selectedGuestID} setSelectedGuestID={setSelectedGuestID} />
      : <GuestList setSelectedGuestID={setSelectedGuestID}/>}
  </>;
}
