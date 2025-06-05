import "../CSS/cards.css";
function IndividualCard({ user }) {
    return (
        <div className="card1">
            <h1>Name : {user.name}</h1>
            <h2>Age : {user.age}</h2>
            <h3>Branch : {user.branch}</h3>
        </div>
    )
}
export default IndividualCard;