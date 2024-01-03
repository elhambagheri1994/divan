type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/assets/images/logo.jpg"
        alt="divan logo"
        width={70}
        className="mix-blend-multiply"
      />
    </span>
  );
};

export { Logo };
