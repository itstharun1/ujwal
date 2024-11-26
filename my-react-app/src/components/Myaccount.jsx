import { Component } from "react";
import './Myaccount.css'
import { BsBoxSeam } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { BsBagCheckFill } from "react-icons/bs";
import { BsBox2Fill } from "react-icons/bs";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillFileArrowDownFill } from "react-icons/bs";
import { BsFillHousesFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsIndent } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";


class Myaccount extends Component{
    render(){
        return(
            <div>
                <div className="myaccount-card1">
                    <div>
                     <div>
                        <button className="card1-button1">Home</button>
                        <button className="card1-button2">My Account</button>
                     </div>
                     <h1 className="card1-heading">Explore All Products</h1>
                    </div>
                    <div className="card-img">
                        <img className="card1-img" src="https://media.croma.com/image/upload/v1665444547/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/229582_0_hkecmr.png"/>
                    </div>
                </div>
                <div className="myaccount-card2">
                <div className="card2-profile">
                            <img src="https://logodix.com/logo/1984203.png" className="profile-logo"/>
                            <h3 className="profile-heading">Vijai dewarakonda</h3>
                            <p className="profile-para">eTrade Member Since Sep 2020</p>
                        </div>
                    <div className="card2-nav-container">
                        
                        <div className="card2-nav">
                            <p className="nav-item"><BsCreditCard2Front className="img-icon"/> Dashboard</p>
                            <p className="nav-item"><BsFillCartFill className="img-icon" /> Dashboard</p>
                            <p className="nav-item"><BsFillFileArrowDownFill className="img-icon"/> Dashboard</p>
                            <p className="nav-item"><BsFillHousesFill className="img-icon"/> Dashboard</p>
                            <p className="nav-item"><BsFillPersonFill className="img-icon"/> Dashboard</p>
                            <p className="nav-item"><BsIndent className="img-icon"/>Dashboard</p>
                        </div>
                        <div className="card2-results">
                        <h1 className="results-heading">Your Recent Results</h1>
                    </div>
                    </div>
                    
                </div>
                <div className="myaccount-card3">
                    <div className="card3-card1">
                        <h6 className="card3-h6"><BsFillEnvelopeFill/> Newsletter</h6>
                        <h2 className="card3-h2">Get weekly update</h2>
                    </div>
                    <div className="card3-card2">
                        <input  className="card3-input" type="text" placeholder="example@gmail.com" />
                        <button className="card3-button">Subscibe</button>
                    </div>
                </div>
                <div className="myaccount-card4">
                    <div className="card4-card1">
                        <div className="card4-item">
                            <BsBoxSeam className="card4-img"/>
                            <div>
                                <h6 className="card4-h">Fast & Secure Delivery</h6>
                                <p className="card4-p">Tell about your service.</p>
                            </div>
                        </div>
                        <div className="card4-item">
                            <BsCoin className="card4-img"/>                            
                            <div>
                                <h6 className="card4-h">Money Back Guarantee</h6>
                                <p className="card4-p" >Within 10 days.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card4-card1">
                        <div className="card4-item">
                            <BsBagCheckFill className="card4-img"/>
                            <div>
                                <h6 className="card4-h">24 Hour Return Policy</h6>
                                <p className="card4-p">No question ask.</p>
                            </div>
                        </div>
                        <div className="card4-item">
                            <BsBox2Fill className="card4-img"/>
                            <div>
                                <h6 className="card4-h">Pro Quality Support</h6>
                                <p className="card4-p">24/7 Live support.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Myaccount