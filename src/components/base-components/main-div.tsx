export const MainDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`px-4 476:px-10 sm:px-12 md:px-16 lg:px-24 min-h-[calc(100vh-100px)] ${className}`}
    >
      {children}
    </div>
  );
};
