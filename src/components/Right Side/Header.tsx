type HeaderProps = {
  headline: string;
  subHeadline: string;
};

const Header = ({ headline, subHeadline }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl text-indigo-600 font-bold">{headline}</h2>
      <p className="text-gray-400">{subHeadline}</p>
    </div>
  );
};

export default Header;
