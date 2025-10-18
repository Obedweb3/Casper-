function AnimatedBackground() {
  const elements = ['</>', '{code}', 'circuit', 'binary: 1010', 'tech wave'];

  return (
    <div className="animated-bg">
      {elements.map((el, index) => (
        <div
          key={index}
          className="tech-element"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 2}s`,
          }}
        >
          {el}
        </div>
      ))}
    </div>
  );
}

export default AnimatedBackground;
