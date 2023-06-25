import { Card, Dropdown, Input, Modal, Text } from "@nextui-org/react";
import { useState } from "react";
import ButtonG from "../../ButtonG";

const AddClasses = () => {
  const [classIDs, setClassIDs] = useState([2, 5]);
  const [dataModelVisible, setDataModalVisible] = useState(false);

  return (
    <div>
      <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Body>
          <ButtonG
            text="Assign A Class"
            func={() => setDataModalVisible(true)}
            color="primary"
          />
        </Card.Body>
      </Card>
      <DataModal props={{ dataModelVisible, setDataModalVisible }} />
    </div>
  );
};

export default AddClasses;

const DataModal = ({ props }) => {
  const { dataModelVisible, setDataModalVisible } = props;
  const classes = [
    { key: "1", name: "1" },
    { key: "2", name: "2" },
    { key: "3", name: "3" },
    { key: "4", name: "4" },
    { key: "5", name: "5" },
  ];
  const subjects = [
    { key: "eng", name: "English" },
    { key: "ben", name: "Bengali" },
    { key: "mat", name: "Math" },
    { key: "phy", name: "Physics" },
  ];
  const times = [
    { key: "m1", name: "First Period" },
    { key: "m2", name: "Second Period" },
    { key: "m3", name: "Third Period" },
    { key: "n1", name: "Fourth Period" },
    { key: "n2", name: "Fifth Period" },
    { key: "n3", name: "Final Period" },
  ];

  const [formData, setFormData] = useState({
    subject: "",
    time: "",
    class: ""
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={dataModelVisible}
      onClose={() => setDataModalVisible(false)}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Class {" "}
          <Text b size={18}>
            Details
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <DropDown
          props={{
            handleChange,
            menuItems: classes,
            name: "class",
            deafultSet: "Classes",
          }}
        />
        <DropDown
          props={{
            handleChange,
            menuItems: subjects,
            name: "subject",
            deafultSet: "Subjects",
          }}
        />
        <DropDown
          props={{
            handleChange,
            menuItems: times,
            name: "time",
            deafultSet: "Times",
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <ButtonG
          color="error"
          text="Close"
          func={() => setDataModalVisible(false)}
        />
        <ButtonG color="primary" text="Add" func={() => {
          console.log(formData)
          setDataModalVisible(false);
        }} />
      </Modal.Footer>
    </Modal>
  );
};

const DropDown = ({ props }) => {
  const { handleChange, menuItems, name, deafultSet } = props;

  const [selected, setSelected] = useState(deafultSet);

  return (
    <Dropdown>
      <Dropdown.Button bordered>{selected}</Dropdown.Button>
      <Dropdown.Menu
        aria-label="Dynamic Actions"
        items={menuItems}
        onAction={(key) => {
          const selectedValue = menuItems.find((item) => item.key === key).name;
          setSelected(selectedValue);
          handleChange({
            target: {
              name,
              value: selectedValue,
            },
          });
        }}
      >
        {(item) => (
          <Dropdown.Item
            key={item.key}
            color={item.key === "delete" ? "error" : "default"}
          >
            {item.name}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
