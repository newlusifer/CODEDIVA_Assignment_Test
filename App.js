import AppNavigator from "./src/navigation/AppNavigator";
//add icon fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, far, fas)
export default function App(props) {
    return <AppNavigator />
}

