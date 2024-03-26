import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div
            style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}
             className={"container portfolio__container"}>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG1} alt={''}/>
                    </div>
                    <h3 style={{textAlign:'center'}}>Food Ordering Web App</h3>
                    <div 
            style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}

                    className={"portfolio__item-cta"}>
                        <a  onClick={() => {
  window.open('https://github.com/deepen-404/mern-food-ordering-app-frontend', '_blank');
  window.open('https://github.com/deepen-404/mern-food-ordering-app-backend', '_blank');
}} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://mern-food-ordering-app-frontend-71gt.onrender.com"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                {/* <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG2} alt={''}/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com"} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://dribbble.com"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG3} alt={''}/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com"} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://dribbble.com"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG4} alt={''}/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com"} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://dribbble.com"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG5} alt={''}/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com"} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://dribbble.com"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG6} alt={''}/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com"} className={'btn'} target={'_blank'}>Github</a>
                        <a href={"https://dribbble.com"} className={'btn btn-primary'} target={"_blank"}>Live Demo</a>
                    </div>
                </article> */}

            </div>

        </section>
    )
}

export default Portfolio