import React from 'react'

class Karya extends React.Component{
    render(){
        return(
            <div className="jumbotron" >
                <div className="container-fluid">
                    <div class="p-3 mb-2 bg-primary text-center text-white lead ">Carikatur</div>
                        <div className="card-deck">
                            <div className="card shadows">
                                <img src="joe.png" className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Joe Taslim</h5>
                                    <p class="card-text">Ini adalah Karikatur dari Joe Taslim.ohannes Taslim, atau Joe Taslim adalah atlet dan aktor Indonesia. Atlet Judo peraih medali perak di SEA Games 2007 ini ikut berperan dalam film The Raid: Redemption dan Fast and Furious 6.</p>
                                </div>
                            </div>
                            <div className="card shadows">
                                <img src="tara basro.jpg" className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Tara Basro</h5>
                                    <p class="card-text">Ini adalah Karikatur dari Tara Basro.Andi Mutiara Pertiwi Basro atau yang lebih dikenal dengan Tara Basro adalah seorang model dan pemeran Indonesia berdarah Bugis, Sulawesi Selatan.</p>
                                </div>
                            </div>
                            <div className="card shadows">
                                <img src="nicholas.jpg" className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Nicholas Saputra</h5>
                                    <p class="card-text">Ini adalah Karikatur dari Nicholas Saputra.Nicholas Schubring Saputra atau yang lebih dikenal dengan Nicholas Saputra adalah seorang aktor dan model Indonesia keturunan Jawa dan Jerman.</p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    <div class="p-3 mb-2 bg-dark text-center text-white lead ">Desain Grafis</div>
                    <div className="card-deck">
                            <div className="card shadowss">
                                <img src="amongus.jpg" className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Among us Red</h5>
                                    <p class="card-text">Desain Grafis karakter Among us Red</p>
                                </div>
                            </div>
                            <div className="card shadowss">
                                <img src="kursiRangga.jpg" className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Kursi Kayu</h5>
                                    <p class="card-text">Desain Kursi kayu ini dibuat di software Blender.</p>
                                </div>
                            </div>
                            <div className="card shadowss">
                                <video>
                                    <source src="constan.mkv"  type="video/mp4"></source>
                                </video>
                                <div class="card-body">
                                    <h5 class="card-title">Among us Blue</h5>
                                    <p class="card-text">Ini Adalah video karakter Among us Blue sedang berjalan.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Karya;