import PropTypes from 'prop-types'
import './styles.css'

export const Layout = ({ children }) => {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }
    return (
        <div className="flex flex-col mt-40  items-center layout-container  ">
            {children}
        </div>
    )
}
export default Layout