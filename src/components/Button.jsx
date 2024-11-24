import { Link } from 'react-router-dom';
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, black }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${black ? "text-n-8" : "text-n-1"} ${className || ""} bg-black border border-n-6 `;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(black)}
    </button>
  );

  const renderLink = () => {
    // Check if the href is an external link
    if (href.startsWith('http') || href.startsWith('https')) {
      return (
        <a href={href} className={classes}>
          <span className={spanClasses}>{children}</span>
          {ButtonSvg(black)}
        </a>
      );
    }
    
    // For internal routing
    return (
      <Link to={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(black)}
      </Link>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;