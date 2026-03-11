import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants/constants";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:"nav",
                start:"bottom top"

            }
        })
        navTween.fromTo("nav",{backgroundColor:"transparent"},{
            backgroundColor:"#00000050",
            backgroundFilter :'blur(10px)',
            duration:1,
            ease:"power1.inOut"
        })
    })


  return (
    <nav>
      <div>
        <a href="#home" className="flex item-center gap-2">
          <img src="/images/logo.png" alt="Brand Logo" />
          <p>The Velvet Bar</p>
        </a>
        <ul>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
