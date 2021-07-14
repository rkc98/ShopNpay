// import blogo from '../images/background.jpeg'

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container' style={{marginLeft:"0px"}}>
            <div className='row'>
              <div className='col-md-8 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                {/* <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
                <ul style={{color:"white",fontSize:"2rem" , marginLeft: "35px",listStyle:"initial"}}>
                  <li>Transform your business digitally</li>
                  <li>100% safe and secure</li>
                  <li>Easy to use</li>
                </ul>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
