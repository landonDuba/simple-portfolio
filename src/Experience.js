import './Experience.css';

export function Experience( {exp} ) {
    return (
        <div className='box'>
            <img src={exp.img} alt="company logo"></img>
            <div className='info'>
                <h3>{exp.name}</h3>
                <h5>{exp.title}</h5>
            </div>
        </div>
    )
}