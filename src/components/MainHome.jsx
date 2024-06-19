import { Link } from 'react-router-dom'

const MainHome = () => {
  return (
    <div>

        <div>MainHome</div>
        <div>
            <p>Home</p>
            <Link to='/admin'>Home</Link>
        </div>
        <div>
            <p>Test</p>
            <Link to="/admin/test">Test</Link>
        </div>
    </div>
  )
}

export default MainHome