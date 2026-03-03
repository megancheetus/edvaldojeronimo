import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6 text-center space-y-4">
        <div className="flex justify-center">
          <img src={logo} alt="Logo Edvaldo Jerônimo" className="h-10 w-auto opacity-70 brightness-200" />
        </div>
        <p className="text-sm opacity-90">
          © 2026 Edvaldo Jerônimo — Todos os direitos reservados
        </p>
        <p className="text-xs opacity-70">
          CRM/PE 30.067 &nbsp;·&nbsp; RQE 16.821
        </p>
      </div>
    </footer>
  );
};

export default Footer;
