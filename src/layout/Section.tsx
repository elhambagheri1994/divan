import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children?: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen px-0-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h3 className="text-3xl font-bold text-gray-900">{props.title}</h3>
        )}

        {props.description && (
          <div className="text-l mt-4 md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
