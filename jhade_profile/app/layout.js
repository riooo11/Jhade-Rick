import "./globals.css";

export const metadata = {
  title: "Jhade Rick N. Rios | Programmer Profile",
  description: "Student programmer portfolio built with Next.js and CSS."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
