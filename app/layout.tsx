import "./global.css"
export const metadata = {
  title: "Sell your skill",
  description: "Make an income using selling your skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        navbar
        <main>
          {children}
        </main>
        footer
      </body>
    </html>
  );
}
