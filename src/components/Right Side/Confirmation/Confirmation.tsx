const Confirmation = () => {
  return (
    <div className="grid place-items-center py-32">
      <div className="flex flex-col gap-4 justify-center items-center">
        <img src="./icon-thank-you.svg" alt="thank you" className="size-20" />
        <h2 className="text-primary text-2xl font-bold">Thank you</h2>
        <p className="text-gray-400 text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
