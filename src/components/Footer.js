import classes from './Footer.module.css';
import linktree from './assets/linktree.png';
import discord from './assets/discord.png';
import instagram from './assets/instagram.png';
import email from './assets/email.png';
import twitch from './assets/twitch.png';
import help from './assets/help.png'
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className={classes.FooterAll}>
            <div className={classes.FooterContainer}>
                <div className={classes.SocialList}>
                    <Link to="https://linktr.ee/macextralife" target='_blank'><img src={linktree} alt='linktree logo' className={classes.SocialLink} /></Link>
                    <Link to="https://discord.gg/macextralife" target='_blank'><img src={discord} alt='discord logo' className={classes.SocialLink} /></Link>
                    <Link to ="https://www.instagram.com/macextralife" target='_blank'><img src={instagram} alt='instagram logo' className={classes.SocialLink} /></Link>
                    <Link to="mailto:macextralife@gmail.com" target='_blank'><img src={email} alt='email logo' className={classes.SocialLink} /></Link>
                    <Link to="https://www.twitch.tv/macextralife" target='_blank'><img src={twitch} alt='twitch logo' className={classes.SocialLink} /></Link>
                </div>
                <h3 className={classes.Clubfest}>Come see us at Clubfest!</h3>
                <div className={classes.ClubfestDetailsContainer}>
                    <p className={classes.ClubfestDetail}>September 5, 2023</p>
                    <div className={classes.ClubfestDetail}>
                    <p className={classes.ClubfestDetail}>2PM-6PM</p>
                    <div className={classes.ClubfestDetail}>
                        <p className={classes.ClubfestTableText}>BSB Field</p>
                        <img src={help} alt='Confused on where Table 302 is? Click here!' className={classes.ClubfestTable}/>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default Footer;