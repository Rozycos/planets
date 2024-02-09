//import Image from "next/image";
//import './styles/scss/main.scss';
import { Main } from "@/components/shared/Main/Main";
import { Header } from "../components/shared/Header/Header";
import './globals.scss';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Header/>
        <Main/>
      </div>
    </>
  );
}
