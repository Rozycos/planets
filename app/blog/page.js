import { Header } from '@/components/shared/Header/Header';
import { Main } from '@/components/shared/Main/Main';
import '../globals.scss';

//In the app directory, you can modify the <head> HTML elements such as title and meta
export const metadata = {
  title: 'Blog page!',
}

export default function Blog() {
  return (
    <main>
      <div className="wrapper">
        <Header/>
        <div>BLOG SECTION</div>
      </div>
    </main>
  );
}
