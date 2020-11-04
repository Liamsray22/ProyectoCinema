import React from 'react'
import { Carousel} from 'react-bootstrap';
import ipcas from '../images/uno.jpeg'
import ipcas2 from '../images/dos.jpeg'
import ipcas3 from '../images/4.jpg'



class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            index:0,
            indi:false,
            windowWidth: window.innerWidth
        
        };
      }
    
    
     componentDidMount() {
      window.addEventListener("resize", this.handleResize);
     }
    
     componentWillUnmount() {
      window.addEventListener("resize", this.handleResize);
     } 
    // const [index, setIndex] = useState(0);
    // const[indi,setIndi] = useState(false);
    handleSelect = (selectedIndex, e) => {
        this.setState({
            index:selectedIndex
        })
      };
    handleResize = (e) => {
        if(this.state.windowWidth > 960){
            this.setState({
                indi:!this.state.indi
            })
        }
       };
 
      render(){
      return (
          
        <Carousel activeIndex={this.state.index} onSelect={this.handleSelect} 
        indicators={!this.state.indi} controls={!this.state.indi}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ipcas2}
              alt="First slide"
              height="600px"

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ipcas}
              alt="Second slide"
              height="600px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ipcas3}
              alt="Third slide"
              height="600px"

            />
{/*     
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      );
}
}
export default Slider