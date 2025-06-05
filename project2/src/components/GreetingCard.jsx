import "../CSS/greetingCard.css";
import IndividualCard from "./IndividualCard";
function GreetingCard({users}) {


    const userdata = [
        {
            name : "murali",
            age : 24,
            branch : "CSE"
        },
        {
            name : "sai",
            age : 22,
            branch : "IT"
        },
        {
            name : "karthik",
            age : 23,
            branch : "ECE"
        },
        {
            name : "suresh",
            age : 25,
            branch : "MECH"
        }
    ]
    //  console.log(props.users);
    return   (
        <div className="card">

         {userdata.map(
            (user,index)=>(
                <IndividualCard user = {user}/>
            )
         )

         }
            
        </div>
    )
}
export default GreetingCard;