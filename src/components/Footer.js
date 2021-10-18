import { BottomNavigationAction, BottomNavigation } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'


export function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{ fill: "#3b5998" }} />} />
            <BottomNavigationAction label="Twitter" icon={<TwitterIcon style={{ fill: "#1DA1F2" }} />} />
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{ fill: "#C13584" }} />} />
            <BottomNavigationAction label="YouTube" icon={<YouTubeIcon style={{ fill: "#c4302b" }} />} />
        </BottomNavigation>
    )
}

