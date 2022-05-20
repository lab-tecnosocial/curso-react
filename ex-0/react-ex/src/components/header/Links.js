

const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch'
}

export default function Links() {
    return (
        <ul class="no-mobile" style={style}>
          <li>
            <a href="">
              Donate
            </a>
          </li>
          <li>
            <a href="">
              Login
            </a>
          </li>
          <li>
            <a href="">
              Sign Up
            </a>
          </li>
        </ul>
    );
} 