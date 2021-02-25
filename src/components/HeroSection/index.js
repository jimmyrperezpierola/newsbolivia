import React from 'react';

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
    return (
        <>
            <HeroContainer>
                <HeroContent>
                    <HeroH1>
                        Explore the <Imp>VR</Imp> games
                    </HeroH1>
                    <HeroDesc>
                        Buy first vr game and get $25 credit in your account
                    </HeroDesc>
                <BtnRoute>
                    <HeroBtn to="/signin">Get Started <ForwardIcon className="arr-icon"/></HeroBtn>
                </BtnRoute>
                </HeroContent>
            </HeroContainer>
        </>
    )
}
