import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      HomePage
      <div>
        <Button>Get Started</Button>
        <Button variant={"secondary"}>Contact Us</Button>
        <Button variant={"primary-outline"}>Something went wrong</Button>
      </div>
    </div>
  );
};

export default HomePage;
