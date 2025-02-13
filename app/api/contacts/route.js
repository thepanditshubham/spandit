export async function GET(request) {
  const contactMediums = [
    {
      medium: "github",
      username: "thepanditshubham",
      link: "https://github.com/thepanditshubham",
    },
    {
      medium: "email",
      username: "panditshubham1001@gmail.com",
      link: "mailto:panditshubham1001@gmail.com",
    },
    {
      medium: "instagram",
      username: "fx.shubham_pandit",
      link: "https://www.instagram.com/fx.shubham_pandit/",
    },
    {
      medium: "linkedin",
      username: "sdpandit",
      link: "https://www.linkedin.com/in/sdpandit/",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
