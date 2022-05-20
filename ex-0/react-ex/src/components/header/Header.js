import SearchCourses from './SearchCourses'
import Links from './Links';
import Logo from './Logo'
import './Header.css'

const style = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceAround',
    height: '60px',
    borderBottom: '1px solid grey'
}

export default function Headers(){
    return (
        <div style={style}>
            <SearchCourses />
            <Logo />
            <Links />
        </div>
    )
}