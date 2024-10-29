import './ItemDate.css';

function ItemDate(){
    const day=20;
    const month="June"
    const year= 1998;
    // TODO: Add logic to format date as desired (e.g., 20 June 1998)
    return(<div className='mfg-date'>
        <span>{day} </span>
        <span>{month} </span>
        <span>{year}</span>
    </div>)
}

export default ItemDate;