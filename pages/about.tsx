import { motion, Variants } from 'framer-motion';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import IconGrid from '../components/common/icon-grid';
import Layout from '../components/layout';
import { NextPageWithLayout } from './_app';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const About: NextPageWithLayout = () => (
  <>
    <Head>
      <title>About Richard So</title>
    </Head>
    <div className="relative pt-24 w-full text-white child:py-5">
      <motion.h1
        layoutId="name"
        className="text-6xl md:text-8xl font-bold inline-block"
      >
        Richard So
      </motion.h1>
      <motion.div
        className="grid grid-cols-12 gap-5 lg:gap-24 text-2xl sm:text-3xl xl:text-4xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.main
          className="col-span-12 lg:col-span-6 xl:col-span-7 child:leading-snug"
          variants={item}
        >
          <p className="text-gray-200">
            Hello 👋, thank you for visiting! I{"'"}m a passionate{' '}
            <strong> full stack developer + data scientist </strong> that loves
            to learn new things. I{"'"}m currently a{' '}
            <strong>CS major at Georgia Tech </strong> (class of 2024), and have
            recently worked at <strong>Union Pacific Railroad</strong> as a SWE
            intern. Also, I like ducks! 🦆
          </p>
          <br />
          <p className="pb-10 text-gray-400 italic">
            Reach out via{' '}
            <a href="mailto:richardso2021@gmail.com">richardso2021@gmail.com</a>{' '}
            or any of these links below.
          </p>
          <IconGrid />
        </motion.main>
        <motion.div
          className="relative col-span-12 lg:col-start-7 xl:col-start-8 lg:col-end-13"
          variants={item}
        >
          <h3 className="text-gray-100 text-4xl font-bold pb-5">Languages</h3>
          <ul className="text-gray-300 text-2xl list-disc pl-10 leading-snug">
            <li>Javascript / Typescript</li>
            <li>Python</li>
            <li>C / C++</li>
            <li>MATLAB</li>
            <li>SQL</li>
          </ul>
          <h3 className="text-gray-100 text-4xl font-bold py-5">
            Frameworks/Tech
          </h3>
          <ul className="text-gray-300 text-2xl list-disc pl-10 leading-snug">
            <li>React, Vue, Angular, Svelte</li>
            <li>Next, Nuxt, Flask</li>
            <li>NumPy, Pandas, Matplotlib</li>
            <li>PyTorch, Keras, scikit-learn</li>
            <li>Firebase, PostgreSQL, SQLite</li>
            <li>Salesforce (CRM Analytics)</li>
          </ul>
          <h3 className="text-gray-100 text-4xl font-bold py-5">Learning</h3>
          <ul className="text-gray-300 text-2xl list-disc pl-10 leading-snug">
            <li>Flutter/Dart</li>
            <li>Assembly</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </>
);

About.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};

export default About;