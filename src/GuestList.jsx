import { useState, useEffect } from "react";
import GuestRecord from "./GuestRecord";
import { getGuestList } from "./api";

export default function GuestList({ setSelectedGuestID }) {
    const [guestList, setGuestList] = useState([]);

    useEffect(() => {
        const fetchGuestList = async () => {
            const data = await getGuestList();
            setGuestList(data.data);
        };
        
        fetchGuestList();
    }, []);


  return(
  <>
    <table>
        <caption><h2>Guest List</h2></caption>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {guestList.map((guest) => {
                return (<GuestRecord key={guest.id} guest={guest} setSelectedGuestID={setSelectedGuestID} />);
            })}
        </tbody>
    </table>
    <div>Select a guest for more details</div>
  </>
  );
}