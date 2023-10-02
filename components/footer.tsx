import Container from "@/components/ui/container";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-slate-100">
      <Container>
        <h1 className="w-full h-20 flex items-center justify-center text-center">
          &copy; {new Date().getFullYear()} Lily and Co Pvt. Ltd
        </h1>
      </Container>
    </div>
  );
};

export default Footer;
