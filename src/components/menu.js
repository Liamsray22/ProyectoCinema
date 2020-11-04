import React  from 'react'
import '../css/menu.css'
import {MenuItems} from '../Data/menuItems'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

//1
class Menu extends React.Component{
    state={
        clicked:false
    }
    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
  return (
          <nav className="NavbarItems">

              <div className="menu-icon" onClick={this.handleClick}>
                <FontAwesomeIcon icon={this.state.clicked ? faTimes:faBars}/>
              </div>
              <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
              </ul>
          </nav>
  )}
}

export default Menu