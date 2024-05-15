import Page from "./[lng]/page";
import "./globals.css";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return <Page params={{ lng }} />;
}
