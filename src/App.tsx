import { FiMail, FiLock, FiSearch, FiUser } from "react-icons/fi";

import Input from "./components/Input";

function App() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h1>Reusable Input Component</h1>

      {/* Basic Input */}
      <Input label="Name" placeholder="Enter your name" />

      {/* Email */}
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        leftIcon={<FiMail />}
      />

      {/* Password */}
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        leftIcon={<FiLock />}
      />

      {/* Required */}
      <Input label="Username" placeholder="Enter username" required />

      {/* Error */}
      <Input
        label="Email"
        placeholder="Enter email"
        error="Email is required"
      />

      {/* Helper Text */}
      <Input
        label="Password"
        placeholder="Minimum 8 characters"
        helperText="Password should contain at least 8 characters."
      />

      {/* Small */}
      <Input label="Small Input" placeholder="Small size" inputSize="small" />

      {/* Medium */}
      <Input
        label="Medium Input"
        placeholder="Medium size"
        inputSize="medium"
      />

      {/* Large */}
      <Input label="Large Input" placeholder="Large size" inputSize="large" />

      {/* Rounded */}
      <Input label="Rounded Input" placeholder="Rounded" rounded />

      {/* Shadow */}
      <Input label="Shadow Input" placeholder="Shadow Effect" shadow />

      {/* Rounded + Shadow */}
      <Input label="Rounded + Shadow" placeholder="Premium UI" rounded shadow />

      {/* Full Width */}
      <Input label="Full Width" placeholder="Full Width Input" fullWidth />

      {/* Disabled */}
      <Input label="Disabled Input" placeholder="Disabled" disabled />

      {/* Left Icon */}
      <Input
        label="Search"
        placeholder="Search products..."
        leftIcon={<FiSearch />}
      />

      {/* Right Icon */}
      <Input
        label="Username"
        placeholder="Enter username"
        rightIcon={<FiUser />}
      />

      {/* Both Icons */}
      <Input
        label="Login"
        placeholder="Enter email"
        leftIcon={<FiMail />}
        rightIcon={<FiUser />}
      />
    </div>
  );
}

export default App;
