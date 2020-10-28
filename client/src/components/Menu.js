import React from 'react'
import styled from 'styled-components'


const StyledMenu = styled.div`
  display:flex;
  @media ${({theme}) => theme.device.phoneMax }{
      display:none;
      visibility:0;
    }

  ul{
    margin-top:1.4em;
  }

  li{
    margin-right:2em;
  }
  a{
    font-weight:400;
  }
`

const Menu = () => {
  return (
    <>
    <StyledMenu>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
        <ul>
          <li><a href="/albums">Albums</a></li>
        </ul>
        <ul>
          <li><a href="/about">About</a></li>
        </ul>
        <ul>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </StyledMenu>
      </>
  )
}

export default Menu
