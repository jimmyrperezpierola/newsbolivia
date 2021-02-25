import styled from 'styled-components';
import { BiLink, BiSearch } from "react-icons/bi";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    position: sticky;
    top: 0;
    height : 60px;
    /* width: 100%; */
    background-color: ${({ active }) => (active ? "#000" : "transparent")};
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    margin-top: - 60px;    
`;

export const Nav = styled.div`
    width:100%;
    display:flex;
    justify-content: space-around; /* justify-content: center; */
    align-items: center;
    position: relative;
`;

export const NavbarMenu = styled.ul`
    width: 550px;
    display: flex;
    align-items:center;
    justify-content: space-around;
`;

export const NavLogo = styled(Link)`
     font-size:38px;
     color:#dde1ec;
     font-weight: bolder;     
`;

export const NavbarItem = styled.li`
    position: relative;
    height: 60px;
    padding: 0 10px;

    display: flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;

    &::before {
        content:"";
        position: absolute;
        top:-100%;
        left: 0;
        height: 7px;     /*height: 60px; */
        width:100%;
        background-color:red;
        transition: all .4s easy-ease-in-out;
    }

    &:hover::before {
        top:0;
    }
    /* &:hover a {
        color: #fff;
    }     */
`;

export const NavbarLink = styled(Link)`
    font-size:20px;
    color:#dee1ec; 
    /* color: #000; */
    font-weight: 500;
    z-index:20;
    transition: color .7s ease-in;
`;

export const BtnWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;    
`;

export const NavBtn = styled.button`
    color: #fff;
    font-size: 16px;
    padding:16px 28px;
    border-radius: 50px;
    border:none;
    outline: none;
    cursor: pointer;
    background-image: linear-gradient(
        to right,
        rgb(142,45,226),
        rgb(74,0,224)
    );
    opacity: 0.8;
    transition:all .3s;
`;

export const NavbarSearch = styled.div`
    position:relative;
    width:450px;
    display:flex;
    justify-content: center;
    align-items:center;
`;

export const SearchLogo = styled(SearchIcon)`
    color:#000;
    position:absolute;
    left: 55px;
    font-size:18px;
`;

export const SearchBar = styled.input`
    width:80%;
    padding:8px 35px;
    font-size: 18px;
    border-radius:18px;
    outline: 'none';
    border: 1px solid #000;
`;




