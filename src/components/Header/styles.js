import styled from 'styled-components';

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
        & .options {
            display:none;
        }
    }
`;

export const SideBarIcon = styled.div`
    display: none;
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
        @media (max-width: 500px) {
            font-size: 12px;
        }
    }

    & .IconOption {
        display: flex;
        border: 2px solid;
        border-color: white;
        width: 20px;
        height: 20px;
        padding: 20px;
        border-radius: 100px;
        margin-right: 50px;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
            background-color: white;
            color: rgb(24, 34, 78);
        }

    }
`;