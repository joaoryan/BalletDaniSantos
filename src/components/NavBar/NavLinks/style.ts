import styled from 'styled-components';

export const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
   &:hover {
    color: #f3b755; //#F231A5
   }
  & > a {
    border: 1px solid transparent;
    color: #8899a6;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
    height: 70px;
  }

  & > a:hover {
    transition: 0.5s;
    color: white
  }

  .active {
   color: #f0a63b // #f3b755; //#F27100
  }

  .active:hover {
    color: #f3b755; //#F27100
  }

`;

export const Icon = styled.img`
  width: 30px;
  height: auto;
`;