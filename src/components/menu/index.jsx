import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  padding-bottom: 78%;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Image = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

export const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Image src={logo} />
            KvotheHub
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          <p>Home</p>
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          <p>Explore</p>
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          <p>Subscriptions</p>
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          <p>Library</p>
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          <p>History</p>
        </Item>
        <Hr />
        <div>
          <p>Sign in to like videos, comment and subscribe.</p>
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </div>
        <Hr />
        <Title>BEST OF KVOTHEHUB</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          <p>Music</p>
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          <p>Sports</p>
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          <p>Gaming</p>
        </Item>
        <Item>
          <MovieOutlinedIcon />
          <p>Movies</p>
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          <p>News</p>
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          <p>Live</p>
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          <p>Settings</p>
        </Item>
        <Item>
          <FlagOutlinedIcon />
          <p>Report</p>
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          <p>Help</p>
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          <p>{darkMode ? "Light" : "Dark"} Mode</p>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
