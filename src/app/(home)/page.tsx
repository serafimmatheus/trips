import { prisma } from "@/lib/prisma";

const Home = async () => {
  const trips = await prisma.trip.findMany();

  console.log(trips);

  return <main>Welcome Trips</main>;
};

export default Home;
