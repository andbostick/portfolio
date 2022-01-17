import Image from "next/image"


export default function Projects({ src, title, desc, badge }) {
    return (
        <div>
            
            <div className="item-grid">
                
                <Image
                    src={src}
                    layout="responsive"
                    
                    
                    />
                    
                <div className="text-box">
                    <h3>{title}</h3>
                    <h4>{desc}</h4>
                    <div className="badges">
                    <p>FireBase</p>
                    <p>React</p>
                    <p>Javascript</p>
                    <p>CSS</p>
                    </div>
                </div>
            </div>
            <style jsx>{ 
                `
                .text-box{
                    margin: 0 25px 0 15px;   
                }
                h3{
                    margin-top: 0;
                }
                
                .item-grid{
                    margin-top: 50px;
                    display: grid;
                    color:white;
                    grid-template-columns: 1fr 1fr;
                }
                .badges{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    
                }
                p{
                    padding: 2px;
                    list-style-type: none;
                    font-size: 12px;
                    color: #696767;
                    background: #152F6E;
                    border-radius: 25%;
                }
                
                `
            }</style>
        </div>
    )
}