import React, { Component } from 'react';
import { MapContainer } from './GoogleMaps';

class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="text-center" style={{ background: "#0596DE" }}>
                    <h2>Réservez une consultation physique chez un professionnel de santé </h2>
                    <form>
                        <div className="form-group p-5">
                            <input type="text" className="form-control" placeholder="Médecin,établissement,spécialité..." />
                            <button type="button" className="btn btn-outline-warning m-4">Rechercher</button>
                        </div>
                    </form>
                </div>
                <div className="text-center">
                    <h2>Pourquoi prendre rendez-vous avec Doctolib ?</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-4" style={{ width: "18rem" }}>
                        <div className="card">
                            <img src="/img/img1.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center" >
                                <p className="card-text">Accédez aux disponibilités de <strong>dizaines de milliers</strong> de professionnels de santé.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4" style={{ width: "18rem" }}>
                        <div className="card">
                            <img src="/img/img2.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center" >
                                <p className="card-text">Rendez vous, <strong>24h/24 et 7j/7</strong> pour une consultation physique ou vidéo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4" style={{ width: "18rem" }}>
                        <div className="card">
                            <img src="/img/img3.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-text">Recevez des <strong>rappels automatiques</strong> par SMS ou par email.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4" style={{ width: "18rem" }}>
                        <div className="card">
                            <img src="/img/img4.png" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-text">Retrouvez votre <strong>historique de rendez-vous</strong> et vos <strong>documents médicaux</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div >

        );
    }
}

export default Accueil;