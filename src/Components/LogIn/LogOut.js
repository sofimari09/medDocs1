import axios from 'axios';

function LogOut() {

    axios.get(`https://recibook.space/LogOut.php`, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', } })

}

export default LogOut