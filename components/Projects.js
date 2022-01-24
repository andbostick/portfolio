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
          height: 320px;
          width: 200px;
        }
        
        .container {
          position: relative;
          margin: auto;
          overflow: hidden;
          width: 320px;
          height: 300px;
          background: white;
          box-shadow: 5px 5px 15px rgba(black, 0.5);
          border-radius: 10px;
        }
        
        .text-box {
          padding: 20px;
        }
        h3 {
          
          font-size: 25px;
        }
        h4 {
          font-size: 13px;
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
          
          padding: 1px;
          list-style-type: none;
          font-size: 12px;
          color: white;
          background: #152f6e;
          border-radius: 25%;
        }
        @media (min-width: 768px) {
          .image {
            height: 100px;
            width: 350px;
          }
          .container{
            width:550px;
          }
          .text-box{
            text-align: center;
          }
        }
        @media (min-width: 1280px) {
          .container{
            width:600px;
          }
        }
      `}</style>
    </div>
  );
}
