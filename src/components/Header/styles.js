import styled from 'styled-components';

//rgb(252, 211, 215) rosa
//rgb(24, 34, 78) azul

export const Footer = styled.div`
    height: 100px;
    background-color: rgb(24, 34, 78);
`;

export const Menu = styled.div.attrs(props => ({
    show: props.show?'flex':'none',
    drop: props.show?'100%':'0%'
}))`
width: 100%;
display: none;
background-color: rgb(24, 34, 78);
& .selected_navbar {
    color: white;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    border-bottom: 2px solid;
    border-color: white;
    margin-top: 2px;
    margin-left:10px;
    margin-right:10px;
    margin-bottom: 10px;
}
& .normal_navbar {
    color: white;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    margin-left:10px;
    margin-right:10px;
    margin-bottom: 10px;
}
@media (max-width: 500px) {
    display: ${props=>props.show};
    justify-content: center;
    align-items: center;
}
`;

export const UserArea = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 50px;
& .iconDiv {
    border: 2px solid;
    padding: 7px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: rgb(24, 34, 78);
    }
}
& .count {
    font-family: 'Nunito', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    background-color: rgb(24, 34, 78);
    position: relative;
    right:-60px;
    top:10px;
    border: 2px solid;
    border-radius: 20px;
    font-size:12px;
    padding:2px;
}
`;

export const UserContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const PageBody = styled.div`
height: 100%;
`;

export const LogoContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
margin-left: 50px;
margin-right: 20px;
justify-content: center;
align-items: center;
`;

export const LogoIMG = styled.img`
height: 80px;
width: 80px;
`; 

export const NavbarOption = styled.div`
.selected_navbar {
    color: rgb(255, 217, 0);
    font-size: 20px;
    margin-bottom: 25px;
    margin-top: 15px;
    margin-left: 15px;
    text-decoration: none;
}

.normal_navbar {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    margin-bottom: 25px;
    margin-top: 15px;
    margin-left: 15px;
    text-decoration: none;
}

.normal_navbar:hover {
    color: rgba(255, 255, 255, 1);
    transition: all 0.5s;
}
`;

export const Head = styled.div`
    padding: 0px;
    margin: 0px;
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    color: white;
    background-color: rgb(24, 34, 78);
    font-size: 20px;
    
    @media (max-width: 500px) {
        transition: all 0.2s;
        & .options {
            display:none;
        }
        justify-content: center;
    }
`;

export const SideBarIcon = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 500px) {
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`;

export const Options = styled.div`
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: left;
    color: white;
    background-color: rgb(24, 34, 78);
    font-size: 20px;

.selected_navbar {
    color: white;
    font-size: 20px;
    margin-left: 15px;
    margin-top: 2px;
    text-decoration: none;
    border-bottom: 2px solid;
    border-color: white;
}

.normal_navbar {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    margin-left: 15px;
    text-decoration: none;
}

.normal_navbar:hover {
    color: rgba(255, 255, 255, 1);
    transition: all 0.5s;
}
`;

export const UserInfo = styled.div`
    font-family: 'Oswald', sans-serif;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgb(24, 34, 78);
    font-size: 20px;

    & .UserName {
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 500px) {
            font-size: 12px;
        }
    }

    & .IconOption {
        display: flex;
        border: 2px solid;
        border-color: white;
        padding: 10px;
        border-radius: 100px;
        cursor: pointer;
        transition: all .2s ease-in-out;

        & .FAIconUser {
            width: 30px;
            height: 30px;
        }

        &:hover {
            background-color: white;
            color: rgb(24, 34, 78);
        }

    }
`;