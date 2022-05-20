const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch'
}

export default function SearchCourses() {
    return (
    <ul className="no-mobile" style={style}>
        <li>
          <a href="">
            Courses
          </a>
        </li>
        <li>
          <input type="search" id="search-option" name="q" placeholder="Search" />
        </li>
      </ul>
    );
}