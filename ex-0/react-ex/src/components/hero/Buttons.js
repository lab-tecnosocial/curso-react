export default function Buttons() {
    return (
        <div className="buttons">
            <button className="tablet mobile">
                Start Here
            </button>

            <ul className="laptop">
                <li>
                    <button>
                        <a href="">
                            Learners
                        </a>
                    </button>
                </li>
                <li>
                    <button> <a href=""> Teachers </a> </button>
                </li>
            <li>
                <button>
                    <a href="">
                        Districts
                    </a>
                </button>
            </li>
            <li>
                <button>
                    <a href="">
                        Parents
                    </a>
                </button>
            </li>
        </ul>

      </div >
    )
}