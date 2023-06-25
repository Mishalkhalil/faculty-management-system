import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const TeachersCard = ({props}) => (
  <Card variant="bordered" css={{ w: "100%", h: "350px" }} className="hover:shadow-xl">
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="/static/images/teacher.webp"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "$whiteBlurred",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col>
              <Text color="$blackBlurred" size={12} className="font-bold">
                John Doe
              </Text>
              <Text color="$blackBlurred" size={12}>
                Assitant Teacher for Physics
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
              onClick={() => console.log(props.item)}
            >
              <Text
                css={{ color: "$primary" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Details
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default TeachersCard;
