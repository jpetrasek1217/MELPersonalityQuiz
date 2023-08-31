import classes from './Footer.module.css';
import linktree from './assets/linktree.webp';
import discord from './assets/discord.webp';
import instagram from './assets/instagram.webp';
import email from './assets/email.webp';
import twitch from './assets/twitch.webp';
import help from './assets/help.webp'
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
                        <p className={classes.ClubfestTableText}>Table 137</p>
                        <Link to="https://www.instagram.com/p/Cwk-dPrrAaL/?img_index=1" target='_blank'><img src={help} alt='Confused on where Table 137 is? Click here!' className={classes.ClubfestTable}/></Link>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default Footer;