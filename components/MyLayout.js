
import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  display: "inline-block",
  width: "500px",
};

/* Notice in the example below that we pass children and title as props to the Layout components.
If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */
export default function Layout (props){
 
 
    return (
      <div>
        <style global jsx>{`
          i {
            vertical-align: middle;
          }
        `}</style>
        <Head>
          



          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"
          />


      
          
           <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175547566-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'UA-175547566-1');
                
                `,
            }}
          />
        </Head>

        <div className="row justify-content-center">
          <div style={layoutStyle}>
            <Header />
          </div>
        </div>

        <div className="row justify-content-center">{props.children}</div>

       

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
      </div>
    );
  
}
