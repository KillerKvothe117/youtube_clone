import React from "react";
import { Link } from "react-router-dom";
import {
  CardContainer,
  Image,
  Details,
  ChannelImage,
  Title,
  ChannelName,
  Info,
} from "./card.style";
import thumbnail from "../../assets/thumbnail.jpg";
import pfp from "../../assets/pfp.jpg";

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <CardContainer type={type}>
        <Image src={thumbnail} type={type} />
        <Details type={type}>
          <ChannelImage src={pfp} type={type} />
          <div>
            <Title>Test Video</Title>
            <ChannelName>KvotheYT</ChannelName>
            <Info>200k views 1 day ago</Info>
          </div>
        </Details>
      </CardContainer>
    </Link>
  );
};

export default Card;
