import Image from "next/image"
import todoist from "../images/todist.png"

export default function Projects() {
    return (
        <div>
            <h2>Portfolio</h2>
            <div className="item-grid">
                <Image
                    src={todoist}
                    layout="responsive"
                />
                <div>
                <h3>ToDoist</h3>
                    <h4>ToDo list creator with authentication</h4>
                    <ul>
                    <li>FireBase</li>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    </ul>
                </div>
            </div>
            <style jsx>{ 
                `
                h2 {
                    color: white;
                    font-size: 20px; 
                    margin-left: 25px;
                }
                .item-grid{
                    margin-top: 50px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
                ul{
                    display flex;
                }
                li{
                    list-style-type: none;
                }
                `
            }</style>
        </div>
    )
}