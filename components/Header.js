import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    <div>
      
      <h2>Andrew Bostick</h2>
      <h1>Front-End Developer</h1>
      <Link to='ContactForm'>
      <button className="button">Get In Contact With Me</button>
      </Link>
      <style jsx>{`
        div {
          text-align: center;
          padding:30px;
          font-family: Lato;
        }
        @media(min-width:768px){
          div{
            padding:50px;
            
          }
          h2{
            font-size: 40px;
          }
          h1{
            font-size: 60px;
          }
        }
        @media(min-width:1280px){
          h2{
            font-size: 40px;
          }
          h1{
            font-size: 70px;
          }
        }

        h2 {
          margin-top: 60px;
          margin-bottom: 0;
          
          color: white;
          font-weight: 500;
        }
        h1 {
          
          margin-top: 10;
          
          color: #696767;
        }

        .button {
          align-items: center;
          appearance: none;
          background-image: radial-gradient(
            100% 100% at 100% 0,
            #5adaff 0,
            #5468ff 100%
          );
          border: 0;
          border-radius: 6px;
          box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          height: 48px;
          justify-content: center;
          line-height: 1;
          list-style: none;
          overflow: hidden;
          padding-left: 16px;
          padding-right: 16px;
          position: relative;
          text-align: left;
          text-decoration: none;
          transition: box-shadow 0.15s, transform 0.15s;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          white-space: nowrap;
          will-change: box-shadow, transform;
          font-size: 18px;
        }

        .button:focus {
          box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
        }

        .button:hover {
          box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
          transform: translateY(-2px);
        }

        .button:active {
          box-shadow: #3c4fe0 0 3px 7px inset;
          transform: translateY(2px);
        }
      `}</style>
    </div>
  );
}
