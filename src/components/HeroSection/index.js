import React,{ useState } from 'react';

import {
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroDesc,
    BtnRoute,
    HeroBtn,
    ForwardIcon,
    Imp 
} from './heroElements';

export default function HeroSection() {
    const [hover,setHover] = useState(false);

    const toggleIcon = () => {
        console.log('toggleIcon')
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer>
                <HeroContent>
                    <HeroH1>
                        Explore the <Imp>VR</Imp> games{" "}
                    </HeroH1>
                    <HeroDesc>
                        Buy first vr game and get $25 credit in your account
                    </HeroDesc>
                <BtnRoute>
                    <HeroBtn to="/signin">Get Started <ForwardIcon className="arr-icon"/></HeroBtn>
                    {/* <HeroBtn to="/signin" onMouseEnter={toggleIcon} onMouseLeave={toggleIcon}>Get Started {hover ? <ForwardIcon className="arr-icon" /> : null} </HeroBtn> */}
                </BtnRoute>
                </HeroContent>
            </HeroContainer>
        </>
    )
}
