import './footer.css';
import facebook_icon from '../../assets/images/facebook_icon.png';
import twitter_icon from '../../assets/images/twitter-icon.png';
import instagram_icon from '../../assets/images/instagram_icon.png';

const footer=()=>{
	return(
		<footer id="footer">
			<p className="copyright">Copyright &copy; 2020 Easy Company</p>
			<ul className="social">
				<li><a href="#"><img src={facebook_icon} className="footer-icon facebook"/></a></li>
				<li><a href="#"><img src={twitter_icon} className="footer-icon twitter"/></a></li>
				<li><a href="#"><img src={instagram_icon} className="footer-icon instagram"/></a></li>
			</ul>
		</footer>
	);
}

export default footer;