import {Link} from 'react-router-dom';
import AddLanguage from '../components/LanguageModal'

const Settings = () => {
return (
    <div>
      <p><Link to="/orderHistory">Purchase History</Link></p>
      <AddLanguage />
    </div>
 
)

}

export default Settings;