import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CardModal = ({select, setModal}) => {


  // Generate image
  let source = "https://" + `picsum.photos/id/${select.id}/200/300`;

  // handle disable modal
  const handleModal = () => {
    const body = document.querySelector("body");
    body.style.overflow = "auto";
    setModal(false);
  }

  return (
    <Container>
        <div id="open-modal" className="modal-window">
            <div>
                <div onClick={handleModal} className="modal-close"><FontAwesomeIcon icon={faXmark} size="lg"/></div>
                <Header>
                  <p>Projet {select.nom}</p>
                  <ul>
                    <li><span className='text-head'>Secteurs</span> : N'est pas mentionné</li>
                    <li><span className='text-head'>Besoin de financement</span> : {select.financement ? (select.financement) : ("N'est pas mentionné")}</li>
                    <li><span className='text-head'>Siège</span> : {select.siege ? (select.siege) : ("N'est pas mentionné")}</li>
                    <li><span className='text-head'>Stage</span> : {select.stade ? (select.stade) : ("N'est pas mentionné")}</li>
                    <li><span className='text-head'>Type</span> : {select.type ? (select.type) : ("N'est pas mentionné")}</li>
                  </ul>
                </Header>

                <Body>

                <div className='project-detail'>
                  <div>
                  <img src={source} alt='project'/>
                  </div>

                  <div className='detail'>
                    <h3>Projet {select.nom}</h3>
                    <p className='flouter'>{select.description}</p>
                  </div>
                </div>

                {/* Pourquoi maintenant ?  */}
                <div className='item-detail'>
                  <h3>✅ Pourquoi maintenant ?</h3>
                  <p className='flouter'>{select.description ? (select.description) : ("")}</p>
                </div>

                {/* Problèmes  */}
                <div className='item-detail'>
                  <h3>🚨 Problèmes</h3>
                  <p className='flouter'>{select.problemes ? (select.problemes) : ("")}</p>
                </div>

                {/* Solutions  */}
                <div className='item-detail'>
                  <h3>☝ Solutions</h3>
                  <p className='flouter'>{select.solutions ? (select.solutions) : ("")}</p>
                </div>

                {/* Equipe  */}
                <div className='item-detail'>
                  <h3>👬 Equipe</h3>
                  <p className='flouter'>{select.equipe ? (select.equipe) : ("")}</p>
                </div>

                {/* Business Modal  */}
                <div className='item-detail'>
                  <h3>💰 Business Modal</h3>
                  <p className='flouter'>{select.business_model ? (select.business_model) : ("")}</p>
                </div>

                {/* KPI  */}
                <div className='item-detail'>
                <h3>📊 KPI</h3>
                <p className='flouter'>{select.kpi ? (select.kpi) : ("")}</p>
                </div>

                </Body>
            </div>
        </div>
    </Container>
  )
}

// Style CSS

const Container = styled.div`

height: 100%;
font-size: 16px;

.modal-window {
    position: fixed;
    background-color: rgba(197, 194, 194, 0.70);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    transition: all 0.3s;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    & > div {
      width: 700px;
      height: 650px;
      overflow: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2em;
      background: white;
      word-wrap: break-word;
      border-radius: 1rem;
    }
  }

  .modal-close {
    color: #aaa;
    position: absolute;
    right: 0;
    text-align: center;
    top: 15px;
    width: 70px;
    &:hover {
      color: #EB1D36;
    }
  }

  /* CSS for blur */

  .flouter {
    filter:blur(2.5px);
  }

  .text-head{
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }

`

const Header = styled.div`

p {
    font-size: 150%;
    margin: 0 0 15px;
}

ul {
  margin: 15px 0;
}

ul li {
  margin-bottom: 8px;
}

`;

const Body = styled.div`

text-align: justify;

.project-detail {
  display: flex;
  justify-content: space-between;


  img {
    height: 200px;
    width: 280px;
    margin-right: 20px;
    object-fit: cover;
    border-radius: 10px;
  }
}

.detail h3 {
  margin-bottom: 10px;
}

.item-detail h3 {
  padding: 10px;
  padding-right: 0px;
  display: grid;
  grid-template-columns: 10fr 1fr;
  background-color: #700b0b;
  color: white;
  font-size: 13px;
  grid-gap: 10px;
  border: 1px solid transparent;
  border-radius: 1px;
  margin: 15px 0;
}

`;
  

export default CardModal