

export default function GuestRecord({ guest, setSelectedGuestID}) {
    return(
    <>
        <tr className="guest" onClick={ () => setSelectedGuestID(guest.id)}>
            <td>{guest.name}</td>
            <td>{guest.email}</td>
            <td>{guest.phone}</td>
        </tr>
    </>
    );
}