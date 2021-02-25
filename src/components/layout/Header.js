import React from 'react'
import style from 'styled-components'
import ReceiptIcon from '@material-ui/icons/Receipt';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <div>
                    <ReceiptIcon/>
                </div>
                <Logo>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRl0j_J3cZXk1Yjh3d38DuJx-jh_XbxZKx_A&usqp=CAU" alt="news bolivia"/>
                </Logo>
            </LogoWrapper>
            <TestWrapper>
                Home
            </TestWrapper>
            
            <TestWrapper>
               Candidatos
            </TestWrapper> 
           
            <TestWrapper>
                <h2>Elecciones 2021</h2>
            </TestWrapper> 
                      
            <TestWrapper>
                <h2>Noticias</h2>
            </TestWrapper>       
            
            <TestWrapper>
                <h2>Acerca de Nosotros</h2>
            </TestWrapper>
            
        </Wrapper>
    )
}

export default Header
const Wrapper = style.div`
    background-color: orange;
    display: grid;
    grid-template-columns: 351px auto;
    height: 70px;
    align-items: center;
    
`

const LogoWrapper = style.div`
    height:45px;
    display: grid;
    grid-template-columns: 15% auto;
`

const Logo = style.div`
    display: flex;
    height: 45px;
`

const TestWrapper= style.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
list-style-type: none;
`