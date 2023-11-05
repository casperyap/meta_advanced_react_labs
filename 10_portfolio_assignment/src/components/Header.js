import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    key: "EMail",
    icon: faEnvelope,
    url: "mailto: casyap@gmail.com",
  },
  {
    key: "GitHub",
    icon: faGithub,
    url: "https://github.com/casperyap/meta_advanced_react_labs",
  },
  {
    key: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/casper-yap-09677468/",
  },
  {
    key: "Medium",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    key: "StackOverflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const headerRef = useRef();
  const scrollVal = useRef();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {   
    const handleScroll = (event) => {
      // console.log(window.scrollY);
      
      if (window.scrollY > scrollVal.prev){
        headerRef.current.style.transform = "translateY(-200px)"
      }
      else {
        headerRef.current.style.transform = "translateY(0)"
      }
      
      scrollVal.prev = window.scrollY
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }; 
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration="1s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          {/* Add social media links based on the `socials` data */}
          <HStack>
            {
              socials.map(social => {
                return (            
                    <div key={social.key}>
                      <a href={social.url}>
                        <FontAwesomeIcon icon={social.icon} size="2x" />
                      </a>
                    </div>
                )                   
              })              
            }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a onClick={handleClick("projects")}>Projects</a>
              <a onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
