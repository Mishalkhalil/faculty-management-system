import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const TeachersCard = ({ props }) => (
  <Card
    variant="bordered"
    css={{ w: "100%", h: "350px" }}
    className="hover:shadow-xl"
  >
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
                {props.item.name}
              </Text>
              <Text color="$blackBlurred" size={12} className="font-semibold">
                {props.item.email}
              </Text>
              <Text color="$blackBlurred" size={12}>
                {props.item.designation}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Text color="$blackBlurred" size={12} className="font-semibold">
              {props.item.phone
                ? Object.values(props.item.phone)[0]
                : "01234567890"}
            </Text>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default TeachersCard;
