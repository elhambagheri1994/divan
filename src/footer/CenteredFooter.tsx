import type { ReactNode } from 'react';

type ICenteredFooterProps = {
  logo?: ReactNode;
  iconList?: ReactNode;
  children?: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <nav>
      <ul className="navbar mt-5 flex flex-row justify-center text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>
    <div>۰۹۱۲۳۵۹۰۵۵۱ - ۸۶۱۹۰۲۴۹</div>

    <div>گیشا، نبش خیابان شانزدهم، پلاک ۱۴۵، واحد ۴۰۴</div>
    <div className="my-4 flex justify-center gap-4">{props.iconList}</div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
