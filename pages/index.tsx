import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import router from 'next/router';

const Home: NextPage = ({ ligues }: any) => {
  // console.log(ligues);
  // console.log(models);
  // delete models['Ligue'];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center  px-20 text-center">
        <h2 className=" text-3xl font-bold bg-slate-800 text-white p-9 mt-11 rounded-lg   ">
          {' '}
          Ligues
          <p
            className=" font-normal mt-4
          "
          >
            (next-apollo-grapql-test){' '}
          </p>
        </h2>
        <div>
          <Link href={'./ligue/form'}>
            <div className="bg-slate-500 text-white p-6 mt-11 rounded-lg cursor-pointer hover:shadow-sm hover:-translate-y-1 transition-all">
              Form
            </div>
          </Link>
          <Link href={'./ligue/list'}>
            <div className="bg-slate-500 text-white p-6 mt-11 rounded-lg cursor-pointer hover:shadow-sm hover:-translate-y-1 transition-all">
              List
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
