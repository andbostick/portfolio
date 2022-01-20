import Image from "next/image";

export default function Projects({ src, title, desc, badge, git, url }) {
  return (
    <div className="container">
      <div className="item-grid">
        <div className="image">
        <Image src={src} layout="responsive" />
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
        .image {
          height: 100px;
          width: 350px;
        }
        .text-box {
          margin: 0 25px 0 15px;
        }
        h3 {
          margin-top: 0;
          font-size: 25px;
        }
        h4 {
          font-size: 13px;
        }

        .item-grid {
          margin-top: 50px;
          margin-bottom: 10px;
          display: grid;
          color: white;
          grid-template-columns: 1fr 1fr;
          height: 350px;
        }
        .badges {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0 75% 0 0;
        }
        p {
          margin: 0;
          padding: 1px;
          list-style-type: none;
          font-size: 12px;
          color: #696767;
          background: #152f6e;
          border-radius: 25%;
        }
      `}</style>
    </div>
  );
}
