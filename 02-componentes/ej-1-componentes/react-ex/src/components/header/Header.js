import SearchCourses from './SearchCourses';
import Links from './Links';
import Logo from './Logo';

export default function Header(){
    return (
        <header>
            <SearchCourses />
            <Logo />
            <Links />
        </header>
    )
}