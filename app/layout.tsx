import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
