import { Flex } from "antd";
import AuthForm from "../../features/auth/components/AuthForm";

export const Login = () => {
  return (
    <Flex
      style={{
        height: "100vh",
      }}
    >
      <Flex
        style={{
          width: "50%",
          backgroundColor: "#F5F5F5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AuthForm />
      </Flex>
      <Flex style={{ width: "50%", backgroundColor: "#b6ccd8" }}>2</Flex>
    </Flex>
  );
};
