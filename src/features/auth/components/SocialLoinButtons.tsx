import googleImg from "../../../assets/image/google.png";
import kakaoImg from "../../../assets/image/kakao.png";
import naverImg from "../../../assets/image/naver.png";

export default function SocialLoinButtons() {
  return (
    <div
      style={{
        borderTop: "1px solid #EEEEEE",
        width: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontSize: "15px",
          fontWeight: "500",
          color: "#7C838A",
          padding: "18px 0px",
        }}
      >
        SNS 계정 간편 로그인
      </p>
      <div style={{ display: "flex", gap: "30px" }} className="flex gap-4">
        <button
          style={{
            all: "unset",
            cursor: "pointer",
          }}
        >
          <img
            src={googleImg}
            alt="구글"
            height={50}
            width={50}
            style={{ objectFit: "cover" }}
          />
        </button>
        <button
          style={{
            all: "unset",
            cursor: "pointer",
          }}
        >
          <img
            src={kakaoImg}
            alt="카카오"
            height={50}
            width={50}
            style={{ objectFit: "cover" }}
          />
        </button>
        <button
          style={{
            all: "unset",
            cursor: "pointer",
            width: "50px",
            height: "50px",
          }}
        >
          <img
            src={naverImg}
            alt="네이버"
            height={50}
            width={50}
            style={{ objectFit: "cover" }}
          />
        </button>
      </div>
    </div>
  );
}
