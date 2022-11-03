import barnes from './barnes.jpeg'
function About() {
  return(
    <div className="main-about">
      <div className="about">
        <img className='image' src={barnes} alt="store" width="500px"/>
      </div>
      <div className="about">
        <h1 className="heading">About B&N</h1>
      </div>
      <div className="about">
        <p>Barnes & Noble is the world’s largest retail bookseller and a leading retailer of content, digital media and educational products. 
          The Company operates over 600 Barnes & Noble bookstores in 50 states, and one of the Web’s premier e-commerce sites, BN.com. 
          Our Nook Digital business offers a lineup of NOOK® tablets and e-Readers and an expansive collection of digital reading content through the NOOK Store®.
          Barnes & Noble’s mission is to operate the best omni-channel specialty retail business in America, helping both our customers and booksellers reach their aspirations, while being a credit to the communities we serve.
          Barnes & Noble is owned by Elliott Advisors (UK) Limited and run by CEO and bookseller James Daunt, who is also Managing Director of Waterstones bookstores in the U.K. and founder and owner of Daunt Books.
          Barnes & Noble was founded in 1971 by bookseller Leonard Riggio when he acquired the Barnes & Noble trade name and bookstore on Fifth Avenue in New York City.
        </p>
      </div>
    </div>
  )
}
export default About;