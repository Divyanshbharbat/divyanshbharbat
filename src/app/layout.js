export const metadata = {
  title: 'Divyansh | Full Stack Developer',
  description: 'Modern developer portfolio built with Next.js, Bootstrap, and React.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CDN (Optional if not using npm Bootstrap) */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeo5QkH5J5fn3tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        {/* Google Fonts - Poppins */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Poppins', margin: 0, backgroundColor: '#0f0f1c', color: 'white' }}>
        {/* You can also add Navbar here */}
        {children}
        {/* You can also add Footer here */}
      </body>
    </html>
  );
}