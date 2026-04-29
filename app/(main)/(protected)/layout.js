import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

async function ProtectedLayout({ children }) {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  return <>{children}</>;
}

export default ProtectedLayout;
