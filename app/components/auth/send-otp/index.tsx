import generateOTP from "@/server-actions/auth/generateOTP";
import { useState } from "react";
import "./styles.scss";

interface Props {
  idcard: string;
}

export default function SendOTP({ idcard }: Props) {
  const [OTPSend, setOTPSend] = useState(false);

  const handleSendOtp = async () => {
    const sendRes = await generateOTP(idcard);
    if (sendRes) setOTPSend(true);
  };

  return <button onClick={handleSendOtp}>ارسال</button>;
}
