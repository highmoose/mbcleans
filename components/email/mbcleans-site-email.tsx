import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface MBCleansSiteEmailProps {
  validationCode?: string;
}

const baseUrl = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : "";

export const MBCleansSiteEmail = ({
  names,
  chooseService,
  typeOfClean,
  propertyType,
  companyName,
  roomsSelect,
  hallwaySelect,
  staircaseSelect,
  haveSupplies,
}) => (
  <Html>
    <Head />
    <Preview>Estimate Request</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src="https://mbcleans.co.uk/logo/mbcleans-logo.svg"
            width="160"
            alt="MBCleans"
          />
        </Section>
        <Heading style={h1}>Hello {names}!</Heading>
        <Heading>Thank you for your request!</Heading>
        <Text style={heroText}>
          We have your details and we will be in touch shortly
        </Text>

        <Section style={codeBox}>
          <Text style={confirmationCodeText}>
            <div style={{ ...item, color: "deepskyblue" }}>
              Service:&nbsp;
              <span style={{ color: "black", fontWeight: "600" }}>
                {chooseService}
              </span>
            </div>
            <div style={{ ...item, color: "deepskyblue" }}>
              Type Of Clean:&nbsp;
              <span style={{ color: "black" }}>{typeOfClean}</span>
            </div>
            <div style={{ ...item, color: "deepskyblue" }}>
              Property Type:&nbsp;{" "}
              <span style={{ color: "black" }}>{propertyType}</span>
            </div>
            <div style={{ ...item, color: "deepskyblue" }}>
              Company Name:&nbsp;
              <span style={{ color: "black" }}>{companyName}</span>
            </div>
            <div style={{ ...item, color: "deepskyblue" }}>
              Rooms: <span style={{ color: "black" }}>{roomsSelect}</span>
            </div>
            <div style={{ ...item, color: "deepskyblue" }}>
              Hallway:&nbsp;{" "}
              <span style={{ color: "black" }}>{hallwaySelect}</span>
            </div>
            <div style={{ ...item, color: "deepskyblue" }}>
              Staircase:&nbsp;{" "}
              <span style={{ color: "black" }}>{staircaseSelect}</span>
            </div>
            <div style={{ ...item, color: "deepskyblue" }}>
              Have Supplies:&nbsp;{" "}
              <span style={{ color: "black" }}>{haveSupplies}</span>
            </div>
          </Text>
        </Section>

        <Text>
          <div>Monday - Friday: 7:00 AM to 5:00 PM</div>
          <div>Saturday - Sunday: Closed</div>
        </Text>

        {/* <Section>
          <Row style={footerLogos}>
            <Column style={{ width: "66%" }}>
              <Img
                src={`${baseUrl}/static/slack-logo.png`}
                width="120"
                height="36"
                alt="Slack"
              />
            </Column>
            <Column>
              <Section>
                <Row>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`${baseUrl}/static/slack-twitter.png`}
                        width="32"
                        height="32"
                        alt="Slack"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`${baseUrl}/static/slack-facebook.png`}
                        width="32"
                        height="32"
                        alt="Slack"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`${baseUrl}/static/slack-linkedin.png`}
                        width="32"
                        height="32"
                        alt="Slack"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                </Row>
              </Section>
            </Column>
          </Row>
        </Section> */}

        <Section style={{ flexDirection: "row" }}>
          <Text style={item2}>Find out more at: www.mbcleans.co.uk</Text>

          {/* &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
           <Link
            style={footerLink}
            href="https://slack.com/legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policies
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help center
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/community"
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            Slack Community
          </Link> */}
          <Text style={footerText}>
            © 2024 MBCleans UK, a cleaning services company. <br />
            Wellingborough, Northants, United Kingdom <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

MBCleansSiteEmail.PreviewProps = {
  validationCode: "DJZ-TLX",
} as MBCleansSiteEmailProps;

export default MBCleansSiteEmail;

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
};

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
};

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

const socialMediaIcon = {
  display: "inline",
  marginLeft: "32px",
};

const item = {
  marginBottom: "2px",
  fontSize: "16px",
  fontWeight: "600",
};

const item2 = {
  marginBottom: "-6px",
  fontSize: "16px",
};

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

const logoContainer = {
  marginTop: "32px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "10px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginBottom: "30px",
  padding: "10px 10px",
  paddingLeft: "20px",
};

const confirmationCodeText = {
  fontSize: "30px",
};

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
};
