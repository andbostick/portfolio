export default function Tech() {
  return (
    <div>
      <h2>Tech I've Used</h2>
      <ul>
        <li>React</li>
        <li>Next.js</li>
        <li>Gatsby</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Figma</li>
        <li>Firebase</li>
      </ul>
      <style jsx>{`
        div {
          margin-top: 50px;
          margin-bottom: 50px;
          padding: 20px 0 20px 0;
        }
        h2 {
          color: white;
          font-size: 20px;
          font-weight: 500;
        }

        ul {
          color: #696767;
          list-style-type: none;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          font-size: 20px;
          gap: 15px;
        }

        
      `}</style>
    </div>
  );
}
