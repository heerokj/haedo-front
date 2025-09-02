import { Flex, Button } from "antd";
import AuthForm from "../../features/auth/components/AuthForm";
import introImg from "../../assets/image/intro-image.jpg";
import styles from "./Login.module.css";

const ButtonTitle = ["대시보드", "캠페인 생성", "캠페인 관리", "순위 추적"];
// const ButtonContent = [""];

export const Login = () => {
  return (
    <Flex className={styles.loginSection}>
      {/* 왼쪽 로그인 폼 */}
      <Flex className={styles.leftPanel}>
        <AuthForm />
      </Flex>

      {/* 오른쪽 내용 */}
      <Flex
        className={styles.rightPanel}
        style={{
          backgroundImage: `url(${introImg})`,
        }}
      >
        <div className={styles.title}>
          <p>똑똑한 셀프 마케팅 파트너</p>
          <p>해도기획과 함께하세요</p>
        </div>
        <div className={styles.subTitle}>
          <p>자영업자, 광고 대행사를 위한 단 하나의 플랫폼</p>
          <p>캠페인 생성부터 현황 관리까지 간편하게</p>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {ButtonTitle.map((title) => (
            <Button
              type="default"
              shape="round"
              size="large"
              className={styles.glassButton}
            >
              {title}
            </Button>
          ))}
        </div>
      </Flex>
    </Flex>
  );
};
