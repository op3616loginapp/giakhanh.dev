import { getCurrentUser } from "@/lib/session";
import prisma from "@/lib/prisma";
import StackedCardProfile from "@/ui/ProfilePage/StackedCardProfile";

const getMessages = async () => {
  const messages = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: "desc",
    },
  });

  return messages.map((message) => ({
    id: message.id.toString(),
    body: message.body,
    image: message.image,
    created_by: message.created_by,
    updated_at: message.updated_at.toString(),
  }));
};

const AboutPage = async () => {
  const user = await getCurrentUser();
  const comments = await getMessages();

  return (
    <>
      <StackedCardProfile comments={comments} user={user} />
    </>
  );
};

export default AboutPage;
