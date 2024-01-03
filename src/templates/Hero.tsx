import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => {
  const scroll = (top: number) => () => {
    window.scrollTo({ top, left: 0, behavior: 'smooth' });
  };

  return (
    <Background>
      <Section yPadding="py-4 ">
        <NavbarTwoColumns>
          <li className="text-sm font-bold text-gray-900">
            <Link href="/">خانه</Link>
          </li>
          <li
            className="cursor-pointer text-sm font-bold text-gray-900"
            onClick={scroll(500)}
          >
            درباره ما
          </li>
          <li
            className="cursor-pointer text-sm font-bold text-gray-900"
            onClick={scroll(20000)}
          >
            تماس با ما
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 layout ">
        {/* <HeroOneButton
        title={
          <>
            {'The modern Journeys as unique as you are \n'}
            <span className="text-primary-500">...Coming Soon</span>
          </>
        }
        description=""
      /> */}
      </Section>
    </Background>
  );
};

export { Hero };
