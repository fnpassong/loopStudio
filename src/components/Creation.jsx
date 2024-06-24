import '../scss/scssComponents/creation.scss';
import { imagenes } from './CreationData';

const Creation = () => {
  return (
    <section className="creation">
        <div className="creation__wrapper wrapper">
            <h2 className="creation__title">
                our creations
            </h2>
            <div className="creation__imgs">
                {
                    imagenes.map((item)=> {
                        return(
                            <>
                            <article key={item.id}>
                                <picture className='creation__picture'>
                                    <source media="(min-width:800px)"
                                    srcSet= {item.img1} />
                                    <img src={item.img} alt="" />
                                    <p className={`creation__paragraph creation__${item.title} clr-white`}>{item.title}</p>
                                </picture>
                              
                            </article>
                            
                            </>
                        )
                    })
                }
            </div>
            <button className='btn'>see all</button>
        </div>
    </section>
  )
}

export default Creation