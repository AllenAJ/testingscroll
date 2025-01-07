const Index = () => {
  return (
    <div className="min-h-screen w-full p-4">
      <div className="w-full h-screen rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <iframe 
          src="https://carrot-fi.xyz/"
          className="w-full h-full"
          title="Carrot Finance"
          sandbox="allow-scripts allow-same-origin allow-forms"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Index;