import event from "../../../assets/image/login-event.png";

export default function EventContent() {
  return (
    <div style={{ margin: "50px 0px" }}>
      <img
        src={event}
        alt="event"
        height={50}
        width={298}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
