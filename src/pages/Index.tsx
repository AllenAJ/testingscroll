const Index = () => {
  return (
    <div className="min-h-screen w-full p-2 sm:p-4">
      <div className="w-full h-[calc(100vh-16px)] sm:h-screen rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <iframe 
          src="https://www.bonkswap.io/"
          className="w-full h-full"
          title="Bonkswap"
          sandbox="allow-scripts allow-same-origin allow-forms"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Index;