import React from "react";
import {
  VideoContainer,
  Content,
  Recommendation,
  VideoWrapper,
  Title,
  Details,
  Info,
  Buttons,
  Button,
  Description,
  ChannelInfo,
  Subscribe,
  ChannelDetail,
  ChannelName,
  SubCounter,
  VideoInfo,
  Image,
} from "./singleVideo.style";
import {
  ThumbUpOutlined,
  ThumbDownOffAltOutlined,
  ReplyOutlined,
  AddTaskOutlined,
} from "@mui/icons-material";
import { Hr } from "../../components/menu";
import pfp from "../../assets/pfp.jpg";

const SingleVideo = () => {
  return (
    <VideoContainer>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="498"
            src="https://www.youtube.com/embed/yIaXoop8gl4?list=PLj-4DlPRT48mDB819AYgn3mQoTfCuheCX"
            title="React Video Sharing App UI Design | Youtube UI Clone with React"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>48,154 views • Aug 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlined /> Dislike
            </Button>
            <Button>
              <ReplyOutlined /> Share
            </Button>
            <Button>
              <AddTaskOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Description>
          <ChannelInfo>
            <Image src={pfp} />
            <ChannelDetail>
              <ChannelName>KvotheYT</ChannelName>
              <SubCounter>80k subscribers</SubCounter>
              <VideoInfo>
                Aliqua pariatur ad Lorem excepteur adipisicing enim cupidatat
                pariatur est commodo ullamco irure. Nisi nisi nisi in nulla
                aliqua tempor aute labore minim sint id ex. Aute ullamco Lorem
                reprehenderit Lorem aliquip Lorem nisi ad nostrud. Lorem ipsum
                veniam aute irure Lorem sint id mollit ad laborum minim enim
                exercitation.
              </VideoInfo>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Description>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </VideoContainer>
  );
};

export default SingleVideo;
