import React from 'react'

class Beranda extends React.Component{
    render(){
        return(
            <div className="jumbotron" >
                <div className="container-fluid">
                    <h2 class="display-4">Selamat Datang User!</h2>
                    <hr></hr>
                    <p className="lead">Selamat datang ditampilan awal Beranda saya jika ingin tau lebih lanjut 
                    tentang saya klik Tentang saya pada navbar diatas.</p>
                </div>
            </div>
        )
    }
}

export default Beranda;