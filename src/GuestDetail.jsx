import { getGuestDetail } from "./api";
import { useState, useEffect } from "react";


export default function GuestDetail({ selectedGuestID, setSelectedGuestID }) {
    const [guestDetail, setGuestDetail] = useState();

    useEffect(() => {
        const fetchGuestDetail = async () => {
            const data = await getGuestDetail(selectedGuestID);
            setGuestDetail(data.data);
        }

        fetchGuestDetail();

    }, [selectedGuestID]);

    return(
    <>
        <table>
            <caption><h2>Guest Detail</h2></caption>
            <tbody>
                <tr>
                    <td className="heading">Name</td>
                    <td>{guestDetail?.name}</td>
                </tr>
                <tr>
                    <td className="heading">Email</td>
                    <td>{guestDetail?.email}</td>
                </tr>
                <tr>
                    <td className="heading">Phone</td>
                    <td>{guestDetail?.phone}</td>
                </tr>
                <tr>
                    <td className="heading">Bio</td>
                    <td>{guestDetail?.bio}</td>
                </tr>
                <tr>
                    <td className="heading">Job</td>
                    <td>{guestDetail?.job}</td>
                </tr>   
            </tbody>
        </table>
        <p>
            <button onClick={() => setSelectedGuestID(null)}>Back</button>
        </p>
        
    </>
    );
}