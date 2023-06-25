import { Input, Dropdown } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ButtonG from "../../ButtonG";
import AddClasses from "./AddClasses";

const Mail = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3" />
        <path d="M17 9l-3.13 2.5a3.166 3.166 0 01-3.75 0L7 9M19.21 14.77l-3.539 3.54a1.232 1.232 0 00-.3.59l-.19 1.35a.635.635 0 00.76.76l1.35-.19a1.189 1.189 0 00.59-.3l3.54-3.54a1.365 1.365 0 000-2.22 1.361 1.361 0 00-2.211.01zM18.7 15.28a3.185 3.185 0 002.22 2.22" />
      </g>
    </svg>
  );
};

const Password = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill={fill}>
        <path d="M18.75 8v2.1a12.984 12.984 0 00-1.5-.1V8c0-3.15-.89-5.25-5.25-5.25S6.75 4.85 6.75 8v2a12.984 12.984 0 00-1.5.1V8c0-2.9.7-6.75 6.75-6.75S18.75 5.1 18.75 8z" />
        <path d="M18.75 10.1a12.984 12.984 0 00-1.5-.1H6.75a12.984 12.984 0 00-1.5.1C2.7 10.41 2 11.66 2 15v2c0 4 1 5 5 5h10c4 0 5-1 5-5v-2c0-3.34-.7-4.59-3.25-4.9zM8.71 16.71A1.052 1.052 0 018 17a1 1 0 01-.38-.08 1.032 1.032 0 01-.33-.21A1.052 1.052 0 017 16a1 1 0 01.08-.38 1.155 1.155 0 01.21-.33 1.032 1.032 0 01.33-.21 1 1 0 011.09.21 1.155 1.155 0 01.21.33A1 1 0 019 16a1.052 1.052 0 01-.29.71zm4.21-.33a1.155 1.155 0 01-.21.33A1.052 1.052 0 0112 17a1.033 1.033 0 01-.71-.29 1.155 1.155 0 01-.21-.33A1 1 0 0111 16a1.033 1.033 0 01.29-.71 1.047 1.047 0 011.42 0A1.033 1.033 0 0113 16a1 1 0 01-.08.38zm3.79.33a1.014 1.014 0 01-1.42 0 1.014 1.014 0 010-1.42 1.047 1.047 0 011.42 0c.04.05.08.1.12.16a.556.556 0 01.09.17.636.636 0 01.06.18 1.5 1.5 0 01.02.2 1.052 1.052 0 01-.29.71z" />
      </g>
    </svg>
  );
};

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    subject: "",
    designation: "",
    classes: [],
  });
  const [teachersInSession, setTeachersInSession] = useState([]);
  const [message, setMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAPI = () => {
    console.log(formData);
    const teachersFromSession = JSON.parse(
      sessionStorage.getItem("teachers")
    );
    const newTeacher = {
      id: teachersFromSession.length + 1,
      name: formData.name,
      email: formData.email,
      designation: formData.designation,
      password: formData.password,
      subject: formData.subject,
      classes: formData.classes ? formData.classes : [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    };
    
    const allTeacher = [newTeacher, ...teachersFromSession];
    if (window) {
      sessionStorage.setItem("teachers", JSON.stringify(allTeacher));

      setMessage(true);
      document.getElementById("addTeacherForm").reset();

      setTimeout(() => {
        setMessage(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (window) {
      const teacherFromSession = JSON.parse(sessionStorage.getItem("teachers"));
      setTeachersInSession(teacherFromSession);
    }
  }, []);

  const designation = [
    { key: "at", name: "Asistant Teacher" },
    { key: "pt", name: "Part-time Teacher" },
  ];
  const subjects = [
    { key: "eng", name: "English" },
    { key: "ben", name: "Bengali" },
    { key: "mat", name: "Math" },
    { key: "phy", name: "Physics" },
  ];

  return (
    <div>
      <form className="flex flex-col gap-5" id="addTeacherForm">
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="e.g John Doe"
          onChange={handleChange}
          name="name"
          label="Name"
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="e.g abc@xyz.com"
          contentLeft={<Mail fill="currentColor" />}
          onChange={handleChange}
          name="email"
          label="Email Address"
        />
        <DropDown
          props={{
            handleChange,
            menuItems: designation,
            name: "designation",
            deafultSet: "Designation",
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
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          contentLeft={<Password fill="currentColor" />}
          onChange={handleChange}
          name="password"
          label="Password"
        />
        <AddClasses />
        <ButtonG
          text="Add new"
          color="primary"
          func={handleAPI}
          className="pt-10"
        />
      </form>
      {message ? (
        <div className="my-5 py-2 px-2 border rounded-lg font-bold text-green-600 block">
          New Teacher: {formData.name} Added!
        </div>
      ) : null}
    </div>
  );
};

export default AddTeacher;

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
