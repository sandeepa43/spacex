import "./Footer.css";

const Footer = () => {
  return (
    <div className="box">
      <p>
        SpaceX <span>&copy;</span> 2022
      </p>
      <a className="footer-link" href="https://twitter.com/spacex">
        TWITTER
      </a>
      <a className="footer-link" href="https://www.youtube.com/spacex">
        YOUTUBE
      </a>
      <a className="footer-link" href="https://www.instagram.com/spacex/">
        INSTAGRAM
      </a>
      <a className="footer-link" href="https://www.flickr.com/photos/spacex">
        FLICKR
      </a>
      <a
        className="footer-link"
        href="https://www.linkedin.com/company/spacex/"
      >
        LINKEDIN
      </a>
      <a
        className="footer-link"
        href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.spacex.com/media/privacy_policy_spacex.pdf"
      >
        PRIVACY POLICY
      </a>
      <a className="footer-link" href="https://www.spacex.com/supplier/">
        SUPPLIERS
      </a>
    </div>
  );
};
export default Footer;
