import React from 'react';
import './card.css'

const Card = ( { cards, index, flipCard, onClickCard }) => {

   /*const [matched, setMatched] = useState([]);

   useEffect(() => {
      const firstMach = cards[openCard[0]];
      const secondMach = cards[openCard[1]];

      if (secondMach && firstMach.id === secondMach.id) {
        setMatched(() => [...matched, firstMach.id]);
      }

      if (openCard.length === 2) setTimeout(() => setOpenCard([]), 1000);

   }, [cards, matched, openCard]);*/

 /* const clickCard = (index) => {
     setOpenCard((opened) => [...opened, index])

   };*/

   /*return (
       <div className='cards'>
       {cards.map((elem, index) => {
          let flipCard;
          flipCard = false;

          if (openCard.includes(index)) flipCard = true;*/

        //  if (matched.includes(elem.id)) flipCard = true;


           return (
               <div className={`card-card ${ flipCard ? 'flipped' : ''}`}
                    onClick={() => onClickCard(index, cards.name)}
                    key={index} >
                   <div className='inner'>
                       <div className='front' >
                            <img className='image-card'
                            src={`images/cards/${cards.image}`}
                            alt={cards.name}
                            />
                        </div>
                        <div className='back' > </div>
                   </div>
               </div>
           );
      /* })
       }
   </div>
   );*/
};

export default Card;
