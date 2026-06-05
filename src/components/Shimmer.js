const Shimmer = () => {
  let numberOfCards = Array.from({ length: 8 });
  return (
    <div className="shimmer-container">
      {numberOfCards.map((card, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
