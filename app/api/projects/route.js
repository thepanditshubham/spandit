export async function GET(request) {
  const projects = [
    {
      name: "Liberty: Experience the ISS like never before.",
      description:
        "A browser based 3D visualisation of the International Space Station in Realtime which won us second place in the NASA Space Apps Regional Round among 90+ teams.",
      stack: ["Typescript", "NextJS", "Rust", "WASM"],
      link: "https://space-apps-eosin.vercel.app",
      image: "ndss.png",
      largeImage: "liberty-lg.png",
    },
    {
      name: "New Delhi Space Society Website",
      description:
        "I designed and developed New Delhi Space Society’s Website - A chapter of the National Space Society",
      stack: ["Typescript", "NextJS"],
      link: "https://new-delhi-space-society.github.io/",
      image: "ndss.png",
      largeImage: "ndss-lg.png",
    },
    
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
