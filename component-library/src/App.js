import { useState } from "react";

import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Badge from "./components/Badge";
import Alert from "./components/Alert";
import Modal from "./components/Modal";

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Reusable Components</h1>

      {/* Button */}
      <Button onClick={() => alert("Button Clicked")}>
        Click Me
      </Button>

      <br />
      <br />

      {/* Card */}
      <Card
        title="Card Title"
        footer={<button>Footer Button</button>}
      >
        This is card content
      </Card>

      <br />

      {/* Input */}
      <Input
        label="Username"
        placeholder="Enter name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      {/* Badge */}
      <Badge text="New" color="green" />

      <br />
      <br />

      {/* Alert */}
      <Alert
        type="success"
        message="Data Saved!"
        onClose={() => alert("Closed")}
      />

      <br />

      {/* Modal */}
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal
        isOpen={open}
        title="My Modal"
        onClose={() => setOpen(false)}
      >
        <p>Hello from modal</p>
      </Modal>
    </div>
  );
}

export default App;