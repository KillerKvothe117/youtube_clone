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

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <CardContainer>
        <Image src={thumbnail} />
        <Details>
          <ChannelImage src={pfp} />
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
