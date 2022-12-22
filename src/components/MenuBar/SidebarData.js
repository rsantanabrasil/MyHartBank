import icon_1 from '../../images/Icon-1.svg'
import icon_7 from '../../images/Icon-7.svg'
import { AiFillDashboard, AiFillSignal } from 'react-icons/ai'

export const SidebarData = [
    {
        title: 'Dashboard', 
        path: '/dashboard',
        icon: <AiFillDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Financeiro', 
        path: '/financeiro',
        icon: <AiFillSignal />,
        cName: 'nav-text'
    }
]