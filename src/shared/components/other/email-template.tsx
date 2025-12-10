export default function ContactEmailTemplate({ name, message }: any) {
  return (
    <table width="100%" cellPadding={0} cellSpacing={0}>
      <tbody>
        <tr>
          <td>
            <h1
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Hi, {name}
            </h1>

            <p style={{ fontSize: "15px" }}>
              I have successfully received your message:
            </p>

            <p
              style={{
                padding: "8px",
                display: "inline-block",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            >
              {message}
            </p>

            <p style={{ fontSize: "14px", fontWeight: 600, marginTop: "16px" }}>
              Thank you for reaching out to me! I will get back to you as soon
              as possible.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
