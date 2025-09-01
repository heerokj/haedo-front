import { Button, Checkbox, Form, Input, Flex } from "antd";
import { Image } from "antd";
import logo from "../../../assets/image/haedo-logo.png";
import SocialLoinButtons from "./SocialLoinButtons";
import EventContent from "./EventContent";

export default function AuthForm() {
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{
        maxWidth: 400,
        maxHeight: 670,
        padding: "16px 40px",
        borderRadius: "20px",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "40px 0" }}>
        <Image width={159} height={46} src={logo} preview={false} />
      </div>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
        style={{ marginBottom: "12px" }}
      >
        <Input
          placeholder="ex) haedo_company@naver.com"
          style={{ height: "48px", width: "320px" }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
        style={{ marginBottom: "6px" }}
      >
        <Input
          type="password"
          placeholder="비밀번호 입력"
          style={{ height: "48px", width: "320px" }}
        />
      </Form.Item>
      <Form.Item style={{ width: "320px", marginBottom: "20px" }}>
        <Flex justify="space-between" style={{ width: "100%" }}>
          {/* 왼쪽 */}
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color: "#999999" }}>아이디 저장</Checkbox>
          </Form.Item>

          {/* 오른쪽 */}
          <Flex gap="8px">
            <a href="" style={{ color: "#555555" }}>
              회원가입
            </a>
            <span style={{ color: "#EBEBEB" }}>|</span>
            <a href="" style={{ color: "#555555" }}>
              비밀번호 찾기
            </a>
          </Flex>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          style={{
            height: "51px",
            width: "320px",
            fontSize: "16px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          로그인
        </Button>
      </Form.Item>
      <SocialLoinButtons />
      <EventContent />
    </Form>
  );
}
