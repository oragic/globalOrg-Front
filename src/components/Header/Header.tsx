import React from 'react';
import SearchBarInput from '../SearchBar/SearchBar';
import {
  HeaderAppBar,
  HeaderLogo,
  SecondaryAppBar,
  SocialMedias,
} from './Header.styles';


function Header() {
  return (
    <>
      <HeaderAppBar position={'relative'}>

        <HeaderLogo src={'/img/logo.png'} alt={'Globall org'} />

        <SearchBarInput/>

        <SocialMedias>
          <a href="#"><img src="/icons/YouTube.png" alt="" /></a>
          <a href="#"><img src="/icons/LinkedIn.png" alt="" /></a>
          <a href="#"><img src="/icons/IG.png" alt="" /></a>
          <a href="#"><img src="/icons/WPP.png" alt="" /></a>
          <a href="#"><img src="/icons/FB.png" alt="" /></a>
          <a href="#"><img src="/icons/Twitter.png" alt="" /></a>
        </SocialMedias>
      </HeaderAppBar>

      <SecondaryAppBar position="relative">
        <a> Para empresas  </a>
        <a> Sou um projeto  </a>
        <a> Entrar </a>
        <a> Ajudar  </a>
      </SecondaryAppBar>
    </>
  );
}

export default Header