import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    display:'inline-block',
    width:'500px'
    
}

/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */
const Layout = (props) => (
   <div>
       <style global jsx>{`
		i {
		vertical-align:middle;
        }
        
		`}</style>
	<Head>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossOrigin="anonymous"
		/>
        
        
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"/>
    </Head>
    
        <div className='row justify-content-center'>
            
            <div style={layoutStyle}>
                
                <Header />
                
            </div>
            
        </div>
          
        <div className='row justify-content-center'>
         {props.children}
        </div>
      
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
  </div>
)

export default Layout
