import Image from "next/image";

export default function Projects({ src, title, desc, badge, git, url }) {
  return (
    <div className="container">
      <div className="item-grid">
        <div className="image">
          <Image src={src} />
        </div>
        <div className="text-box">
          <h3>{title}</h3>
          <h4>{desc}</h4>
          <h6>
            <a href={git} target="_blank">
              Github
            </a>
          </h6>
          <h6>
            <a href={url} target="_blank">
              Live
            </a>
          </h6>
          <div className="badges">
            <p>FireBase</p>
            <p>React</p>
            <p>Javascript</p>
            <p>CSS</p>
          </div>
        </div>
      </div>
      <style jsx>{`
      .image{
        margin: auto;
        
      }
        .container {
          position: relative;
          margin: auto;
          overflow: hidden;
          width: 320px;
          height: 100%;
          background: white;
          box-shadow: 5px 5px 15px rgba(black, 0.5);
          border-radius: 10px;
        }

        .text-box {
          padding: 20px;
          text-align: center;
        }
        h3 {
          font-size: 20px;
          margin-top: 0;
        }
        h4 {
          font-size: 10px;
        }

        .item-grid {
          display: flex;
        }
        .badges {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        p {
          padding: 2px;
          list-style-type: none;
          font-size: 12px;
          color: white;
          background: #152f6e;
          border-radius: 25%;
        }
        @media (min-width: 768px) {
          .container {
            width: 550px;
          }
          .text-box {
            text-align: center;
          }
        }
        @media (min-width: 1280px) {
          .container {
            width: 600px;
          }
        }
      `}</style>
    </div>
  );
}
