'use strict';

const axios = require('axios');

async function getCards(request, response, next) {
  try {
    let url = `https://api.pokemontcg.io/v2/cards/xy1-1`
    let cardDataFromAxios = await axios.get(url);
    let parsedCardData = cardDataFromAxios.data;
    let cardData = parsedCardData.map(cardData => new cardDataFromAxios(cardData));

    response.status(200).send(cardData);
  } catch (error) {
    console.log(error.message)
    next(error);
  }
}

module.exports = getCards;