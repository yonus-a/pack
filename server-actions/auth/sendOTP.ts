"use server";

export default async function sendOTP(Mobile: string, otp: string) {
  try {
    const res = await fetch("https://api.sms.ir/v1/send/verify", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-KEY": process.env.SMSIR_APIKEY as string,
      },
      body: JSON.stringify({
        Mobile,
        TemplateId: 100000,
        parameters: [{ name: "CODE", value: otp }],
      }),
    });
    return await res.json();
  } catch (e) {
    console.error(e);
    throw new Error("مشکلی در سرور به وجود آمده است !");
  }
}
