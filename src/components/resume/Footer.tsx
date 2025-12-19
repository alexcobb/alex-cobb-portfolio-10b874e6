const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 border-t border-border">
      <div className="max-w-resume mx-auto">
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} Alex Cobb
        </p>
      </div>
    </footer>
  );
};

export default Footer;
