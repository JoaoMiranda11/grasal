import styled from 'styled-components';

export const PageBody = styled.div`
height: 100%;
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
    height: 75px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    color: white;
    background-color: rgb(27, 24, 20);
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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: left;
    color: white;
    background-color: rgb(27, 24, 20);
    font-size: 20px;

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

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgb(27, 24, 20);
    font-size: 20px;

    & .UserName {
        @media (max-width: 500px) {
            font-size: 12px;
        }
    }
`;

export const Select = styled.select`
    width: 250px;
    margin: 25px;
`;