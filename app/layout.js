import { Inter, Roboto_Mono } from "next/font/google";
//import { Header } from "../components/shared/Header/Header";
//import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
//const inter = Inter({ subsets: ["latin"] });

/*Alternatively, you can create a CSS variable and use it with your preferred CSS solution:
app/global.css

html {
  font-family: var(--font-inter);
}
 
h1 {
  font-family: var(--font-roboto-mono);
}
In the example above, Inter will be applied globally, and any <h1> tags will be styled with Roboto Mono*/

export const metadata = {
  title: "Planets",
  description: "Solar system planets",
};

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}
